<script setup lang="ts">
import { computed } from "vue"

import PageHeader from "@/components/site/PageHeader.vue"
import Section from "@/components/site/Section.vue"
import { useProfileData } from "@/hooks/useProfileData"
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { messages } = useSiteLocale()
const { profile } = useProfileData()

const m = computed(() => messages.value.contact)
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section class="mt-16">
      <p class="measure text-lg leading-8 text-card-foreground">
        {{ m.description }}
      </p>

      <div class="mt-8 flex flex-col gap-6">
        <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a class="link font-medium" :href="`mailto:${profile.email}`">
            {{ profile.email }} →
          </a>
          <a
            v-for="link in profile.profileLinks"
            :key="link.href"
            class="link text-sm"
            :href="link.href"
            rel="noreferrer"
            target="_blank"
          >
            {{ link.label }} →
          </a>
        </div>
        <p class="measure text-sm text-muted-foreground">{{ m.privacy }}</p>
      </div>
    </Section>
  </div>
</template>
