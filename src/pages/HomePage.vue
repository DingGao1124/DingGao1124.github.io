<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'

import ProfileHero from '@/components/site/ProfileHero.vue'
import PageShell from '@/components/site/PageShell.vue'
import Section from '@/components/site/Section.vue'
import TimelineEntry from '@/components/site/TimelineEntry.vue'
import { Button } from '@/components/ui/button'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages, path } = useSiteLocale()
const { profile } = usePersonalData()

const m = computed(() => messages.value.home)
const selectedProjects = computed(() => profile.value.projects.slice(0, 2))
const recentExperiences = computed(() => profile.value.experiences.slice(0, 3))
const tocItems = computed(() => [
  {
    id: 'profile',
    label: messages.value.navigation[0]?.label ?? 'Profile',
  },
  { id: 'focus', label: m.value.focusTitle },
  { id: 'selected-work', label: m.value.selectedWorkTitle },
  { id: 'recent-experience', label: m.value.recentTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <ProfileHero
      id="profile"
      :name="profile.identity.name"
      :headline="profile.identity.headline"
      :credential="profile.identity.credential"
      :location="profile.identity.location"
      :intro="m.intro"
      :email="profile.email"
      :email-label="messages.emailLabel"
      :cv-href="profile.cvHref"
      :cv-label="messages.downloadCvLabel"
      :avatar-src="profile.avatarSrc"
      :avatar-alt="profile.identity.avatarAlt"
      :skills-title="m.skillsTitle"
      :skills="profile.skillLevels"
      :links="profile.profileLinks"
    />

    <Section
      id="focus"
      :title="m.focusTitle"
      :description="m.focusDescription"
      class="mt-20 md:mt-28"
    >
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

    <Section
      id="selected-work"
      :title="m.selectedWorkTitle"
      :description="m.selectedWorkDescription"
      class="mt-20"
    >
      <TimelineEntry
        v-for="project in selectedProjects"
        :key="project.id"
        :period="project.period"
        :title="project.title"
        :meta="`${project.role} · ${project.category}`"
        :summary="project.description"
        :tags="project.tech"
        :links="project.links"
      />
      <Button as="a" variant="link" size="sm" class="mt-5" :href="path('/projects/')">
        {{ m.viewAll }}
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Button>
    </Section>

    <Section
      id="recent-experience"
      :title="m.recentTitle"
      :description="m.recentDescription"
      class="mt-20"
    >
      <TimelineEntry
        v-for="experience in recentExperiences"
        :key="experience.id"
        :period="experience.period"
        :title="experience.organization"
        :meta="`${experience.role} · ${experience.location}`"
        :summary="experience.summary"
      />
      <Button as="a" variant="link" size="sm" class="mt-5" :href="path('/experience/')">
        {{ m.viewAll }}
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Button>
    </Section>
  </PageShell>
</template>
