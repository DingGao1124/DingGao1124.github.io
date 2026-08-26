import MarkdownIt from "markdown-it"

/**
 * Shared markdown renderer for content cards.
 *
 * `html: false` keeps the output safe: the site's own content is authored by
 * the owner, and we don't want to allow arbitrary embedded HTML from data files.
 */
export const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: false,
})

export function renderMarkdown(source?: string): string {
  if (!source) return ""
  return md.render(source)
}
