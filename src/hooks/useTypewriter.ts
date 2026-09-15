import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

type TypewriterOptions = {
  /** Delay between characters, in milliseconds. */
  speed?: number
  /** Pause on the completed text before deleting, in milliseconds. */
  hold?: number
  /** Leading characters kept rendered so the line never collapses to zero height. */
  reserve?: number
  /** Number of completed type-outs before stopping. Loops forever by default. */
  loops?: number
}

/**
 * Types `text` out character by character, pauses, deletes back down to
 * `reserve` characters, then loops — until `loops` type-outs have finished, at
 * which point the full text is left on screen. Runs on the client only and
 * renders the full text when the visitor prefers reduced motion.
 */
export function useTypewriter(text: () => string, options: TypewriterOptions = {}) {
  const { speed = 90, hold = 2200, reserve = 1, loops = Infinity } = options
  const reducedMotion = usePreferredReducedMotion()
  const typed = ref(text().slice(0, reserve))
  let deleting = false
  let completed = 0
  let timer: ReturnType<typeof setTimeout> | undefined

  function stop() {
    clearTimeout(timer)
  }

  function step() {
    const full = text()
    const floor = Math.min(reserve, full.length)

    if (deleting) {
      if (typed.value.length > floor) typed.value = typed.value.slice(0, -1)
      if (typed.value.length <= floor) deleting = false
      timer = setTimeout(step, speed)
      return
    }

    typed.value = full.slice(0, typed.value.length + 1)
    if (typed.value.length >= full.length) {
      if (++completed >= loops) return
      deleting = true
      timer = setTimeout(step, hold)
      return
    }

    timer = setTimeout(step, speed)
  }

  function reset() {
    stop()
    const full = text()
    deleting = false
    completed = 0
    typed.value = reducedMotion.value === 'reduce' ? full : full.slice(0, reserve)
    if (typed.value.length < full.length) timer = setTimeout(step, speed)
  }

  onMounted(reset)
  onBeforeUnmount(stop)
  watch([text, reducedMotion], reset)

  return typed
}
