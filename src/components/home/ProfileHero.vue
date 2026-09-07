<script setup lang="ts">
import { Dot, Mail, MapPin, Phone, ScanSearch } from '@lucide/vue'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import type { ProfileLink } from '@/data/profile'
import type { SkillGroup } from '@/data/common/skills'
import TechCarousel from '@/components/home/TechCarousel.vue'

defineProps<{
  eyebrow: string
  title: string
  name: string
  headline: string
  currentPosition: string
  employer: ProfileLink
  location: string
  intro: readonly string[]
  email: string
  emailLabel: string
  phoneHref: string
  phoneLabel: string
  cvHref: string
  cvLabel: string
  avatarSrc: string
  avatarAlt: string
  researchKeywords: readonly string[]
  links: readonly ProfileLink[]
  skillTitle: string
  skillItems: readonly SkillGroup[]
}>()
</script>

<template>
  <section class="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
    <div class="order-2 flex flex-col gap-5 max-w-2xl lg:order-1 lg:pt-2">
      <div class="flex flex-col gap-4">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1
          class="text-[clamp(2.75rem,6.5vw,4.4rem)] leading-[0.94] font-medium tracking-[-0.035em]"
        >
          {{ title }}
        </h1>
      </div>

      <div
        class="measure flex flex-col gap-3 text-base leading-7 text-card-foreground md:text-[1.0625rem]"
      >
        <p v-for="paragraph in intro" :key="paragraph">{{ paragraph }}</p>
      </div>

      <ol
        class="flex max-w-3xl flex-wrap items-center gap-x-1 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground"
        aria-label="Research system thread"
      >
        <li
          v-for="(item, index) in researchKeywords"
          :key="item"
          class="inline-flex items-center gap-1"
        >
          <span>{{ item }}</span>
          <Dot
            v-if="index < researchKeywords.length - 1"
            class="size-6 text-link"
            aria-hidden="true"
          />
        </li>
      </ol>

      <div class="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
        <Button as="a" variant="outline" size="sm" :href="phoneHref">
          <Phone data-icon="inline-start" aria-hidden="true" />
          {{ phoneLabel }}
        </Button>
        <Button as="a" variant="outline" size="sm" :href="`mailto:${email}`">
          <Mail data-icon="inline-start" aria-hidden="true" />
          {{ emailLabel }}
        </Button>
        <Button as="a" variant="outline" size="sm" :href="cvHref" target="_blank" rel="noreferrer">
          <ScanSearch data-icon="inline-start" aria-hidden="true" />
          {{ cvLabel }}
        </Button>
      </div>

      <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <li v-for="link in links" :key="link.href">
          <a
            class="inline-flex items-center gap-2 transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
          >
            <img
              v-if="link.iconSrc"
              class="size-4 object-contain"
              :src="link.iconSrc"
              alt=""
              width="16"
              height="16"
            />
            {{ link.label }} ↗
          </a>
        </li>
      </ul>
    </div>

    <aside
      class="order-1 mx-auto flex w-full max-w-sm flex-col items-center text-center lg:order-2 lg:mx-0"
    >
      <Avatar class="size-40 ring-1 ring-border md:size-44 lg:size-52">
        <AvatarImage :src="avatarSrc" :alt="avatarAlt" />
        <AvatarFallback>
          <div class="flex flex-col items-center justify-center mt-2">
            <span class="text-xl">DG</span>
            <span class="flex items-center gap-1 text-xs text-muted-foreground">
              <Spinner class="size-3" /> Image Loading...
            </span>
          </div>
        </AvatarFallback>
      </Avatar>
      <div class="mt-4 flex flex-col items-center gap-1">
        <p class="font-serif text-2xl font-medium">{{ name }}</p>
        <p class="text-sm font-medium">{{ headline }}</p>
        <p class="flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <span>{{ currentPosition }}</span>
          <a
            class="inline-flex items-center gap-1 font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            :href="employer.href"
            target="_blank"
            rel="noreferrer"
          >
            <img
              v-if="employer.iconSrc"
              class="size-8 object-contain"
              :src="employer.iconSrc"
              alt=""
              width="16"
              height="16"
            />
            {{ employer.label }}
          </a>
        </p>
        <p class="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin class="size-4" aria-hidden="true" />
          {{ location }}
        </p>
      </div>
      <TechCarousel
        :title="skillTitle"
        :groups="skillItems"
        class="lg:block hidden max-w-80 mt-5 pt-5 border-t border-border"
      />
    </aside>
  </section>
</template>
