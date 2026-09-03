<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

defineProps<{
  id?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-20">
    <Separator />
    <div class="pt-5">
      <div v-if="title" class="flex flex-col gap-2">
        <h2 class="text-xl font-medium md:text-2xl">{{ title }}</h2>
        <p v-if="description" class="measure text-muted-foreground">
          {{ description }}
        </p>
      </div>
      <div :class="cn(title && 'mt-4')">
        <slot />
      </div>
    </div>
  </section>
</template>
