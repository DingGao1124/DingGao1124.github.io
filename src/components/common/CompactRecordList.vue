<script setup lang="ts">
import { Separator } from '@/components/ui/separator'

export type CompactRecord = {
  year: string
  title: string
  detail?: string
}

defineProps<{
  items: readonly CompactRecord[]
}>()
</script>

<template>
  <ol>
    <li v-for="item in items" :key="`${item.year}-${item.title}`">
      <Separator />
      <article class="grid gap-1 py-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-4">
        <time class="font-mono text-sm font-medium text-link">{{ item.year }}</time>
        <div class="min-w-0">
          <h3 class="text-sm leading-5 font-medium md:text-base">
            {{ item.title }}
          </h3>
          <p v-if="item.detail" class="mt-0.5 text-xs leading-5 text-muted-foreground">
            {{ item.detail }}
          </p>
        </div>
      </article>
    </li>
  </ol>
</template>
