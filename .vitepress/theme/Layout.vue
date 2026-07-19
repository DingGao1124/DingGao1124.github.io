<script setup lang="ts">
import { Content, useData } from "vitepress"

import { Separator } from "@/components/ui/separator"

const { page } = useData()

const navigation = [
  { href: "/#profile", label: "简介" },
  { href: "/#research", label: "研究方向" },
  { href: "/#projects", label: "精选项目" },
  { href: "/#publications", label: "论文与专利" },
  { href: "/#experience", label: "经历" },
  { href: "/#contact", label: "联系" },
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="sticky top-0 bg-background/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <a href="/#profile" class="font-heading text-sm font-medium">
          高鼎 / Ding Gao
        </a>
        <nav aria-label="主导航">
          <ul class="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <li v-for="item in navigation" :key="item.href">
              <a class="transition-colors hover:text-foreground" :href="item.href">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Separator />
    </header>

    <main>
      <div v-if="page.isNotFound" class="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center gap-3 px-5 md:px-8">
        <p class="text-sm text-muted-foreground">404</p>
        <h1 class="font-heading text-3xl font-semibold">页面不存在</h1>
        <a class="text-sm underline underline-offset-4" href="/">返回首页</a>
      </div>
      <Content v-else />
    </main>

    <footer class="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:px-8">
      <Separator />
      <p>© 2026 Ding Gao. Academic profile and selected portfolio.</p>
    </footer>
  </div>
</template>

