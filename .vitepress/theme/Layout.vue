<script setup lang="ts">
import { computed } from 'vue'
import { Content, useData } from 'vitepress'

import SiteFooter from '@/components/site/SiteFooter.vue'
import SiteHeader from '@/components/site/SiteHeader.vue'
import BackToTop from '@/components/site/BackToTop.vue'
import { Button } from '@/components/ui/button'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ArrowLeft } from '@lucide/vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { page } = useData()
const { messages, path } = useSiteLocale()
const homePath = computed(() => path('/'))

// Distinguish individual blog posts (markdown content) from the blog index and
// other section pages, so only post content gets the prose typography.
const isBlogPost = computed(() => {
  const p = page.value.relativePath ?? ''
  const segments = p.replace(/^zh\//, '').split('/')
  return segments[0] === 'blogs' && segments[1]?.endsWith('.md') && segments[1] !== 'index.md'
})

// Frontmatter dates are parsed as Date objects, then serialized to ISO strings
// for the client. Render either form as YYYY-MM-DD.
function formatDate(value: unknown) {
  if (!value) return ''
  if (value instanceof Date) {
    const y = value.getUTCFullYear()
    const m = String(value.getUTCMonth() + 1).padStart(2, '0')
    const d = String(value.getUTCDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/)
  return match ? `${match[1]}-${match[2]}-${match[3]}` : String(value)
}
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
        <template v-if="page.isNotFound">
          <div
            class="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-3 px-5 md:px-8"
          >
            <p class="eyebrow">404</p>
            <h1 class="font-serif text-3xl font-medium">
              {{ messages.notFoundTitle }}
            </h1>
            <p class="text-muted-foreground">
              {{ messages.notFoundDescription }}
            </p>
            <Button as="a" variant="link" size="sm" :href="homePath" class="group">
              <ArrowLeft
                data-icon="inline-start"
                aria-hidden="true"
                class="transition-transform duration-200 group-hover:-translate-x-1"
              />
              {{ messages.backHomeLabel }}
            </Button>
          </div>
        </template>
        <template v-else>
          <article v-if="isBlogPost" class="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
            <header v-if="page.frontmatter.title" class="mb-10">
              <h1
                class="font-serif text-[clamp(2rem,5vw,3rem)] leading-[1.05] font-medium tracking-[-0.02em]"
              >
                {{ page.frontmatter.title }}
              </h1>
              <p
                v-if="page.frontmatter.date"
                class="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
              >
                {{ formatDate(page.frontmatter.date) }}
              </p>
            </header>
            <div class="prose">
              <Content />
            </div>
          </article>
          <Content v-else />
        </template>
      </main>
      <BackToTop :label="messages.returnToTopLabel" />
      <SiteFooter />
    </div>
  </TooltipProvider>
</template>
