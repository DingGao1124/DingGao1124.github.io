export type Education = {
  school: string
  degree: string
  major: string
  period: string
  location?: string
}

export const education: Record<SiteLocale, Education[]> = {
  zh: [
    {
      school: "东华大学",
      degree: "智能制造 · 硕士",
      major: "",
      period: "2023.09 - 至今",
      location: "上海",
    },
    {
      school: "南京工程学院",
      degree: "机械工程 · 本科",
      major: "",
      period: "2019.09 - 2023.06",
      location: "南京",
    },
  ],
  en: [
    {
      school: "Donghua University",
      degree: "Intelligent Manufacturing · M.S.",
      major: "",
      period: "Sep 2023 - Present",
      location: "Shanghai",
    },
    {
      school: "Nanjing Institute of Technology",
      degree: "Mechanical Engineering · B.E.",
      major: "",
      period: "Sep 2019 - Jun 2023",
      location: "Nanjing",
    },
  ],
}
