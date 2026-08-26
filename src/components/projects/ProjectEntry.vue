<script setup lang="ts">
import { computed } from "vue"

import ContentEntry from "@/components/site/ContentEntry.vue"
import type { Project } from "@/data/types"

const props = defineProps<{ project: Project }>()

const meta = computed(() =>
  [props.project.period, props.project.role].filter(Boolean).join(" · "),
)

const content = computed(() => {
  const parts = [props.project.description]
  if (props.project.highlights.length) {
    parts.push(props.project.highlights.map((highlight) => `- ${highlight}`).join("\n"))
  }
  if (props.project.tech.length) {
    parts.push(`**Stack:** ${props.project.tech.join(" · ")}`)
  }
  return parts.join("\n\n")
})
</script>

<template>
  <ContentEntry
    :title="project.title"
    :meta="meta"
    :content="content"
    :links="project.links"
    :images="project.images"
  />
</template>
