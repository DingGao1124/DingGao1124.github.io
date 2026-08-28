export type PublicationType = 'journal' | 'patent'

export type PublicationLink = {
  label: string
  href: string
}

export type Publication = {
  id: string
  type: PublicationType
  title: string
  authors?: string[]
  venue: string
  year?: string
  volume?: string
  pages?: string
  contribution: string
  status?: string
  identifier?: string
  links?: PublicationLink[]
}

export const publications: Record<SiteLocale, Publication[]> = {
  zh: [
    {
      id: 'historical-vqa',
      type: 'journal',
      title:
        'Historical visual question answering with large language model for Augmented Reality-assisted Human–Robot Collaboration',
      authors: ['Lv J', 'Si J', 'Gao D', 'et al.'],
      venue: 'Journal of Manufacturing Systems',
      year: '2025',
      volume: '83',
      pages: '546–556',
      contribution: '共同作者',
      identifier: '10.1016/J.JMSY.2025.10.005',
      links: [
        {
          label: 'DOI',
          href: 'https://doi.org/10.1016/J.JMSY.2025.10.005',
        },
      ],
    },
    {
      id: 'multi-cognitive-agent',
      type: 'journal',
      title:
        'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human–robot collaborative disassembly',
      authors: ['Lv J', 'Si J', 'Li W', 'Gao D', 'et al.'],
      venue: 'Robotics and Computer-Integrated Manufacturing',
      year: '2026',
      volume: '99',
      pages: '103207',
      contribution: '共同作者',
      identifier: '10.1016/J.RCIM.2025.103207',
      links: [
        {
          label: 'DOI',
          href: 'https://doi.org/10.1016/J.RCIM.2025.103207',
        },
      ],
    },
    {
      id: 'self-evolving-digital-twins',
      type: 'journal',
      title:
        'Self-Evolving Digital Twins in Flexible Manufacturing: A Large Language Model-Powered Multi-Agent Approach',
      authors: ['Ding Gao', 'et al.'],
      venue: 'Digital Engineering',
      contribution: '第一作者',
      status: 'Major revision',
    },
    {
      id: 'conductive-concrete',
      type: 'patent',
      title: '一种基于导电混凝土的预制构件系统',
      venue: '实用新型专利',
      contribution: '共同发明人',
      identifier: 'ZL 12601087',
    },
    {
      id: 'adjustable-stage',
      type: 'patent',
      title: '一种角度可调节舞台及其使用方法',
      venue: '发明专利',
      contribution: '共同发明人',
      identifier: 'CN113702385A',
    },
  ],
  en: [
    {
      id: 'historical-vqa',
      type: 'journal',
      title:
        'Historical visual question answering with large language model for Augmented Reality-assisted Human–Robot Collaboration',
      authors: ['Lv J', 'Si J', 'Gao D', 'et al.'],
      venue: 'Journal of Manufacturing Systems',
      year: '2025',
      volume: '83',
      pages: '546–556',
      contribution: 'Co-author',
      identifier: '10.1016/J.JMSY.2025.10.005',
      links: [
        {
          label: 'DOI',
          href: 'https://doi.org/10.1016/J.JMSY.2025.10.005',
        },
      ],
    },
    {
      id: 'multi-cognitive-agent',
      type: 'journal',
      title:
        'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human–robot collaborative disassembly',
      authors: ['Lv J', 'Si J', 'Li W', 'Gao D', 'et al.'],
      venue: 'Robotics and Computer-Integrated Manufacturing',
      year: '2026',
      volume: '99',
      pages: '103207',
      contribution: 'Co-author',
      identifier: '10.1016/J.RCIM.2025.103207',
      links: [
        {
          label: 'DOI',
          href: 'https://doi.org/10.1016/J.RCIM.2025.103207',
        },
      ],
    },
    {
      id: 'self-evolving-digital-twins',
      type: 'journal',
      title:
        'Self-Evolving Digital Twins in Flexible Manufacturing: A Large Language Model-Powered Multi-Agent Approach',
      authors: ['Ding Gao', 'et al.'],
      venue: 'Digital Engineering',
      contribution: 'First author',
      status: 'Major revision',
    },
    {
      id: 'conductive-concrete',
      type: 'patent',
      title: 'Precast Component System Based on Conductive Concrete',
      venue: 'Utility model patent',
      contribution: 'Co-inventor',
      identifier: 'ZL 12601087',
    },
    {
      id: 'adjustable-stage',
      type: 'patent',
      title: 'Angle-Adjustable Stage and Method of Use',
      venue: 'Invention patent',
      contribution: 'Co-inventor',
      identifier: 'CN113702385A',
    },
  ],
}
