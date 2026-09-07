<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'

import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import NewsList from '@/components/home/NewsList.vue'
import ProfileHero from '@/components/home/ProfileHero.vue'
import PublicationEntry from '@/components/publications/PublicationEntry.vue'
import { Button } from '@/components/ui/button'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages, path } = useSiteLocale()

const home = computed(() => messages.value.home)
const profileTechGroups = computed(() =>
  home.value.techGroups.filter((group) => group.showInProfile),
)
const tocItems = computed(() => [
  { id: 'profile', label: home.value.label.aboutTitle },
  { id: 'news', label: home.value.label.newsTitle },
  { id: 'research-focus', label: home.value.label.focusTitle },
  { id: 'selected-publications', label: home.value.label.publicationsTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="home.label.pageContentsLabel">
    <ProfileHero
      id="profile"
      :name="home.identity.name"
      :headline="home.identity.headline"
      :eyebrow="home.label.eyebrow"
      :title="home.label.title"
      :current-position="home.identity.currentPosition"
      :employer="home.identity.employer"
      :location="home.identity.location"
      :intro="home.identity.intro"
      :phone-href="home.phoneHref"
      :phone-label="home.label.phoneLabel"
      :email="home.email"
      :email-label="home.label.emailLabel"
      :cv-href="home.cvHref"
      :cv-label="home.label.viewCvLabel"
      :avatar-src="home.avatarSrc"
      :avatar-alt="home.identity.avatarAlt"
      :research-keywords="home.identity.researchKeywords"
      :links="home.profileLinks"
      :skill-title="home.label.techTitle"
      :skill-items="profileTechGroups"
    />

    <Section id="news" :title="home.label.newsTitle" :position="'center'" class="mt-5 md:mt-6">
      <NewsList :items="home.content.news" />
    </Section>
  </PageShell>
</template>
