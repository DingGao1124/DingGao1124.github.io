import { news, type NewsItem } from './common/news'
import { techTopics, type TechTopics } from './common/skills'

export type ProfileLink = {
  label: string
  href: string
  iconSize?: number
  iconSrc?: string
}

type Identity = {
  name: string
  headline: string
  currentPosition: string
  employer: ProfileLink
  location: string
  avatarAlt: string
  intro: string[]
  researchKeywords: string[]
}

export type HomePublication = {
  id: string
  title: string
  venue: {
    name: string
    abbreviation?: string
  }
  year: string
  identifier: string
  links: {
    href: string
  }[]
}

export type HomeExperience = {
  id: string
  organization: string
  role: string
  period: string
  logoSrc?: string
  logoSize?: number
}

export type Profile = {
  email: string
  phone: string
  phoneHref: string
  avatarSrc: string
  cvHref: string
  techGroups: TechTopics
  identity: Identity
  profileLinks: ProfileLink[]
  label: {
    eyebrow: string
    title: string
    techTitle: string
    aboutTitle: string
    newsTitle: string
    publicationTitle: string
    experienceTitle: string
    acknowledgementsTitle: string
    viewAll: string
    showMoreLabel: string
    showLessLabel: string
    emailLabel: string
    phoneLabel: string
    viewCvLabel: string
    pageContentsLabel: string
  }
  content: {
    news: NewsItem[]
    publications: HomePublication[]
    experiences: HomeExperience[]
  }
}

const AVATAR_SRC = '/avatar.jpg'
const CV_HREF = '/cv/Ding_Gao_CV.pdf'

export const profile: Record<SiteLocale, Profile> = {
  en: {
    email: 'gaodings@163.com',
    phone: '+86 159 6295 6251',
    phoneHref: 'tel:+8615962956251',
    avatarSrc: AVATAR_SRC,
    cvHref: CV_HREF,
    techGroups: techTopics['en'],
    identity: {
      name: 'Ding Gao',
      headline: 'AI Agent Engineer & Robotics Researcher',
      currentPosition: 'AI Agent Engineer at',
      employer: {
        label: '@bilibili',
        href: 'https://github.com/bilibili',
        iconSrc: '/company/bilibili.svg',
      },
      location: 'Shanghai, China',
      avatarAlt: 'Profile avatar of Ding Gao',
      intro: [
        'Hi there👋, my name is Ding Gao. I am an AI agent engineer and robotics researcher based in Shanghai. I recently completed my M.Eng. in Intelligent Manufacturing at Donghua University and now work as a software engineer at Bilibili.',
        'I am interested in how robots can perceive, reason, and act reliably in real-world environments. My recent work explores LLM-enabled flexible manufacturing, multimodal industrial disassembly, and task-planning agents for robot automation.',
      ],
      researchKeywords: [
        'Digital Twin',
        'LLM Multi-Agent Systems',
        'Robotics & Embodied AI',
        'Automation & Control',
      ],
    },
    profileLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/DingGao1124',
        iconSrc: '/media/github.svg',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ding-gao-995147349/',
        iconSrc: '/media/linkedin.svg',
      },
      {
        label: 'Videos',
        href: 'https://space.bilibili.com/441110980/upload/video',
        iconSize: 7,
        iconSrc: '/media/bilibili.svg',
      },
      {
        label: 'Portfolio',
        href: 'https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer',
        iconSrc: '/media/yuque.svg',
      },
    ],
    label: {
      eyebrow: 'About Me',
      title: 'About Me',
      techTitle: 'Tech proficiency',
      aboutTitle: 'About Me',
      newsTitle: 'Recent Events',
      publicationTitle: 'Recent Publications',
      experienceTitle: 'Work/Intern Experience',
      acknowledgementsTitle: 'Acknowledgements',
      viewAll: 'View all',
      showMoreLabel: 'Show more',
      showLessLabel: 'Show less',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      viewCvLabel: 'View CV',
      pageContentsLabel: 'On this page',
    },
    content: {
      news: news['en'],
      publications: [
        {
          id: 'self-evolving-digital-twins',
          title:
            'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach',
          venue: { name: 'Digital Engineering', abbreviation: 'DE' },
          year: '2026',
          identifier: '10.1016/j.dte.2026.100099',
          links: [{ href: 'https://doi.org/10.1016/j.dte.2026.100099' }],
        },
        {
          id: 'multi-cognitive-agent',
          title:
            'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly',
          venue: { name: 'Robotics and Computer-Integrated Manufacturing', abbreviation: 'RCIM' },
          year: '2026',
          identifier: '10.1016/j.rcim.2025.103207',
          links: [{ href: 'https://doi.org/10.1016/j.rcim.2025.103207' }],
        },
        {
          id: 'historical-vqa',
          title:
            'Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration',
          venue: { name: 'Journal of Manufacturing Systems', abbreviation: 'JMS' },
          year: '2025',
          identifier: '10.1016/j.jmsy.2025.10.005',
          links: [{ href: 'https://doi.org/10.1016/j.jmsy.2025.10.005' }],
        },
      ],
      experiences: [
        {
          id: 'bilibili-agent-engineer',
          organization: 'Bilibili',
          role: 'AI Agent Engineer',
          period: 'Jul 2026 - Present',
          logoSrc: '/company/bilibili.svg',
          logoSize: 7,
        },
        {
          id: 'tesla',
          organization: 'Tesla Gigafactory',
          role: 'Full-Stack Development Intern · R&D Department',
          period: 'Sep 2025 - Jan 2026',
          logoSrc: '/company/tesla.svg',
          logoSize: 5,
        },
        {
          id: 'abb',
          organization: 'ABB Robot Super Factory',
          role: 'Software Development Intern · Robotics Application Software · R&D Department',
          period: 'Jul 2025 - Sep 2025',
          logoSrc: '/company/abb.svg',
          logoSize: 6,
        },
        {
          id: 'bilibili',
          organization: 'Bilibili',
          role: 'Software Development Intern',
          period: 'Jun 2025 - Jul 2025',
          logoSrc: '/company/bilibili.svg',
          logoSize: 7,
        },
        {
          id: 'caerulean',
          organization: 'Caerulean AI Inc.',
          role: 'Full-Stack Developer Intern (Remote)',
          period: 'Dec 2024 - Apr 2025',
          logoSrc: '/company/caerulean-ai.svg',
          logoSize: 4,
        },
      ],
    },
  },
  zh: {
    email: 'gaodings@163.com',
    phone: '+86 159 6295 6251',
    phoneHref: 'tel:+8615962956251',
    avatarSrc: AVATAR_SRC,
    cvHref: CV_HREF,
    techGroups: techTopics['zh'],
    identity: {
      name: '高鼎',
      headline: '全栈工程师与机器人研究者',
      currentPosition: 'AI Agent 开发工程师，就职于',
      employer: {
        label: '@哔哩哔哩',
        href: 'https://github.com/bilibili',
        iconSrc: '/company/bilibili.svg',
      },
      location: '中国上海',
      avatarAlt: '高鼎的个人头像',
      intro: [
        '你好，我叫高鼎，是一名常驻上海的全栈工程师与机器人研究者。我已完成东华大学智能制造工程硕士学业，目前在哔哩哔哩担任软件工程师。',
        '我关注机器人如何在真实环境中可靠地感知、推理与执行。近期工作主要涉及 LLM 驱动的柔性制造、多模态工业拆解，以及面向机器人自动化的任务规划智能体。',
      ],
      researchKeywords: ['物理系统', '数字模型', '智能体', '机器人执行'],
    },
    profileLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/DingGao1124',
        iconSrc: '/media/github.svg',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ding-gao-995147349/',
        iconSrc: '/media/linkedin.svg',
      },
      {
        label: 'Portfolio',
        href: 'https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer',
        iconSrc: '/media/yuque.svg',
      },
    ],
    label: {
      eyebrow: '关于我',
      title: '关于我',
      techTitle: '技术熟练度',
      aboutTitle: '关于我',
      newsTitle: '动态',
      publicationTitle: '相关论文',
      experienceTitle: '工作/实习经历',
      acknowledgementsTitle: '致谢',
      viewAll: '查看全部',
      showMoreLabel: '展开',
      showLessLabel: '收起',
      emailLabel: '发送邮件',
      phoneLabel: '电话',
      viewCvLabel: '预览简历',
      pageContentsLabel: '本页目录',
    },
    content: {
      news: news['zh'],
      publications: [
        {
          id: 'self-evolving-digital-twins',
          title:
            'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach',
          venue: { name: 'Digital Engineering', abbreviation: 'DE' },
          year: '2026',
          identifier: '10.1016/j.dte.2026.100099',
          links: [{ href: 'https://doi.org/10.1016/j.dte.2026.100099' }],
        },
        {
          id: 'multi-cognitive-agent',
          title:
            'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly',
          venue: { name: 'Robotics and Computer-Integrated Manufacturing', abbreviation: 'RCIM' },
          year: '2026',
          identifier: '10.1016/j.rcim.2025.103207',
          links: [{ href: 'https://doi.org/10.1016/j.rcim.2025.103207' }],
        },
        {
          id: 'historical-vqa',
          title:
            'Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration',
          venue: { name: 'Journal of Manufacturing Systems', abbreviation: 'JMS' },
          year: '2025',
          identifier: '10.1016/j.jmsy.2025.10.005',
          links: [{ href: 'https://doi.org/10.1016/j.jmsy.2025.10.005' }],
        },
      ],
      experiences: [
        {
          id: 'bilibili-agent-engineer',
          organization: 'Bilibili',
          role: 'AI Agent 开发工程师',
          period: '2026.07-至今',
          logoSrc: '/company/bilibili.svg',
          logoSize: 8,
        },
        {
          id: 'tesla',
          organization: 'Tesla Gigafactory',
          role: '全栈开发实习生 · 研发部门',
          period: '2025.09-2026.01',
          logoSrc: '/company/tesla.svg',
        },
        {
          id: 'abb',
          organization: 'ABB Robot Super Factory',
          role: '机器人应用软件开发实习生 · 研发部门',
          period: '2025.07-2025.09',
          logoSrc: '/company/abb.svg',
          logoSize: 6,
        },
        {
          id: 'bilibili',
          organization: 'Bilibili',
          role: '软件开发实习生',
          period: '2025.06-2025.07',
          logoSrc: '/company/bilibili.svg',
          logoSize: 8,
        },
        {
          id: 'caerulean',
          organization: 'Caerulean AI Inc.',
          role: '全栈开发实习生（远程）',
          period: '2024.12-2025.04',
          logoSrc: '/company/caerulean-ai.svg',
          logoSize: 3,
        },
      ],
    },
  },
}

export default profile
