export type Blog = {
  label: {
    eyebrow: string
    title: string
    postsTitle: string
    readMoreLabel: string
    emptyLabel: string
    pageContentsLabel: string
  }
}

export const blogs: Record<SiteLocale, Blog> = {
  en: {
    label: {
      eyebrow: 'Blog',
      title: 'Blog',
      postsTitle: 'Posts',
      readMoreLabel: 'Read more',
      emptyLabel: 'Under construction, coming soon...',
      pageContentsLabel: 'On this page',
    },
  },
  zh: {
    label: {
      eyebrow: '博客',
      title: '博客',
      postsTitle: '文章',
      readMoreLabel: '阅读全文',
      emptyLabel: '还没有内容。',
      pageContentsLabel: '本页目录',
    },
  },
}

export default blogs
