<script setup lang="ts">
import { computed } from "vue"
import { Content, useData } from "vitepress"

import SiteFooter from "@/components/site/SiteFooter.vue"
import SiteHeader from "@/components/site/SiteHeader.vue"
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { page } = useData()
const { messages, path } = useSiteLocale()
const homePath = computed(() => path("/"))
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <SiteHeader />
    <main>
      <div
        v-if="page.isNotFound"
        class="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center gap-3 px-5 md:px-8"
      >
        <p class="eyebrow">404</p>
        <h1 class="font-serif text-3xl font-medium">
          {{ messages.notFoundTitle }}
        </h1>
        <p class="text-muted-foreground">{{ messages.notFoundDescription }}</p>
        <a class="text-sm underline underline-offset-4" :href="homePath">
          {{ messages.backHomeLabel }}
        </a>
      </div>
      <Content v-else />
    </main>
    <SiteFooter />
  </div>
</template>
