<script setup lang="ts">
import { computed } from 'vue'

import AcademicMedia from '@/components/common/AcademicMedia.vue'
import CompactRecordList from '@/components/common/CompactRecordList.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import ExperienceEntry from '@/components/experiences/ExperienceEntry.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()

const experience = computed(() => messages.value.experience)
const tocItems = computed(() => [
  { id: 'professional-experience', label: experience.value.label.professionalTitle },
  { id: 'research-experience', label: experience.value.label.researchTitle },
  { id: 'education', label: experience.value.label.educationTitle },
  { id: 'honors', label: experience.value.label.honorsTitle },
])

function educationSummary(item: (typeof experience.value.content.education)[number]) {
  return [
    `${experience.value.label.gpaLabel}: ${item.gpa}`,
    item.rank ? `${experience.value.label.rankLabel}: ${item.rank}` : undefined,
  ]
    .filter(Boolean)
    .join(' · ')
}

function educationDetails(item: (typeof experience.value.content.education)[number]) {
  return [
    ...item.awards.map((award) => `${experience.value.label.awardsLabel}: ${award}`),
    ...item.competitions.map(
      (competition) => `${experience.value.label.competitionsLabel}: ${competition}`,
    ),
    ...(item.thesis ? [`${experience.value.label.thesisLabel}: ${item.thesis}`] : []),
  ]
}
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="experience.label.pageContentsLabel">
    <PageHeader :eyebrow="experience.label.eyebrow" :title="experience.label.title" />

    <Section
      id="professional-experience"
      :title="experience.label.professionalTitle"
      class="mt-6 md:mt-8"
    >
      <ExperienceEntry
        v-for="item in experience.content.professional"
        :key="item.id"
        :period="item.period"
        :title="item.organization"
        :meta="`${item.role} · ${item.location}`"
        :summary="item.summary"
        :highlights="item.highlights"
        collapsible
        :show-more-label="experience.label.showMoreLabel"
        :show-less-label="experience.label.showLessLabel"
      >
        <template v-if="item.logoSrc" #mark>
          <img
            class="max-h-7 max-w-16 object-contain"
            :src="item.logoSrc"
            alt=""
            width="64"
            height="28"
            loading="lazy"
          />
        </template>
        <template #media>
          <AcademicMedia :media="item.media" />
        </template>
      </ExperienceEntry>
    </Section>

    <Section id="research-experience" :title="experience.label.researchTitle" class="mt-10">
      <ExperienceEntry
        v-for="item in experience.content.research"
        :key="item.id"
        :period="item.period"
        :title="item.role"
        :meta="`${item.organization} · ${item.location} · ${experience.label.advisorLabel}: ${item.advisor}`"
        :summary="item.summary"
        :highlights="item.highlights"
        collapsible
        :show-more-label="experience.label.showMoreLabel"
        :show-less-label="experience.label.showLessLabel"
      >
        <template #media>
          <AcademicMedia :media="item.media" />
        </template>
      </ExperienceEntry>
    </Section>

    <Section id="education" :title="experience.label.educationTitle" class="mt-10">
      <ExperienceEntry
        v-for="item in experience.content.education"
        :key="item.school"
        :period="item.period"
        :title="item.school"
        :meta="`${item.degree} · ${item.location}`"
        :summary="educationSummary(item)"
        :highlights="educationDetails(item)"
        collapsible
        :show-more-label="experience.label.showMoreLabel"
        :show-less-label="experience.label.showLessLabel"
      />
    </Section>

    <Section id="honors" :title="experience.label.honorsTitle" class="mt-10">
      <CompactRecordList :items="experience.content.honors" />
    </Section>
  </PageShell>
</template>
