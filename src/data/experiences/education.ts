export type EducationRecord = {
  school: string
  degree: string
  period: string
  location: string
  gpa: string
  rank?: string
  thesis?: string
  logo: {
    src: string
    size?: number
  }
}

export const education: Record<SiteLocale, EducationRecord[]> = {
  en: [
    {
      school: 'Donghua University',
      degree: 'Master of Engineering in Intelligent Manufacturing',
      period: 'Sep 2023-Jun 2026',
      location: 'Shanghai',
      gpa: '3.93/4.0',
      thesis:
        'Digital Twin Modeling Method for Flexible Production Lines Based on Large Language Model Multi-Agent Systems',
      logo: { src: '/university/dhu.png', size: 6 },
    },
    {
      school: 'Nanjing Institute of Technology',
      degree: 'Bachelor of Engineering in Mechanical Engineering',
      period: 'Sep 2019-Jun 2023',
      location: 'Nanjing',
      gpa: '3.77/4.0 (last two years)',
      rank: '4/99',
      thesis: 'Development of a 3-DOF Ball Screw Defect Detection Platform',
      logo: { src: '/university/njit.png', size: 6 },
    },
  ],
  zh: [
    {
      school: '东华大学',
      degree: '智能制造 · 工程硕士',
      period: '2023.09–2026.06',
      location: '上海',
      gpa: '3.93 / 4.0',
      thesis: '基于大语言模型多智能体系统的柔性产线数字孪生建模方法',
      logo: { src: '/university/dhu.png', size: 6 },
    },
    {
      school: '南京工程学院',
      degree: '机械工程 · 工学学士',
      period: '2019.09–2023.06',
      location: '南京',
      gpa: '3.77 / 4.0（后两学年）',
      rank: '4 / 99',
      thesis: '三自由度滚珠丝杠缺陷检测平台开发',
      logo: { src: '/university/njit.png', size: 6 },
    },
  ],
}

export default education
