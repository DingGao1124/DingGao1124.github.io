<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

import { Separator } from '@/components/ui/separator'
import type { NewsItem } from '@/data/common/news'

defineProps<{
  items: readonly NewsItem[]
}>()
</script>

<template>
  <ol>
    <li v-for="item in items" :key="`${item.date}-${item.text}`">
      <Separator />
      <div class="grid gap-1 py-3.5 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-5">
        <time class="font-mono text-xs leading-6 text-muted-foreground">{{ item.date }}</time>
        <p class="max-w-3xl text-[0.9375rem] leading-6 text-card-foreground">
          {{ item.text }}
          <a
            v-if="item.href"
            class="link ml-1 inline-flex items-center gap-1 whitespace-nowrap text-sm"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
          >
            {{ item.linkLabel }}
            <ArrowUpRight class="size-3.5" aria-hidden="true" />
          </a>
        </p>
      </div>
    </li>
  </ol>
</template>
