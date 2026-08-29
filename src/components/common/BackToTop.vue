<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUp } from '@lucide/vue'
import { useWindowScroll } from '@vueuse/core'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

defineProps<{
  label: string
}>()

const { y } = useWindowScroll()
const isVisible = computed(() => y.value > 480)

function returnToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}
</script>

<template>
  <Transition
    enter-active-class="transition-[opacity,transform] duration-200 ease-out"
    enter-from-class="translate-y-2 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-[opacity,transform] duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-2 opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 md:right-8 md:bottom-[calc(2rem+env(safe-area-inset-bottom))]"
    >
      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="outline" size="icon" :aria-label="label" @click="returnToTop">
            <ArrowUp aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{{ label }}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </Transition>
</template>
