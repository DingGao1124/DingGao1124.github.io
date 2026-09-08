<script setup lang="ts">
import { useMutationObserver } from '@vueuse/core'
import { onMounted, useTemplateRef } from 'vue'
import { Separator } from '@/components/ui/separator'
import { LoaderIcon } from '@lucide/vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const siteViews = useTemplateRef<HTMLSpanElement>('siteViews')

function formatSiteViews(): void {
  const element = siteViews.value
  const raw = element?.textContent?.trim() ?? ''
  if (!element || !/^\d+$/.test(raw)) return

  const formatted = Number(raw).toLocaleString('en-US')
  if (formatted !== raw) element.textContent = formatted
}

onMounted(() => {
  formatSiteViews()
  if (document.getElementById('busuanzi-script')) return

  const script = document.createElement('script')
  script.id = 'busuanzi-script'
  script.src = 'https://cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js'
  script.async = true
  document.head.append(script)
})

useMutationObserver(siteViews, formatSiteViews, {
  childList: true,
  characterData: true,
  subtree: true,
})
</script>

<template>
  <footer class="text-left">
    <Separator />
    <div
      class="mx-auto flex max-w-content flex-wrap items-baseline gap-x-3 gap-y-2 px-5 py-8 md:px-6"
    >
      <p class="text-sm text-muted-foreground">{{ messages.footer }}</p>
      <p
        class="inline-flex flex-wrap items-center gap-1 text-xs leading-none text-muted-foreground"
      >
        <!-- busuanzi_site_pv -->
        <!-- busuanzi_site_uv -->
        <!-- busuanzi_page_pv -->
        <!-- busuanzi_page_uv -->
        <!-- busuanzi_today_pv -->
        <!-- busuanzi_today_uv -->
        <span class="inline-flex items-center">
          {{ messages.viewsLabel }}:
          <span
            id="busuanzi_site_pv"
            ref="siteViews"
            class="ml-1 inline-flex items-center gap-1 tabular-nums"
          >
            <LoaderIcon class="size-3 animate-spin" />{{ messages.loading }} </span
          >{{ '.' }}
        </span>
        <span>{{ '( ' }}Powered by</span>
        <a
          href="https://www.busuanzi.cc/count.php?search=dinggao1124.github.io"
          title="不蒜子统计"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex"
        >
          <img
            width="65"
            height="20"
            src="https://www.busuanzi.cc/static/images/bsz-tongji.png"
            alt="不蒜子统计"
            loading="lazy"
            decoding="async"
          /> </a
        >{{ ')' }}
      </p>
    </div>
  </footer>
</template>
