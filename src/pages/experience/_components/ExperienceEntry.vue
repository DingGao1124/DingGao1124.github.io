<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { ArrowUpRight, MapPin } from '@lucide/vue'

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
    location?: string
    meta?: string
    metaEnd?: string
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
const hasLogo = computed(() => Boolean(slots.logo))
const hasMedia = computed(() => Boolean(slots.media))
const hasMeta = computed(() => Boolean(slots.meta) || Boolean(props.meta) || Boolean(props.metaEnd))
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
    <!-- Timeline period -->
    <div class="timeline-date relative pl-5 md:pl-0 md:pr-7">
      <time class="font-mono text-xs leading-6 text-muted-foreground">{{ period }}</time>
    </div>

    <!-- Experience content -->
    <div class="min-w-0">
      <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <!-- Logo -->
          <div v-if="hasLogo" class="flex shrink-0 -translate-y-0.5 items-center">
            <slot name="logo" />
          </div>
          <!-- Name -->
          <h3 class="text-base leading-snug font-medium md:text-lg">
            {{ title }}
          </h3>
        </div>
        <!-- Location -->
        <p
          v-if="location"
          class="inline-flex -translate-y-px items-center gap-1 text-xs text-muted-foreground"
        >
          <MapPin class="size-3.5 shrink-0" aria-hidden="true" />
          {{ location }}
        </p>
      </div>
      <div
        v-if="hasMeta"
        class="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 text-xs leading-5 text-muted-foreground"
      >
        <slot name="meta">
          <span v-if="meta">{{ meta }}</span>
          <span v-if="metaEnd">{{ metaEnd }}</span>
        </slot>
      </div>

      <div v-if="tags?.length" class="mt-1.5 flex flex-wrap gap-1.5 md:flex-nowrap">
        <Badge v-for="tag in tags" :key="tag" variant="outline">{{ tag }}</Badge>
      </div>

      <ExpandableBulletList
        v-if="summary || highlights?.length"
        class="mt-1.5"
        :summary="summary"
        :highlights="highlights ?? []"
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

    <!-- Media figure -->
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
