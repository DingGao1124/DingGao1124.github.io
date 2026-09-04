export type Experience = {
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

export const experiences: Record<SiteLocale, Experience[]> = {
  en: [
    {
      id: 'tesla',
      organization: 'Tesla Gigafactory',
      role: 'Full-Stack Development Intern · R&D Department',
      period: 'Sep 2025-Jan 2026',
      location: 'Shanghai, China',
      summary:
        'Engineered an agentic harness using LangChain Deep Agents, incorporating TODO-based planning and specialized subagents to orchestrate multi-step analysis of Model 3 and Model Y user-feedback data.',
      highlights: [
        'Developed an agent-driven data-processing workflow that recognized user intent, grouped records by request type, delegated clustering tasks to subagents, and synthesized their results into structured analytical outputs.',
        'Integrated agent outputs into an Angular/C# internal visualization platform, enabling R&D teams to identify critical issues, prioritize high-demand feature requests, and adjust product-development priorities based on data insights.',
      ],
      logoSrc: '/company/Tesla.svg',
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
        'Developed an LLM-driven robotic task planner using Azure OpenAI and MCP, decomposing complex natural-language instructions into executable RAPID commands through Robot Web Services.',
      highlights: [
        'Implemented parallel task coordination and execution-failure handling, enabling the planner to manage multi-step robot operations and respond to unsuccessful actions.',
        'Improved Tangram recognition under variable lighting through dynamic HSV parameter adjustment and developed a RAG-based AppStudio assistant for robot-function generation and technical knowledge retrieval.',
      ],
      logoSrc: '/company/ABB.svg',
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
        'Built an AI-assisted error-monitoring pipeline using NestJS scheduled jobs to capture JavaScript and unhandled rejection errors, analyze them with LLM agents, and store the results in MySQL.',
      highlights: [
        'Developed a RAG-based diagnostic agent that retrieved relevant technical knowledge and generated structured JSON solutions for frontend visualization.',
      ],
      logoSrc: '/company/BILIBILI.svg',
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
        'Architected a LangChain-based multi-agent system for an interactive virtual world, incorporating memory-augmented agents and RAG-enhanced contextual reasoning.',
      highlights: [
        'Integrated the agent system into a browser-based Phaser environment, enabling agents to maintain contextual memory and support more coherent user-agent interactions.',
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
      summary: '为 Model 3 与 Model Y 用户反馈分析构建了基于智能体的处理与可视化流程。',
      highlights: [
        '使用 LangChain Deep Agents 构建智能体框架，通过 TODO 规划与专用子智能体编排多步骤反馈分析。',
        '实现了意图识别、请求类型分组、子智能体聚类和结构化结果汇总。',
        '将智能体输出接入 Angular/C# 内部平台，帮助研发团队识别关键问题并调整产品优先级。',
      ],
      logoSrc: '/company/Tesla.svg',
      media: { alt: 'Tesla 用户反馈分析系统占位图', label: 'Agentic feedback analysis' },
    },
    {
      id: 'abb',
      organization: 'ABB Robot Super Factory',
      role: '机器人应用软件开发实习生 · 研发部门',
      period: '2025.07-2025.09',
      location: '上海',
      summary: '开发了机器人任务规划智能体、视觉稳健性工具与 AppStudio RAG 助手。',
      highlights: [
        '使用 Azure OpenAI、MCP 与 Robot Web Services 将自然语言指令拆解为可执行 RAPID 命令。',
        '实现了并行任务协调与执行失败处理。',
        '通过动态 HSV 参数调整改善变化光照下的七巧板识别，并开发机器人功能生成与技术检索助手。',
      ],
      logoSrc: '/company/ABB.svg',
      media: { alt: 'ABB 机器人任务规划系统占位图', label: 'Robot task planning' },
    },
    {
      id: 'bilibili',
      organization: 'Bilibili',
      role: '软件开发实习生',
      period: '2025.06-2025.07',
      location: '上海',
      summary: '构建了由 LLM 智能体分析前端错误并输出结构化诊断结果的监测流程。',
      highlights: [
        '使用 NestJS 定时任务捕获 JavaScript 与未处理 Promise rejection 错误，并将分析结果写入 MySQL。',
        '开发了检索相关技术知识并为前端可视化生成结构化 JSON 解决方案的 RAG 诊断智能体。',
      ],
      logoSrc: '/company/BILIBILI.svg',
      media: { alt: '哔哩哔哩错误监测系统占位图', label: 'AI error monitoring' },
    },
    {
      id: 'caerulean',
      organization: 'Caerulean AI Inc.',
      role: '全栈开发实习生（远程）',
      period: '2024.12-2025.04',
      location: '加拿大温哥华',
      summary: '为交互式浏览器虚拟世界构建了记忆增强、多智能体与 RAG 上下文推理系统。',
      highlights: [
        '使用 LangChain 设计多智能体架构、长期记忆与检索增强上下文流程。',
        '将智能体系统集成到 Phaser 环境中，使用户与智能体之间保持更连贯的上下文交互。',
      ],
      media: { alt: '多智能体虚拟世界占位图', label: 'Multi-agent virtual world' },
    },
  ],
}
