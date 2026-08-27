<script setup lang="ts">
import { computed } from "vue"
import { Content, useData } from "vitepress"

import SiteFooter from "@/components/site/SiteFooter.vue"
import SiteHeader from "@/components/site/SiteHeader.vue"
import BackToTop from "@/components/site/BackToTop.vue"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { page } = useData()
const { messages, path } = useSiteLocale()
const homePath = computed(() => path("/"))
</script>

<template>
  <TooltipProvider :delay-duration="300">
    <div class="min-h-screen bg-background text-foreground">
      <a
        class="fixed top-3 left-3 z-50 -translate-y-20 rounded-sm bg-background px-3 py-2 text-sm shadow-sm transition-transform focus-visible:translate-y-0"
        href="#main-content"
      >
        {{ messages.skipToContentLabel }}
      </a>
      <SiteHeader />
      <main id="main-content" tabindex="-1">
        <div
          v-if="page.isNotFound"
          class="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-3 px-5 md:px-8"
        >
          <p class="eyebrow">404</p>
          <h1 class="font-serif text-3xl font-medium">
            {{ messages.notFoundTitle }}
          </h1>
          <p class="text-muted-foreground">
            {{ messages.notFoundDescription }}
          </p>
          <Button as="a" variant="link" size="sm" :href="homePath">
            {{ messages.backHomeLabel }}
          </Button>
        </div>
        <Content v-else />
      </main>
      <BackToTop :label="messages.returnToTopLabel" />
      <SiteFooter />
    </div>
  </TooltipProvider>
</template>
