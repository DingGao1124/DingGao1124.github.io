<script setup lang="ts">
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

defineProps<{
  id?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-28">
    <Separator />
    <div class="pt-8">
      <div v-if="title" class="flex flex-col gap-2">
        <h2 class="text-2xl font-medium md:text-3xl">{{ title }}</h2>
        <p v-if="description" class="measure text-muted-foreground">
          {{ description }}
        </p>
      </div>
      <div :class="cn(title && 'mt-8')">
        <slot />
      </div>
    </div>
  </section>
</template>
