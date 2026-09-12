export type HonorType = 'competition' | 'scholarship' | 'honor'

export type HonorRecord = {
  year: string
  title: string
  detail?: string
  type: HonorType
}

export const honors: Record<SiteLocale, HonorRecord[]> = {
  en: [
    {
      year: '2025',
      title: 'Excellence Award (National Second Place), 12th NVIDIA Sky Hackathon',
      detail: 'Embodied AI Robot based on LLM Multi-Agent Systems',
      type: 'competition',
    },
    {
      year: '2023',
      title: 'National First Prize, National University Students Mathematics Competition',
      detail: 'Provincial First Prize, 2022; Provincial Third Prize, 2020',
      type: 'competition',
    },
    {
      year: '2023-2026',
      title: 'Donghua University scholarships',
      detail: 'First-Class Scholarship (Top 5%) (2x); Second-Class Scholarship (1x)',
      type: 'scholarship',
    },
    {
      year: '2022',
      title:
        'National First Prize, 6th National University Students Mobile Crane Robot Competition',
      type: 'competition',
    },
    {
      year: '2022-2023',
      title: 'University Merit Student, 2022 and 2023; Outstanding Graduate Award, 2023',
      type: 'honor',
    },
    {
      year: '2020-2023',
      title: 'Nanjing Institute of Technology scholarships',
      detail: 'First-Class Scholarship (Top 5%) (1x); Second-Class Scholarship (4x)',
      type: 'scholarship',
    },
  ],
  zh: [
    {
      year: '2025',
      title: '第十二届 NVIDIA Sky Hackathon 卓越奖（全国第二名）',
      detail: '面向退役电池拆卸的具身智能工具推荐机器人',
      type: 'competition',
    },
    {
      year: '2023',
      title: '全国大学生数学竞赛全国一等奖',
      detail: '省级一等奖（2022）与省级三等奖（2020）',
      type: 'competition',
    },
    {
      year: '2023–2026',
      title: '东华大学奖学金',
      detail: '一等奖学金（Top 5%）2 次、二等奖学金 1 次',
      type: 'scholarship',
    },
    {
      year: '2022',
      title: '第六届全国大学生起重机创意大赛全国一等奖',
      type: 'competition',
    },
    {
      year: '2022–2023',
      title: '三好学生与优秀毕业生',
      detail: '南京工程学院',
      type: 'honor',
    },
    {
      year: '2020–2023',
      title: '南京工程学院奖学金',
      detail: '一等奖学金（Top 5%）1 次、二等奖学金 4 次',
      type: 'scholarship',
    },
  ],
}

export default honors
