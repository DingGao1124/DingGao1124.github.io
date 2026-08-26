<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"

import { useSiteLocale } from "@/hooks/useSiteLocale"
import { useTheme } from "@/hooks/useTheme"

const { page } = useData()
const { locale, messages, path } = useSiteLocale()
const { isDark, toggle } = useTheme()

const homePath = computed(() => path("/"))
const relativePath = computed(() => page.value.relativePath ?? "")

const activeId = computed(() => {
  const p = relativePath.value
  const lower = p.replace(/^zh\//, "")
  const seg = lower.split("/")[0]
  return seg === "index.md" ? "profile" : seg || "profile"
})

const alternate = computed(() => {
  const p = relativePath.value
  if (locale.value === "zh") {
    const enPath = p.replace(/^zh\//, "").replace(/index\.md$/, "")
    return { href: `/${enPath}`, label: "EN", name: "English" }
  }
  const zhPath = p.replace(/^zh\//, "").replace(/index\.md$/, "")
  return { href: `/zh/${zhPath}`, label: "中文", name: "简体中文" }
})
</script>

<template>
  <header class="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 md:px-8">
      <a :href="homePath" class="font-serif text-lg font-medium tracking-tight">
        {{ messages.siteName }}
      </a>

      <nav class="ml-auto" :aria-label="messages.primaryNavigationLabel">
        <ul class="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
          <li v-for="item in messages.navigation" :key="item.id">
            <a
              :href="path(item.href)"
              class="transition-colors hover:text-foreground"
              :class="activeId === item.id ? 'font-medium text-foreground' : ''"
              :aria-current="activeId === item.id ? 'page' : undefined"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="hidden h-4 w-px bg-border md:block" />
      <button
        type="button"
        class="text-muted-foreground transition-colors hover:text-foreground"
        :aria-label="isDark ? messages.switchToLightLabel : messages.switchToDarkLabel"
        @click="toggle"
      >
        <svg
          v-if="isDark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
      <a
        class="font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
        :aria-label="`${messages.switchLanguageLabel}: ${alternate.name}`"
        :href="alternate.href"
        :lang="locale === 'zh' ? 'en' : 'zh-CN'"
      >
        {{ alternate.label }}
      </a>
    </div>
  </header>
</template>
