# Academic portfolio design

## Purpose

The site is an English-first academic portfolio for prospective PhD supervisors, research laboratories, and technical collaborators. Its content is derived from the current public CV and presents research experience together with industry experience. The existing Simplified Chinese routes remain available at `/zh/`, but their navigation entry stays hidden while the translation is being refined.

The personal introduction uses first person. Research, project, professional, education, and honors records preserve the CV wording instead of rewriting it as personal narrative. Page copy should describe work and results directly; it should not explain what a page or section contains.

## Information architecture

- **Profile** introduces the research focus, provides dated news, and links to research and selected publications.
- **Publications** separates journal publications from patents and preserves equal-contribution and corresponding-author markers.
- **Projects** presents five implemented systems with personal contributions, evidence, technology, and replaceable media.
- **Experience** contains professional roles, four chronological research experiences, education, factual technical skills, and selected honors.
- **Blog** contains long-form notes on robotics, agent systems, and engineering.
- **Contact** publishes the email, phone number, external profiles, and latest CV.

Localized content lives in the route modules under `src/data/`: `profile.ts`, `projects.ts`, `publications.ts`, `blogs.ts`, and `contact.ts` at the top level, the experience record in `src/data/experiences/`, and shared news and skills in `src/data/common/`. Each route groups interface text under `label`, body data under `content`, and ungrouped values such as contact details at the route object's top level. `useSiteLocale` selects the active `messages` object, and every route-level component reads only its matching namespace.

## Component responsibilities

- `ProfileHero` renders identity, first-person introduction, the linked Bilibili affiliation, the systems thread, avatar, primary links, and a compact technology carousel.
- `TechCarousel` compares CV-supported technologies with unlabeled percentage bars; the numerical values stay in data for future motion work.
- `NewsList` renders short dated updates and optional source links.
- `PageShell` reserves the desktop column for in-page navigation.
- `PageToc` tracks the active section while keeping every section label at equal opacity.
- `TimelineEntry` renders chronological research, projects, education, and work/intern experience. When the complete summary and bullet list exceeds its preview height, the lower text fades toward a ruled Show more / Show less control; project entries use a compact preview aligned with their 16:9 media.
- The projects route groups Portfolio work into Robotic & Embodied AI, LLM-Based AI Agents, and Full-Stack AI Projects while preserving the shared timeline entry layout.
- `CompactRecordList` renders honors as dense year-and-record rows.
- `ExpandableBulletList` provides the shared disclosure behavior for CV-derived bullet lists.
- `RainbowButton` ports the MagicUI rainbow button (softened okLCH palette, 2px gradient ring, blurred glow) for the outbound portfolio link.
- `AcademicMedia` renders the single 16:9 figure or labeled placeholder shared by research, publication, project, and professional-experience entries.
- `PublicationEntry` renders journal papers as compact figure-and-citation rows and patents as single-column records. Missing paper figures use labeled placeholders.

Route-level pages remain composition surfaces. No global state or client-side content fetching is required.

## Visual system

The interface keeps the existing warm editorial palette and the local Newsreader/Geist pairing. Newsreader carries restrained display hierarchy; Geist carries body text and interface labels. The compact base text is 16px with a reading measure of approximately 66 characters. The shared desktop container is wide enough for a date rail, readable text column, 16:9 academic figure, and page contents rail without creating unused side margins.

The signature element is the profile's research systems thread: physical systems, digital models, intelligent agents, and robot action. It summarizes the site's subject without introducing decorative motion. Structural rules, date rails, figure labels, and monospaced metadata provide hierarchy; gradients, glows, marketing cards, and scroll-triggered effects are excluded.

## Asset contract

- Organize page images in `src/assets/` by their content domain. Import them into the corresponding data modules; Vite resolves their output URLs. Keep journal originals that do not need optimization in `public/` under the same content hierarchy.
- Replace `src/assets/avatar.jpg` in place to update the portrait.
- Store project images under `src/assets/projects/`, preserving the category folders, and assign their imports to `media.src` in `src/data/projects.ts`.
- Store journal preview images under `src/assets/publications/journal/` and assign their imports to `media.src`. Store high-resolution originals under `public/publications/journal/original/`, use `/publications/journal/original/...` for `media.originalSrc`, and exclude that directory from image optimization.
- Store patent images under `src/assets/publications/patent/`. Use the same imported URL for their previews and original-image links.
- Store organization marks in `src/assets/company/` and `src/assets/university/`, and social icons in `src/assets/media/`. Assets without a confirmed destination are not rendered.
- Keep `public/favicon.svg` at its fixed URL.
- Replace `public/cv/Ding_Gao_CV.pdf` in place for future CV revisions.
- Compress display images manually with TinyPNG and replace them using the same filenames and formats. Build-time optimization preserves JPEG files and applies lossless PNG/WebP compression and SVG cleanup; see [Image optimization](./image-optimization.md).

Every content image must include explicit dimensions and accurate alternative text. Decorative organization and social marks use empty alternative text because adjacent text already provides the name.

## Responsive and accessibility behavior

- The profile stacks portrait before copy on mobile and uses a compact two-column layout on large screens.
- Timeline media moves below the text at tablet widths and into a 20–22rem third column on large screens. Media wrappers remain self-sized at 16:9 instead of stretching to the height of the text row.
- The header remains horizontally scrollable on narrow screens.
- The desktop section rail is hidden below the extra-large breakpoint.
- Keyboard focus, semantic heading order, reduced-motion preferences, dark mode, and 200% zoom must remain usable.

## Verification

Run before deployment:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
git diff --check
```

Review Profile, Publications, Projects, Experience, and Contact at 375px, 768px, 1280px, and 1440px, plus 200% browser zoom. Check both themes, keyboard navigation, image placeholders, long publication titles, organization marks, DOI links, phone and email links, and the CV view/download actions.
