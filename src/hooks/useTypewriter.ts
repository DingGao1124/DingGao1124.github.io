import { ref, watchEffect } from 'vue'

export function useTypewriter(text: () => string, speed = 60) {
  const typed = ref('')
  watchEffect((onCleanup) => {
    const full = text()
    typed.value = ''
    let i = 0
    const timer = setInterval(() => {
      typed.value = full.slice(0, ++i)
      if (i >= full.length) clearInterval(timer)
    }, speed)
    onCleanup(() => clearInterval(timer))
  })
  return typed
}
