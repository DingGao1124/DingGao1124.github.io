<script setup lang="ts">
import PageToc from '@/components/common/PageToc.vue'
import type { PageTocItem } from '@/components/common/PageToc.vue'

defineProps<{
  tocItems: readonly PageTocItem[]
  tocLabel: string
}>()
</script>

<template>
  <div class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <div class="xl:grid xl:grid-cols-[minmax(0,1fr)_10rem] xl:gap-12">
      <div class="min-w-0">
        <slot />
      </div>
      <PageToc :items="tocItems" :label="tocLabel" />
    </div>
  </div>
</template>
