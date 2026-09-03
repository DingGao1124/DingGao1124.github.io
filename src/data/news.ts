export type NewsItem = {
  date: string
  text: string
  href?: string
  linkLabel?: string
}

export const news: Record<SiteLocale, NewsItem[]> = {
  zh: [
    {
      date: '2026.06',
      text: '我完成了东华大学智能制造工程硕士学位，毕业论文聚焦基于大语言模型多智能体系统的柔性产线数字孪生建模。',
    },
    {
      date: '2026',
      text: '我们的自演化数字孪生研究发表于 Digital Engineering。',
      href: 'https://doi.org/10.1016/j.dte.2026.100099',
      linkLabel: 'DOI',
    },
    {
      date: '2026',
      text: '我们的单机器人多认知智能体系统研究发表于 Robotics and Computer-Integrated Manufacturing。',
      href: 'https://doi.org/10.1016/j.rcim.2025.103207',
      linkLabel: 'DOI',
    },
    {
      date: '2025',
      text: '我们的人机协作历史视觉问答研究发表于 Journal of Manufacturing Systems。',
      href: 'https://doi.org/10.1016/j.jmsy.2025.10.005',
      linkLabel: 'DOI',
    },
    {
      date: '2025',
      text: '我们的工业拆卸具身智能机器人获得第十二届 NVIDIA Sky Hackathon 卓越奖（全国第二名）。',
    },
  ],
  en: [
    {
      date: 'Jun 2026',
      text: 'I completed my M.Eng. in Intelligent Manufacturing at Donghua University, with a thesis on LLM multi-agent digital twins for flexible production lines.',
    },
    {
      date: '2026',
      text: 'Our work on self-evolving digital twins was published in Digital Engineering.',
      href: 'https://doi.org/10.1016/j.dte.2026.100099',
      linkLabel: 'DOI',
    },
    {
      date: '2026',
      text: 'Our single-robot multi-cognitive agent architecture was published in Robotics and Computer-Integrated Manufacturing.',
      href: 'https://doi.org/10.1016/j.rcim.2025.103207',
      linkLabel: 'DOI',
    },
    {
      date: '2025',
      text: 'Our historical visual question answering work was published in the Journal of Manufacturing Systems.',
      href: 'https://doi.org/10.1016/j.jmsy.2025.10.005',
      linkLabel: 'DOI',
    },
    {
      date: '2025',
      text: 'Our embodied-AI robot for industrial disassembly received the Excellence Award (National Second Place) at the 12th NVIDIA Sky Hackathon.',
    },
  ],
}
