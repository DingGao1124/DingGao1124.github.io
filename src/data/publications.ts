export type PublicationType = 'journal' | 'patent'

export type PublicationLink = {
  label: string
  href: string
}

export type PublicationAuthor = {
  name: string
  equalContribution?: boolean
  correspondingAuthor?: boolean
}

export type PublicationMedia = {
  src?: string
  alt: string
  label: string
}

export type Publication = {
  id: string
  type: PublicationType
  title: string
  authors?: PublicationAuthor[]
  venue: string
  year?: string
  volume?: string
  pages?: string
  identifier?: string
  links?: PublicationLink[]
  media: PublicationMedia
}

const digitalTwinsAuthors: PublicationAuthor[] = [
  { name: 'Ding Gao', equalContribution: true },
  { name: 'Xiaojian Wen', equalContribution: true },
  { name: 'Jianhao Lv', equalContribution: true },
  { name: 'Jiahui Si' },
  { name: 'Cong Wang' },
  { name: 'Jinsong Bao', correspondingAuthor: true },
]

const multiCognitiveAuthors: PublicationAuthor[] = [
  { name: 'Jianhao Lv', equalContribution: true },
  { name: 'Jiahui Si', equalContribution: true },
  { name: 'Wenchao Li', equalContribution: true },
  { name: 'Ding Gao', equalContribution: true },
  { name: 'Jinsong Bao', correspondingAuthor: true },
]

const historicalVqaAuthors: PublicationAuthor[] = [
  { name: 'Jianhao Lv', equalContribution: true },
  { name: 'Jiahui Si', equalContribution: true },
  { name: 'Ding Gao', equalContribution: true },
  { name: 'Jinsong Bao', correspondingAuthor: true },
]

export const publications: Record<SiteLocale, Publication[]> = {
  en: [
    {
      id: 'self-evolving-digital-twins',
      type: 'journal',
      title:
        'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach',
      authors: digitalTwinsAuthors,
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
      authors: multiCognitiveAuthors,
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
      authors: historicalVqaAuthors,
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
    {
      id: 'conductive-concrete',
      type: 'patent',
      title: 'A Prefabricated Component System Based on Conductive Concrete',
      venue: 'Utility Model Patent',
      identifier: 'ZL 12601087',
      media: {
        alt: 'Placeholder for the conductive-concrete prefabricated component patent',
        label: 'Conductive concrete system',
      },
    },
    {
      id: 'adjustable-stage',
      type: 'patent',
      title: 'An Angle-Adjustable Stage and Its Use Method',
      venue: 'Invention Patent Application',
      identifier: 'CN 113702385 A',
      media: {
        alt: 'Placeholder for the angle-adjustable stage patent',
        label: 'Angle-adjustable stage',
      },
    },
  ],
  zh: [
    {
      id: 'self-evolving-digital-twins',
      type: 'journal',
      title:
        'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach',
      authors: digitalTwinsAuthors,
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
      authors: multiCognitiveAuthors,
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
      authors: historicalVqaAuthors,
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
    {
      id: 'conductive-concrete',
      type: 'patent',
      title: '一种基于导电混凝土的预制构件系统',
      venue: '实用新型专利',
      identifier: 'ZL 12601087',
      media: { alt: '导电混凝土预制构件系统专利配图占位', label: 'Conductive concrete system' },
    },
    {
      id: 'adjustable-stage',
      type: 'patent',
      title: '一种角度可调节舞台及其使用方法',
      venue: '发明专利申请',
      identifier: 'CN 113702385 A',
      media: { alt: '角度可调节舞台专利配图占位', label: 'Angle-adjustable stage' },
    },
  ],
}
