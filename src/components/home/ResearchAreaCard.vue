<script setup lang="ts">
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ResearchArea } from "@/data/types"

defineProps<{ area: ResearchArea }>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ area.title }}</CardTitle>
      <CardDescription>{{ area.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <Badge variant="outline">Research Area</Badge>
    </CardContent>
  </Card>
</template>

