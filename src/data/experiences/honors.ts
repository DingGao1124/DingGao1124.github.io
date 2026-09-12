export type HonorRecord = {
  year: string
  title: string
  detail?: string
}

export const honors: Record<SiteLocale, HonorRecord[]> = {
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

export default honors
