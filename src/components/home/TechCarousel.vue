<script setup lang="ts">
import { onBeforeUnmount, shallowRef } from 'vue'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Progress } from '@/components/ui/progress'
import type { SkillGroup } from '@/data/common/skills'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  title: string
  groups: readonly SkillGroup[]
}>()

const api = shallowRef<CarouselApi>()
const current = shallowRef(1)

function updateCurrent() {
  if (api.value) current.value = api.value.selectedScrollSnap() + 1
}

function setApi(value: CarouselApi) {
  if (!value) return

  api.value = value
  updateCurrent()
  value.on('select', updateCurrent)
  value.on('reInit', updateCurrent)
}

onBeforeUnmount(() => {
  api.value?.off('select', updateCurrent)
  api.value?.off('reInit', updateCurrent)
})
</script>

<template>
  <section v-bind="$attrs" class="w-full text-left" :aria-label="title">
    <Carousel class="w-full" :opts="{ align: 'start' }" :aria-label="title" @init-api="setApi">
      <CarouselContent>
        <CarouselItem v-for="group in groups" :key="group.label">
          <div class="flex min-h-52 flex-col px-1">
            <div class="flex items-baseline justify-between gap-3">
              <h2 class="font-serif text-base leading-snug font-medium">
                {{ group.label }}
              </h2>
              <p class="font-mono text-[0.5625rem] tracking-[0.12em] text-muted-foreground">
                {{ String(current).padStart(2, '0') }} /
                {{ String(props.groups.length).padStart(2, '0') }}
              </p>
            </div>
            <ul class="mt-3.5 flex list-none flex-col gap-2.5">
              <li v-for="item in group.skills" :key="item.label">
                <p class="mb-1 text-[0.6875rem] leading-4">{{ item.label }}</p>
                <Progress
                  :model-value="item.value"
                  :aria-label="`${item.label} proficiency`"
                  class="h-1.5"
                />
              </li>
            </ul>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious class="-left-9 size-7" />
      <CarouselNext class="-right-9 size-7" />
    </Carousel>
  </section>
</template>
