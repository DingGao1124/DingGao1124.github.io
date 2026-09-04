export type ProfileLink = {
  label: string
  href: string
  iconSrc?: string
}

export type Honor = {
  year: string
  title: string
  detail?: string
}

export type Identity = {
  name: string
  headline: string
  currentPosition: string
  employer: ProfileLink
  location: string
  avatarAlt: string
}

export const email = 'gaodings@163.com'
export const phone = '+86 159 6295 6251'
export const phoneHref = 'tel:+8615962956251'
export const cvHref = '/cv/Ding_Gao_CV.pdf'
export const avatarSrc = '/Avatar.png'

export const profileLinks: ProfileLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/DingGao1124',
    iconSrc: '/media/GitHub.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ding-gao-995147349/',
    iconSrc: '/media/Linkin.svg',
  },
  {
    label: 'Portfolio',
    href: 'https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer',
    iconSrc: '/media/Yuque.svg',
  },
]

export const identity: Record<SiteLocale, Identity> = {
  en: {
    name: 'Ding Gao',
    headline: 'Full-Stack Engineer & Robotics Researcher',
    currentPosition: 'Software Engineer at',
    employer: {
      label: '@bilibili',
      href: 'https://github.com/bilibili',
      iconSrc: '/company/BILIBILI.svg',
    },
    location: 'Shanghai, China',
    avatarAlt: 'Profile avatar of Ding Gao',
  },
  zh: {
    name: '高鼎',
    headline: '全栈工程师与机器人研究者',
    currentPosition: '软件工程师，就职于',
    employer: {
      label: '@哔哩哔哩',
      href: 'https://github.com/bilibili',
      iconSrc: '/company/BILIBILI.svg',
    },
    location: '中国上海',
    avatarAlt: '高鼎的个人头像',
  },
}

export const summaryTags: Record<SiteLocale, string[]> = {
  en: ['Digital Twins', 'LLM Agents', 'Embodied AI', 'Robotics', 'Full-Stack'],
  zh: ['数字孪生', 'LLM 智能体', '具身智能', '机器人', '全栈开发'],
}

export const honors: Record<SiteLocale, Honor[]> = {
  en: [
    {
      year: '2025',
      title: 'Excellence Award (National Second Place), 12th NVIDIA Sky Hackathon',
      detail: 'Embodied AI Robot based on LLM Multi-Agent Systems',
    },
    {
      year: '2023',
      title: 'National First Prize, National University Students Mathematics Competition',
      detail: 'Provincial First Prize, 2022; Provincial Third Prize, 2020',
    },
    {
      year: '2022',
      title:
        'National First Prize, 6th National University Students Mobile Crane Robot Competition',
    },
    {
      year: '2020–2026',
      title: 'University scholarships',
      detail:
        'Donghua University First-Class (Top 5%) (2x) and Second-Class (1x), 2023-2026; Nanjing Institute of Technology First-Class (Top 5%) (1x) and Second-Class (4x), 2020-2023',
    },
    {
      year: '2022–2023',
      title: 'University Merit Student, 2022 and 2023; Outstanding Graduate Award, 2023',
    },
  ],
  zh: [
    {
      year: '2025',
      title: '第十二届 NVIDIA Sky Hackathon 卓越奖（全国第二名）',
      detail: '面向退役电池拆卸的具身智能工具推荐机器人',
    },
    {
      year: '2023',
      title: '全国大学生数学竞赛全国一等奖',
    },
    {
      year: '2022',
      title: '第六届中国大学生起重机创意大赛全国一等奖',
    },
    {
      year: '2020–2026',
      title: '校级一等奖学金、二等奖学金与学业奖学金',
      detail:
        '东华大学一等奖学金 2 次、二等奖学金 1 次；南京工程学院一等奖学金 1 次、二等奖学金 4 次',
    },
    {
      year: '2022–2023',
      title: '三好学生与优秀毕业生',
      detail: '南京工程学院',
    },
  ],
}
