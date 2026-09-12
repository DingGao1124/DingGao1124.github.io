<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight } from '@lucide/vue'

import Media from '@/components/common/Media.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { Publication } from '@/data/publications'
import { cn } from '@/lib/utils'

const props = defineProps<{
  id?: string
  publication: Publication
}>()

const citationMeta = computed(() => {
  const venue = props.publication.venue.abbreviation
    ? `${props.publication.venue.name} (${props.publication.venue.abbreviation})`
    : props.publication.venue.name

  if (props.publication.type === 'patent') {
    return [venue, `Publication No. ${props.publication.identifier}`].filter(Boolean).join(' · ')
  }

  const publicationYear =
    props.publication.publicationDate.year ?? props.publication.publicationDate.datetime.slice(0, 4)
  const venueAndYear = [venue, publicationYear].filter(Boolean).join(', ')
  const volume = props.publication.volume ? `Vol. ${props.publication.volume}` : undefined
  return [venueAndYear, volume, props.publication.pages].filter(Boolean).join(' · ')
})

function isDingGao(author: string) {
  return author === 'Ding Gao' || author === '高鼎'
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
          'md:grid-cols-[6rem_minmax(0,1fr)] lg:grid-cols-[6rem_minmax(0,1fr)_22rem]',
        )
      "
    >
      <!-- Left Part -->
      <div class="timeline-date relative self-stretch pl-5 pt-0.5 md:pl-0 md:pr-7">
        <time
          class="font-mono text-xs leading-6 whitespace-nowrap text-muted-foreground"
          :datetime="publication.publicationDate.datetime"
        >
          {{ publication.publicationDate.label }}
        </time>
      </div>

      <!-- Middle Part -->
      <div class="min-w-0 py-0.5">
        <h3 class="text-lg leading-snug font-medium md:text-xl">
          {{ publication.title }}
        </h3>
        <ul v-if="publication.keywords?.length" class="mt-1.5 flex flex-wrap gap-1.5">
          <li v-for="keyword in publication.keywords" :key="keyword">
            <Badge
              class="border-link/25 bg-link/10 px-1.5 py-0 text-[0.6875rem] leading-4 text-link/90"
              >{{ keyword }}</Badge
            >
          </li>
        </ul>
        <p
          v-if="publication.authors?.length"
          class="mt-1.5 text-sm leading-5 text-muted-foreground"
        >
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

      <!-- Right Part -->
      <div class="min-w-0 self-start md:col-start-2 lg:col-start-3 lg:row-start-1">
        <Media :media="publication.media" />
      </div>
    </article>
  </li>
</template>

<style scoped>
.timeline-date::before {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  width: 1px;
  background: var(--border);
  content: '';
}

.timeline-date::after {
  position: absolute;
  inset-block-start: 0.45rem;
  inset-inline-start: -0.1875rem;
  width: 0.4375rem;
  height: 0.4375rem;
  border: 1px solid var(--link);
  background: var(--background);
  content: '';
}

@media (min-width: 48rem) {
  .timeline-date::before {
    inset-inline: auto 0;
  }

  .timeline-date::after {
    inset-inline: auto -0.1875rem;
  }
}
</style>
