<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lede?: string
}>()
</script>

<template>
  <header class="flex max-w-4xl flex-col gap-2.5">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1 class="text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] font-medium tracking-[-0.03em]">
      {{ title }}
    </h1>
    <!-- <p v-if="lede" class="measure mt-1 text-sm leading-6 text-muted-foreground md:text-base">
      {{ lede }}
    </p> -->
    <slot />
  </header>
</template>
