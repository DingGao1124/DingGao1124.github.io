<script setup lang="ts">
import { computed } from 'vue'

import ProjectMediaGrid from '@/components/projects/ProjectMediaGrid.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
import TimelineEntry from '@/components/common/TimelineEntry.vue'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const { profile } = usePersonalData()

const m = computed(() => messages.value.projects)
const tocItems = computed(() =>
  profile.value.projects.map((project) => ({
    id: `project-${project.id}`,
    label: project.title,
  })),
)
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section class="mt-8 md:mt-10">
      <TimelineEntry
        v-for="project in profile.projects"
        :key="project.id"
        :id="`project-${project.id}`"
        :period="project.period"
        :title="project.title"
        :meta="`${project.role} · ${project.category}`"
        :summary="project.description"
        :highlights="project.highlights"
        :tags="project.tech"
        :links="project.links"
      >
        <template #media>
          <ProjectMediaGrid
            :items="project.media"
            :featured="project.featured"
            :placeholder-label="m.placeholderLabel"
          />
        </template>
      </TimelineEntry>
    </Section>
  </PageShell>
</template>
