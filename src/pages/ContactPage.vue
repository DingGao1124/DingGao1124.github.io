<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, Download, Mail, Phone, ScanSearch } from '@lucide/vue'

import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()

const contact = computed(() => messages.value.contact)
const tocItems = computed(() => [
  { id: 'contact-details', label: contact.value.label.title },
  { id: 'cv-download', label: contact.value.label.cvTitle },
])
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="contact.label.eyebrow" :title="contact.label.title" />

    <Section class="mt-6 md:mt-8">
      <div class="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] md:gap-16">
        <!-- Contact details -->
        <div id="contact-details" class="scroll-mt-28">
          <h2 class="measure text-xl font-normal">
            {{ contact.label.profilesMainTitle }}
          </h2>

          <div class="mt-4 flex flex-wrap gap-3">
            <Button
              as="a"
              :href="contact.phoneHref"
              :aria-label="`${contact.label.phoneLabel}: ${contact.phone}`"
            >
              <Phone data-icon="inline-start" aria-hidden="true" />
              {{ contact.phone }}
            </Button>
            <Button as="a" variant="outline" :href="`mailto:${contact.email}`">
              <Mail data-icon="inline-start" aria-hidden="true" />
              {{ contact.email }}
            </Button>
          </div>

          <h2 class="mt-6 text-xl font-normal">{{ contact.label.profilesSubTitle }}</h2>
          <ul class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm">
            <li v-for="link in contact.profileLinks" :key="link.href">
              <a
                class="link group inline-flex items-center gap-1.5"
                :href="link.href"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  v-if="link.iconSrc"
                  :class="`size-${link.iconSize ?? 4} object-contain`"
                  :src="link.iconSrc"
                  alt=""
                  width="16"
                  height="16"
                />
                {{ link.label }}
                <ArrowRight
                  class="-ms-0.5 size-3.5 -rotate-45 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </div>

        <!-- CV download -->
        <aside id="cv-download" class="scroll-mt-28">
          <Separator />
          <div class="py-5">
            <h2 class="text-xl font-medium">{{ contact.label.cvTitle }}</h2>
            <p class="text-sm leading-6 text-muted-foreground">
              {{ contact.content.cvDescription }}
            </p>
            <div class="mt-4 flex flex-wrap items-center gap-3">
              <Button
                as="a"
                variant="outline"
                size="sm"
                :href="contact.cvHref"
                target="_blank"
                rel="noreferrer"
              >
                <ScanSearch data-icon="inline-start" aria-hidden="true" />
                {{ contact.label.viewCvLabel }}
              </Button>
              <Button as="a" variant="outline" size="sm" :href="contact.cvHref" download>
                <Download data-icon="inline-start" aria-hidden="true" />
                {{ contact.label.downloadCvLabel }}
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  </PageShell>
</template>
