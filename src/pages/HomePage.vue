<script setup lang="ts">
import { computed } from "vue"
import { Globe, Link2, Mail } from "@lucide/vue"

import Section from "@/components/site/Section.vue"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useProfileData } from "@/hooks/useProfileData"
import { useSiteLocale } from "@/hooks/useSiteLocale"
import type { Project } from "@/data/types"

const { messages, path } = useSiteLocale()
const { profile } = useProfileData()

const m = computed(() => messages.value.home)
const selectedProjects = computed(() => profile.value.projects.slice(0, 3))
const recentExperiences = computed(() => profile.value.experiences.slice(0, 3))

function projectMeta(project: Project) {
  return [project.period, project.role].filter(Boolean).join(" · ")
}

function contactIcon(href: string) {
  if (href.includes("github.com")) return Link2
  if (href.includes("linkedin.com")) return Link2
  if (href.includes("yuque.com")) return Globe
  return Mail
}
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
    <div class="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
      <!-- About text (left) -->
      <div class="order-2 lg:order-1">
        <h1 class="text-4xl font-medium md:text-5xl">{{ m.aboutTitle }}</h1>
        <div class="mt-6 flex flex-col gap-4">
          <p v-for="(paragraph, index) in m.aboutBody" :key="index" class="text-lg leading-8 text-card-foreground">
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 class="font-serif text-xl font-medium">{{ m.interestsTitle }}</h2>
            <ul class="mt-3 flex flex-col gap-1.5">
              <li v-for="interest in m.interests" :key="interest" class="text-muted-foreground">
                {{ interest }}
              </li>
            </ul>
          </div>
          <div>
            <h2 class="font-serif text-xl font-medium">{{ m.educationTitle }}</h2>
            <ul class="mt-3 flex flex-col gap-3">
              <li v-for="item in profile.education" :key="item.school">
                <p class="font-medium">{{ item.degree }}</p>
                <p class="text-sm text-muted-foreground">{{ item.school }} · {{ item.period }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Avatar / identity sidebar (right) -->
      <aside class="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
        <div class="flex flex-col items-center text-center">
          <Avatar class="size-32 shadow-sm md:size-56">
            <AvatarImage src="/avatar.webp" :alt="m.name"/>
          </Avatar>
          <h1 class="mt-5 font-serif text-3xl font-medium">{{ m.name }}</h1>
          <p class="mt-2 text-muted-foreground">{{ m.role }}</p>
          <a class="mt-1 text-link hover:underline" :href="path('/contact/')">{{ m.organization }}</a>

          <div class="mt-5 flex flex-wrap justify-center gap-4">
            <a
              :href="`mailto:${profile.email}`"
              class="text-muted-foreground transition-colors hover:text-foreground"
              :aria-label="`Email ${profile.email}`"
            >
              <Mail class="size-5" />
            </a>
            <a
              v-for="link in profile.profileLinks"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              class="text-muted-foreground transition-colors hover:text-foreground"
              :aria-label="link.label"
            >
              <component :is="contactIcon(link.href)" class="size-5" />
            </a>
          </div>
        </div>
      </aside>
    </div>

    <Section :title="m.researchTitle" :description="m.researchDescription" class="mt-16">
      <ul class="divide-y divide-border border-y border-border">
        <li v-for="area in profile.researchAreas" :key="area.title" class="py-5">
          <div class="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-6">
            <div>
              <h3 class="font-serif text-xl font-medium">{{ area.title }}</h3>
              <p class="mt-2 measure text-muted-foreground">{{ area.description }}</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="mt-6">
        <a class="link text-sm" :href="path('/research/')">{{ m.viewAll }} →</a>
      </div>
    </Section>

    <Section :title="m.selectedWorkTitle" :description="m.selectedWorkDescription" class="mt-16">
      <ol class="divide-y divide-border border-y border-border">
        <li
          v-for="(project, index) in selectedProjects"
          :key="project.title"
          class="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-6"
        >
          <span class="font-mono text-xs leading-7 text-muted-foreground">{{ index + 1 }}</span>
          <div>
            <h3 class="font-serif text-lg font-medium">{{ project.title }}</h3>
            <p class="mt-1 font-mono text-xs text-muted-foreground">{{ projectMeta(project) }}</p>
            <p class="mt-3 measure text-muted-foreground">{{ project.description }}</p>
          </div>
        </li>
      </ol>
      <div class="mt-6">
        <a class="link text-sm" :href="path('/projects/')">{{ m.viewAll }} →</a>
      </div>
    </Section>

    <Section :title="m.recentTitle" :description="m.recentDescription" class="mt-16">
      <ul class="divide-y divide-border border-y border-border">
        <li
          v-for="experience in recentExperiences"
          :key="experience.organization"
          class="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
        >
          <span class="font-mono text-xs leading-7 text-muted-foreground">{{ experience.period }}</span>
          <div>
            <h3 class="font-medium">{{ experience.organization }}</h3>
            <p class="text-sm text-muted-foreground">{{ experience.role }}</p>
            <p class="mt-2 measure text-sm text-muted-foreground">{{ experience.summary }}</p>
          </div>
        </li>
      </ul>
      <div class="mt-6">
        <a class="link text-sm" :href="path('/experience/')">{{ m.viewAll }} →</a>
      </div>
    </Section>
  </div>
</template>
