<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, onUpdated, shallowRef, watch } from 'vue'
import { ChevronDown } from '@lucide/vue'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { NewsItem } from '@/data/common/news'

const props = withDefaults(
  defineProps<{
    items: readonly NewsItem[]
    collapsedHeight?: number
    showMoreLabel?: string
    showLessLabel?: string
  }>(),
  {
    collapsedHeight: 666,
    showMoreLabel: 'Show more',
    showLessLabel: 'Show less',
  },
)

const expanded = shallowRef(false)
const viewport = shallowRef<HTMLElement>()
const list = shallowRef<HTMLElement>()
const listHeight = shallowRef(0)
const hasOverflow = shallowRef(false)
let resizeObserver: ResizeObserver | undefined
let anchorFrame: number | undefined

const collapseDuration = computed(() =>
  Math.min(900, Math.max(300, (listHeight.value - props.collapsedHeight) * 0.7)),
)

// The list itself is never clamped, so its height stays the full content height
// and both ends of the transition are concrete pixels.
const clampStyle = computed(() => {
  if (!hasOverflow.value) return undefined
  return {
    maxHeight: `${expanded.value ? listHeight.value : props.collapsedHeight}px`,
    transitionDuration: `${Math.round(collapseDuration.value)}ms`,
  }
})

function measure() {
  const element = list.value
  if (!element) return
  listHeight.value = element.offsetHeight
  hasOverflow.value = element.offsetHeight > props.collapsedHeight + 1
}

onMounted(() => {
  resizeObserver = new ResizeObserver(measure)
  if (list.value) resizeObserver.observe(list.value)
  measure()
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  stopAnchor()
})

watch(() => props.collapsedHeight, measure)

function stopAnchor() {
  if (anchorFrame !== undefined) cancelAnimationFrame(anchorFrame)
  anchorFrame = undefined
}

// Collapse anchor: the wrapper is the box that animates (the inner list keeps
// its full height), so its measured height H drives the correction.
//
//   H(t) = clamped viewport height,  H0 = listHeight -> H1 = collapsedHeight
//   h    = H(t) - H(t-1)             // height the document loses this frame
//   S    = scrollY,  e = document offset of any content below the list
//   y    = e - S                     // its position inside the viewport
//
// Scroll by the height lost each frame:  S' = S + h,  e' = e + h
//   => y' = (e + h) - (S + h) = y
// so the reader's view holds still. sum(h) = H1 - H0 equals the total height
// lost, so S follows the shorter document exactly and the browser's max-scroll
// clamp never fights the correction.
function anchorCollapse() {
  stopAnchor()
  const element = viewport.value
  if (!element) return
  const end = performance.now() + collapseDuration.value + 100
  let height = element.getBoundingClientRect().height
  const step = () => {
    const current = viewport.value?.getBoundingClientRect().height ?? height
    const delta = current - height
    height = current
    if (delta !== 0) window.scrollBy({ top: delta, behavior: 'instant' })
    anchorFrame = performance.now() < end ? requestAnimationFrame(step) : undefined
  }
  anchorFrame = requestAnimationFrame(step)
}

function toggle() {
  // Expanding needs no compensation: the new items push in from the bottom of
  // the viewport while the scroll position stands still.
  if (expanded.value) anchorCollapse()
  else stopAnchor()
  expanded.value = !expanded.value
}
</script>

<template>
  <div
    ref="viewport"
    :class="[
      'news-viewport relative overflow-hidden transition-[max-height] ease-out',
      hasOverflow && !expanded && 'news-collapsed',
    ]"
    :style="clampStyle"
  >
    <ul
      ref="list"
      class="list-disc space-y-3 mx-2 pl-3 text-[0.9375rem] leading-6 text-card-foreground marker:text-muted-foreground"
    >
      <li v-for="item in items" :key="`${item.date}-${item.text}`">
        <strong v-if="item.date" class="font-semibold">{{ item.date }}:</strong>
        <Badge
          class="mx-1 align-text-top px-2 py-0.5 text-xs"
          :variant="item.type === 'Milestone' ? 'secondary' : 'outline'"
        >
          {{ item.type }}
        </Badge>
        {{ item.text }}
        <a v-if="item.href" class="link ml-1" :href="item.href" target="_blank" rel="noreferrer">
          {{ item.linkLabel }}
        </a>
      </li>
    </ul>
  </div>

  <div v-if="hasOverflow" class="mt-2 flex items-center gap-3">
    <span class="h-px flex-1 bg-border" aria-hidden="true" />
    <Button
      variant="ghost"
      size="sm"
      class="h-7 shrink-0 rounded-none px-2 text-[0.6875rem] hover:bg-transparent hover:text-foreground"
      :aria-expanded="expanded"
      @click="toggle"
    >
      {{ expanded ? showLessLabel : showMoreLabel }}
      <ChevronDown data-icon="inline-end" :class="{ 'rotate-180': expanded }" aria-hidden="true" />
    </Button>
    <span class="h-px flex-1 bg-border" aria-hidden="true" />
  </div>
</template>

<style scoped>
.news-viewport::after {
  position: absolute;
  inset: auto 0 0;
  height: 3.5rem;
  background: linear-gradient(to bottom, transparent, var(--background));
  pointer-events: none;
  content: '';
  opacity: 0;
  transition: opacity 200ms ease-out;
}

.news-collapsed::after {
  opacity: 1;
}
</style>
