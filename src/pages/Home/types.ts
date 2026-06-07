export type LinkItem = {
  label: string
  href: string
}

export type ResearchArea = {
  title: string
  description: string
}

export type Project = {
  title: string
  period?: string
  role?: string
  category: "研究" | "机器人" | "软件" | "硬件"
  description: string
  highlights: string[]
  tech: string[]
  links?: LinkItem[]
}

export type Experience = {
  organization: string
  role: string
  period: string
  summary: string
}

export type Publication = {
  title: string
  meta: string
  note?: string
}
