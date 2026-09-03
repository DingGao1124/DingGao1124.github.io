<script setup lang="ts">
import { computed } from 'vue'

import AcademicMedia from '@/components/common/AcademicMedia.vue'
import CompactRecordList from '@/components/common/CompactRecordList.vue'
import DefinitionList from '@/components/common/DefinitionList.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
import TimelineEntry from '@/components/common/TimelineEntry.vue'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const { profile } = usePersonalData()

const m = computed(() => messages.value.experience)
const tocItems = computed(() => [
  { id: 'professional-experience', label: m.value.professionalTitle },
  { id: 'education', label: m.value.educationTitle },
  { id: 'skills', label: m.value.skillsTitle },
  { id: 'honors', label: m.value.honorsTitle },
])
const skillItems = computed(() =>
  profile.value.skillGroups.map((group) => ({
    term: group.label,
    detail: group.detail,
  })),
)

function educationSummary(item: (typeof profile.value.education)[number]) {
  return [
    `${m.value.gpaLabel}: ${item.gpa}`,
    item.rank ? `${m.value.rankLabel}: ${item.rank}` : undefined,
  ]
    .filter(Boolean)
    .join(' · ')
}

function educationDetails(item: (typeof profile.value.education)[number]) {
  return [
    ...item.awards.map((award) => `${m.value.awardsLabel}: ${award}`),
    ...item.competitions.map((competition) => `${m.value.competitionsLabel}: ${competition}`),
    ...(item.thesis ? [`${m.value.thesisLabel}: ${item.thesis}`] : []),
  ]
}
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section id="professional-experience" :title="m.professionalTitle" class="mt-8 md:mt-10">
      <TimelineEntry
        v-for="experience in profile.experiences"
        :key="experience.id"
        :period="experience.period"
        :title="experience.organization"
        :meta="`${experience.role} · ${experience.location}`"
        :summary="experience.summary"
        :highlights="experience.highlights"
        collapsible
        :show-more-label="messages.showMoreLabel"
        :show-less-label="messages.showLessLabel"
      >
        <template v-if="experience.logoSrc" #mark>
          <img
            class="max-h-7 max-w-16 object-contain"
            :src="experience.logoSrc"
            alt=""
            width="64"
            height="28"
            loading="lazy"
          />
        </template>
        <template #media>
          <AcademicMedia :media="experience.media" />
        </template>
      </TimelineEntry>
    </Section>

    <Section id="education" :title="m.educationTitle" class="mt-10">
      <TimelineEntry
        v-for="item in profile.education"
        :key="item.school"
        :period="item.period"
        :title="item.school"
        :meta="`${item.degree} · ${item.location}`"
        :summary="educationSummary(item)"
        :highlights="educationDetails(item)"
        collapsible
        :show-more-label="messages.showMoreLabel"
        :show-less-label="messages.showLessLabel"
      />
    </Section>

    <Section id="skills" :title="m.skillsTitle" class="mt-10">
      <DefinitionList :items="skillItems" />
    </Section>

    <Section id="honors" :title="m.honorsTitle" class="mt-10">
      <CompactRecordList :items="profile.honors" />
    </Section>
  </PageShell>
</template>
