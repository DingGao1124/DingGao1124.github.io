<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Experience } from "@/data/types"

defineProps<{ experience: Experience }>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ experience.organization }}</CardTitle>
      <CardDescription>
        {{ experience.role }} · {{ experience.period }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p class="leading-7 text-muted-foreground">{{ experience.summary }}</p>
    </CardContent>
  </Card>
</template>

