<script setup lang="ts">
import { Image as ImageIcon } from '@lucide/vue'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Empty, EmptyDescription, EmptyMedia } from '@/components/ui/empty'

export type AcademicMediaItem = {
  src?: string
  alt: string
  label: string
}

defineProps<{
  media: AcademicMediaItem
}>()
</script>

<template>
  <figure class="w-full min-w-0 self-start overflow-hidden border bg-secondary">
    <AspectRatio :ratio="16 / 9" class="relative overflow-hidden">
      <img
        v-if="media.src"
        class="size-full object-cover"
        :src="media.src"
        :alt="media.alt"
        width="640"
        height="360"
        loading="lazy"
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
          class="line-clamp-2 max-w-full text-center text-[0.6875rem] leading-4 break-words"
        >
          {{ media.label }}
        </EmptyDescription>
      </Empty>
    </AspectRatio>
  </figure>
</template>
