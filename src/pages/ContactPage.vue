<script setup lang="ts">
import { computed } from 'vue'
import { Download, Mail, ScanSearch } from '@lucide/vue'

import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { usePersonalData } from '@/hooks/usePersonalData'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
const { profile } = usePersonalData()

const contact = computed(() => messages.value.contact)
const tocItems = computed(() => [
  { id: 'contact-details', label: contact.value.title },
  { id: 'cv-download', label: contact.value.cvTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="contact.eyebrow" :title="contact.title" :lede="contact.lede" />

    <Section class="mt-8 md:mt-10">
      <div class="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] md:gap-16">
        <div id="contact-details" class="scroll-mt-28">
          <p class="measure text-lg leading-8 text-card-foreground">
            {{ contact.description }}
          </p>

          <div class="mt-8">
            <Button as="a" :href="`mailto:${profile.email}`">
              <Mail data-icon="inline-start" aria-hidden="true" />
              Phone
            </Button>
            <Button as="a" :href="`mailto:${profile.email}`">
              <Mail data-icon="inline-start" aria-hidden="true" />
              {{ profile.email }}
            </Button>
          </div>

          <h2 class="mt-12 text-xl font-medium">{{ contact.profilesTitle }}</h2>
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
            <h2 class="text-xl font-medium">{{ contact.cvTitle }}</h2>
            <p class="mt-3 text-sm leading-6 text-muted-foreground">
              {{ contact.cvDescription }}
            </p>
            <div class="mt-5 flex flex-wrap items-center gap-3">
              <Button
                as="a"
                variant="outline"
                size="sm"
                :href="profile.cvHref"
                target="_blank"
                rel="noreferrer"
              >
                <ScanSearch data-icon="inline-start" aria-hidden="true" />
                {{ contact.viewCvLabel }}
              </Button>
              <Button as="a" variant="outline" size="sm" :href="profile.cvHref" download>
                <Download data-icon="inline-start" aria-hidden="true" />
                {{ contact.downloadCvLabel }}
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  </PageShell>
</template>
