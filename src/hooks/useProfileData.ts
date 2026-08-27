import { computed } from "vue"

import { education } from "@/data/education"
import { experiences } from "@/data/experiences"
import { email, honors, profileLinks, summaryTags } from "@/data/profile"
import { projects } from "@/data/projects"
import { publications } from "@/data/publications"
import { researchAreas } from "@/data/research"
import { useSiteLocale } from "@/hooks/useSiteLocale"

export function useProfileData() {
  const { locale } = useSiteLocale()
  const profile = computed(() => ({
    email,
    profileLinks,
    summaryTags,
    honors: honors[locale.value],
    researchAreas: researchAreas[locale.value],
    projects: projects[locale.value],
    publications: publications[locale.value],
    experiences: experiences[locale.value],
    education: education[locale.value],
  }))

  return { profile }
}
