export type ProfileLink = {
  label: string
  href: string
}

export type Honor = {
  year: string
  title: string
  detail?: string
}

export type Identity = {
  name: string
  headline: string
  credential: string
  location: string
  avatarAlt: string
}

export type SkillLevel = {
  label: string
  value: number
}

export const email = 'gaodings@163.com'
export const cvHref = '/cv/Ding-Gao-CV.pdf'
export const avatarSrc = '/Avatar.webp'

export const skillLevels: SkillLevel[] = [
  { label: 'Python', value: 85 },
  { label: 'TypeScript', value: 82 },
  { label: 'C++', value: 70 },
]

export const profileLinks: ProfileLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ding-gao-995147349/',
  },
  {
    label: 'Yuque Portfolio',
    href: 'https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer?singleDoc',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DingGao1124',
  },
]

export const identity: Record<SiteLocale, Identity> = {
  zh: {
    name: '高鼎',
    headline: '全栈工程师与机器人研究者',
    credential: '东华大学智能制造工程硕士',
    location: '中国上海',
    avatarAlt: '高鼎的个人头像',
  },
  en: {
    name: 'Ding Gao',
    headline: 'Full-Stack Engineer & Robotics Researcher',
    credential: 'M.Eng. in Intelligent Manufacturing, Donghua University',
    location: 'Shanghai, China',
    avatarAlt: 'Profile avatar of Ding Gao',
  },
}

export const summaryTags: Record<SiteLocale, string[]> = {
  zh: ['数字孪生', 'LLM 智能体', '具身智能', '机器人', '全栈开发'],
  en: ['Digital Twins', 'LLM Agents', 'Embodied AI', 'Robotics', 'Full-Stack'],
}

export const honors: Record<SiteLocale, Honor[]> = {
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
      year: '2020–2024',
      title: '校级一等奖学金、二等奖学金与学业奖学金',
      detail: '本科阶段五次获奖；硕士阶段各获一次一等奖学金与二等奖学金',
    },
    {
      year: '2022–2023',
      title: '三好学生与优秀毕业生',
      detail: '南京工程学院',
    },
  ],
  en: [
    {
      year: '2025',
      title: 'Excellence Award, 12th NVIDIA Sky Hackathon (2nd place)',
      detail: 'Embodied-AI tool recommendation robot for battery disassembly',
    },
    {
      year: '2023',
      title: 'National First Prize, National College Students Mathematics Competition',
    },
    {
      year: '2022',
      title: 'National First Prize, 6th National College Students Crane Creativity Competition',
    },
    {
      year: '2020–2024',
      title: 'First-class, second-class, and academic scholarships',
      detail: 'Five undergraduate awards and two graduate awards',
    },
    {
      year: '2022–2023',
      title: 'University Merit Student and Outstanding Graduate',
      detail: 'Nanjing Institute of Technology',
    },
  ],
}
