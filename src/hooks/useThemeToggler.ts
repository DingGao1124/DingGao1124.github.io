import { computed, nextTick, onMounted, readonly, shallowRef } from 'vue'

const STORAGE_KEY = 'theme'

const isDark = shallowRef(false)
let initialized = false

function apply(dark: boolean) {
  isDark.value = dark
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', dark)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', dark ? '#1e1e1e' : '#f6f1e7')
  }
}

function resolve() {
  if (typeof window === 'undefined' || initialized) return
  initialized = true
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') {
    apply(stored === 'dark')
  } else {
    apply(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }
}

// Toggler version 1 (without animation)
export function useThemeToggler() {
  // Defer to a macrotask so hydration (which renders the light default) fully
  // completes before the stored/system theme takes over. This avoids a
  // hydration mismatch from the toggle button mutating right after mount.
  onMounted(() => {
    if (typeof window !== 'undefined') window.setTimeout(resolve, 0)
  })
  const setTheme = (dark: boolean) => {
    apply(dark)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
    }
  }
  const toggle = () => setTheme(!isDark.value)
  return { isDark: readonly(isDark), toggle, setTheme }
}

export type TransitionVariant =
  | 'circle'
  | 'square'
  | 'triangle'
  | 'diamond'
  | 'rectangle'
  | 'hexagon'
  | 'star'

interface UseAnimatedThemeTogglerOptions {
  variant?: TransitionVariant
  duration?: number
  fromCenter?: boolean
}

function polygonCollapsed(point: string, vertexCount: number): string {
  const pairs = Array.from({ length: vertexCount }, () => point).join(', ')
  return `polygon(${pairs})`
}

// All coordinates are percentages of the snapshot reference box. Chrome renders
// absolute px clip-path coordinates on the root view-transition pseudo-elements
// unscaled on fractional display scales (e.g. Windows 150%), so we compute
// everything in percentages to land the reveal at the right spot.
function getThemeTransitionClipPaths(
  variant: TransitionVariant,
  cx: number,
  cy: number,
  maxRadius: number,
  viewportWidth: number,
  viewportHeight: number,
): [string, string] {
  const toX = (x: number) => `${(x / viewportWidth) * 100}%`
  const toY = (y: number) => `${(y / viewportHeight) * 100}%`
  const point = (x: number, y: number) => `${toX(x)} ${toY(y)}`
  // circle() percentage radii resolve against hypot(w, h) / sqrt(2) of the box.
  const toRadius = (r: number) =>
    `${(r / (Math.hypot(viewportWidth, viewportHeight) / Math.SQRT2)) * 100}%`

  switch (variant) {
    case 'circle':
      return [
        `circle(0% at ${point(cx, cy)})`,
        `circle(${toRadius(maxRadius)} at ${point(cx, cy)})`,
      ]
    case 'square': {
      const halfW = Math.max(cx, viewportWidth - cx)
      const halfH = Math.max(cy, viewportHeight - cy)
      const halfSide = Math.max(halfW, halfH) * 1.05
      const end = [
        point(cx - halfSide, cy - halfSide),
        point(cx + halfSide, cy - halfSide),
        point(cx + halfSide, cy + halfSide),
        point(cx - halfSide, cy + halfSide),
      ].join(', ')
      return [polygonCollapsed(point(cx, cy), 4), `polygon(${end})`]
    }
    case 'triangle': {
      const scale = maxRadius * 2.2
      const dx = (Math.sqrt(3) / 2) * scale
      const verts = [
        point(cx, cy - scale),
        point(cx + dx, cy + 0.5 * scale),
        point(cx - dx, cy + 0.5 * scale),
      ].join(', ')
      return [polygonCollapsed(point(cx, cy), 3), `polygon(${verts})`]
    }
    case 'diamond': {
      const R = maxRadius * Math.SQRT2
      const end = [point(cx, cy - R), point(cx + R, cy), point(cx, cy + R), point(cx - R, cy)].join(
        ', ',
      )
      return [polygonCollapsed(point(cx, cy), 4), `polygon(${end})`]
    }
    case 'hexagon': {
      const R = maxRadius * Math.SQRT2
      const verts: string[] = []
      for (let i = 0; i < 6; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 3
        verts.push(point(cx + R * Math.cos(a), cy + R * Math.sin(a)))
      }
      return [polygonCollapsed(point(cx, cy), 6), `polygon(${verts.join(', ')})`]
    }
    case 'rectangle': {
      const halfW = Math.max(cx, viewportWidth - cx)
      const halfH = Math.max(cy, viewportHeight - cy)
      const end = [
        point(cx - halfW, cy - halfH),
        point(cx + halfW, cy - halfH),
        point(cx + halfW, cy + halfH),
        point(cx - halfW, cy + halfH),
      ].join(', ')
      return [polygonCollapsed(point(cx, cy), 4), `polygon(${end})`]
    }
    case 'star': {
      const R = maxRadius * Math.SQRT2 * 1.03
      const innerRatio = 0.42
      const starPolygon = (radius: number) => {
        const verts: string[] = []
        for (let i = 0; i < 5; i++) {
          const outerA = -Math.PI / 2 + (i * 2 * Math.PI) / 5
          verts.push(point(cx + radius * Math.cos(outerA), cy + radius * Math.sin(outerA)))
          const innerA = outerA + Math.PI / 5
          verts.push(
            point(
              cx + radius * innerRatio * Math.cos(innerA),
              cy + radius * innerRatio * Math.sin(innerA),
            ),
          )
        }
        return `polygon(${verts.join(', ')})`
      }
      const startR = Math.max(2, R * 0.025)
      return [starPolygon(startR), starPolygon(R)]
    }
    default:
      return [
        `circle(0% at ${point(cx, cy)})`,
        `circle(${toRadius(maxRadius)} at ${point(cx, cy)})`,
      ]
  }
}

// Toggler version 2 (with animation)
export function useAnimatedThemeToggler(options: UseAnimatedThemeTogglerOptions = {}) {
  const { variant, duration = 400, fromCenter = false } = options
  const shape = variant ?? 'circle'
  const { isDark: isDarkTheme, setTheme } = useThemeToggler()
  const pendingIsDark = shallowRef<boolean | null>(null)
  const displayedIsDark = computed(() => pendingIsDark.value ?? isDarkTheme.value)

  let isTransitioning = false
  let activeAnim: Animation | null = null

  const cancelAnim = () => {
    activeAnim?.cancel()
    activeAnim = null
  }

  const toggle = async (event?: MouseEvent) => {
    if (isTransitioning || document.documentElement.dataset.magicuiThemeVt) {
      return
    }

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    let x: number
    let y: number
    if (fromCenter) {
      x = viewportWidth / 2
      y = viewportHeight / 2
    } else {
      const el = event?.currentTarget as HTMLElement | undefined
      if (el) {
        const { top, left, width, height } = el.getBoundingClientRect()
        x = left + width / 2
        y = top + height / 2
      } else {
        x = viewportWidth / 2
        y = viewportHeight / 2
      }
    }

    const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y))

    const next = !isDarkTheme.value
    const applyTheme = () => {
      setTheme(next)
      pendingIsDark.value = null
    }

    pendingIsDark.value = next

    // Browsers without the View Transitions API get an instant theme change.
    if (typeof document.startViewTransition !== 'function') {
      applyTheme()
      return
    }

    const clipPath = getThemeTransitionClipPaths(
      shape,
      x,
      y,
      maxRadius,
      viewportWidth,
      viewportHeight,
    )

    // dark -> light expands the new (light) theme from the button; light -> dark
    // reverses it by collapsing the old (light) theme toward the button.
    const reverse = next
    const root = document.documentElement
    root.dataset.magicuiThemeVt = reverse ? 'reverse' : 'active'
    root.style.setProperty('--magicui-theme-toggle-vt-duration', `${duration}ms`)
    // Pin the starting clip-path so the theme is not painted unclipped between
    // the snapshot and the ready.then() animation.
    root.style.setProperty('--magicui-theme-vt-clip-from', reverse ? clipPath[1] : clipPath[0])

    const cleanup = () => {
      isTransitioning = false
      delete root.dataset.magicuiThemeVt
      root.style.removeProperty('--magicui-theme-toggle-vt-duration')
      root.style.removeProperty('--magicui-theme-vt-clip-from')
      cancelAnim()
    }

    const keyframes = reverse ? { clipPath: [clipPath[1], clipPath[0]] } : { clipPath }
    const pseudoElement = reverse ? '::view-transition-old(root)' : '::view-transition-new(root)'

    isTransitioning = true
    // Update the icon before the browser captures the old page snapshot.
    await nextTick()
    const transition = document.startViewTransition(() => {
      applyTheme()
    })

    if (typeof transition?.finished?.finally === 'function') {
      transition.finished.finally(cleanup).catch(() => { })
    } else {
      cleanup()
    }

    const ready = transition?.ready
    if (ready && typeof ready.then === 'function') {
      ready
        .then(() => {
          const anim = document.documentElement.animate(keyframes, {
            duration,
            easing: shape === 'star' ? 'linear' : 'ease-in-out',
            fill: 'forwards',
            pseudoElement,
          })
          activeAnim = anim
        })
        .catch(() => { })
    }
  }

  return { isDark: displayedIsDark, toggle }
}
