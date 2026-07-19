<script setup lang="ts">
defineProps<{
  id: string
  title: string
  description?: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-24">
    <div class="flex flex-col gap-4">
      <div class="flex max-w-3xl flex-col gap-2">
        <h2 class="font-heading text-2xl font-semibold md:text-3xl">
          {{ title }}
        </h2>
        <p v-if="description" class="leading-7 text-muted-foreground">
          {{ description }}
        </p>
      </div>
      <slot />
    </div>
  </section>
</template>

