<script setup lang="ts">
import { computed } from "vue"

import ProjectEntry from "@/components/projects/ProjectEntry.vue"
import PageHeader from "@/components/site/PageHeader.vue"
import Section from "@/components/site/Section.vue"
import { useProfileData } from "@/hooks/useProfileData"
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { messages } = useSiteLocale()
const { profile } = useProfileData()

const m = computed(() => messages.value.projects)
const groups = computed(() =>
  m.value.order
    .map((category) => ({
      category,
      projects: profile.value.projects.filter((project) => project.category === category),
    }))
    .filter((group) => group.projects.length > 0),
)
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <p v-if="m.note" class="mt-5 measure text-sm text-muted-foreground">{{ m.note }}</p>

    <Section
      v-for="group in groups"
      :key="group.category"
      :title="group.category"
      class="mt-16"
    >
      <div class="divide-y divide-border border-y border-border">
        <ProjectEntry v-for="project in group.projects" :key="project.title" :project="project" />
      </div>
    </Section>
  </div>
</template>
