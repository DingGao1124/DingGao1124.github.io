<script setup lang="ts">
import Tag from "@/components/site/Tag.vue"
import type { Project } from "@/data/types"

defineProps<{ project: Project }>()

function meta(project: Project) {
  return [project.period, project.role].filter(Boolean).join(" · ")
}
</script>

<template>
  <article class="py-6">
    <div class="flex flex-col gap-1.5">
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 class="font-serif text-xl font-medium">{{ project.title }}</h3>
        <span v-if="project.category" class="eyebrow">{{ project.category }}</span>
      </div>
      <p v-if="meta(project)" class="font-mono text-xs text-muted-foreground">{{ meta(project) }}</p>
    </div>

    <p class="mt-3 measure text-card-foreground">{{ project.description }}</p>

    <ul v-if="project.highlights.length" class="mt-4 flex flex-col gap-2">
      <li v-for="highlight in project.highlights" :key="highlight" class="flex gap-3 text-muted-foreground">
        <span class="mt-2.5 h-px w-3 shrink-0 bg-border" />
        <span class="measure">{{ highlight }}</span>
      </li>
    </ul>

    <div v-if="project.tech.length" class="mt-5 flex flex-wrap gap-2">
      <Tag v-for="item in project.tech" :key="item" :label="item" />
    </div>

    <div v-if="project.links?.length" class="mt-5 flex flex-wrap gap-x-5 gap-y-1">
      <a
        v-for="link in project.links"
        :key="link.href"
        class="link text-sm"
        :href="link.href"
        rel="noreferrer"
        target="_blank"
      >
        {{ link.label }} →
      </a>
    </div>
  </article>
</template>
