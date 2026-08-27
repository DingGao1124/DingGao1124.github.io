type LinkItem = {
  label: string
  href: string
  /** Optional key used to map to a Lucide icon in the content cards. */
  icon?: string
  /** Optional short description shown next to the label. */
  description?: string
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

export const publications: Record<SiteLocale, Publication[]> = {
  zh: [
    {
      title:
        "Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration",
      meta: "Journal of Manufacturing Systems · 2025",
      note: "DOI: 10.1016/J.JMSY.2025.10.005",
      type: "journal",
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1016/J.JMSY.2025.10.005",
          icon: "doi",
        },
      ],
    },
    {
      title:
        "Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly",
      meta: "Robotics and Computer-Integrated Manufacturing · 2026",
      note: "DOI: 10.1016/J.RCIM.2025.103207",
      type: "journal",
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1016/J.RCIM.2025.103207",
          icon: "doi",
        },
      ],
    },
    {
      title:
        "Self-Evolving Digital Twins in Flexible Manufacturing: A Large Language Model-Powered Multi-Agent Approach",
      meta: "Digital Engineering · First author",
      note: "Status: Major Revision.",
      type: "journal",
    },
    {
      title: "一种基于导电混凝土的预制构件系统",
      meta: "实用新型专利 · 共同发明人",
      note: "Patent No. ZL 12601087.",
      type: "patent",
    },
    {
      title: "一种角度可调节舞台及其使用方法",
      meta: "发明专利 · 共同发明人",
      note: "Publication No. CN113702385A.",
      type: "patent",
    },
  ],
  en: [
    {
      title:
        "Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration",
      meta: "Journal of Manufacturing Systems · 2025",
      note: "DOI: 10.1016/J.JMSY.2025.10.005",
      type: "journal",
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1016/J.JMSY.2025.10.005",
          icon: "doi",
        },
      ],
    },
    {
      title:
        "Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly",
      meta: "Robotics and Computer-Integrated Manufacturing · 2026",
      note: "DOI: 10.1016/J.RCIM.2025.103207",
      type: "journal",
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1016/J.RCIM.2025.103207",
          icon: "doi",
        },
      ],
    },
    {
      title:
        "Self-Evolving Digital Twins in Flexible Manufacturing: A Large Language Model-Powered Multi-Agent Approach",
      meta: "Digital Engineering · First author",
      note: "Status: Major Revision.",
      type: "journal",
    },
    {
      title: "Precast Component System Based on Conductive Concrete",
      meta: "Utility model patent · Co-inventor",
      note: "Patent No. ZL 12601087.",
      type: "patent",
    },
    {
      title: "Angle-Adjustable Stage and Method of Use",
      meta: "Invention patent · Co-inventor",
      note: "Publication No. CN113702385A.",
      type: "patent",
    },
  ],
}
