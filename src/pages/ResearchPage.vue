<script setup lang="ts">
import { computed } from 'vue'

import AcademicMedia from '@/components/common/AcademicMedia.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import TimelineEntry from '@/components/common/TimelineEntry.vue'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const { profile } = usePersonalData()

const m = computed(() => messages.value.research)
const tocItems = computed(() => [
  { id: 'research-areas', label: m.value.areasTitle },
  { id: 'research-experience', label: m.value.experienceTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section id="research-areas" :title="m.areasTitle" class="mt-8 md:mt-10">
      <div class="grid gap-x-10 gap-y-6 md:grid-cols-2">
        <article v-for="area in profile.researchAreas" :key="area.title">
          <h3 class="text-xl font-medium">{{ area.title }}</h3>
          <p class="mt-2 max-w-xl leading-7 text-muted-foreground">
            {{ area.description }}
          </p>
        </article>
      </div>
    </Section>

    <Section id="research-experience" :title="m.experienceTitle" class="mt-10">
      <TimelineEntry
        v-for="experience in profile.researchExperiences"
        :key="experience.id"
        :period="experience.period"
        :title="experience.role"
        :meta="`${experience.organization} · ${experience.location} · ${m.advisorLabel}: ${experience.advisor}`"
        :summary="experience.summary"
        :highlights="experience.highlights"
        collapsible
        :show-more-label="messages.showMoreLabel"
        :show-less-label="messages.showLessLabel"
      >
        <template #media>
          <AcademicMedia :media="experience.media" />
        </template>
      </TimelineEntry>
    </Section>
  </PageShell>
</template>
