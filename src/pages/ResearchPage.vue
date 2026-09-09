<script setup lang="ts">
import { computed } from 'vue'

import AcademicMedia from '@/components/common/AcademicMedia.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import TimelineEntry from '@/components/common/TimelineEntry.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()

const research = computed(() => messages.value.research)
const tocItems = computed(() => [
  { id: 'research-areas', label: research.value.label.areasTitle },
  { id: 'research-experience', label: research.value.label.experienceTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="research.label.pageContentsLabel">
    <PageHeader
      :eyebrow="research.label.eyebrow"
      :title="research.label.title"
      :lede="research.content.lede"
    />

    <Section id="research-areas" :title="research.label.areasTitle" class="mt-4 md:mt-5">
      <div class="grid gap-x-10 gap-y-6 md:grid-cols-2">
        <article v-for="area in research.content.areas" :key="area.title">
          <h3 class="text-xl font-medium">{{ area.title }}</h3>
          <p class="mt-2 max-w-xl leading-7 text-muted-foreground">
            {{ area.description }}
          </p>
        </article>
      </div>
    </Section>

    <Section id="research-experience" :title="research.label.experienceTitle" class="mt-10">
      <TimelineEntry
        v-for="experience in research.content.experiences"
        :key="experience.id"
        :period="experience.period"
        :title="experience.role"
        :meta="`${experience.organization} · ${experience.location} · ${research.label.advisorLabel}: ${experience.advisor}`"
        :summary="experience.summary"
        :highlights="experience.highlights"
        collapsible
        :show-more-label="research.label.showMoreLabel"
        :show-less-label="research.label.showLessLabel"
      >
        <template #media>
          <AcademicMedia :media="experience.media" />
        </template>
      </TimelineEntry>
    </Section>
  </PageShell>
</template>
