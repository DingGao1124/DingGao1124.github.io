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
  intro: string[]
  systemsThread: string[]
}

export const email = 'gaodings@163.com'
export const phone = '+86 159 6295 6251'
export const phoneHref = 'tel:+8615962956251'
export const cvHref = '/cv/Ding_Gao_CV.pdf'
export const avatarSrc = '/avatar.jpg'

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
    intro: [
      'Hi, my name is Ding Gao. I am a full-stack engineer and robotics researcher based in Shanghai. I recently completed my M.Eng. in Intelligent Manufacturing at Donghua University and now work as a software engineer at Bilibili.',
      'I am interested in how robots can perceive, reason, and act reliably in real-world environments. My recent work explores LLM-enabled flexible manufacturing, multimodal industrial disassembly, and task-planning agents for robot automation.',
    ],
    systemsThread: ['Physical systems', 'Digital models', 'Intelligent agents', 'Robot action'],
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
    intro: [
      '你好，我叫高鼎，是一名常驻上海的全栈工程师与机器人研究者。我已完成东华大学智能制造工程硕士学业，目前在哔哩哔哩担任软件工程师。',
      '我关注机器人如何在真实环境中可靠地感知、推理与执行。近期工作主要涉及 LLM 驱动的柔性制造、多模态工业拆解，以及面向机器人自动化的任务规划智能体。',
    ],
    systemsThread: ['物理系统', '数字模型', '智能体', '机器人执行'],
  },
}

export const summaryTags: Record<SiteLocale, string[]> = {
  en: ['Digital Twins', 'LLM Agents', 'Embodied AI', 'Robotics', 'Full-Stack'],
  zh: ['数字孪生', 'LLM 智能体', '具身智能', '机器人', '全栈开发'],
}

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
