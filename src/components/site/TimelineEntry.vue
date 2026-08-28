<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { ArrowUpRight } from '@lucide/vue'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export type TimelineLink = {
  label: string
  href: string
}

const props = defineProps<{
  id?: string
  period: string
  title: string
  meta?: string
  summary?: string
  highlights?: readonly string[]
  tags?: readonly string[]
  links?: readonly TimelineLink[]
}>()

function isExternal(href: string) {
  return /^https?:\/\//.test(href)
}

const slots = useSlots()
const hasMedia = computed(() => Boolean(slots.media))
const gridClass = computed(() =>
  cn(
    'grid gap-6 py-8 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8',
    hasMedia.value && 'lg:grid-cols-[9rem_minmax(0,1fr)_minmax(17rem,0.72fr)] lg:gap-10',
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
      <h3 class="text-xl leading-snug font-medium md:text-2xl">
        {{ title }}
      </h3>
      <p v-if="meta" class="mt-2 text-sm text-muted-foreground">{{ meta }}</p>
      <p v-if="summary" class="measure mt-4 leading-7 text-card-foreground">
        {{ summary }}
      </p>

      <ul
        v-if="highlights?.length"
        class="mt-4 flex flex-col gap-2 text-sm leading-6 text-muted-foreground"
      >
        <li
          v-for="highlight in highlights"
          :key="highlight"
          class="grid grid-cols-[0.75rem_1fr] gap-2"
        >
          <span class="mt-[0.7rem] h-px bg-border" aria-hidden="true" />
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <div v-if="tags?.length" class="mt-5 flex flex-wrap gap-2">
        <Badge v-for="tag in tags" :key="tag" variant="outline">{{ tag }}</Badge>
      </div>

      <ul v-if="links?.length" class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
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

    <div v-if="hasMedia" class="min-w-0 md:col-start-2 lg:col-start-3 lg:row-start-1">
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
