<script setup lang="ts">
import { Download, Mail, MapPin } from "@lucide/vue"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import type { ProfileLink, SkillLevel } from "@/data/profile"

defineProps<{
  name: string
  headline: string
  credential: string
  location: string
  intro: readonly string[]
  email: string
  emailLabel: string
  cvHref: string
  cvLabel: string
  avatarSrc: string
  avatarAlt: string
  skillsTitle: string
  skills: readonly SkillLevel[]
  links: readonly ProfileLink[]
}>()
</script>

<template>
  <section
    class="grid items-start gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:gap-20"
  >
    <div class="order-2 flex flex-col gap-7 lg:order-1 lg:pt-8">
      <div class="flex flex-col gap-4">
        <p class="eyebrow">{{ credential }}</p>
        <h1
          class="text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-medium tracking-[-0.045em]"
        >
          {{ name }}
        </h1>
        <p
          class="max-w-2xl text-xl leading-snug text-muted-foreground md:text-2xl"
        >
          {{ headline }}
        </p>
      </div>

      <div
        class="measure flex flex-col gap-4 text-lg leading-8 text-card-foreground"
      >
        <p v-for="paragraph in intro" :key="paragraph">{{ paragraph }}</p>
      </div>

      <div class="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
        <Button as="a" variant="ghost" size="sm" :href="`mailto:${email}`">
          <Mail data-icon="inline-start" aria-hidden="true" />
          {{ emailLabel }}
        </Button>
        <span class="inline-flex items-center gap-2 text-muted-foreground">
          <MapPin class="size-4" aria-hidden="true" />
          {{ location }}
        </span>
        <Button as="a" variant="outline" size="sm" :href="cvHref" download>
          <Download data-icon="inline-start" aria-hidden="true" />
          {{ cvLabel }}
        </Button>
      </div>

      <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <li v-for="link in links" :key="link.href">
          <a
            class="transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
          >
            {{ link.label }} ↗
          </a>
        </li>
      </ul>
    </div>

    <aside
      class="order-1 mx-auto flex w-full max-w-sm flex-col items-center text-center lg:order-2"
    >
      <Avatar class="size-40 md:size-44">
        <AvatarImage :src="avatarSrc" :alt="avatarAlt" />
        <AvatarFallback class="text-2xl">DG</AvatarFallback>
      </Avatar>

      <div class="mt-5 flex flex-col items-center gap-1.5">
        <p class="font-serif text-2xl font-medium">{{ name }}</p>
        <p class="text-sm font-medium">{{ headline }}</p>
        <p class="max-w-xs text-sm leading-6 text-muted-foreground">
          {{ credential }}
        </p>
        <p class="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin class="size-4" aria-hidden="true" />
          {{ location }}
        </p>
      </div>

      <Separator class="my-5" />

      <div class="w-full max-w-xs text-left">
        <h2 class="text-center text-lg font-medium">{{ skillsTitle }}</h2>
        <ul class="mt-4 flex flex-col gap-3">
          <li v-for="skill in skills" :key="skill.label">
            <div class="mb-2 flex items-center justify-between gap-4 text-sm">
              <span class="font-medium">{{ skill.label }}</span>
              <span class="font-mono text-xs text-muted-foreground">
                {{ skill.value }}/100
              </span>
            </div>
            <Progress
              :model-value="skill.value"
              :aria-label="`${skill.label}: ${skill.value}/100`"
            />
          </li>
        </ul>
      </div>
    </aside>
  </section>
</template>
