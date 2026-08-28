<script setup lang="ts">
import { Image as ImageIcon } from '@lucide/vue'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Empty, EmptyDescription, EmptyMedia } from '@/components/ui/empty'
import type { ProjectMedia } from '@/data/projects'
import { cn } from '@/lib/utils'

defineProps<{
  items: readonly ProjectMedia[]
  featured?: boolean
  placeholderLabel: string
}>()
</script>

<template>
  <div class="grid grid-cols-2 gap-2" role="group" :aria-label="placeholderLabel">
    <figure
      v-for="(item, index) in items"
      :key="`${item.label}-${index}`"
      :class="
        cn('overflow-hidden rounded-sm bg-secondary', featured && index === 0 && 'col-span-2')
      "
    >
      <AspectRatio :ratio="4 / 3" class="relative">
        <img
          v-if="item.src"
          class="size-full object-cover"
          :src="item.src"
          :alt="item.alt"
          width="640"
          height="480"
          loading="lazy"
        />
        <Empty
          v-else
          class="size-full gap-2 rounded-sm p-3 md:p-3"
          role="img"
          :aria-label="item.alt"
        >
          <EmptyMedia variant="icon">
            <ImageIcon aria-hidden="true" />
          </EmptyMedia>
          <EmptyDescription>{{ item.label }}</EmptyDescription>
        </Empty>
      </AspectRatio>
    </figure>
  </div>
</template>
