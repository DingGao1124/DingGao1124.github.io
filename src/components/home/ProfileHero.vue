<script setup lang="ts">
import { ExternalLinkIcon, MailIcon } from "@lucide/vue"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { LinkItem } from "@/data/types"

defineProps<{
  links: LinkItem[]
  tags: string[]
}>()
</script>

<template>
  <section id="profile" class="scroll-mt-24">
    <div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
      <div class="flex max-w-3xl flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h1 class="font-heading text-4xl font-semibold md:text-5xl">高鼎</h1>
          <p class="text-xl text-muted-foreground">
            东华大学智能制造硕士，关注数字孪生、LLM 多智能体系统、具身智能机器人与工业软件。
          </p>
        </div>
        <p class="leading-8 text-muted-foreground">
          我拥有机械工程与全栈开发的交叉背景，目前主要研究面向柔性制造和人机协作场景的智能系统。近期工作集中在虚实产线同步、LLM 驱动的多智能体建模、机器人任务规划、RAG 检索增强和语音交互等方向。
        </p>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="tag in tags" :key="tag" variant="secondary">
            {{ tag }}
          </Badge>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button as-child>
            <a href="mailto:2231117@mail.dhu.edu.cn">
              <MailIcon data-icon="inline-start" />
              2231117@mail.dhu.edu.cn
            </a>
          </Button>
          <Button v-for="link in links" :key="link.href" as-child variant="outline">
            <a :href="link.href" rel="noreferrer" target="_blank">
              {{ link.label }}
              <ExternalLinkIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>

      <Card class="md:w-72">
        <CardHeader>
          <div class="flex items-center gap-3">
            <Avatar class="size-14">
              <AvatarImage
                alt="Ding Gao"
                src="https://cdn.nlark.com/yuque/0/2023/png/38894193/1693753094896-avatar/8d1234a6-769d-4206-9c43-9530c7153476.png"
              />
              <AvatarFallback>DG</AvatarFallback>
            </Avatar>
            <div class="flex flex-col gap-1">
              <CardTitle>个人 Profile</CardTitle>
              <CardDescription>Shanghai, China</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul class="flex flex-col gap-2 text-muted-foreground">
            <li>硕士：东华大学智能制造</li>
            <li>本科：南京工程学院机械工程</li>
            <li>语言：IELTS 7.0</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

