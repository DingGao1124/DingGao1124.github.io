# Site redesign

## Purpose

The site presents a complete bilingual personal résumé rather than targeting only academic applications or only industry recruitment. Its six routes remain Profile, Research, Projects, Publications, Experience, and Contact, with English at `/` and Simplified Chinese at `/zh/`.

The visual system uses a GitHub-style profile sidebar with a circular avatar, concise identity metadata, and language proficiency bars, alongside one shared chronological rail across research, projects, professional experience, education, and honors. Project entries are deliberately borderless and place time at the left, text in the center, and media at the right on large screens.

## Content organization

- **Profile** introduces Ding Gao as a Full-Stack Engineer & Robotics Researcher, then previews research areas, two selected projects, and recent industry experience.
- **Research** contains four research areas and three complete research experiences.
- **Projects** contains five selected projects. The first two have larger media grids; the other three use compact media grids.
- **Publications** uses structured citation fields for journal articles, work under revision, and patents.
- **Experience** contains professional roles, education details, skills, and honors.
- **Contact** publishes the personal email, city, external profiles, and a secondary CV download action. The downloadable CV is provided separately in its original form.

All résumé content is stored in `src/data/` by category. Each category keeps its own types and contains matching `en` and `zh` records. Page-specific interface copy remains in `src/i18n/sources/`.

## Shared components

- `ProfileHero` owns identity, avatar, introduction, email, CV, external profiles, and language proficiency presentation.
- `PageShell` keeps route content narrow and reserves a desktop column for in-page navigation.
- `PageToc` renders the fading vertical chapter rail and tracks the visible section.
- `BackToTop` reveals a fixed return action after meaningful scrolling.
- `TimelineEntry` owns the responsive date rail and typed text/link inputs. It accepts an optional media slot.
- `ProjectMediaGrid` renders project images or explicit neutral placeholders without creating inactive detail links.
- `PublicationEntry` renders one structured citation and highlights Ding Gao in the author list.

Route-level page components only select localized data and compose these components.

The interface uses shadcn-vue components wherever a matching responsibility exists: `Avatar` for the profile image, `Progress` for language proficiency, `Button` for actions, `Badge` for technologies and publication types, `Separator` for structural rules, `AspectRatio` for media sizing, `Empty` for missing project media, and `Tooltip` for icon-only controls. Semantic page structure—including navigation, headings, articles, lists, figures, and time elements—remains native HTML because shadcn-vue does not replace those elements.

## Asset contract

The repository intentionally ships with explicit placeholders instead of fabricated imagery.

1. Replace `public/avatar.webp` with a new square profile image while keeping the same path, or update `avatarSrc` in `src/data/profile.ts`.
2. Add project images under `public/projects/<project-id>/` and populate the corresponding `src` fields in `src/data/projects.ts`. Each image must include accurate localized alternative text.
3. Replace `public/cv/Ding-Gao-CV.pdf` whenever a newer public CV is available. The existing buttons already point to this stable path.

Confirm the CV's contact details are appropriate for public distribution before deployment.

## Responsive and accessibility behavior

- At large widths, timeline entries use a date/content/media grid. At tablet widths, media moves below the content. At mobile widths, date, content, and media stack vertically.
- The profile sidebar appears before the introduction on mobile and to its right on desktop.
- At desktop widths, a vertical in-page navigation rail occupies the reserved right column. It shows the current title and its immediate neighbors, fades more distant entries, and reveals every title on hover or keyboard focus.
- The header navigation scrolls horizontally on narrow screens rather than wrapping into an unpredictable multi-line menu.
- The return-to-top action fades and moves into view after 480px of scrolling, and respects reduced-motion preferences.
- Text remains at least 17px with a 66-character reading measure. Newsreader is used for display text and Geist for body/interface text, with explicit Chinese system-font fallbacks.
- Keyboard focus, reduced-motion preferences, semantic headings, figure alternative text, and light/dark theme contrast must remain intact.

## Verification

Run the following before deployment:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

Review Profile, Projects, Publications, and Experience at 375px, 768px, 1280px, and at 200% browser zoom in both languages and both themes. Confirm that the real CV downloads successfully and that every external link is current.
