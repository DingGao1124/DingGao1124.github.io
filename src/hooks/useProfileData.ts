import { computed } from "vue"

import * as profileEn from "@/data/profile.en"
import * as profileZh from "@/data/profile"
import { useSiteLocale } from "@/hooks/useSiteLocale"

export function useProfileData() {
  const { locale } = useSiteLocale()
  const profile = computed(() => (locale.value === "zh" ? profileZh : profileEn))

  return { profile }
}
