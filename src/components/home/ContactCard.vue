<script setup lang="ts">
import { ExternalLinkIcon, MailIcon } from "@lucide/vue"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useSiteLocale } from "@/composables/useSiteLocale"
import type { LinkItem } from "@/data/types"

defineProps<{ links: LinkItem[] }>()

const { messages } = useSiteLocale()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ messages.contact.title }}</CardTitle>
      <CardDescription>
        {{ messages.contact.description }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-2">
          <Button as-child>
            <a href="mailto:2231117@mail.dhu.edu.cn">
              <MailIcon data-icon="inline-start" />
              Email
            </a>
          </Button>
          <Button v-for="link in links" :key="link.href" as-child variant="outline">
            <a :href="link.href" rel="noreferrer" target="_blank">
              {{ link.label }}
              <ExternalLinkIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>
        <Separator />
        <p class="text-sm text-muted-foreground">
          {{ messages.contact.privacy }}
        </p>
      </div>
    </CardContent>
  </Card>
</template>
