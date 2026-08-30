<script setup lang="ts">
import { computed } from 'vue'

import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
import TimelineEntry from '@/components/common/TimelineEntry.vue'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
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

    <Section
      id="professional-experience"
      :title="m.professionalTitle"
      :description="m.professionalDescription"
      class="mt-8 md:mt-10"
    >
      <TimelineEntry
        v-for="experience in profile.experiences"
        :key="experience.id"
        :period="experience.period"
        :title="experience.organization"
        :meta="`${experience.role} · ${experience.location}`"
        :summary="experience.summary"
        :highlights="experience.highlights"
      />
    </Section>

    <Section id="education" :title="m.educationTitle" class="mt-20">
      <TimelineEntry
        v-for="item in profile.education"
        :key="item.school"
        :period="item.period"
        :title="item.school"
        :meta="`${item.degree} · ${item.location}`"
        :summary="educationSummary(item)"
        :highlights="educationDetails(item)"
      />
    </Section>

    <Section id="skills" :title="m.skillsTitle" class="mt-20">
      <div class="grid gap-x-10 gap-y-0 md:grid-cols-2">
        <div v-for="group in profile.skillGroups" :key="group.label">
          <Separator />
          <section class="py-6">
            <h3 class="text-lg font-medium">{{ group.label }}</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <Badge v-for="item in group.items" :key="item" variant="outline">{{ item }}</Badge>
            </div>
          </section>
        </div>
      </div>
    </Section>

    <Section id="honors" :title="m.honorsTitle" class="mt-20">
      <TimelineEntry
        v-for="honor in profile.honors"
        :key="`${honor.year}-${honor.title}`"
        :period="honor.year"
        :title="honor.title"
        :meta="honor.detail"
      />
    </Section>
  </PageShell>
</template>
