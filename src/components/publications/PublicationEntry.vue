<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight } from '@lucide/vue'

import AcademicMedia from '@/components/common/AcademicMedia.vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { Publication } from '@/data/publications'
import { cn } from '@/lib/utils'

const props = defineProps<{
  id?: string
  publication: Publication
}>()

const citationMeta = computed(() => {
  const yearAndVolume = props.publication.volume
    ? `${props.publication.volume}${props.publication.year ? ` (${props.publication.year})` : ''}`
    : props.publication.year
  return [props.publication.venue, yearAndVolume, props.publication.pages]
    .filter(Boolean)
    .join(' · ')
})

function isDingGao(author: string) {
  return author === 'Ding Gao'
}
</script>

<template>
  <li>
    <Separator />
    <article
      :id="id"
      :class="
        cn(
          'grid scroll-mt-28 items-start gap-4 py-5 md:gap-5',
          'md:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)]',
        )
      "
    >
      <AcademicMedia :media="publication.media" />

      <div class="min-w-0 py-0.5">
        <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 class="text-lg leading-snug font-medium md:text-xl">
            {{ publication.title }}
          </h3>
          <span class="font-mono text-xs text-muted-foreground">{{ publication.year ?? '—' }}</span>
        </div>
        <p v-if="publication.authors?.length" class="mt-2 text-sm leading-5 text-muted-foreground">
          <template v-for="(author, index) in publication.authors" :key="author.name">
            <strong v-if="isDingGao(author.name)" class="font-semibold text-foreground">{{
              author.name
            }}</strong>
            <span v-else>{{ author.name }}</span
            ><sup v-if="author.equalContribution">*</sup
            ><sup v-if="author.correspondingAuthor">†</sup
            ><span v-if="index < publication.authors.length - 1">, </span>
          </template>
        </p>
        <p class="mt-1.5 font-serif text-sm leading-5 italic text-foreground/80">
          {{ citationMeta }}
        </p>
        <p v-if="publication.identifier" class="mt-1.5 font-mono text-xs text-muted-foreground">
          {{ publication.identifier }}
        </p>
        <ul v-if="publication.links?.length" class="mt-3 flex flex-wrap gap-2">
          <li v-for="link in publication.links" :key="link.href">
            <Button as-child variant="outline" size="sm" class="h-8 rounded-none px-3 text-xs">
              <a :href="link.href" target="_blank" rel="noreferrer">
                {{ link.label }}
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </article>
  </li>
</template>
