# Academic portfolio design

## Purpose

The site is an English-first academic portfolio for prospective PhD supervisors, research laboratories, and technical collaborators. Its content is derived from the current public CV and presents research before industry experience. The existing Simplified Chinese routes remain available at `/zh/`, but their navigation entry stays hidden while the translation is being refined.

The personal introduction uses first person. Research, project, professional, education, and honors records preserve the CV wording instead of rewriting it as personal narrative. Page copy should describe work and results directly; it should not explain what a page or section contains.

## Information architecture

- **Profile** introduces the research focus, provides dated news, and links to research and selected publications.
- **Research** groups four research directions and four chronological research experiences.
- **Publications** separates journal publications from patents and preserves equal-contribution and corresponding-author markers.
- **Projects** presents five implemented systems with personal contributions, evidence, technology, and replaceable media.
- **Experience** contains professional roles, education, factual technical skills, and selected honors.
- **Blog** contains long-form notes on robotics, agent systems, and engineering.
- **Contact** publishes the email, phone number, external profiles, and latest CV.

Localized content lives in the seven route files at the top level of `src/data/`, with shared news and skills in `src/data/common/`. Each route groups interface text under `label`, body data under `content`, and ungrouped values such as contact details at the route object's top level. `useSiteLocale` selects the active `messages` object, and every route-level component reads only its matching namespace.

## Component responsibilities

- `ProfileHero` renders identity, first-person introduction, the linked Bilibili affiliation, the systems thread, avatar, primary links, and a compact technology carousel.
- `TechCarousel` compares CV-supported technologies with unlabeled percentage bars; the numerical values stay in data for future motion work.
- `NewsList` renders short dated updates and optional source links.
- `PageShell` reserves the desktop column for in-page navigation.
- `PageToc` tracks the active section while keeping every section label at equal opacity.
- `TimelineEntry` renders chronological research, projects, education, and professional experience. When the complete summary and bullet list exceeds the fixed preview height, the lower text fades toward a ruled Show more / Show less control.
- `CompactRecordList` renders honors as dense year-and-record rows.
- `ExpandableBulletList` provides the shared disclosure behavior for CV-derived bullet lists.
- `AcademicMedia` renders the single 16:9 figure or labeled placeholder shared by research, publication, project, and professional-experience entries.
- `PublicationEntry` renders journal papers as compact figure-and-citation rows and patents as single-column records. Missing paper figures use labeled placeholders.

Route-level pages remain composition surfaces. No global state or client-side content fetching is required.

## Visual system

The interface keeps the existing warm editorial palette and the local Newsreader/Geist pairing. Newsreader carries restrained display hierarchy; Geist carries body text and interface labels. The compact base text is 16px with a reading measure of approximately 66 characters. The shared desktop container is wide enough for a date rail, readable text column, 16:9 academic figure, and page contents rail without creating unused side margins.

The signature element is the profile's research systems thread: physical systems, digital models, intelligent agents, and robot action. It summarizes the site's subject without introducing decorative motion. Structural rules, date rails, figure labels, and monospaced metadata provide hierarchy; gradients, glows, marketing cards, and scroll-triggered effects are excluded.

## Asset contract

- Replace `public/Avatar.png` in place to update the portrait.
- Add one project image under `public/projects/<project-id>/` and set the corresponding `media.src` value in `src/data/projects.ts`.
- Add one research image under `public/research/<research-id>/` and set the corresponding `media.src` value in `src/data/research.ts`.
- Add publication and professional-experience images under their matching public asset folders and set the corresponding `media.src` values in their data files.
- Existing Tesla, ABB, and Bilibili marks are referenced from `public/company/`. Missing organization marks intentionally fall back to text.
- Existing LinkedIn and GitHub marks are referenced from `public/media/`. Assets without a confirmed destination are not rendered.
- Replace `public/cv/Ding_Gao_CV.pdf` in place for future CV revisions.

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

Review Profile, Research, Publications, Projects, Experience, and Contact at 375px, 768px, 1280px, and 1440px, plus 200% browser zoom. Check both themes, keyboard navigation, image placeholders, long publication titles, organization marks, DOI links, phone and email links, and the CV view/download actions.
