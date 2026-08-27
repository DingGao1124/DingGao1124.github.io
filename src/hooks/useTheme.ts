import { onMounted, readonly, shallowRef } from "vue"

const STORAGE_KEY = "theme"

const isDark = shallowRef(false)
let initialized = false

function apply(dark: boolean) {
  isDark.value = dark
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", dark)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#11161a" : "#f6f7f8")
  }
}

function resolve() {
  if (typeof window === "undefined" || initialized) return
  initialized = true
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "dark" || stored === "light") {
    apply(stored === "dark")
  } else {
    apply(window.matchMedia("(prefers-color-scheme: dark)").matches)
  }
}

export function useTheme() {
  // Defer to a macrotask so hydration (which renders the light default) fully
  // completes before the stored/system theme takes over. This avoids a
  // hydration mismatch from the toggle button mutating right after mount.
  onMounted(() => {
    if (typeof window !== "undefined") window.setTimeout(resolve, 0)
  })
  const toggle = () => {
    const next = !isDark.value
    apply(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light")
    }
  }
  return { isDark: readonly(isDark), toggle }
}
