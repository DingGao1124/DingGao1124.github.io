# Changelog

## 2026-09-08

- Site: added a comma-formatted site view counter in the footer.
- Content: expanded the bilingual timeline with academic, professional, award, and patent milestones.
- Content: corrected key dates, titles, and status wording across major records.
- Content: added and refined early-life and school memories.

## 2026-09-07

- Data: organized localized content by route with consistent label and content groups.
- Localization: migrated route components from personal-data aggregation to route-scoped messages.
- Profile: added a phone contact button as the first action in the profile hero.
- Data: normalized Chinese skill groups to the same `skills` structure as English.
- Home: reformatted the news list as a bulleted list with bold inline date prefixes.
- Home: completed the bilingual news timeline with CV milestones.
- Home: distinguished updates from milestones with compact news badges.

## 2026-09-04

- Structure: separated layout chrome into `src/components/layout` and shared building blocks into `src/components/common`.
- Portfolio: reframed the English site around the latest CV with a first-person introduction and verbatim résumé records.
- Profile: added a categorized technology proficiency carousel beneath the avatar.
- Layout: tightened academic records with expandable details and figure-led publication entries.
- Profile: linked the Bilibili affiliation with its existing company mark.
- Media: standardized core academic and professional records on single 16:9 placeholders.
- Interaction: removed the background hover treatment from expandable record controls.
- Layout: widened academic figure columns and removed stretched media whitespace.

## 2026-09-03

- Theme: added an animated theme toggle that reveals the light/dark switch with a clip-path view transition.
- Theme: made the toggle directional so switching to light expands from the button and switching to dark collapses toward it.
- Theme: made the theme icon update immediately in both transition directions.
- Theme: renamed the toggle's direction flags to collapse/expand for clarity.

## 2026-08-30

- Contact: added a "View CV" action that opens the CV PDF in a new tab.
- Contact: removed the location line from contact details and dropped the privacy note.

## 2026-08-29

- Blog: added a bilingual blog section (en/zh) rendering Markdown posts with Tailwind Typography prose.
- Theme: registered the Tailwind Typography plugin and distinguished blog post pages from regular pages.
- Navigation: added a top route-loading progress bar for lazy-loaded page transitions.
- Docs: documented the client route-loading timing and progress indicator.
- Theme: switched the global background to a warm beige eye-friendly palette and a VS Code-style gray dark theme.

## 2026-08-28

- Deployment: aligned GitHub Pages CI with Node.js 24 and reproducible quality-checked builds.
- Navigation: added a fading desktop section rail and an animated return-to-top action.
- Layout: narrowed page content and moved the profile sidebar before the introduction on mobile.
- Homepage: restored a circular profile avatar with identity details and language proficiency bars.
- Components: expanded shadcn-vue composition for media, empty states, actions, and theme guidance.

## 2026-08-27

- Site: redesigned the bilingual portfolio around a profile hero, timelines, selected work, and complete résumé content.
- Data: reorganized profile data by category instead of by language.
- Tooling: added oxlint and oxfmt for linting and formatting.

## 2026-08-26

- Homepage: redesigned the About section with avatar, name, role, and contact icons.
- Deployment: switched the CI install command from npm ci to npm install.
- Components: added a unified content card for projects, publications, experience, and education.
- Data model: extended the content data model with new fields and types.
- Theme: added light/dark theme toggle with preference persistence.
- i18n: added English default and Chinese (/zh/) version.
- Structure: restructured the site into per-section pages.
