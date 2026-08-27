<script setup lang="ts">
import { computed } from "vue"

import ContentEntry from "@/components/site/ContentEntry.vue"
import PageHeader from "@/components/site/PageHeader.vue"
import Section from "@/components/site/Section.vue"
import { useProfileData } from "@/hooks/useProfileData"
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { messages } = useSiteLocale()
const { profile } = useProfileData()

const m = computed(() => messages.value.experience)
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section :title="m.experienceTitle" class="mt-16">
      <ul class="divide-y divide-border border-y border-border">
        <li
          v-for="experience in profile.experiences"
          :key="experience.organization"
        >
          <ContentEntry
            :number="experience.period"
            :title="experience.organization"
            :meta="experience.role"
            :content="experience.summary"
            number-column-class="sm:grid-cols-[10rem_1fr]"
          />
        </li>
      </ul>
    </Section>

    <Section :title="m.educationTitle" class="mt-16">
      <ul class="divide-y divide-border border-y border-border">
        <li v-for="item in profile.education" :key="item.school">
          <ContentEntry
            :number="item.period"
            :title="item.school"
            :meta="[item.degree, item.location].filter(Boolean).join(' · ')"
            number-column-class="sm:grid-cols-[10rem_1fr]"
          />
        </li>
      </ul>
    </Section>

    <Section :title="m.honorsTitle" class="mt-16">
      <ul class="divide-y divide-border border-y border-border">
        <li
          v-for="item in profile.honors"
          :key="item"
          class="flex gap-3 py-4 text-muted-foreground"
        >
          <span class="mt-2.5 h-px w-3 shrink-0 bg-border" />
          <span class="measure">{{ item }}</span>
        </li>
      </ul>
    </Section>
  </div>
</template>
