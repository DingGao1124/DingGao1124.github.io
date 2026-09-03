<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'

import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
import NewsList from '@/components/home/NewsList.vue'
import ProfileHero from '@/components/home/ProfileHero.vue'
import PublicationEntry from '@/components/publications/PublicationEntry.vue'
import { Button } from '@/components/ui/button'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages, path } = useSiteLocale()
const { profile } = usePersonalData()

const m = computed(() => messages.value.home)
const selectedPublications = computed(() =>
  profile.value.publications.filter((publication) => publication.type === 'journal').slice(0, 3),
)
const profileTechGroups = computed(() =>
  profile.value.skillGroups.filter((group) => group.showInProfile),
)
const tocItems = computed(() => [
  { id: 'profile', label: m.value.aboutTitle },
  { id: 'news', label: m.value.newsTitle },
  { id: 'research-focus', label: m.value.focusTitle },
  { id: 'selected-publications', label: m.value.publicationsTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <ProfileHero
      id="profile"
      :name="profile.identity.name"
      :headline="profile.identity.headline"
      :eyebrow="m.aboutTitle"
      :current-position="profile.identity.currentPosition"
      :employer="profile.identity.employer"
      :location="profile.identity.location"
      :intro="m.intro"
      :email="profile.email"
      :email-label="messages.emailLabel"
      :cv-href="profile.cvHref"
      :cv-label="messages.downloadCvLabel"
      :avatar-src="profile.avatarSrc"
      :avatar-alt="profile.identity.avatarAlt"
      :systems-thread="m.systemsThread"
      :links="profile.profileLinks"
      :tech-title="m.techTitle"
      :tech-groups="profileTechGroups"
    />

    <Section id="news" :title="m.newsTitle" class="mt-10 md:mt-12">
      <NewsList :items="profile.news" />
    </Section>

    <Section id="research-focus" :title="m.focusTitle" class="mt-10">
      <div class="grid gap-x-12 gap-y-8 md:grid-cols-2">
        <article v-for="area in profile.researchAreas" :key="area.title" class="max-w-xl">
          <h3 class="text-xl font-medium">{{ area.title }}</h3>
          <p class="mt-2 leading-7 text-muted-foreground">
            {{ area.description }}
          </p>
        </article>
      </div>
      <Button as="a" variant="link" size="sm" class="mt-6" :href="path('/research/')">
        {{ m.viewAll }}
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Button>
    </Section>

    <Section id="selected-publications" :title="m.publicationsTitle" class="mt-10">
      <ol>
        <PublicationEntry
          v-for="publication in selectedPublications"
          :key="publication.id"
          :id="`home-publication-${publication.id}`"
          :publication="publication"
        />
      </ol>
      <Button as="a" variant="link" size="sm" class="mt-5" :href="path('/publications/')">
        {{ m.viewAll }}
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Button>
    </Section>
  </PageShell>
</template>
