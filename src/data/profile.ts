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

type ResearchArea = {
  title: string
  description: string
}

type HomePublication = {
  id: string
  type: 'journal'
  title: string
  authors: {
    name: string
    equalContribution?: boolean
    correspondingAuthor?: boolean
  }[]
  venue: string
  year: string
  volume: string
  pages: string
  identifier: string
  links: {
    label: string
    href: string
  }[]
  media: {
    src?: string
    alt: string
    label: string
  }
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
    focusTitle: string
    publicationsTitle: string
    viewAll: string
    emailLabel: string
    phoneLabel: string
    viewCvLabel: string
    pageContentsLabel: string
  }
  content: {
    news: NewsItem[]
    researchAreas: ResearchArea[]
    publications: HomePublication[]
    summaryTags: string[]
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
      headline: 'Full-Stack Engineer & Robotics Researcher',
      currentPosition: 'Software Engineer at',
      employer: {
        label: '@bilibili',
        href: 'https://github.com/bilibili',
        iconSrc: '/company/bilibili.svg',
      },
      location: 'Shanghai, China',
      avatarAlt: 'Profile avatar of Ding Gao',
      intro: [
        'Hi there👋, my name is Ding Gao. I am a full-stack engineer and robotics researcher based in Shanghai. I recently completed my M.Eng. in Intelligent Manufacturing at Donghua University and now work as a software engineer at Bilibili.',
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
      focusTitle: 'Research focus',
      publicationsTitle: 'Selected publications',
      viewAll: 'View all',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      viewCvLabel: 'View CV',
      pageContentsLabel: 'On this page',
    },
    content: {
      news: news['en'],
      researchAreas: [
        {
          title: 'Robotics & Embodied AI',
          description:
            'I build intelligent systems that connect perception and reasoning to reliable action in the physical world.',
        },
        {
          title: 'Robot Perception, Planning & Control',
          description:
            'I combine vision-language models, segmentation, point-cloud grasping, and task planning in closed-loop robot systems.',
        },
        {
          title: 'Human-Robot Collaboration',
          description:
            'I study voice interaction, augmented reality, and industrial disassembly as settings for safer and more effective collaboration.',
        },
        {
          title: 'Digital Twins & Cyber-Physical Manufacturing',
          description:
            'I model the knowledge, behavior, and geometry of flexible production systems and connect agent reasoning to live production state.',
        },
      ],
      publications: [
        {
          id: 'self-evolving-digital-twins',
          type: 'journal',
          title:
            'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach',
          authors: [
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Xiaojian Wen', equalContribution: true },
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si' },
            { name: 'Cong Wang' },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: 'Digital Engineering',
          year: '2026',
          volume: '10',
          pages: '100099',
          identifier: '10.1016/j.dte.2026.100099',
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.dte.2026.100099' }],
          media: {
            alt: 'Placeholder for the digital-twin multi-agent architecture figure',
            label: 'Digital-twin agent architecture',
          },
        },
        {
          id: 'multi-cognitive-agent',
          type: 'journal',
          title:
            'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly',
          authors: [
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si', equalContribution: true },
            { name: 'Wenchao Li', equalContribution: true },
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: 'Robotics and Computer-Integrated Manufacturing',
          year: '2026',
          volume: '99',
          pages: '103207',
          identifier: '10.1016/j.rcim.2025.103207',
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.rcim.2025.103207' }],
          media: {
            alt: 'Placeholder for the single-robot multi-cognitive agent system figure',
            label: 'Multi-cognitive agent system',
          },
        },
        {
          id: 'historical-vqa',
          type: 'journal',
          title:
            'Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration',
          authors: [
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si', equalContribution: true },
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: 'Journal of Manufacturing Systems',
          year: '2025',
          volume: '83',
          pages: '546-556',
          identifier: '10.1016/j.jmsy.2025.10.005',
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.jmsy.2025.10.005' }],
          media: {
            alt: 'Placeholder for the AR-assisted human-robot collaboration workflow figure',
            label: 'AR-assisted HRC workflow',
          },
        },
      ],
      summaryTags: ['Digital Twins', 'LLM Agents', 'Embodied AI', 'Robotics', 'Full-Stack'],
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
      currentPosition: '软件工程师，就职于',
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
      focusTitle: '研究方向',
      publicationsTitle: '代表论文',
      viewAll: '查看全部',
      emailLabel: '发送邮件',
      phoneLabel: '电话',
      viewCvLabel: '预览简历',
      pageContentsLabel: '本页目录',
    },
    content: {
      news: news['zh'],
      researchAreas: [
        {
          title: '机器人与具身智能',
          description: '让智能体通过可靠的感知、推理与执行连接真实物理系统。',
        },
        {
          title: '机器人感知、规划与控制',
          description: '结合视觉语言模型、图像分割、点云抓取和任务规划构建机器人闭环系统。',
        },
        {
          title: '人机协作',
          description: '研究语音交互、增强现实和工业拆卸场景中的协作效率与执行可靠性。',
        },
        {
          title: '数字孪生与信息物理制造系统',
          description: '使用知识、行为与几何模型表达柔性产线，并将智能体推理连接到生产状态。',
        },
      ],
      publications: [
        {
          id: 'self-evolving-digital-twins',
          type: 'journal',
          title:
            'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach',
          authors: [
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Xiaojian Wen', equalContribution: true },
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si' },
            { name: 'Cong Wang' },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: 'Digital Engineering',
          year: '2026',
          volume: '10',
          pages: '100099',
          identifier: '10.1016/j.dte.2026.100099',
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.dte.2026.100099' }],
          media: {
            alt: '数字孪生多智能体架构论文配图占位',
            label: 'Digital-twin agent architecture',
          },
        },
        {
          id: 'multi-cognitive-agent',
          type: 'journal',
          title:
            'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly',
          authors: [
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si', equalContribution: true },
            { name: 'Wenchao Li', equalContribution: true },
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: 'Robotics and Computer-Integrated Manufacturing',
          year: '2026',
          volume: '99',
          pages: '103207',
          identifier: '10.1016/j.rcim.2025.103207',
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.rcim.2025.103207' }],
          media: {
            alt: '单机器人多认知智能体系统论文配图占位',
            label: 'Multi-cognitive agent system',
          },
        },
        {
          id: 'historical-vqa',
          type: 'journal',
          title:
            'Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration',
          authors: [
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si', equalContribution: true },
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: 'Journal of Manufacturing Systems',
          year: '2025',
          volume: '83',
          pages: '546-556',
          identifier: '10.1016/j.jmsy.2025.10.005',
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.jmsy.2025.10.005' }],
          media: {
            alt: '增强现实人机协作论文配图占位',
            label: 'AR-assisted HRC workflow',
          },
        },
      ],
      summaryTags: ['数字孪生', 'LLM 智能体', '具身智能', '机器人', '全栈开发'],
    },
  },
}

export default profile
