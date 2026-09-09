<script setup lang="ts">
import { computed } from 'vue'

import AcademicMedia from '@/components/common/AcademicMedia.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import TimelineEntry from '@/components/common/TimelineEntry.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()

const projects = computed(() => messages.value.projects)
const tocItems = computed(() =>
  projects.value.content.items.map((project) => ({
    id: `project-${project.id}`,
    label: project.title,
  })),
)
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="projects.label.pageContentsLabel">
    <PageHeader
      :eyebrow="projects.label.eyebrow"
      :title="projects.label.title"
      :lede="projects.content.lede"
    />

    <Section :title="projects.label.systemsTitle" class="mt-4 md:mt-5">
      <TimelineEntry
        v-for="project in projects.content.items"
        :key="project.id"
        :id="`project-${project.id}`"
        :period="project.period"
        :title="project.title"
        :meta="`${project.role} · ${project.category}`"
        :summary="project.description"
        :highlights="project.highlights"
        :tags="project.tech"
        :links="project.links"
        collapsible
        :show-more-label="projects.label.showMoreLabel"
        :show-less-label="projects.label.showLessLabel"
      >
        <template #media>
          <AcademicMedia :media="project.media" />
        </template>
      </TimelineEntry>
    </Section>
  </PageShell>
</template>
