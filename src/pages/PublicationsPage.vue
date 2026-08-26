<script setup lang="ts">
import { computed } from "vue"

import PageHeader from "@/components/site/PageHeader.vue"
import Section from "@/components/site/Section.vue"
import { useProfileData } from "@/hooks/useProfileData"
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { messages } = useSiteLocale()
const { profile } = useProfileData()

const m = computed(() => messages.value.publications)
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section class="mt-16">
      <ol class="divide-y divide-border border-y border-border">
        <li
          v-for="(publication, index) in profile.publications"
          :key="publication.title"
          class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6"
        >
          <span class="font-mono text-xs leading-7 text-muted-foreground">{{ index + 1 }}</span>
          <div>
            <h3 class="font-serif text-lg font-medium leading-snug">{{ publication.title }}</h3>
            <p class="mt-2 font-mono text-xs text-muted-foreground">{{ publication.meta }}</p>
            <p v-if="publication.note" class="mt-2 measure text-sm text-muted-foreground">
              {{ publication.note }}
            </p>
          </div>
        </li>
      </ol>
    </Section>
  </div>
</template>
