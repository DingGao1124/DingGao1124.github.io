# Animated Theme Toggler

A light/dark theme toggle that animates the switch using the View Transitions API with a configurable clip-path reveal, ported from Magic UI's `AnimatedThemeToggler`.

## How it works

The toggle wraps the theme change in `document.startViewTransition(() => setTheme(next))`. While the transition runs, the browser snapshots the old and new `<html>` states and exposes them as `::view-transition-old(root)` / `::view-transition-new(root)` pseudo-elements.

To create the "expand from the button" effect:

1. Compute the click origin `(x, y)` from the button's bounding rect (or the viewport centre when `fromCenter` is set).
2. Compute the radius needed to cover the viewport from that origin.
3. Generate a `clip-path` pair `[start, end]` for the chosen shape (all coordinates in percentages of the snapshot reference box, so it stays correct on fractional display scales).
4. Animate the root view-transition pseudo-element with the clip-path pair.

The `<html>` element carries a `data-magicui-theme-vt="active"` (or `"reverse"`) flag and CSS variables only while a toggle is in flight, scoping the rules so other root view transitions (e.g. route loading) are unaffected.

## Direction

The reveal is asymmetric so the two directions mirror each other:

- **dark → light**: the new (light) theme expands from the button (`::view-transition-new(root)` grows from the collapsed clip-path to the full shape).
- **light → dark**: the old (light) theme collapses toward the button (`::view-transition-old(root)` shrinks from the full shape to the collapsed clip-path, with `z-index` raised so the dark theme is revealed underneath).

## API

```ts
useAnimatedThemeToggler(options?: {
  variant?: 'circle' | 'square' | 'triangle' | 'diamond' | 'rectangle' | 'hexagon' | 'star'
  duration?: number   // default 400ms
  fromCenter?: boolean // default false
})
```

Returns `{ isDark, toggle }`. `toggle` accepts an optional `MouseEvent` so it can read the click position; pass it from the template as `@click="toggle($event)"`. If no event is given (or `fromCenter` is on), it expands from the viewport centre. The direction is chosen automatically: switching to light expands the new theme, switching to dark collapses the old theme. It is built on top of `useTheme()`, which owns the theme state and persistence.

For the default `circle` reveal, use it as:

```vue
<Button variant="ghost" size="icon-xs" @click="toggle($event)">
  <Sun v-if="isDark" aria-hidden="true" />
  <Moon v-else aria-hidden="true" />
</Button>
```

## Shapes

- `circle` — radial reveal.
- `square` / `rectangle` — axis-aligned box reveal.
- `triangle` / `diamond` / `hexagon` — polygon reveals.
- `star` — a true five-pointed star (10 alternating outer/inner vertices). Its easing is `linear` so the polygon interpolation doesn't overshoot at `t → 1`.

## CSS

The following rules must exist in `src/styles/globals.css` so the reveal is pinned and the duration is synced:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

html[data-magicui-theme-vt='active']::view-transition-group(root),
html[data-magicui-theme-vt='reverse']::view-transition-group(root) {
  animation-duration: var(--magicui-theme-toggle-vt-duration);
}

html[data-magicui-theme-vt='active']::view-transition-new(root) {
  clip-path: var(--magicui-theme-vt-clip-from);
}

html[data-magicui-theme-vt='reverse']::view-transition-old(root) {
  clip-path: var(--magicui-theme-vt-clip-from);
  z-index: 2;
}

html[data-magicui-theme-vt='reverse']::view-transition-new(root) {
  z-index: 1;
}
```

## Fallback

Browsers without `document.startViewTransition` fall back to a plain, instant theme change — no animation, no error.

## Files

- `src/hooks/useTheme.ts` — theme state and persistence (`isDark`, `setTheme`).
- `src/hooks/useAnimatedThemeToggler.ts` — the animated toggle and clip-path math.
- `src/styles/globals.css` — the scoped view-transition rules.
- `src/components/common/SiteHeader.vue` — wired in place of the previous instant toggle.
