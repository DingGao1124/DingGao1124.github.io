export type LinkItem = {
  label: string
  href: string
  /** Optional key used to map to a Lucide icon in the content cards. */
  icon?: string
  /** Optional short description shown next to the label. */
  description?: string
}


export type ResearchArea = {
  title: string
  description: string
}

export type ProjectCategory =
  | "Research"
  | "Robotics"
  | "Software"
  | "Hardware"
  | "研究"
  | "机器人"
  | "软件"
  | "硬件"

export type Project = {
  title: string
  period?: string
  role?: string
  category: ProjectCategory
  description: string
  highlights: string[]
  tech: string[]
  links?: LinkItem[]
  images?: string[]
}

export type Experience = {
  organization: string
  role: string
  period: string
  summary: string
}

export type Education = {
  school: string
  degree: string
  period: string
  location?: string
}

export type PublicationType = "journal" | "patent"

export type Publication = {
  title: string
  meta: string
  note?: string
  type?: PublicationType
  links?: LinkItem[]
  images?: string[]
}
