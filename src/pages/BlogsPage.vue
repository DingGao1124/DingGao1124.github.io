<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { Construction } from '@lucide/vue'

import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/common/PageShell.vue'
import Section from '@/components/common/Section.vue'
import TimelineEntry from '@/components/common/TimelineEntry.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

type BlogPost = {
  title: string
  date: string
  href: string
  description?: string
}

const { page } = useData()
const { messages, path } = useSiteLocale()

const blogs = computed(() => messages.value.blogs)
const posts = computed(() => (page.value.frontmatter.posts ?? []) as BlogPost[])
const tocItems = computed(() =>
  posts.value.map((post, index) => ({ id: `post-${index}`, label: post.title })),
)
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="blogs.eyebrow" :title="blogs.title" :lede="blogs.lede" />

    <Section class="mt-8 md:mt-10">
      <p v-if="posts.length === 0" class="measure text-muted-foreground">
        <span class="inline-flex items-center gap-2">
          <Construction class="size-5" />
          {{ blogs.emptyLabel }}
        </span>
      </p>
      <TimelineEntry
        v-for="(post, index) in posts"
        :key="post.href"
        :id="`post-${index}`"
        :period="post.date"
        :title="post.title"
        :summary="post.description"
        :links="[{ label: blogs.readMoreLabel, href: path(post.href) }]"
      />
    </Section>
  </PageShell>
</template>
