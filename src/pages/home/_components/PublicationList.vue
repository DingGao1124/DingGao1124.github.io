<script setup lang="ts">
import type { HomePublication } from '@/data/profile'

defineProps<{
  items: readonly HomePublication[]
}>()

function publicationMeta(publication: HomePublication) {
  const venue = publication.venue.abbreviation
    ? `${publication.venue.name} (${publication.venue.abbreviation})`
    : publication.venue.name
  return [publication.year, venue, publication.identifier && `DOI: ${publication.identifier}`]
    .filter(Boolean)
    .join(' · ')
}
</script>

<template>
  <ol class="mx-auto max-w-4xl">
    <li
      v-for="publication in items"
      :key="publication.id"
      class="border-b border-border py-3 last:border-0"
    >
      <a
        v-if="publication.links[0]?.href"
        class="link text-sm leading-snug font-medium"
        :href="publication.links[0].href"
        target="_blank"
        rel="noreferrer"
      >
        {{ publication.title }}
      </a>
      <h3 v-else class="text-sm leading-snug font-medium">{{ publication.title }}</h3>
      <p class="mt-1 font-mono text-xs text-muted-foreground">
        {{ publicationMeta(publication) }}
      </p>
    </li>
  </ol>
</template>
