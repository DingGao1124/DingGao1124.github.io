<script setup lang="ts">
import PageToc from '@/components/common/PageToc.vue'
import type { PageTocItem } from '@/components/common/PageToc.vue'

defineProps<{
  tocItems: readonly PageTocItem[]
  tocLabel: string
}>()
</script>

<template>
  <div class="mx-auto max-w-content px-5 py-8 md:px-6 md:py-10">
    <div class="xl:grid xl:grid-cols-[minmax(0,1fr)_10rem] xl:gap-8">
      <div class="min-w-0">
        <slot />
      </div>
      <PageToc :items="tocItems" :label="tocLabel" />
    </div>
  </div>
</template>
