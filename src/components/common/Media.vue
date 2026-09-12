<script setup lang="ts">
import { ref, watch } from 'vue'
import { Image as ImageIcon } from '@lucide/vue'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Empty, EmptyDescription, EmptyMedia } from '@/components/ui/empty'
import { Skeleton } from '@/components/ui/skeleton'

export type MediaItem = {
  src?: string
  alt: string
  label: string
}

const props = defineProps<{
  media: MediaItem
}>()

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
  <figure class="w-full min-w-0 self-start overflow-hidden border bg-secondary">
    <AspectRatio :ratio="16 / 9" class="relative overflow-hidden">
      <Skeleton
        v-if="media.src && !loaded && !failed"
        class="absolute inset-0 rounded-none bg-primary/20"
        aria-hidden="true"
      />
      <img
        v-if="media.src && !failed"
        class="size-full object-cover"
        :src="media.src"
        :alt="media.alt"
        width="640"
        height="360"
        loading="lazy"
        decoding="async"
        @load="loaded = true"
        @error="failed = true"
      />
      <Empty
        v-else
        class="absolute inset-0 size-full min-h-0 min-w-0 gap-1.5 overflow-hidden rounded-none border-0 p-2"
        role="img"
        :aria-label="media.alt"
      >
        <EmptyMedia variant="icon" class="size-7">
          <ImageIcon aria-hidden="true" />
        </EmptyMedia>
        <EmptyDescription
          class="line-clamp-2 max-w-full text-center text-[0.6875rem] leading-4 wrap-break-word"
        >
          {{ media.label }}
        </EmptyDescription>
      </Empty>
    </AspectRatio>
  </figure>
</template>
