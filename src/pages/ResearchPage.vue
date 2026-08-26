<script setup lang="ts">
import { computed } from "vue"

import PageHeader from "@/components/site/PageHeader.vue"
import Section from "@/components/site/Section.vue"
import Tag from "@/components/site/Tag.vue"
import { useProfileData } from "@/hooks/useProfileData"
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { messages } = useSiteLocale()
const { profile } = useProfileData()

const m = computed(() => messages.value.research)
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section :title="m.areasTitle" :description="m.areasDescription" class="mt-16">
      <ul class="divide-y divide-border border-y border-border">
        <li v-for="area in profile.researchAreas" :key="area.title" class="py-6">
          <div class="grid gap-2 lg:grid-cols-[16rem_1fr] lg:gap-8">
            <h3 class="font-serif text-xl font-medium">{{ area.title }}</h3>
            <p class="measure text-muted-foreground">{{ area.description }}</p>
          </div>
        </li>
      </ul>
    </Section>

    <Section :title="m.approachTitle" :description="m.approachDescription" class="mt-16">
      <div class="flex flex-col gap-6">
        <p class="measure text-lg leading-8 text-card-foreground">{{ m.approachBody }}</p>
        <div class="flex flex-col gap-2.5">
          <p class="eyebrow">{{ m.tagsLabel }}</p>
          <div class="flex flex-wrap gap-2">
            <Tag v-for="tag in profile.summaryTags" :key="tag" :label="tag" />
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>
