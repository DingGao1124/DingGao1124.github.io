<script setup lang="ts">
import { computed } from "vue"
import { Content, useData } from "vitepress"

import { Separator } from "@/components/ui/separator"
import { useSiteLocale } from "@/composables/useSiteLocale"

const { page } = useData()
const { locale, messages } = useSiteLocale()

const homePath = computed(() => locale.value === "zh" ? "/zh/" : "/")
const alternateLocale = computed(() => locale.value === "zh"
  ? { href: "/", label: "EN", name: "English" }
  : { href: "/zh/", label: "中文", name: "简体中文" })
const navigation = computed(() => messages.value.navigation.map((item) => ({
  ...item,
  href: `${homePath.value}#${item.id}`,
})))
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="sticky top-0 bg-background/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <a :href="`${homePath}#profile`" class="font-heading text-sm font-medium">
          {{ messages.siteName }}
        </a>
        <div class="flex flex-wrap items-center gap-4">
          <nav :aria-label="messages.primaryNavigationLabel">
            <ul class="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <li v-for="item in navigation" :key="item.href">
                <a class="transition-colors hover:text-foreground" :href="item.href">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </nav>
          <a
            class="border-l pl-4 text-sm font-medium underline-offset-4 hover:underline"
            :aria-label="`${messages.switchLanguageLabel}: ${alternateLocale.name}`"
            :href="alternateLocale.href"
            :lang="locale === 'zh' ? 'en' : 'zh-CN'"
          >
            {{ alternateLocale.label }}
          </a>
        </div>
      </div>
      <Separator />
    </header>

    <main>
      <div v-if="page.isNotFound" class="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center gap-3 px-5 md:px-8">
        <p class="text-sm text-muted-foreground">404</p>
        <h1 class="font-heading text-3xl font-semibold">{{ messages.notFoundTitle }}</h1>
        <a class="text-sm underline underline-offset-4" :href="homePath">
          {{ messages.backHomeLabel }}
        </a>
      </div>
      <Content v-else />
    </main>

    <footer class="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:px-8">
      <Separator />
      <p>{{ messages.footer }}</p>
    </footer>
  </div>
</template>
