<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { ArrowUpRight } from '@lucide/vue'

import ExpandableBulletList from '@/components/common/ExpandableBulletList.vue'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export type TimelineLink = {
  label: string
  href: string
}

const props = withDefaults(
  defineProps<{
    id?: string
    period: string
    title: string
    meta?: string
    summary?: string
    highlights?: readonly string[]
    tags?: readonly string[]
    links?: readonly TimelineLink[]
    collapsible?: boolean
    collapsedHeight?: number
    showMoreLabel?: string
    showLessLabel?: string
  }>(),
  {
    collapsible: false,
    showMoreLabel: 'Show more',
    showLessLabel: 'Show less',
  },
)

function isExternal(href: string) {
  return /^https?:\/\//.test(href)
}

const slots = useSlots()
const hasMedia = computed(() => Boolean(slots.media))
const hasMark = computed(() => Boolean(slots.mark))
const gridClass = computed(() =>
  cn(
    'grid gap-3 py-4 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-5',
    hasMedia.value &&
      'lg:grid-cols-[6rem_minmax(0,1fr)_20rem] lg:gap-6 xl:grid-cols-[6rem_minmax(0,1fr)_22rem] xl:gap-7',
  ),
)
</script>

<template>
  <Separator />
  <article :id="id" :class="cn(gridClass, 'scroll-mt-28')">
    <div class="timeline-date relative pl-5 md:pl-0 md:pr-7">
      <time class="font-mono text-xs leading-6 text-muted-foreground">{{ period }}</time>
    </div>

    <div class="min-w-0">
      <div class="flex items-start justify-between gap-5">
        <h3 class="text-base leading-snug font-medium md:text-lg">
          {{ title }}
        </h3>
        <div v-if="hasMark" class="flex h-8 w-16 shrink-0 items-center justify-end">
          <slot name="mark" />
        </div>
      </div>
      <p v-if="meta" class="mt-1 text-xs leading-5 text-muted-foreground">
        {{ meta }}
      </p>

      <div v-if="tags?.length" class="mt-1.5 flex flex-wrap gap-1.5 md:flex-nowrap">
        <Badge
          v-for="tag in tags"
          :key="tag"
          variant="outline"
          class="border-link/25 bg-link/10 px-1.5 py-0 text-[0.6875rem] leading-4 text-link/90"
          >{{ tag }}</Badge
        >
      </div>

      <ExpandableBulletList
        v-if="summary || highlights?.length"
        class="mt-1.5"
        :summary="summary"
        :items="highlights ?? []"
        :collapsible="collapsible"
        :collapsed-height="collapsedHeight"
        :show-more-label="showMoreLabel"
        :show-less-label="showLessLabel"
      />

      <ul v-if="links?.length" class="mt-1.5 flex flex-wrap gap-x-4 gap-y-2 text-xs">
        <li v-for="link in links" :key="link.href">
          <a
            class="link inline-flex items-center gap-1.5"
            :href="link.href"
            :target="isExternal(link.href) ? '_blank' : undefined"
            :rel="isExternal(link.href) ? 'noreferrer' : undefined"
          >
            {{ link.label }}
            <ArrowUpRight class="size-3.5" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>

    <div v-if="hasMedia" class="min-w-0 self-start md:col-start-2 lg:col-start-3 lg:row-start-1">
      <slot name="media" />
    </div>
  </article>
</template>

<style scoped>
.timeline-date::before {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  width: 1px;
  background: var(--border);
  content: '';
}

.timeline-date::after {
  position: absolute;
  inset-block-start: 0.45rem;
  inset-inline-start: -0.1875rem;
  width: 0.4375rem;
  height: 0.4375rem;
  border: 1px solid var(--link);
  background: var(--background);
  content: '';
}

@media (min-width: 48rem) {
  .timeline-date::before {
    inset-inline: auto 0;
  }

  .timeline-date::after {
    inset-inline: auto -0.1875rem;
  }
}
</style>
