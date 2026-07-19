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
import type { LinkItem } from "@/data/types"

defineProps<{ links: LinkItem[] }>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>开放交流</CardTitle>
      <CardDescription>
        欢迎围绕数字孪生、具身智能、工业软件与智能制造研究进行交流。
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
          隐私说明：首版页面仅公开邮箱与外链，不展示手机号、年龄或详细住址。
        </p>
      </div>
    </CardContent>
  </Card>
</template>

