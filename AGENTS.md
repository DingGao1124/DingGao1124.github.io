# AGENTS.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

---

# Coding Guideline

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Use shadcn-vue Components

**Build pages with shadcn-vue components first; use the ones already in the project, or search for one via the shadcn-vue CLI. Prefer composing existing components to hand-writing native markup; keep code minimal and consistent, and do not re-invent components that already exist. Fall back to native HTML tags only when no component satisfies the need, or when using a component would be more complex than the native tag.**

## 4. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 5. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```text
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## 6. Comments

**Write comments in English. Comment only where necessary, and keep them concise.**

---

# Project Guideline

## Academic Research Portfolio

This is an academic research portfolio and technical blog.

Prioritize:

- information density
- clear hierarchy
- typography
- technical diagrams
- figures and tables
- citations and references
- code and mathematical content
- research/project metadata
- long-form readability

Use a restrained editorial / academic visual language.

Avoid:

- gradients
- glows
- excessive cards
- oversized marketing heroes
- decorative UI
- parallax
- scroll-triggered animations
- unnecessary transitions
- SaaS landing-page aesthetics

Motion should be minimal and functional only.

**The content is the visual focus.**

## Documentation & Change Logs

- `CHANGELOG.md` (project root): significant changes only — one short line in English in `Title: Detail` format, no implementation details. Small fixes, refactors, and polish don't get an entry.
- `docs/`: write a full technical doc for new technical implementations or major updates.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
