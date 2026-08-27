import { computed } from "vue"

import { education } from "@/data/education"
import { experiences } from "@/data/experiences"
import {
  avatarSrc,
  cvHref,
  email,
  honors,
  identity,
  profileLinks,
  skillLevels,
  summaryTags,
} from "@/data/profile"
import { projects } from "@/data/projects"
import { publications } from "@/data/publications"
import { researchAreas, researchExperiences } from "@/data/research"
import { skillGroups } from "@/data/skills"
import { useSiteLocale } from "@/hooks/useSiteLocale"

export function useProfileData() {
  const { locale } = useSiteLocale()
  const profile = computed(() => ({
    cvHref,
    email,
    avatarSrc,
    profileLinks,
    skillLevels,
    identity: identity[locale.value],
    summaryTags: summaryTags[locale.value],
    honors: honors[locale.value],
    researchAreas: researchAreas[locale.value],
    researchExperiences: researchExperiences[locale.value],
    projects: projects[locale.value],
    publications: publications[locale.value],
    experiences: experiences[locale.value],
    education: education[locale.value],
    skillGroups: skillGroups[locale.value],
  }))

  return { profile }
}
