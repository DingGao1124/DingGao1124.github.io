<script setup lang="ts">
import { computed } from 'vue'
import { Moon, Sun } from '@lucide/vue'
import { useData } from 'vitepress'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useAnimatedThemeToggler } from '@/hooks/useThemeToggler'
import { useSiteLocale } from '@/hooks/useSiteLocale'
import { cn } from '@/lib/utils'

const { page } = useData()
const { locale, messages, path } = useSiteLocale()
const { isDark, toggle } = useAnimatedThemeToggler()

const homePath = computed(() => path('/'))
const relativePath = computed(() => page.value.relativePath ?? '')

const activeId = computed(() => {
  const p = relativePath.value
  const lower = p.replace(/^zh\//, '')
  const seg = lower.split('/')[0]
  return seg === 'index.md' ? 'profile' : seg || 'profile'
})

const alternate = computed(() => {
  const p = relativePath.value
  const root = p
    .replace(/^zh\//, '')
    .replace(/\.md$/, '')
    .replace(/index$/, '')
  if (locale.value === 'zh') {
    return { href: `/${root}`, label: 'EN', name: 'English' }
  }
  return { href: `/zh/${root}`, label: '中文', name: '简体中文' }
})
</script>

<template>
  <header class="sticky top-0 z-10 backdrop-blur-md">
    <div
      class="mx-auto flex max-w-content flex-wrap items-center gap-x-5 gap-y-3 px-5 py-3 md:px-8 md:py-4"
    >
      <a :href="homePath" class="font-serif text-lg font-medium tracking-tight">
        {{ messages.siteName }}
      </a>

      <nav
        class="order-3 w-full overflow-x-auto md:order-2 md:ml-auto md:w-auto"
        :aria-label="messages.primaryNavigationLabel"
      >
        <ul class="flex min-w-max items-center gap-5 pb-1 text-sm text-muted-foreground md:pb-0">
          <li v-for="item in messages.navigation" :key="item.id">
            <a
              :href="path(item.href)"
              :class="
                cn(
                  'transition-colors hover:text-foreground',
                  activeId === item.id && 'font-medium text-foreground',
                )
              "
              :aria-current="activeId === item.id ? 'page' : undefined"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="order-2 ml-auto flex items-center gap-2 md:order-3 md:ml-0">
        <Separator orientation="vertical" class="hidden h-4 md:block" />
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon-xs"
              :aria-label="isDark ? messages.switchToLightLabel : messages.switchToDarkLabel"
              @click="toggle($event)"
            >
              <Sun v-if="isDark" aria-hidden="true" />
              <Moon v-else aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {{ isDark ? messages.switchToLightLabel : messages.switchToDarkLabel }}
            </p>
          </TooltipContent>
        </Tooltip>
        <!-- #TODO: Hide chinese translation for now, translation need to be refined. -->
        <a
          v-show="locale === 'zh'"
          class="font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          :aria-label="`${messages.switchLanguageLabel}: ${alternate.name}`"
          :href="alternate.href"
          :lang="locale === 'zh' ? 'en' : 'zh-CN'"
        >
          {{ alternate.label }}
        </a>
      </div>
    </div>
    <Separator />
  </header>
</template>
