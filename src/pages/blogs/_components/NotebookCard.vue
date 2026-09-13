<script setup lang="ts">
import { Lock, Notebook as NotebookIcon } from '@lucide/vue'

import { Card } from '@/components/ui/card'
import { useSiteLocale } from '@/hooks/useSiteLocale'

export type NotebookDoc = {
  title: string
  date: string
  href?: string
}

export type Notebook = {
  title: string
  description?: string
  private?: boolean
  docs: readonly NotebookDoc[]
}

defineProps<{ notebook: Notebook }>()

const { messages, path } = useSiteLocale()
</script>

<template>
  <Card class="h-full gap-0 py-0">
    <div class="flex items-center gap-2 px-5 pt-4">
      <NotebookIcon class="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <h3 class="min-w-0 truncate text-sm font-medium">{{ notebook.title }}</h3>
      <template v-if="notebook.private">
        <Lock class="size-3 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span class="sr-only">{{ messages.blogs.label.privateLabel }}</span>
      </template>
    </div>

    <p v-if="notebook.description" class="px-5 pt-1 text-xs text-muted-foreground">
      {{ notebook.description }}
    </p>

    <ul class="flex flex-col gap-2.5 px-5 pt-5 pb-4">
      <li v-for="doc in notebook.docs" :key="doc.title" class="flex items-center gap-2 text-xs">
        <span class="shrink-0 text-muted-foreground" aria-hidden="true">•</span>
        <a
          v-if="doc.href"
          :href="path(doc.href)"
          class="min-w-0 flex-1 truncate hover:underline hover:underline-offset-2"
          >{{ doc.title }}</a
        >
        <span v-else class="min-w-0 flex-1 truncate">{{ doc.title }}</span>
        <time class="shrink-0 font-mono text-muted-foreground">{{ doc.date }}</time>
      </li>
    </ul>
  </Card>
</template>
