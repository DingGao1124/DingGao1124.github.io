import { computed } from 'vue'
import { useData } from 'vitepress'

import { siteInfos } from '@/i18n/'

export function useSiteLocale() {
  const { lang } = useData()
  const locale = computed<SiteLocale>(() => (lang.value.startsWith('zh') ? 'zh' : 'en'))
  const messages = computed(() => siteInfos[locale.value])
  const path = (route: string) => (locale.value === 'zh' ? `/zh${route}` : route)

  return { locale, messages, path }
}
