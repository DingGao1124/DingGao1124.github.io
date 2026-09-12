<script setup lang="ts">
import type { HomeExperience } from '@/data/profile'

defineProps<{
  items: readonly HomeExperience[]
}>()
</script>

<template>
  <ol class="mx-auto max-w-4xl">
    <li v-for="item in items" :key="item.id" class="border-b border-border py-3 last:border-0">
      <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span class="flex items-center gap-2 text-sm font-medium">
          <img
            v-if="item.logoSrc"
            :class="`size-${item.logoSize ?? 6} shrink-0 object-contain`"
            :src="item.logoSrc"
            alt=""
            loading="lazy"
          />
          {{ item.organization }}
        </span>
        <time class="font-mono text-xs whitespace-nowrap text-muted-foreground">{{
          item.period
        }}</time>
      </div>
      <p class="mt-0.5 text-xs leading-5 text-muted-foreground">{{ item.role }}</p>
    </li>
  </ol>
</template>
