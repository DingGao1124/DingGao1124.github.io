<script setup lang="ts">
export type DefinitionItem = {
  term: string
  detail: string
}

defineProps<{
  items: readonly DefinitionItem[]
}>()
</script>

<template>
  <dl class="divide-y divide-border">
    <div
      v-for="item in items"
      :key="item.term"
      class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"
    >
      <dt
        class="font-mono text-xs uppercase tracking-wide text-muted-foreground"
      >
        {{ item.term }}
      </dt>
      <dd class="text-card-foreground">{{ item.detail }}</dd>
    </div>
  </dl>
</template>
