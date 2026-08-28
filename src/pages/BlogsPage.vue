<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import PageHeader from '@/components/site/PageHeader.vue'
import PageShell from '@/components/site/PageShell.vue'
import Section from '@/components/site/Section.vue'
import TimelineEntry from '@/components/site/TimelineEntry.vue'
import { useSiteLocale } from '@/hooks/useSiteLocale'

type BlogPost = {
  title: string
  date: string
  href: string
  description?: string
}

const { page } = useData()
const { messages, path } = useSiteLocale()

const m = computed(() => messages.value.blogs)
const posts = computed(() => (page.value.frontmatter.posts ?? []) as BlogPost[])
const tocItems = computed(() =>
  posts.value.map((post, index) => ({ id: `post-${index}`, label: post.title })),
)
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="messages.pageContentsLabel">
    <PageHeader :eyebrow="m.eyebrow" :title="m.title" :lede="m.lede" />

    <Section class="mt-16 md:mt-20">
      <p v-if="posts.length === 0" class="measure text-muted-foreground">{{ m.emptyLabel }}</p>
      <TimelineEntry
        v-for="(post, index) in posts"
        :key="post.href"
        :id="`post-${index}`"
        :period="post.date"
        :title="post.title"
        :summary="post.description"
        :links="[{ label: m.readMoreLabel, href: path(post.href) }]"
      />
    </Section>
  </PageShell>
</template>
