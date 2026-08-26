<script setup lang="ts">
import { computed } from "vue"

import * as profileEn from "@/data/profile.en"
import * as profileZh from "@/data/profile"

import ContactCard from "@/components/home/ContactCard.vue"
import ExperienceCard from "@/components/home/ExperienceCard.vue"
import InfoListCard from "@/components/home/InfoListCard.vue"
import ProfileHero from "@/components/home/ProfileHero.vue"
import ProjectCard from "@/components/home/ProjectCard.vue"
import PublicationCard from "@/components/home/PublicationCard.vue"
import ResearchAreaCard from "@/components/home/ResearchAreaCard.vue"
import Section from "@/components/home/Section.vue"
import { useSiteLocale } from "@/composables/useSiteLocale"

const { locale, messages } = useSiteLocale()
const profileByLocale = { en: profileEn, zh: profileZh }
const profile = computed(() => profileByLocale[locale.value])
</script>

<template>
  <div class="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-12 md:px-8 md:py-16">
    <ProfileHero :links="profile.profileLinks" :tags="profile.summaryTags" />

    <Section
      id="research"
      :title="messages.sections.research.title"
      :description="messages.sections.research.description"
    >
      <div class="grid gap-4 md:grid-cols-2">
        <ResearchAreaCard
          v-for="area in profile.researchAreas"
          :key="area.title"
          :area="area"
        />
      </div>
    </Section>

    <Section
      id="projects"
      :title="messages.sections.projects.title"
      :description="messages.sections.projects.description"
    >
      <div class="grid gap-4 lg:grid-cols-2">
        <ProjectCard
          v-for="project in profile.projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </Section>

    <Section id="publications" :title="messages.sections.publications.title">
      <div class="grid gap-4">
        <PublicationCard
          v-for="publication in profile.publications"
          :key="publication.title"
          :publication="publication"
        />
      </div>
    </Section>

    <Section
      id="experience"
      :title="messages.sections.experience.title"
      :description="messages.sections.experience.description"
    >
      <div class="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <div class="flex flex-col gap-4">
          <ExperienceCard
            v-for="experience in profile.experiences"
            :key="`${experience.organization}-${experience.period}`"
            :experience="experience"
          />
        </div>
        <div class="flex flex-col gap-4">
          <InfoListCard
            :title="messages.sections.education.title"
            :description="messages.sections.education.description"
            :items="profile.education"
          />
          <InfoListCard
            :title="messages.sections.honors.title"
            :description="messages.sections.honors.description"
            :items="profile.honors"
          />
        </div>
      </div>
    </Section>

    <Section id="contact" :title="messages.sections.contact.title">
      <ContactCard :links="profile.profileLinks" />
    </Section>
  </div>
</template>
