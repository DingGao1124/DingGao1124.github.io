import { computed } from 'vue'

import { education } from '@/data/education'
import { experiences } from '@/data/experiences'
import { news } from '@/data/news'
import {
  avatarSrc,
  cvHref,
  email,
  honors,
  identity,
  phone,
  phoneHref,
  profileLinks,
  summaryTags,
} from '@/data/profile'
import { projects } from '@/data/projects'
import { publications } from '@/data/publications'
import { researchAreas, researchExperiences } from '@/data/research'
import { skillGroups } from '@/data/skills'
import { useSiteLocale } from '@/hooks/useSiteLocale'

export function usePersonalData() {
  const { locale } = useSiteLocale()
  const profile = computed(() => ({
    cvHref,
    email,
    phone,
    phoneHref,
    avatarSrc,
    profileLinks,
    identity: identity[locale.value],
    news: news[locale.value],
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
