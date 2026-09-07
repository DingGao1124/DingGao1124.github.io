<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { Construction } from '@lucide/vue'

import PageHeader from '@/components/common/PageHeader.vue'
import PageShell from '@/components/layout/PageShell.vue'
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

const blogSection = computed(() => messages.value.blogs)
const posts = computed(() => (page.value.frontmatter.posts ?? []) as BlogPost[])
const tocItems = computed(() =>
  posts.value.map((post, index) => ({
    id: `post-${index}`,
    label: post.title,
  })),
)
</script>

<template>
  <PageShell :toc-items="tocItems" :toc-label="blogSection.label.pageContentsLabel">
    <PageHeader
      :eyebrow="blogSection.label.eyebrow"
      :title="blogSection.label.title"
      :lede="blogSection.content.lede"
    />

    <Section :title="blogSection.label.postsTitle" class="mt-8 md:mt-10">
      <p v-if="posts.length === 0" class="measure text-muted-foreground">
        <span class="inline-flex items-center gap-2">
          <Construction class="size-5" />
          {{ blogSection.label.emptyLabel }}
        </span>
      </p>
      <TimelineEntry
        v-for="(post, index) in posts"
        :key="post.href"
        :id="`post-${index}`"
        :period="post.date"
        :title="post.title"
        :summary="post.description"
        :links="[{ label: blogSection.label.readMoreLabel, href: path(post.href) }]"
      />
    </Section>
  </PageShell>
</template>
