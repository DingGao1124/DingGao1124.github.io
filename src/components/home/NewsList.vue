<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import type { NewsItem } from '@/data/common/news'

defineProps<{
  items: readonly NewsItem[]
}>()
</script>

<template>
  <ul
    class="list-disc space-y-3 mx-2 pl-5 text-[0.9375rem] leading-6 text-card-foreground marker:text-muted-foreground"
  >
    <li v-for="item in items" :key="`${item.date}-${item.text}`">
      <strong v-if="item.date" class="font-semibold">{{ item.date }}:</strong>
      <Badge
        class="mx-1 align-text-top px-2 py-0.5 text-xs"
        :variant="item.type === 'Milestone' ? 'secondary' : 'outline'"
      >
        {{ item.type }}
      </Badge>
      {{ item.text }}
      <a v-if="item.href" class="link ml-1" :href="item.href" target="_blank" rel="noreferrer">
        {{ item.linkLabel }}
      </a>
    </li>
  </ul>
</template>
