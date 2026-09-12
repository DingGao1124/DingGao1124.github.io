<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'

import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import ExperienceList from '@/pages/home/_components/ExperienceList.vue'
import NewsList from '@/pages/home/_components/NewsList.vue'
import ProfileHero from '@/pages/home/_components/ProfileHero.vue'
import PublicationList from '@/pages/home/_components/PublicationList.vue'
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
  { id: 'publications', label: home.value.label.publicationTitle },
  { id: 'experiences', label: home.value.label.experienceTitle },
  // { id: 'acknowledgements', label: home.value.label.acknowledgementsTitle },
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

    <Section id="news" :title="home.label.newsTitle" :position="'center'" class="mt-8 md:mt-10">
      <NewsList
        :items="home.content.news"
        :show-more-label="home.label.showMoreLabel"
        :show-less-label="home.label.showLessLabel"
      />
    </Section>

    <Section
      id="publications"
      :title="home.label.publicationTitle"
      :position="'center'"
      class="mt-8 md:mt-10"
    >
      <PublicationList :items="home.content.publications" />
      <div class="mx-auto mt-3 flex max-w-4xl">
        <Button
          as="a"
          variant="link"
          size="sm"
          class="group px-0 has-[>svg]:px-0"
          :href="path('/publications/')"
        >
          {{ home.label.viewAll }}
          <ArrowRight
            data-icon="inline-end"
            class="transition-transform duration-200 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </div>
    </Section>

    <Section
      id="experiences"
      :title="home.label.experienceTitle"
      :position="'center'"
      class="mt-8 md:mt-10"
    >
      <ExperienceList :items="home.content.experiences" />
      <div class="mx-auto mt-3 flex max-w-4xl">
        <Button
          as="a"
          variant="link"
          size="sm"
          class="group px-0 has-[>svg]:px-0"
          :href="path('/experience/')"
        >
          {{ home.label.viewAll }}
          <ArrowRight
            data-icon="inline-end"
            class="transition-transform duration-200 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </div>
    </Section>

    <!-- TODO: acknowledgements (Lazy Load) -->
    <!-- <Section
      id="acknowledgements"
      :title="home.label.acknowledgementsTitle"
      :position="'center'"
      class="mt-8 md:mt-10"
    /> -->
  </PageShell>
</template>
