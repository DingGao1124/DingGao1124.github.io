<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

defineProps<{
  id?: string
  title?: string
  description?: string
  position?: 'left' | 'center' | 'right'
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-28">
    <Separator />
    <div class="pt-5">
      <div
        v-if="title"
        :class="
          cn(
            'flex flex-col gap-2',
            position === 'center' && 'items-center text-center',
            position === 'right' && 'items-end text-right',
          )
        "
      >
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
