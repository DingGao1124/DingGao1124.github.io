export type SiteLocale = "en" | "zh"

export type NavigationItem = {
  id: string
  label: string
  href: string
}

export const siteInfos = {
  en: {
    siteName: "Ding Gao",
    primaryNavigationLabel: "Primary navigation",
    switchLanguageLabel: "Switch language",
    switchToDarkLabel: "Switch to dark theme",
    switchToLightLabel: "Switch to light theme",
    navigation: [
      { id: "profile", label: "Profile", href: "/" },
      { id: "research", label: "Research", href: "/research/" },
      { id: "projects", label: "Projects", href: "/projects/" },
      { id: "publications", label: "Publications", href: "/publications/" },
      { id: "experience", label: "Experience", href: "/experience/" },
      { id: "contact", label: "Contact", href: "/contact/" },
    ] satisfies NavigationItem[],
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you requested could not be found.",
    backHomeLabel: "Back to home",
    footer: "© Copyright Ding Gao 2026. All rights reserved.",
    home: {
      role: "Master's student",
      organization: "Donghua University",
      researchLine: "Digital twins · LLM multi-agent systems · Embodied AI robotics · Industrial software",
      name: "Ding Gao",
      aboutTitle: "About me",
      aboutBody: [
        "Hi, I'm Ding Gao 👋 — a master's student in Intelligent Manufacturing at Donghua University. I work where the physical and virtual meet: digital twins 🏭, LLM-driven multi-agent systems 🤖, embodied AI, and robotics.",
        "My background is interdisciplinary 🌐. I started in mechanical engineering and picked up full-stack development along the way, which lets me carry an idea from a paper sketch all the way to a working system.",
        "These days I focus on physical-virtual production-line synchronization, LLM-driven multi-agent modeling, robot task planning, retrieval-augmented generation, and voice interaction 🎤 — all in service of flexible manufacturing and human-robot collaboration 🤝.",
      ],
      interestsTitle: "Interests",
      interests: ["Digital Twins", "LLM Agents", "Embodied AI", "Robotics"],
      educationTitle: "Education",
      location: "Shanghai, China",
      researchTitle: "Research",
      researchDescription:
        "Interpretable modeling, agent collaboration, robot execution, and practical deployment in intelligent manufacturing.",
      selectedWorkTitle: "Selected work",
      selectedWorkDescription:
        "A short index of representative projects; the full portfolio is on the Projects page.",
      recentTitle: "Recent",
      recentDescription: "Current position and latest engagements.",
      viewAll: "View all",
    },
    research: {
      eyebrow: "Research",
      title: "Research",
      lede: "Digital twins, LLM-based multi-agent systems, embodied AI, and human-robot collaboration — grounded in intelligent manufacturing and closed-loop physical-virtual systems.",
      areasTitle: "Areas",
      areasDescription:
        "Four intertwined threads. Each area pairs a modelling or control question with a concrete deployment scenario.",
      approachTitle: "Approach",
      approachDescription:
        "I build systems that close the perception-to-action loop: model the physical world, let agents reason over it, then act and verify.",
      approachBody:
        "I treat a production system as something that can be modeled, observed, and controlled. First I represent it digitally — geometry, behavior, and knowledge. Then I let LLM-driven agents reason over that representation, and finally act through robot or software interfaces, verifying each step against the physical state. The result is a closed loop where the virtual and physical systems stay in sync.",
      tagsLabel: "Keywords",
    },
    projects: {
      eyebrow: "Projects",
      title: "Projects",
      lede: "Selected work across research, robotics, hardware, and software — from production-line digital twins to embodied robot systems and developer tools.",
      note: "Entries with limited source material are retained for later completion.",
      categoryLabel: "Category",
      order: ["Research", "Robotics", "Hardware", "Software"],
    },
    publications: {
      eyebrow: "Publications",
      title: "Publications & Patents",
      lede: "Journal papers and patents on digital twins, LLM-driven multi-agent systems, and human-robot collaboration.",
      statusLabel: "Status",
      journalLabel: "Journal Article",
      patentLabel: "Patent",
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience",
      lede: "Research and industry experience, education, and selected honors — organized by organization and responsibility.",
      experienceTitle: "Experience",
      educationTitle: "Education",
      honorsTitle: "Honors & competitions",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      lede: "I welcome conversations about digital twins, embodied AI, industrial software, and intelligent manufacturing research.",
      description: "Reach out by email or connect via any of the profiles below.",
      privacy:
        "This site publishes only my email address and external links — no phone number, age, or detailed address.",
      emailLabel: "Email",
    },
    researchAreaLabel: "Research Area",
    projectFallbackMeta: "Portfolio project · details to be added",
    contentCard: {
      showMore: "Show more",
      showLess: "Show less",
    },
  },

  zh: {
    siteName: "高鼎 / Ding Gao",
    primaryNavigationLabel: "主导航",
    switchLanguageLabel: "切换语言",
    switchToDarkLabel: "切换到深色主题",
    switchToLightLabel: "切换到浅色主题",
    navigation: [
      { id: "profile", label: "简介", href: "/" },
      { id: "research", label: "研究方向", href: "/research/" },
      { id: "projects", label: "精选项目", href: "/projects/" },
      { id: "publications", label: "论文与专利", href: "/publications/" },
      { id: "experience", label: "经历", href: "/experience/" },
      { id: "contact", label: "联系", href: "/contact/" },
    ] satisfies NavigationItem[],
    notFoundTitle: "页面不存在",
    notFoundDescription: "你请求的页面不存在。",
    backHomeLabel: "返回首页",
    footer: "© 2026 高鼎 · 个人博客。",
    home: {
      role: "硕士研究生",
      organization: "东华大学",
      researchLine: "数字孪生 · LLM 多智能体系统 · 具身智能机器人 · 工业软件",
      name: "高鼎",
      aboutTitle: "关于我",
      aboutBody: [
        "Hi，你好，我是高鼎 👋，东华大学智能制造专业的硕士研究生。我在物理与虚拟的交界处做研究——数字孪生 🏭、LLM 多智能体系统 🤖、具身智能和机器人。",
        "我的背景是跨学科的 🌐。我从机械工程出发，后来补上了全栈开发的能力，这让我能把一个想法从论文草图一路带到能跑起来的系统。",
        "最近我在做虚实产线同步、LLM 驱动的多智能体建模、机器人任务规划、RAG 检索增强和语音交互 🎤，目标都是柔性制造与人机协作 🤝。",
      ],
      interestsTitle: "研究兴趣",
      interests: ["数字孪生", "LLM 智能体", "具身智能", "机器人"],
      educationTitle: "教育背景",
      location: "中国上海",
      researchTitle: "研究方向",
      researchDescription:
        "围绕智能制造中的可解释建模、智能体协作、机器人执行与工业场景落地展开。",
      selectedWorkTitle: "代表工作",
      selectedWorkDescription: "代表性项目的简短索引，完整作品集见精选项目页面。",
      recentTitle: "近期",
      recentDescription: "当前职位与最近经历。",
      viewAll: "查看全部",
    },
    research: {
      eyebrow: "研究方向",
      title: "研究方向",
      lede: "数字孪生、LLM 多智能体系统、具身智能与人机协作 —— 面向智能制造与虚实闭环系统。",
      areasTitle: "领域",
      areasDescription:
        "四条相互交织的主线，每个方向都对应一个模型或控制问题以及具体的落地场景。",
      approachTitle: "方法",
      approachDescription:
        "我构建打通感知到行动闭环的系统：对物理世界建模，让智能体进行推理，再执行并验证。",
      approachBody:
        "我将生产系统视为可建模、可观测、可控制的对象。先进行数字化表达——几何、行为与知识；再让 LLM 驱动的智能体在该表达之上进行推理；最后通过机器人或软件接口落地执行，并逐环节对照物理状态进行验证，使虚实系统始终同步。",
      tagsLabel: "关键词",
    },
    projects: {
      eyebrow: "精选项目",
      title: "精选项目",
      lede: "涵盖研究、机器人、硬件与软件的代表性工作 —— 从产线数字孪生到具身机器人系统与开发工具。",
      note: "资料有限的项目会保留位置，便于后续补充。",
      categoryLabel: "分类",
      order: ["研究", "机器人", "硬件", "软件"],
    },
    publications: {
      eyebrow: "论文与专利",
      title: "论文与专利",
      lede: "关于数字孪生、LLM 驱动的多智能体系统与人机协作的期刊论文和专利。",
      statusLabel: "状态",
      journalLabel: "期刊论文",
      patentLabel: "专利",
    },
    experience: {
      eyebrow: "经历",
      title: "经历",
      lede: "研究与产业经历、教育背景与部分荣誉，按组织和职责组织呈现。",
      experienceTitle: "经历",
      educationTitle: "教育背景",
      honorsTitle: "荣誉与竞赛",
    },
    contact: {
      eyebrow: "联系",
      title: "联系",
      lede: "欢迎围绕数字孪生、具身智能、工业软件与智能制造研究进行交流。",
      description: "可通过邮箱联系，或使用下方任一主页。",
      privacy: "本站仅公开邮箱与外部链接，不展示手机号、年龄或详细地址。",
      emailLabel: "邮箱",
    },
    researchAreaLabel: "研究方向",
    projectFallbackMeta: "Portfolio 项目 · 待补充详情",
    contentCard: {
      showMore: "展开更多",
      showLess: "收起",
    },
  },
} as const

export type SiteInfo = (typeof siteInfos)["en"]
