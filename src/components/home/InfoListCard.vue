<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

defineProps<{
  title: string
  description: string
  items: string[]
}>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul class="flex flex-col gap-3 text-muted-foreground">
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </CardContent>
  </Card>
</template>

