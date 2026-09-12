import profile from '@/data/profile'
import publications from '@/data/publications'
import experiences from '@/data/experiences'
import projects from '@/data/projects'
import blogs from '@/data/blogs'
import contact from '@/data/contact'
import skills from '@/data/common/skills'

export default {
  header: {
    siteName: '高鼎 / Ding Gao.SKILL',
    primaryNavigationLabel: '主导航',
    switchLanguageLabel: '切换语言',
    switchToDarkLabel: '切换到深色主题',
    switchToLightLabel: '切换到浅色主题',
    navigation: [
      { id: 'profile', label: '简介', href: '/' },
      { id: 'publications', label: '成果', href: '/publications/' },
      { id: 'experience', label: '经历', href: '/experience/' },
      { id: 'projects', label: '项目', href: '/projects/' },
      { id: 'blogs', label: '博客', href: '/blogs/' },
      { id: 'contact', label: '联系', href: '/contact/' },
    ] satisfies NavigationItem[],
  },
  skipToContentLabel: '跳到主要内容',
  returnToTopLabel: '返回顶部',
  notFoundTitle: '页面不存在',
  notFoundDescription: '你请求的页面不存在。',
  backHomeLabel: '返回首页',
  footer: {
    footerTag: '©高鼎 · 2026',
    viewsLabel: '网站访问量',
    statistics: '数据统计提供方：',
    loading: '加载中...',
  },
  home: profile['zh'],
  publications: publications['zh'],
  experience: { ...experiences['zh'], skills: skills['zh'] },
  projects: projects['zh'],
  blogs: blogs['zh'],
  contact: contact['zh'],
}
