<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Publication } from "@/data/types"

defineProps<{ publication: Publication }>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ publication.title }}</CardTitle>
      <CardDescription>{{ publication.meta }}</CardDescription>
    </CardHeader>
    <CardContent v-if="publication.note">
      <p class="text-muted-foreground">{{ publication.note }}</p>
    </CardContent>
  </Card>
</template>

