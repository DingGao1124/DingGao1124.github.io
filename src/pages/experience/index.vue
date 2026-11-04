<script setup lang="ts">
import { computed } from 'vue'

import { Briefcase, Building2, GraduationCap, MapPin, UserRound } from '@lucide/vue'

import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import ExperienceEntry from '@/pages/experience/_components/ExperienceEntry.vue'
import CompactRecordList from '@/pages/experience/_components/CompactRecordList.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()

const experience = computed(() => messages.value.experience)
const tocItems = computed(() => [
  { id: 'research-experience', label: experience.value.label.researchTitle },
  { id: 'professional-experience', label: experience.value.label.professionalTitle },
  { id: 'education', label: experience.value.label.educationTitle },
  { id: 'honors', label: experience.value.label.honorsTitle },
])

function educationDetails(education: (typeof experience.value.content.education)[number]) {
  const lines = [`${experience.value.label.gpaLabel}: ${education.gpa}`]
  if (education.rank) {
    lines.push(`${experience.value.label.rankLabel}: ${education.rank}`)
  }
  if (education.thesis) {
    lines.push(`${experience.value.label.thesisLabel}: ${education.thesis}`)
  }
  return lines
}
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="experience.label.eyebrow" :title="experience.label.title" />

    <!-- Research Experience -->
    <Section id="research-experience" :title="experience.label.researchTitle" class="mt-6 md:mt-8">
      <ExperienceEntry
        v-for="item in experience.content.research"
        :key="item.id"
        :period="item.period"
        :title="item.role"
        :summary="item.summary"
        :highlights="item.highlights"
        collapsible
        :show-more-label="experience.label.showMoreLabel"
        :show-less-label="experience.label.showLessLabel"
      >
        <template #meta>
          <div class="flex flex-col gap-0.5">
            <p class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <GraduationCap class="size-3.5 shrink-0" aria-hidden="true" />
              <span>{{ item.organization }}</span>
              <span aria-hidden="true">·</span>
              <span class="inline-flex items-center gap-1">
                <MapPin class="size-3.5 shrink-0" aria-hidden="true" />
                {{ item.location }}
              </span>
            </p>
            <p class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <UserRound class="size-3.5 shrink-0" aria-hidden="true" />
              <span>{{ experience.label.advisorLabel }}: {{ item.advisor }}</span>
            </p>
          </div>
        </template>
      </ExperienceEntry>
    </Section>

    <!-- Work/Intern Experience -->
    <Section id="professional-experience" :title="experience.label.professionalTitle" class="mt-10">
      <ExperienceEntry
        v-for="item in experience.content.professional"
        :key="item.id"
        :period="item.period"
        :title="item.organization"
        :location="item.location"
        :summary="item.summary"
        :highlights="item.highlights"
        collapsible
        :show-more-label="experience.label.showMoreLabel"
        :show-less-label="experience.label.showLessLabel"
      >
        <template #meta>
          <div class="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-0.5">
            <p v-if="item.department" class="inline-flex items-center gap-x-2">
              <Building2 class="size-3.5 shrink-0" aria-hidden="true" />
              <span>{{ item.department }}</span>
            </p>
            <p class="inline-flex items-center gap-x-2">
              <Briefcase class="size-3.5 shrink-0" aria-hidden="true" />
              <span>{{ item.role }}</span>
            </p>
          </div>
        </template>
        <template #logo>
          <img
            :class="`size-${item.logo.size ?? 6} shrink-0 object-contain`"
            :src="item.logo.src"
            alt=""
            loading="lazy"
          />
        </template>
      </ExperienceEntry>
    </Section>

    <!-- Education -->
    <Section id="education" :title="experience.label.educationTitle" class="mt-10">
      <ExperienceEntry
        v-for="item in experience.content.education"
        :key="item.school"
        :period="item.period"
        :title="item.school"
        :location="item.location"
        :meta="item.degree"
        :highlights="educationDetails(item)"
        collapsible
        :show-more-label="experience.label.showMoreLabel"
        :show-less-label="experience.label.showLessLabel"
      >
        <template #logo>
          <img
            :class="`size-${item.logo.size ?? 6} shrink-0 object-contain`"
            :src="item.logo.src"
            alt=""
            loading="lazy"
          />
        </template>
      </ExperienceEntry>
    </Section>

    <!-- Honors -->
    <Section id="honors" :title="experience.label.honorsTitle" class="mt-10">
      <CompactRecordList :items="experience.content.honors" />
    </Section>
  </PageShell>
</template>
