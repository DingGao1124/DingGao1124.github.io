<script setup lang="ts">
import { computed } from "vue"
import { ArrowUpRight } from "@lucide/vue"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Publication } from "@/data/publications"

const props = defineProps<{
  id?: string
  publication: Publication
  typeLabel: string
  statusLabel: string
}>()

const citationMeta = computed(() =>
  [
    props.publication.venue,
    props.publication.year,
    props.publication.volume,
    props.publication.pages,
  ]
    .filter(Boolean)
    .join(" · "),
)

function isDingGao(author: string) {
  return author === "Gao D" || author === "Ding Gao"
}
</script>

<template>
  <li>
    <Separator />
    <article
      :id="id"
      class="grid scroll-mt-28 gap-4 py-7 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-7"
    >
      <span class="font-mono text-xs leading-7 text-muted-foreground">{{
        publication.year ?? "—"
      }}</span>
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{{ typeLabel }}</Badge>
          <span class="text-xs text-muted-foreground">{{
            publication.contribution
          }}</span>
        </div>
        <h2 class="mt-3 text-xl leading-snug font-medium md:text-2xl">
          {{ publication.title }}
        </h2>
        <p
          v-if="publication.authors?.length"
          class="mt-3 text-sm leading-6 text-muted-foreground"
        >
          <template
            v-for="(author, index) in publication.authors"
            :key="`${author}-${index}`"
          >
            <strong
              v-if="isDingGao(author)"
              class="font-semibold text-foreground"
              >{{ author }}</strong
            >
            <span v-else>{{ author }}</span
            ><span v-if="index < publication.authors.length - 1">, </span>
          </template>
        </p>
        <p class="mt-2 text-sm text-muted-foreground">{{ citationMeta }}</p>
        <p v-if="publication.status" class="mt-2 text-sm text-muted-foreground">
          {{ statusLabel }}:
          <span class="text-foreground">{{ publication.status }}</span>
        </p>
        <p
          v-if="publication.identifier"
          class="mt-2 font-mono text-xs text-muted-foreground"
        >
          {{ publication.identifier }}
        </p>
        <ul
          v-if="publication.links?.length"
          class="mt-4 flex flex-wrap gap-4 text-sm"
        >
          <li v-for="link in publication.links" :key="link.href">
            <a
              class="link inline-flex items-center gap-1.5"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
              <ArrowUpRight class="size-3.5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </article>
  </li>
</template>
