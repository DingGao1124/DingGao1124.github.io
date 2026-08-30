<script setup lang="ts">
import { computed } from 'vue'

import PublicationEntry from '@/components/publications/PublicationEntry.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
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

    <Section class="mt-8 md:mt-10">
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
