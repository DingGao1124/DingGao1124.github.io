<script setup lang="ts">
defineProps<{
  id?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-28 border-t border-border pt-8">
    <div v-if="title" class="flex flex-col gap-2">
      <h2 class="text-2xl font-medium">{{ title }}</h2>
      <p v-if="description" class="measure text-muted-foreground">
        {{ description }}
      </p>
    </div>
    <div :class="title ? 'mt-7' : ''">
      <slot />
    </div>
  </section>
</template>
