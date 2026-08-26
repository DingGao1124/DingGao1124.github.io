<script setup lang="ts">
import { computed } from "vue"

import ContentEntry from "@/components/site/ContentEntry.vue"
import PageHeader from "@/components/site/PageHeader.vue"
import Section from "@/components/site/Section.vue"
import type { PublicationType } from "@/data/types"
import { useProfileData } from "@/hooks/useProfileData"
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { messages } = useSiteLocale()
const { profile } = useProfileData()

const m = computed(() => messages.value.publications)

function badge(type?: PublicationType) {
  return type === "patent" ? m.value.patentLabel : m.value.journalLabel
}
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section class="mt-16">
      <ol class="divide-y divide-border border-y border-border">
        <li v-for="(publication, index) in profile.publications" :key="publication.title">
          <ContentEntry
            :number="index + 1"
            :title="publication.title"
            :badge="badge(publication.type)"
            :meta="publication.meta"
            :content="publication.note"
            :links="publication.links"
            :images="publication.images"
          />
        </li>
      </ol>
    </Section>
  </div>
</template>
