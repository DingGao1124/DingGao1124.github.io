<script setup lang="ts">
import { ExternalLinkIcon } from "@lucide/vue"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useSiteLocale } from "@/composables/useSiteLocale"
import type { Project } from "@/data/types"

defineProps<{ project: Project }>()

const { messages } = useSiteLocale()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ project.title }}</CardTitle>
      <CardDescription>
        {{ [project.period, project.role].filter(Boolean).join(" · ") || messages.projectFallbackMeta }}
      </CardDescription>
      <CardAction>
        <Badge variant="secondary">{{ project.category }}</Badge>
      </CardAction>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-4">
        <p class="leading-7">{{ project.description }}</p>
        <ul class="flex flex-col gap-2 text-muted-foreground">
          <li v-for="highlight in project.highlights" :key="highlight" class="leading-7">
            {{ highlight }}
          </li>
        </ul>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="item in project.tech" :key="item" variant="outline">
            {{ item }}
          </Badge>
        </div>
      </div>
    </CardContent>
    <CardFooter v-if="project.links?.length" class="flex flex-wrap gap-2">
      <Button v-for="link in project.links" :key="link.href" as-child size="sm" variant="outline">
        <a :href="link.href" rel="noreferrer" target="_blank">
          {{ link.label }}
          <ExternalLinkIcon data-icon="inline-end" />
        </a>
      </Button>
    </CardFooter>
  </Card>
</template>
