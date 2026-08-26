<script setup lang="ts">
import { useSiteLocale } from "@/hooks/useSiteLocale"

const { messages } = useSiteLocale()
</script>

<template>
  <footer class="border-t border-border">
    <div class="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-8 md:px-8">
      <p class="text-sm text-muted-foreground">{{ messages.footer }}</p>
    </div>
  </footer>
</template>
