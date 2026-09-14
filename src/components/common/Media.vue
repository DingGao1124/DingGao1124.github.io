<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ImageOff } from '@lucide/vue'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Empty, EmptyDescription, EmptyMedia } from '@/components/ui/empty'
import { Skeleton } from '@/components/ui/skeleton'
import { useSiteLocale } from '@/hooks/useSiteLocale'
import { cn } from '@/lib/utils'

export type MediaItem = {
  src?: string
  alt: string
  label: string
  ratio?: number
}

const props = defineProps<{
  media: MediaItem
  href?: string
  /** For same-origin href assets. */
  newTab?: boolean
}>()

const { messages } = useSiteLocale()

const isExternal = computed(() => Boolean(props.href) && /^https?:\/\//.test(props.href ?? ''))
const opensInNewTab = computed(() => Boolean(props.href) && (props.newTab || isExternal.value))

const loaded = ref(false)
const failed = ref(false)

// A new src is a new attempt, so clear both flags when the item changes.
watch(
  () => props.media.src,
  () => {
    loaded.value = false
    failed.value = false
  },
)
</script>

<template>
  <figure class="group w-full min-w-0 self-start overflow-hidden border bg-secondary">
    <AspectRatio :ratio="media.ratio ?? 16 / 9" class="relative overflow-hidden">
      <Skeleton
        v-if="media.src && !loaded && !failed"
        class="absolute inset-0 rounded-none bg-primary/20"
        aria-hidden="true"
      />
      <!-- Picture should be lazy loaded -->
      <component
        v-if="media.src && !failed"
        :is="href ? 'a' : 'div'"
        :href="href"
        :target="opensInNewTab ? '_blank' : undefined"
        :rel="opensInNewTab ? 'noreferrer' : undefined"
        :class="
          cn(
            'block size-full',
            href && 'cursor-pointer outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
          )
        "
      >
        <img
          class="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none"
          :src="media.src"
          :alt="media.alt"
          width="640"
          height="360"
          loading="lazy"
          decoding="async"
          @load="loaded = true"
          @error="failed = true"
        />
      </component>
      <Empty
        v-else
        class="absolute inset-0 size-full min-h-0 min-w-0 gap-1.5 overflow-hidden rounded-none border-0 bg-card/60 p-2"
        role="img"
        :aria-label="media.alt"
      >
        <EmptyMedia variant="icon" class="size-7">
          <ImageOff aria-hidden="true" />
        </EmptyMedia>
        <EmptyDescription
          class="line-clamp-2 max-w-full text-center text-[0.6875rem] leading-4 wrap-break-word"
        >
          {{ messages.mediaFailedLabel }}
        </EmptyDescription>
        <EmptyDescription
          class="line-clamp-2 max-w-full text-center text-[0.6875rem] leading-4 wrap-break-word"
        >
          {{ media.label }}
        </EmptyDescription>
      </Empty>
    </AspectRatio>
  </figure>
</template>
