<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lede?: string
}>()
</script>

<template>
  <header class="flex flex-col gap-3">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1 class="text-4xl font-medium md:text-5xl">{{ title }}</h1>
    <p v-if="lede" class="measure text-lg leading-8 text-muted-foreground">
      {{ lede }}
    </p>
    <slot />
  </header>
</template>
