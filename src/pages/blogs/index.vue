<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { TriangleAlert, Construction } from '@lucide/vue'

import type { Notebook } from '@/data/blogs'
import NotebookCard from '@/pages/blogs/_components/NotebookCard.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
import Section from '@/components/common/Section.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'
import { useSortableList } from '@/hooks/useSortableList'

const ORDER_KEY = 'blogs:notebook-order'

const { messages } = useSiteLocale()

const blogSection = computed(() => messages.value.blogs)
const published_notebooks = ref<Notebook[]>(blogSection.value.notebooks.slice())
// const published_notebooks = ref<Notebook[]>(
//   blogSection.value.notebooks.filter((notebook) => !notebook.private),
// )

const notebookId = (notebook: Notebook) => `notebook-${notebook.title.replace(/\s+/g, '-')}`

const tocItems = computed(() =>
  // notebooks.value.map((notebook) => ({ id: notebookId(notebook), label: notebook.title })),
  [{ id: 'Blog', label: 'Blog' }],
)

const { containerRef, draggingIndex } = useSortableList(published_notebooks)

// The dragged order only exists on the client, so it is applied after hydration.
onMounted(() => {
  const saved = window.localStorage.getItem(ORDER_KEY)
  if (!saved) return
  const order = JSON.parse(saved) as string[]
  const byTitle = new Map(published_notebooks.value.map((notebook) => [notebook.title, notebook]))
  const ordered: Notebook[] = []
  for (const title of order) {
    const notebook = byTitle.get(title)
    if (notebook) ordered.push(notebook)
  }
  published_notebooks.value = [
    ...ordered,
    ...published_notebooks.value.filter((notebook) => !order.includes(notebook.title)),
  ]
})

watch(draggingIndex, (index, previous) => {
  if (index !== null || previous === null) return
  window.localStorage.setItem(
    ORDER_KEY,
    JSON.stringify(published_notebooks.value.map((notebook) => notebook.title)),
  )
})
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="blogSection.label.eyebrow" :title="blogSection.label.title">
      <p>
        {{ '('
        }}<TriangleAlert
          :size="16"
          class="inline align-text-bottom"
          :color="'red'"
        />&nbsp;Honsetly, I prefer writing something locally with apps like obsidian, but I'm tyring
        to migrate some of my notes to here and share my thoughts with you. Looking forward to your
        feedback soon!{{ ' :)' }}
      </p>
    </PageHeader>

    <!-- Wiki -->
    <Section :title="blogSection.label.wikiTitle" class="mt-6 md:mt-8">
      <p v-if="published_notebooks.length === 0" class="measure text-muted-foreground">
        <span class="inline-flex items-center gap-2">
          <Construction class="size-5" />
          {{ blogSection.label.emptyLabel }}
        </span>
      </p>
      <ul
        v-else
        ref="containerRef"
        class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        :class="draggingIndex !== null && 'is-dragging'"
      >
        <li
          v-for="(notebook, index) in published_notebooks"
          :id="notebookId(notebook)"
          :key="notebook.title"
          class="scroll-mt-28"
          :class="index === draggingIndex && 'is-dragging'"
        >
          <NotebookCard :notebook="notebook" />
        </li>
      </ul>
    </Section>
  </PageShell>
</template>

<style scoped>
li {
  cursor: grab;
  touch-action: none;
}

/* Keep the cursor consistent when the pointer sits on a sibling or in a gap. */
ul.is-dragging,
ul.is-dragging > li {
  cursor: grabbing;
}

/* The slot the card came from. `outline` so the box does not affect layout. */
li.is-dragging {
  border-radius: var(--radius-xl);
  outline: 1px dashed var(--ring);
  outline-offset: -1px;
  background: var(--muted);
}

li.is-dragging :deep([data-slot='card']) {
  visibility: hidden;
}

/* The clone that follows the pointer. */
li.is-drag-ghost :deep([data-slot='card']) {
  border-color: var(--ring);
  box-shadow: 0 12px 28px rgb(0 0 0 / 0.18);
}
</style>
