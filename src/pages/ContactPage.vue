<script setup lang="ts">
import { computed } from 'vue'
import { Download, Mail, MapPin } from '@lucide/vue'

import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const { profile } = usePersonalData()

const m = computed(() => messages.value.contact)
const tocItems = computed(() => [
  { id: 'contact-details', label: m.value.title },
  { id: 'cv-download', label: m.value.cvTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section class="mt-16 md:mt-20">
      <div class="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] md:gap-20">
        <div id="contact-details" class="scroll-mt-28">
          <p class="measure text-lg leading-8 text-card-foreground">
            {{ m.description }}
          </p>

          <div class="mt-8 flex flex-col items-start gap-4">
            <Button as="a" :href="`mailto:${profile.email}`">
              <Mail data-icon="inline-start" aria-hidden="true" />
              {{ profile.email }}
            </Button>
            <p class="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin class="size-4" aria-hidden="true" />
              {{ profile.identity.location }}
            </p>
          </div>

          <h2 class="mt-12 text-xl font-medium">{{ m.profilesTitle }}</h2>
          <ul class="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li v-for="link in profile.profileLinks" :key="link.href">
              <a class="link" :href="link.href" target="_blank" rel="noreferrer"
                >{{ link.label }} ↗</a
              >
            </li>
          </ul>
        </div>

        <aside id="cv-download" class="scroll-mt-28">
          <Separator />
          <div class="py-6">
            <h2 class="text-xl font-medium">{{ m.cvTitle }}</h2>
            <p class="mt-3 text-sm leading-6 text-muted-foreground">
              {{ m.cvDescription }}
            </p>
            <Button as="a" variant="outline" size="sm" class="mt-5" :href="profile.cvHref" download>
              <Download data-icon="inline-start" aria-hidden="true" />
              {{ messages.downloadCvLabel }}
            </Button>
          </div>

          <Separator />
          <p class="py-6 text-xs leading-5 text-muted-foreground">
            {{ m.privacy }}
          </p>
        </aside>
      </div>
    </Section>
  </PageShell>
</template>
