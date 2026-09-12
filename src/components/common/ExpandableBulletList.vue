<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, shallowRef, watch } from 'vue'
import { ChevronDown } from '@lucide/vue'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    summary?: string
    items: readonly string[]
    collapsible?: boolean
    collapsedHeight?: number
    showMoreLabel?: string
    showLessLabel?: string
  }>(),
  {
    collapsible: false,
    collapsedHeight: 176,
    showMoreLabel: 'Show more',
    showLessLabel: 'Show less',
  },
)

const isOpen = shallowRef(false)
const content = shallowRef<HTMLElement>()
const hasOverflow = shallowRef(false)
const contentHeight = shallowRef(0)
// Height the clamp animates through; cleared once the transition settles so the
// expanded content is never clipped when it reflows (font swap, window resize).
const animatedHeight = shallowRef<number>()
let resizeObserver: ResizeObserver | undefined

const clampStyle = computed(() => {
  if (!hasOverflow.value) return undefined
  if (animatedHeight.value != null) return { maxHeight: `${animatedHeight.value}px` }
  return isOpen.value ? undefined : { maxHeight: `${props.collapsedHeight}px` }
})

function measureOverflow() {
  const element = content.value
  if (!element) return
  contentHeight.value = element.scrollHeight
  hasOverflow.value = Boolean(props.collapsible && element.scrollHeight > props.collapsedHeight + 1)
}

function startHeightAnimation() {
  const element = content.value
  if (!element || !hasOverflow.value) return
  contentHeight.value = element.scrollHeight
  animatedHeight.value = contentHeight.value
  // Collapsing needs a fixed start height first, so the clamp has a value to
  // transition from on the next frame.
  if (!isOpen.value) {
    requestAnimationFrame(() => {
      animatedHeight.value = props.collapsedHeight
    })
  }
}

function settleHeightAnimation(event: TransitionEvent) {
  if (event.propertyName === 'max-height') animatedHeight.value = undefined
}

function bulletKey(item: string, index: number) {
  return `${index}-${item}`
}

onMounted(() => {
  resizeObserver = new ResizeObserver(measureOverflow)
  if (content.value) resizeObserver.observe(content.value)
  void nextTick(measureOverflow)
})

onBeforeUnmount(() => resizeObserver?.disconnect())

watch(
  () => [props.summary, props.items, props.collapsedHeight],
  () => void nextTick(measureOverflow),
)

watch(isOpen, startHeightAnimation)
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <div
      ref="content"
      :class="[
        'expandable-content relative overflow-hidden transition-[max-height] duration-300 ease-out',
        hasOverflow && !isOpen && 'expandable-content-collapsed',
      ]"
      :style="clampStyle"
      @transitionend="settleHeightAnimation"
    >
      <p v-if="summary" class="measure text-sm leading-[1.55] text-card-foreground">
        {{ summary }}
      </p>
      <ul
        v-if="items.length"
        :class="[
          'flex list-none flex-col gap-1.5 text-[0.8125rem] leading-[1.55] text-muted-foreground',
          summary && 'mt-2.5',
        ]"
      >
        <li
          v-for="(item, index) in items"
          :key="bulletKey(item, index)"
          class="grid grid-cols-[0.625rem_1fr] gap-2"
        >
          <span class="mt-2.5 h-px bg-border" aria-hidden="true" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div v-if="hasOverflow" class="mt-2 flex items-center gap-3">
      <span class="h-px flex-1 bg-border" aria-hidden="true" />
      <CollapsibleTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="h-7 shrink-0 rounded-none px-2 text-[0.6875rem] hover:bg-transparent hover:text-foreground"
          :aria-expanded="isOpen"
        >
          {{ isOpen ? showLessLabel : showMoreLabel }}
          <ChevronDown
            data-icon="inline-end"
            :class="cn(isOpen && 'rotate-180')"
            aria-hidden="true"
          />
        </Button>
      </CollapsibleTrigger>
      <span class="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  </Collapsible>
</template>

<style scoped>
.expandable-content::after {
  position: absolute;
  inset: auto 0 0;
  height: 3.5rem;
  background: linear-gradient(to bottom, transparent, var(--background));
  pointer-events: none;
  content: '';
  opacity: 0;
  transition: opacity 200ms ease-out;
}

.expandable-content-collapsed::after {
  opacity: 1;
}
</style>
