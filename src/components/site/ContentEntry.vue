<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  Code,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  Link2,
  Play,
  Presentation,
  type LucideIcon,
} from "@lucide/vue"

import Tag from "@/components/site/Tag.vue"
import { useSiteLocale } from "@/hooks/useSiteLocale"
import { renderMarkdown } from "@/lib/markdown"
import { cn } from "@/lib/utils"

export type ContentLink = {
  label: string
  href: string
  icon?: string
}

const props = defineProps<{
  /** Optional leading index or year displayed in the left column. */
  number?: string | number
  title: string
  /** Optional pill badge (e.g. category, "Journal Article"). */
  badge?: string
  /** Small darker line with journal / school / major / location etc. */
  meta?: string
  /** Optional second muted line (e.g. authors). */
  summary?: string
  /** Markdown body. */
  content?: string
  images?: string[]
  links?: ContentLink[]
  /** Tailwind grid-template classes for the left index column. */
  numberColumnClass?: string
}>()

const { messages } = useSiteLocale()
const labels = computed(() => messages.value.contentCard)
const cols = computed(
  () => props.numberColumnClass ?? "sm:grid-cols-[3rem_1fr]",
)

const html = computed(() => renderMarkdown(props.content))

const iconMap: Record<string, LucideIcon | undefined> = {
  code: Code,
  github: GitBranch,
  video: Play,
  youtube: Play,
  paper: FileText,
  pdf: FileText,
  doi: Link2,
  link: Link2,
  slides: Presentation,
  project: Boxes,
  site: Globe,
  school: GraduationCap,
  university: GraduationCap,
  book: BookOpen,
}

function iconFor(key?: string): LucideIcon {
  return (key && iconMap[key]) || ArrowUpRight
}

/** Collapsed preview height in px (≈5–6 lines). */
const COLLAPSED_MAX_PX = 160

const contentRef = ref<HTMLElement | null>(null)
const expanded = ref(false)
const overflowing = ref(false)

function measure() {
  const el = contentRef.value
  if (!el) return
  overflowing.value = el.scrollHeight > COLLAPSED_MAX_PX + 1
}

function onResize() {
  measure()
}

onMounted(() => {
  measure()
  window.addEventListener("resize", onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize)
})
</script>

<template>
  <article
    :class="
      cn('grid grid-cols-1 py-6', number ? cn('gap-2 sm:gap-6', cols) : '')
    "
  >
    <span
      v-if="number"
      class="font-mono text-xs leading-7 text-muted-foreground"
    >
      {{ number }}
    </span>

    <div>
      <h3 class="font-serif text-xl font-medium leading-snug">{{ title }}</h3>

      <div
        v-if="badge || meta"
        class="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5"
      >
        <Tag v-if="badge" :label="badge" />
        <span v-if="meta" class="text-sm text-muted-foreground">{{
          meta
        }}</span>
      </div>

      <p v-if="summary" class="mt-1.5 text-sm text-muted-foreground">
        {{ summary }}
      </p>

      <div v-if="html" class="mt-3">
        <div
          ref="contentRef"
          class="entry-content measure text-card-foreground"
          :style="expanded ? undefined : { maxHeight: `${COLLAPSED_MAX_PX}px` }"
          v-html="html"
        ></div>
        <button
          v-if="overflowing"
          type="button"
          class="mt-1 text-sm text-link underline-offset-4 hover:underline"
          :aria-expanded="expanded"
          @click="expanded = !expanded"
        >
          {{ expanded ? labels.showLess : labels.showMore }}
        </button>
      </div>

      <div v-if="images?.length" class="mt-4 flex flex-wrap gap-3">
        <a
          v-for="(src, index) in images"
          :key="src"
          :href="src"
          target="_blank"
          rel="noreferrer"
          class="block overflow-hidden rounded-md border border-border"
        >
          <img
            :src="src"
            :alt="`${title} — image ${index + 1}`"
            loading="lazy"
            class="h-24 w-36 object-cover"
          />
        </a>
      </div>

      <div v-if="links?.length" class="mt-4 flex flex-wrap gap-2">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          :class="
            cn(
              'inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-link/40 hover:text-foreground',
            )
          "
        >
          <component :is="iconFor(link.icon)" class="size-4 shrink-0" />
          <span>{{ link.label }}</span>
          <ArrowUpRight class="size-3.5 shrink-0 opacity-60" />
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.entry-content {
  font-size: 0.9375rem;
  line-height: 1.65;
  overflow: hidden;
}

.entry-content :deep(p) {
  margin: 0 0 0.75rem;
}

.entry-content :deep(p:last-child) {
  margin-bottom: 0;
}

.entry-content :deep(ul),
.entry-content :deep(ol) {
  margin: 0 0 0.75rem;
  padding-left: 1.25rem;
}

.entry-content :deep(li) {
  margin: 0.25rem 0;
}

.entry-content :deep(a) {
  color: var(--link);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.entry-content :deep(strong) {
  font-weight: 600;
}
</style>
