export type Blog = {
  label: {
    eyebrow: string
    title: string
    postsTitle: string
    readMoreLabel: string
    emptyLabel: string
    pageContentsLabel: string
  }
  content: {
    lede: string
  }
}

export const blogs: Record<SiteLocale, Blog> = {
  en: {
    label: {
      eyebrow: 'Blog',
      title: 'Blog',
      postsTitle: 'Posts',
      readMoreLabel: 'Read more',
      emptyLabel: 'Coming soon...',
      pageContentsLabel: 'On this page',
    },
    content: {
      lede: 'I write about robotics, agent systems, and the engineering work behind them.',
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
    content: {
      lede: '关于机器人、智能体系统与全栈工程的笔记与文章。',
    },
  },
}

export default blogs
