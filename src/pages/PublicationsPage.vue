<script setup lang="ts">
import { computed } from 'vue'

import PublicationEntry from '@/components/publications/PublicationEntry.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()

const publications = computed(() => messages.value.publications)
const journalPublications = computed(() =>
  publications.value.content.items.filter((publication) => publication.type === 'journal'),
)
const patents = computed(() =>
  publications.value.content.items.filter((publication) => publication.type === 'patent'),
)
const tocItems = computed(() => [
  { id: 'journal-publications', label: publications.value.label.journalSectionTitle },
  { id: 'patents', label: publications.value.label.patentSectionTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="publications.label.pageContentsLabel">
    <PageHeader
      :eyebrow="publications.label.eyebrow"
      :title="publications.label.title"
      :lede="publications.content.lede"
    />

    <Section
      id="journal-publications"
      :title="publications.label.journalSectionTitle"
      class="mt-8 md:mt-10"
    >
      <p class="mb-3 font-mono text-xs text-muted-foreground">
        {{ publications.label.authorNotes }}
      </p>
      <ol>
        <PublicationEntry
          v-for="publication in journalPublications"
          :key="publication.id"
          :id="`publication-${publication.id}`"
          :publication="publication"
        />
      </ol>
    </Section>

    <Section id="patents" :title="publications.label.patentSectionTitle" class="mt-10">
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
