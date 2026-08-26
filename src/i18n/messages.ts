export type SiteLocale = "en" | "zh"

export const siteMessages = {
  en: {
    siteName: "Ding Gao",
    primaryNavigationLabel: "Primary navigation",
    switchLanguageLabel: "Switch language",
    navigation: [
      { id: "profile", label: "Profile" },
      { id: "research", label: "Research" },
      { id: "projects", label: "Projects" },
      { id: "publications", label: "Publications" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    notFoundTitle: "Page not found",
    backHomeLabel: "Back to home",
    footer: "© 2026 Ding Gao. Academic profile and selected portfolio.",
    hero: {
      name: "Ding Gao",
      tagline:
        "Master's student in Intelligent Manufacturing at Donghua University, focused on digital twins, LLM-based multi-agent systems, embodied AI robotics, and industrial software.",
      biography:
        "With an interdisciplinary background in mechanical engineering and full-stack development, I research intelligent systems for flexible manufacturing and human-robot collaboration. My recent work focuses on physical-virtual production line synchronization, LLM-driven multi-agent modeling, robot task planning, retrieval-augmented generation, and voice interaction.",
      profileTitle: "Profile",
      location: "Shanghai, China",
      facts: [
        "M.S.: Intelligent Manufacturing, Donghua University",
        "B.E.: Mechanical Engineering, Nanjing Institute of Technology",
        "Languages: IELTS 7.0",
      ],
    },
    sections: {
      research: {
        title: "Research Areas",
        description:
          "My research connects interpretable modeling, agent collaboration, robot execution, and practical deployment in intelligent manufacturing.",
      },
      projects: {
        title: "Selected Projects",
        description:
          "These projects are drawn from my CV and Yuque portfolio. Entries with limited source material remain clearly marked for future completion.",
      },
      publications: { title: "Publications & Patents" },
      experience: {
        title: "Experience",
        description:
          "Research and industry experience is summarized by organization, focus, and responsibility rather than reproduced as a full CV.",
      },
      education: { title: "Education", description: "Academic background" },
      honors: { title: "Honors & Competitions", description: "Selected honors" },
      contact: { title: "Contact" },
    },
    researchAreaLabel: "Research Area",
    projectFallbackMeta: "Portfolio project · Details to be added",
    contact: {
      title: "Open to Conversation",
      description:
        "I welcome conversations about digital twins, embodied AI, industrial software, and intelligent manufacturing research.",
      privacy:
        "Privacy note: this site publishes only my email address and external links, not my phone number, age, or detailed address.",
    },
  },
  zh: {
    siteName: "高鼎 / Ding Gao",
    primaryNavigationLabel: "主导航",
    switchLanguageLabel: "切换语言",
    navigation: [
      { id: "profile", label: "简介" },
      { id: "research", label: "研究方向" },
      { id: "projects", label: "精选项目" },
      { id: "publications", label: "论文与专利" },
      { id: "experience", label: "经历" },
      { id: "contact", label: "联系" },
    ],
    notFoundTitle: "页面不存在",
    backHomeLabel: "返回首页",
    footer: "© 2026 Ding Gao. Academic profile and selected portfolio.",
    hero: {
      name: "高鼎",
      tagline:
        "东华大学智能制造硕士，关注数字孪生、LLM 多智能体系统、具身智能机器人与工业软件。",
      biography:
        "我拥有机械工程与全栈开发的交叉背景，目前主要研究面向柔性制造和人机协作场景的智能系统。近期工作集中在虚实产线同步、LLM 驱动的多智能体建模、机器人任务规划、RAG 检索增强和语音交互等方向。",
      profileTitle: "个人简介",
      location: "中国上海",
      facts: [
        "硕士：东华大学智能制造",
        "本科：南京工程学院机械工程",
        "语言：IELTS 7.0",
      ],
    },
    sections: {
      research: {
        title: "研究方向",
        description:
          "研究兴趣围绕智能制造中的可解释建模、智能体协作、机器人执行和工业场景落地展开。",
      },
      projects: {
        title: "精选项目",
        description:
          "以下项目来自简历与语雀 Portfolio。对于语雀中只有标题或附件的项目，首版保留明确占位，后续可继续补充。",
      },
      publications: { title: "论文与专利" },
      experience: {
        title: "经历",
        description: "研究与实习经历以摘要形式呈现，保留方向、组织和职责，不展开完整 CV 条目。",
      },
      education: { title: "教育背景", description: "Education" },
      honors: { title: "荣誉与竞赛", description: "Selected honors" },
      contact: { title: "联系" },
    },
    researchAreaLabel: "研究方向",
    projectFallbackMeta: "Portfolio 项目 · 待补充详情",
    contact: {
      title: "开放交流",
      description: "欢迎围绕数字孪生、具身智能、工业软件与智能制造研究进行交流。",
      privacy: "隐私说明：首版页面仅公开邮箱与外链，不展示手机号、年龄或详细住址。",
    },
  },
} as const
