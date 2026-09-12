<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
}>()
</script>

<template>
  <header class="flex max-w-4xl flex-col gap-2.5">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1 class="text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] font-medium tracking-[-0.03em]">
      {{ title }}
    </h1>
    <p class="text-xs text-muted-foreground">
      <slot />
    </p>
  </header>
</template>
