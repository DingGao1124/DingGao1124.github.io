<script setup lang="ts">
import { computed } from 'vue'

import PublicationEntry from '@/components/publications/PublicationEntry.vue'
import PageHeader from '@/components/site/PageHeader.vue'
import PageShell from '@/components/site/PageShell.vue'
import Section from '@/components/site/Section.vue'
import type { PublicationType } from '@/data/publications'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const { profile } = usePersonalData()

const m = computed(() => messages.value.publications)
const tocItems = computed(() =>
  profile.value.publications.map((publication) => ({
    id: `publication-${publication.id}`,
    label: publication.title,
  })),
)

function typeLabel(type: PublicationType) {
  return type === 'patent' ? m.value.patentLabel : m.value.journalLabel
}
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section class="mt-16 md:mt-20">
      <ol>
        <PublicationEntry
          v-for="publication in profile.publications"
          :key="publication.id"
          :id="`publication-${publication.id}`"
          :publication="publication"
          :type-label="typeLabel(publication.type)"
          :status-label="m.statusLabel"
        />
      </ol>
    </Section>
  </PageShell>
</template>
