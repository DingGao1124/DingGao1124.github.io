export type Blog = {
  label: {
    eyebrow: string
    title: string
    postsTitle: string
    emptyLabel: string
    privateLabel: string
    pageContentsLabel: string
  }
}

export const blogs: Record<SiteLocale, Blog> = {
  en: {
    label: {
      eyebrow: 'Blog',
      title: 'Blog',
      postsTitle: 'Posts',
      emptyLabel: 'Under construction, coming soon...',
      privateLabel: 'Private',
      pageContentsLabel: 'On this page',
    },
  },
  zh: {
    label: {
      eyebrow: '博客',
      title: '博客',
      postsTitle: '文章',
      emptyLabel: '还没有内容。',
      privateLabel: '私密',
      pageContentsLabel: '本页目录',
    },
  },
}

export default blogs
