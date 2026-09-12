export type ProfessionalEntry = {
  id: string
  organization: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  logoSrc?: string
  media: {
    src?: string
    alt: string
    label: string
  }
}

export const professional: Record<SiteLocale, ProfessionalEntry[]> = {
  en: [
    {
      id: 'tesla',
      organization: 'Tesla Gigafactory',
      role: 'Full-Stack Development Intern · R&D Department',
      period: 'Sep 2025-Jan 2026',
      location: 'Shanghai, China',
      summary:
        'Built an agentic pipeline that turns Model 3 and Model Y user feedback into R&D-facing insights.',
      highlights: [
        'Engineered the harness with LangChain Deep Agents, using TODO-based planning and specialized subagents to break multi-step analysis into bounded work.',
        'Recognized user intent, grouped records by request type, and delegated clustering to subagents, then synthesized structured analytical outputs.',
        'Integrated the results into an Angular/C# platform that helps R&D triage critical issues and reprioritize feature requests.',
      ],
      logoSrc: '/company/tesla.svg',
      media: {
        alt: 'Placeholder for the Tesla agentic user-feedback analysis system',
        label: 'Agentic feedback analysis',
      },
    },
    {
      id: 'abb',
      organization: 'ABB Robot Super Factory',
      role: 'Software Development Intern · Robotics Application Software · R&D Department',
      period: 'Jul 2025-Sep 2025',
      location: 'Shanghai, China',
      summary:
        'Built an LLM task planner that turns natural-language instructions into executable RAPID commands for an ABB robot.',
      highlights: [
        'Decomposed instructions into multi-step plans and coordinated parallel robot operations through Azure OpenAI, MCP, and Robot Web Services.',
        'Added execution-failure handling so the planner could respond to unsuccessful actions and continue the workflow.',
        'Improved Tangram recognition under variable lighting with dynamic HSV tuning, and built a RAG-based AppStudio assistant for robot-function generation and technical retrieval.',
      ],
      logoSrc: '/company/abb.svg',
      media: {
        alt: 'Placeholder for the ABB robot task-planning system',
        label: 'Robot task planning',
      },
    },
    {
      id: 'bilibili',
      organization: 'Bilibili',
      role: 'Software Development Intern',
      period: 'Jun 2025-Jul 2025',
      location: 'Shanghai, China',
      summary:
        'Built an AI-assisted frontend error-monitoring pipeline, from capture to diagnosis.',
      highlights: [
        'Captured JavaScript and unhandled-rejection errors with NestJS scheduled jobs, analyzed them with LLM agents, and stored the results in MySQL.',
        'Built a RAG diagnostic agent that retrieved technical knowledge and produced structured JSON solutions for frontend visualization.',
      ],
      logoSrc: '/company/bilibili.svg',
      media: {
        alt: 'Placeholder for the Bilibili AI-assisted error-monitoring pipeline',
        label: 'AI error monitoring',
      },
    },
    {
      id: 'caerulean',
      organization: 'Caerulean AI Inc.',
      role: 'Full-Stack Developer Intern · Remote',
      period: 'Dec 2024-Apr 2025',
      location: 'Vancouver, Canada',
      summary:
        'Architected a LangChain multi-agent system for an interactive virtual world, with memory-augmented agents and RAG-based reasoning.',
      highlights: [
        'Built the agent architecture, long-term memory, and retrieval-augmented context flow in LangChain.',
        'Integrated the system into a browser-based Phaser environment so agents keep context across user interactions.',
      ],
      media: {
        alt: 'Placeholder for the interactive multi-agent virtual world',
        label: 'Multi-agent virtual world',
      },
    },
  ],
  zh: [
    {
      id: 'tesla',
      organization: 'Tesla Gigafactory',
      role: '全栈开发实习生 · 研发部门',
      period: '2025.09-2026.01',
      location: '上海',
      summary: '构建了把 Model 3 与 Model Y 用户反馈转为研发洞察的智能体分析流程。',
      highlights: [
        '使用 LangChain Deep Agents 搭建智能体 Harness，通过 TODO 规划与专用子智能体拆分多步骤分析。',
        '识别用户意图、按请求类型分组记录，并将聚类委派给子智能体，汇总为结构化结果。',
        '将结果接入 Angular/C# 内部平台，帮助研发团队定位关键问题并调整需求优先级。',
      ],
      logoSrc: '/company/tesla.svg',
      media: { alt: 'Tesla 用户反馈分析系统占位图', label: 'Agentic feedback analysis' },
    },
    {
      id: 'abb',
      organization: 'ABB Robot Super Factory',
      role: '机器人应用软件开发实习生 · 研发部门',
      period: '2025.07-2025.09',
      location: '上海',
      summary: '开发了将自然语言指令转为 ABB 机器人可执行 RAPID 命令的 LLM 任务规划器。',
      highlights: [
        '通过 Azure OpenAI、MCP 与 Robot Web Services，把指令拆解为多步骤任务并协调并行机器人操作。',
        '加入执行失败处理，使规划器能够响应失败动作并继续后续流程。',
        '通过动态 HSV 参数调整改善变化光照下的七巧板识别，并开发基于 RAG 的 AppStudio 助手支持功能生成与技术检索。',
      ],
      logoSrc: '/company/abb.svg',
      media: { alt: 'ABB 机器人任务规划系统占位图', label: 'Robot task planning' },
    },
    {
      id: 'bilibili',
      organization: 'Bilibili',
      role: '软件开发实习生',
      period: '2025.06-2025.07',
      location: '上海',
      summary: '构建了从错误捕获到智能诊断的前端监测流程。',
      highlights: [
        '使用 NestJS 定时任务捕获 JavaScript 与未处理 Promise rejection 错误，由 LLM 智能体分析后写入 MySQL。',
        '开发基于 RAG 的诊断智能体，检索技术知识并生成结构化 JSON 解决方案用于前端可视化。',
      ],
      logoSrc: '/company/bilibili.svg',
      media: { alt: '哔哩哔哩错误监测系统占位图', label: 'AI error monitoring' },
    },
    {
      id: 'caerulean',
      organization: 'Caerulean AI Inc.',
      role: '全栈开发实习生（远程）',
      period: '2024.12-2025.04',
      location: '加拿大温哥华',
      summary: '为交互式虚拟世界设计了具备长期记忆与检索增强推理的 LangChain 多智能体系统。',
      highlights: [
        '使用 LangChain 设计多智能体架构、长期记忆与检索增强上下文流程。',
        '将系统集成到 Phaser 环境，使智能体在交互中保持上下文。',
      ],
      media: { alt: '多智能体虚拟世界占位图', label: 'Multi-agent virtual world' },
    },
  ],
}

export default professional
