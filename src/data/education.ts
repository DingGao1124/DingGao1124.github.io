export type Education = {
  school: string
  degree: string
  period: string
  location: string
  gpa: string
  rank?: string
  awards: string[]
  competitions: string[]
  thesis?: string
}

export const education: Record<SiteLocale, Education[]> = {
  zh: [
    {
      school: "东华大学",
      degree: "智能制造 · 工程硕士",
      period: "2023.09–2026.06",
      location: "上海",
      gpa: "3.93 / 4.0",
      awards: ["校级一等奖学金与二等奖学金各一次（2023–2024）"],
      competitions: ["第十二届 NVIDIA Sky Hackathon 卓越奖（全国第二名）"],
    },
    {
      school: "南京工程学院",
      degree: "机械工程 · 工学学士",
      period: "2019.09–2023.06",
      location: "南京",
      gpa: "3.77 / 4.0（后两学年）",
      rank: "4 / 99",
      awards: [
        "校级一等奖学金与二等奖学金共五次（2020–2023）",
        "三好学生（2022、2023）与优秀毕业生",
      ],
      competitions: [
        "全国大学生数学竞赛全国一等奖（2023）",
        "省级大学生数学竞赛一等奖（2022）与三等奖（2020）",
        "第六届全国大学生起重机创意大赛全国一等奖",
      ],
      thesis: "三自由度滚珠丝杠缺陷检测平台",
    },
  ],
  en: [
    {
      school: "Donghua University",
      degree: "Master of Engineering in Intelligent Manufacturing",
      period: "Sep 2023–Jun 2026",
      location: "Shanghai",
      gpa: "3.93 / 4.0",
      awards: [
        "First-class and second-class university scholarships, one each (2023–2024)",
      ],
      competitions: ["Excellence Award, 12th NVIDIA Sky Hackathon (2nd place)"],
    },
    {
      school: "Nanjing Institute of Technology",
      degree: "Bachelor of Engineering in Mechanical Engineering",
      period: "Sep 2019–Jun 2023",
      location: "Nanjing",
      gpa: "3.77 / 4.0 (last two years)",
      rank: "4 / 99",
      awards: [
        "Five first-class and second-class university scholarships (2020–2023)",
        "University Merit Student (2022, 2023) and Outstanding Graduate",
      ],
      competitions: [
        "National First Prize, National College Students Mathematics Competition (2023)",
        "Provincial First Prize (2022) and Third Prize (2020), Provincial College Students Mathematics Competition",
        "National First Prize, 6th National College Students Crane Creativity Competition",
      ],
      thesis: "Three-Degree-of-Freedom Ball Screw Defect Detection Platform",
    },
  ],
}
