type LinkItem = {
  label: string
  href: string
  /** Optional key used to map to a Lucide icon in the content cards. */
  icon?: string
  /** Optional short description shown next to the label. */
  description?: string
}

export const email = "2231117@mail.dhu.edu.cn"

export const profileLinks: LinkItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ding-gao-995147349/",
    icon: "linkedin",
  },
  {
    label: "Yuque Portfolio",
    href: "https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer?singleDoc",
    icon: "book",
  },
  {
    label: "GitHub",
    href: "https://github.com/DingGao1124",
    icon: "github",
  },
]

export const summaryTags = [
  "Digital Twin",
  "LLM Agents",
  "Embodied AI",
  "Robotics",
  "Full-Stack",
]

export const honors: Record<SiteLocale, string[]> = {
  zh: [
    "一等奖学金、二等奖学金与学业奖学金多次",
    "全国大学生数学竞赛全国一等奖",
    "第六届中国大学生起重机创意大赛全国一等奖",
    "第十二届 NVIDIA Sky Hackathon 全国二等奖",
  ],
  en: [
    "First-, second-, and academic-tier scholarships on multiple occasions",
    "National First Prize, Chinese Mathematics Competitions for College Students",
    "National First Prize, 6th China University Student Crane Innovation Competition",
    "National Second Prize, 12th NVIDIA Sky Hackathon",
  ],
}
