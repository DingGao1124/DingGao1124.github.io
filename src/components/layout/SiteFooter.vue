<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { useSiteLocale } from '@/hooks/useSiteLocale'

const { messages } = useSiteLocale()
</script>

<template>
  <footer class="text-center">
    <Separator />
    <div class="mx-auto flex max-w-content flex-col gap-1 px-5 py-8 md:px-6">
      <p class="text-sm text-muted-foreground">{{ messages.footer }}</p>
    </div>
  </footer>
</template>
