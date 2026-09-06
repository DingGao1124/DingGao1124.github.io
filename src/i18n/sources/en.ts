import profile from '@/data/profile'
import research from '@/data/research'
import publications from '@/data/publications'
import experiences from '@/data/experiences'
import projects from '@/data/projects'
import blogs from '@/data/blogs'
import contact from '@/data/contact'
import skills from '@/data/common/skills'

export default {
  siteName: 'Ding Gao',
  primaryNavigationLabel: 'Primary navigation',
  switchLanguageLabel: 'Switch language',
  skipToContentLabel: 'Skip to content',
  returnToTopLabel: 'Return to top',
  switchToDarkLabel: 'Switch to dark theme',
  switchToLightLabel: 'Switch to light theme',
  navigation: [
    { id: 'profile', label: 'Profile', href: '/' },
    { id: 'research', label: 'Research', href: '/research/' },
    { id: 'publications', label: 'Publications', href: '/publications/' },
    { id: 'experience', label: 'Experience', href: '/experience/' },
    { id: 'projects', label: 'Projects', href: '/projects/' },
    { id: 'blogs', label: 'Blogs', href: '/blogs/' },
    { id: 'contact', label: 'Contact', href: '/contact/' },
  ] satisfies NavigationItem[],
  notFoundTitle: 'Page not found',
  notFoundDescription: 'The page you requested could not be found.',
  backHomeLabel: 'Back to home',
  footer: '©Ding Gao 2026. All rights reserved.',
  home: profile['en'],
  research: research['en'],
  publications: publications['en'],
  experience: { ...experiences['en'], skills: skills['en'] },
  projects: projects['en'],
  blogs: blogs['en'],
  contact: contact['en'],
}
