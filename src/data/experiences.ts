export type Experience = {
  id: string
  organization: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export const experiences: Record<SiteLocale, Experience[]> = {
  zh: [
    {
      id: "tesla",
      organization: "Tesla 上海超级工厂",
      role: "全栈开发工程师实习生",
      period: "2025.10–2026.01",
      location: "上海",
      summary:
        "围绕 Model 3 与 Model Y 用户反馈分析和项目优先级管理，参与内部数据平台开发。",
      highlights: [
        "分析多渠道用户反馈，量化关键问题和高需求功能。",
        "使用 Angular 与 C# 开发全栈可视化平台，支持团队基于实时数据调整项目优先级。",
      ],
    },
    {
      id: "abb",
      organization: "ABB Robot Super Factory",
      role: "机器人应用软件开发实习生",
      period: "2025.07–2025.09",
      location: "上海",
      summary:
        "在机器人研发部门开发任务规划智能体、视觉稳健性工具和 RAG 编程助手。",
      highlights: [
        "使用 Azure OpenAI、MCP 和 RWS 将复杂指令拆解为 RAPID 命令并处理执行失败。",
        "为七巧板求解器实现动态 HSV 参数调整，改善变化光照下的视觉识别。",
        "在 App Studio 中构建面向机器人功能生成和技术检索的 RAG 助手。",
      ],
    },
    {
      id: "bilibili",
      organization: "Bilibili",
      role: "前端开发工程师实习生",
      period: "2025.06–2025.07",
      location: "上海",
      summary:
        "参与认证业务界面开发，并构建基于 LLM 与 RAG 的前端错误监测和诊断能力。",
      highlights: [
        "使用 Vue、Vite 和 Vuex 开发 H5 / PC 认证界面并接入 RESTful API。",
        "使用 NestJS 定时任务捕获 JavaScript 与 Promise rejection 错误并写入 MySQL。",
        "构建 RAG 检索智能体，生成可供前端展示的结构化诊断结果。",
      ],
    },
    {
      id: "caerulean",
      organization: "Caerulean AI Inc.",
      role: "全栈开发实习生（远程）",
      period: "2024.12–2025.04",
      location: "加拿大温哥华（远程）",
      summary:
        "在交互式虚拟世界中构建具备记忆与 RAG 上下文交互能力的多智能体系统。",
      highlights: [
        "使用 LangChain 构建记忆增强智能体，并通过 Phaser 集成到浏览器游戏世界。",
      ],
    },
  ],
  en: [
    {
      id: "tesla",
      organization: "Tesla Gigafactory Shanghai",
      role: "Full-Stack Developer Intern",
      period: "Oct 2025–Jan 2026",
      location: "Shanghai",
      summary:
        "Worked on Model 3 and Model Y feedback analysis and an internal platform for managing product priorities.",
      highlights: [
        "Analyzed multi-channel user feedback to quantify critical issues and high-demand feature requests.",
        "Built a full-stack visualization platform with Angular and C# for real-time project-priority adjustments.",
      ],
    },
    {
      id: "abb",
      organization: "ABB Robot Super Factory",
      role: "Robotics Application Software Developer Intern",
      period: "Jul 2025–Sep 2025",
      location: "Shanghai",
      summary:
        "Developed a task-planning agent, visual-robustness tooling, and a RAG coding assistant in Robotics R&D.",
      highlights: [
        "Used Azure OpenAI, MCP, and RWS to decompose instructions into RAPID commands and handle execution failures.",
        "Implemented dynamic HSV adjustment for a Tangram solver under variable lighting.",
        "Built a RAG assistant in App Studio for robot-function generation and technical retrieval.",
      ],
    },
    {
      id: "bilibili",
      organization: "Bilibili",
      role: "Front-End Developer Intern",
      period: "Jun 2025–Jul 2025",
      location: "Shanghai",
      summary:
        "Developed verification interfaces and built LLM- and RAG-based monitoring and diagnosis for front-end errors.",
      highlights: [
        "Built H5 and desktop verification interfaces with Vue, Vite, Vuex, and RESTful APIs.",
        "Used NestJS cron jobs to capture JavaScript and Promise-rejection errors and store results in MySQL.",
        "Built a RAG agent that returned structured diagnostic results for front-end presentation.",
      ],
    },
    {
      id: "caerulean",
      organization: "Caerulean AI Inc.",
      role: "Full-Stack Developer Intern (Remote)",
      period: "Dec 2024–Apr 2025",
      location: "Vancouver, Canada (Remote)",
      summary:
        "Built a multi-agent system with memory and RAG-based contextual interaction inside an interactive virtual world.",
      highlights: [
        "Built memory-augmented agents with LangChain and integrated them into a browser world with Phaser.",
      ],
    },
  ],
}
