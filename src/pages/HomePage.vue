<script setup lang="ts">
import { computed } from "vue"

import DefinitionList from "@/components/site/DefinitionList.vue"
import PageHeader from "@/components/site/PageHeader.vue"
import Section from "@/components/site/Section.vue"
import Tag from "@/components/site/Tag.vue"
import { useProfileData } from "@/hooks/useProfileData"
import { useSiteLocale } from "@/hooks/useSiteLocale"
import type { Project } from "@/data/types"

const { messages, path } = useSiteLocale()
const { profile } = useProfileData()

const m = computed(() => messages.value.home)
const selectedProjects = computed(() => profile.value.projects.slice(0, 3))
const recentExperiences = computed(() => profile.value.experiences.slice(0, 3))

function projectMeta(project: Project) {
  return [project.period, project.role].filter(Boolean).join(" · ")
}
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
    <PageHeader :eyebrow="m.eyebrow" :title="m.name" :lede="m.lede" />

    <Section :title="m.aboutTitle" class="mt-16">
      <div class="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <div class="measure">
          <div class="space-y-4">
            <p v-for="(paragraph, index) in m.aboutBody" :key="index" class="text-lg leading-8 text-card-foreground">
              {{ paragraph }}
            </p>
          </div>
          <div class="mt-7 flex flex-wrap gap-2">
            <Tag v-for="tag in profile.summaryTags" :key="tag" :label="tag" />
          </div>
        </div>
        <div class="flex flex-col">
          <DefinitionList :items="m.facts" />
        </div>
      </div>
    </Section>

    <Section :title="m.researchTitle" :description="m.researchDescription" class="mt-16">
      <ul class="divide-y divide-border border-y border-border">
        <li v-for="area in profile.researchAreas" :key="area.title" class="py-5">
          <div class="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-6">
            <div>
              <h3 class="font-serif text-xl font-medium">{{ area.title }}</h3>
              <p class="mt-2 measure text-muted-foreground">{{ area.description }}</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="mt-6">
        <a class="link text-sm" :href="path('/research/')">{{ m.viewAll }} →</a>
      </div>
    </Section>

    <Section :title="m.selectedWorkTitle" :description="m.selectedWorkDescription" class="mt-16">
      <ol class="divide-y divide-border border-y border-border">
        <li
          v-for="(project, index) in selectedProjects"
          :key="project.title"
          class="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-6"
        >
          <span class="font-mono text-xs leading-7 text-muted-foreground">{{ index + 1 }}</span>
          <div>
            <h3 class="font-serif text-lg font-medium">{{ project.title }}</h3>
            <p class="mt-1 font-mono text-xs text-muted-foreground">{{ projectMeta(project) }}</p>
            <p class="mt-3 measure text-muted-foreground">{{ project.description }}</p>
          </div>
        </li>
      </ol>
      <div class="mt-6">
        <a class="link text-sm" :href="path('/projects/')">{{ m.viewAll }} →</a>
      </div>
    </Section>

    <Section :title="m.recentTitle" :description="m.recentDescription" class="mt-16">
      <ul class="divide-y divide-border border-y border-border">
        <li
          v-for="experience in recentExperiences"
          :key="experience.organization"
          class="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
        >
          <span class="font-mono text-xs leading-7 text-muted-foreground">{{ experience.period }}</span>
          <div>
            <h3 class="font-medium">{{ experience.organization }}</h3>
            <p class="text-sm text-muted-foreground">{{ experience.role }}</p>
            <p class="mt-2 measure text-sm text-muted-foreground">{{ experience.summary }}</p>
          </div>
        </li>
      </ul>
      <div class="mt-6">
        <a class="link text-sm" :href="path('/experience/')">{{ m.viewAll }} →</a>
      </div>
    </Section>
  </div>
</template>
