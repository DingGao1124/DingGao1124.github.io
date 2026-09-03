<script setup lang="ts">
import { computed } from 'vue'

import PublicationEntry from '@/components/publications/PublicationEntry.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const { profile } = usePersonalData()

const m = computed(() => messages.value.publications)
const journalPublications = computed(() =>
  profile.value.publications.filter((publication) => publication.type === 'journal'),
)
const patents = computed(() =>
  profile.value.publications.filter((publication) => publication.type === 'patent'),
)
const tocItems = computed(() => [
  { id: 'journal-publications', label: m.value.journalSectionTitle },
  { id: 'patents', label: m.value.patentSectionTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section id="journal-publications" :title="m.journalSectionTitle" class="mt-8 md:mt-10">
      <p class="mb-3 font-mono text-xs text-muted-foreground">{{ m.authorNotes }}</p>
      <ol>
        <PublicationEntry
          v-for="publication in journalPublications"
          :key="publication.id"
          :id="`publication-${publication.id}`"
          :publication="publication"
        />
      </ol>
    </Section>

    <Section id="patents" :title="m.patentSectionTitle" class="mt-10">
      <ol>
        <PublicationEntry
          v-for="patent in patents"
          :key="patent.id"
          :id="`publication-${patent.id}`"
          :publication="patent"
        />
      </ol>
    </Section>
  </PageShell>
</template>
