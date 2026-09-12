<script setup lang="ts">
import { computed } from 'vue'

import AcademicMedia from '@/components/common/AcademicMedia.vue'
import RainbowButton from '@/components/common/animation/RainbowButton.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import ProjectsEntry from '@/components/projects/ProjectsEntry.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()

const projects = computed(() => messages.value.projects)
const tocItems = computed(() =>
  projects.value.content.sections.map((section) => ({
    id: `project-section-${section.id}`,
    label: section.title,
  })),
)
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="projects.label.pageContentsLabel">
    <PageHeader :eyebrow="projects.label.eyebrow" :title="projects.label.title" />

    <Section
      v-for="section in projects.content.sections"
      :id="`project-section-${section.id}`"
      :key="section.id"
      :title="section.title"
      class="mt-6 md:mt-8"
    >
      <template v-for="project in section.items" :key="project.id">
        <ProjectsEntry
          :id="`project-${project.id}`"
          :period="project.period"
          :title="project.title"
          :summary="project.description"
          :highlights="project.highlights"
          :tags="project.tech"
          :links="project.links"
          collapsible
          :collapsed-height="120"
          :show-more-label="projects.label.showMoreLabel"
          :show-less-label="projects.label.showLessLabel"
        >
          <template #media>
            <AcademicMedia :media="project.media" />
          </template>
        </ProjectsEntry>
      </template>
    </Section>

    <div class="mt-8 flex">
      <RainbowButton
        :href="projects.content.moreLink.href"
        :label="projects.content.moreLink.label"
      />
    </div>
  </PageShell>
</template>
