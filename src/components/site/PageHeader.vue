<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lede?: string
}>()
</script>

<template>
  <header class="flex max-w-4xl flex-col gap-4">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1
      class="text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.035em]"
    >
      {{ title }}
    </h1>
    <p
      v-if="lede"
      class="measure mt-2 text-lg leading-8 text-muted-foreground md:text-xl"
    >
      {{ lede }}
    </p>
    <slot />
  </header>
</template>
