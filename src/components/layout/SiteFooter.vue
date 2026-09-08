<script setup lang="ts">
import { useMutationObserver } from '@vueuse/core'
import { onMounted, useTemplateRef } from 'vue'
import { Separator } from '@/components/ui/separator'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const siteViews = useTemplateRef<HTMLSpanElement>('siteViews')

function formatSiteViews(): void {
  const element = siteViews.value
  const raw = element?.textContent?.trim() ?? ''
  if (element && /^\d+$/.test(raw)) element.textContent = Number(raw).toLocaleString('en-US')
}

onMounted(formatSiteViews)
useMutationObserver(siteViews, formatSiteViews, {
  childList: true,
  characterData: true,
  subtree: true,
})
</script>

<template>
  <footer class="text-left">
    <Separator />
    <div class="mx-auto flex max-w-content items-center gap-3 px-5 py-8 md:px-6">
      <p class="text-sm text-muted-foreground">{{ messages.footer }}</p>
      <p
        id="busuanzi_container_site_pv"
        class="inline-flex items-center gap-1 text-xs text-muted-foreground"
      >
        <!-- busuanzi_value_site_pv -->
        <!-- busuanzi_value_site_uv -->
        <!-- busuanzi_value_page_pv -->
        {{ messages.viewsLabel }}:
        <span id="busuanzi_value_site_pv" ref="siteViews" class="tabular-nums" />
      </p>
    </div>
  </footer>
</template>
