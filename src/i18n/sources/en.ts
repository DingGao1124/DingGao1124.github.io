import profile from '@/data/profile'
import publications from '@/data/publications'
import experiences from '@/data/experiences'
import projects from '@/data/projects'
import blogs from '@/data/blogs'
import contact from '@/data/contact'
import skills from '@/data/common/skills'

export default {
  header: {
    siteName: 'Ding Gao.SKILL',
    primaryNavigationLabel: 'Primary navigation',
    switchLanguageLabel: 'Switch language',
    switchToDarkLabel: 'Switch to dark mode',
    switchToLightLabel: 'Switch to light mode',
    navigation: [
      { id: 'profile', label: 'Profile', href: '/' },
      { id: 'publications', label: 'Publications', href: '/publications/' },
      { id: 'experience', label: 'Experience', href: '/experience/' },
      { id: 'projects', label: 'Projects', href: '/projects/' },
      { id: 'blogs', label: 'Blogs', href: '/blogs/' },
      { id: 'contact', label: 'Contact', href: '/contact/' },
    ] satisfies NavigationItem[],
  },
  skipToContentLabel: 'Skip to content',
  returnToTopLabel: 'Return to top',
  notFoundTitle: 'Page not found',
  notFoundDescription: 'The page you requested could not be found.',
  backHomeLabel: 'Back to home',
  mediaFailedLabel: 'Fail to display image.',
  pageContentsLabel: 'On this page',
  footer: {
    footerTag: '©Ding Gao 2026. All rights reserved.',
    viewsLabel: 'Site Views',
    statistics: 'Statistics powered by',
    loading: 'Loading...',
  },
  home: profile['en'],
  publications: publications['en'],
  experience: { ...experiences['en'], skills: skills['en'] },
  projects: projects['en'],
  blogs: blogs['en'],
  contact: contact['en'],
}
