<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  label: string
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-center rounded-sm border border-border px-1.5 py-0.5 font-mono text-xs text-muted-foreground',
        props.class,
      )
    "
  >
    {{ label }}
  </span>
</template>
