export type Experience = {
  organization: string
  role: string
  period: string
  summary: string
}

export const experiences: Record<SiteLocale, Experience[]> = {
  zh: [
    {
      organization: "东华大学",
      role: "研究助理 - 数字孪生与 LLM 多智能体系统",
      period: "2023.09 - 至今",
      summary:
        "在包劲松教授指导下，开展面向柔性制造的数字孪生系统、LLM 多智能体建模、虚实同步与自然语言交互研究。",
    },
    {
      organization: "CAERULEAN AI INC.",
      role: "Full-Stack Developer Intern",
      period: "2024.12 - 2025.04",
      summary:
        "开发浏览器内 AI 智能体虚拟世界，使用 Phaser、LangChain、RAG、图数据库和记忆增强机制实现上下文交互。",
    },
    {
      organization: "Bilibili",
      role: "前端开发工程师实习生",
      period: "2025.06 - 2025.07",
      summary:
        "参与账号认证与活动页 H5 / PC 开发，并构建 AI Agent 错误监测与 RAG 检索分析能力。",
    },
    {
      organization: "ABB Robot Super Factory",
      role: "应用软件开发-机器人实习生",
      period: "2025.07 - 2025.09",
      summary:
        "围绕 GoFa 协作机器人进行具身智能、RAPID / RWS 封装、任务规划智能体和上位机集成开发。",
    },
    {
      organization: "Tesla Gigafactory Shanghai",
      role: "全栈开发工程师实习生",
      period: "2025.10 - 2026.01",
      summary:
        "参与内部 Tracker 平台开发与重构，支持用户反馈、任务优先级调整、Kafka 消息队列和多环境上线。",
    },
  ],
  en: [
    {
      organization: "Donghua University",
      role: "Research Assistant — Digital Twins & LLM Multi-Agent Systems",
      period: "Sep 2023 - Present",
      summary:
        "Conducting research with Prof. Jinsong Bao on digital-twin systems for flexible manufacturing, LLM-based multi-agent modeling, physical-virtual synchronization, and natural-language interaction.",
    },
    {
      organization: "CAERULEAN AI INC.",
      role: "Full-Stack Developer Intern",
      period: "Dec 2024 - Apr 2025",
      summary:
        "Developed a browser-based virtual world populated by AI agents, using Phaser, LangChain, RAG, a graph database, and memory augmentation for contextual interaction.",
    },
    {
      organization: "Bilibili",
      role: "Front-End Developer Intern",
      period: "Jun 2025 - Jul 2025",
      summary:
        "Contributed to account verification and campaign pages for mobile and desktop, and built AI-agent error monitoring with RAG-based diagnostic retrieval.",
    },
    {
      organization: "ABB Robot Super Factory",
      role: "Robotics Application Software Developer Intern",
      period: "Jul 2025 - Sep 2025",
      summary:
        "Worked on embodied AI for the GoFa collaborative robot, RAPID and RWS service wrappers, task-planning agents, and supervisory-system integration.",
    },
    {
      organization: "Tesla Gigafactory Shanghai",
      role: "Full-Stack Developer Intern",
      period: "Oct 2025 - Jan 2026",
      summary:
        "Contributed to the development and refactoring of an internal tracker platform supporting user feedback, task prioritization, Kafka messaging, and deployment across multiple environments.",
    },
  ],
}
