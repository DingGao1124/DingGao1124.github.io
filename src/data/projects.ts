export type ProjectLink = {
  label: string
  href: string
}

export type ProjectMedia = {
  src?: string
  alt: string
  label: string
}

export type Project = {
  id: string
  title: string
  period: string
  role: string
  category: string
  description: string
  highlights: string[]
  tech: string[]
  featured?: boolean
  links?: ProjectLink[]
  media: ProjectMedia[]
}

export const projects: Record<SiteLocale, Project[]> = {
  zh: [
    {
      id: 'digital-twin-production-line',
      title: '基于 LLM 多智能体的数字孪生产线',
      period: '2024.09–2026.06',
      role: '项目负责人',
      category: '研究',
      description:
        '为物理生产线建立实时同步的三维数字模型，并为各产线单元配置 LLM 智能体，使其感知状态、协作推理并辅助控制物理系统。',
      highlights: [
        '使用 React、Next.js、Supabase、React Flow 与 Three.js / R3F 构建完整应用。',
        '通过 Socket / WebSocket 同步真实产线与前端三维模型的状态和位姿。',
        '集成 STT/TTS、流式多智能体对话、工具调用与生产知识 RAG。',
      ],
      tech: ['React', 'Next.js', 'Three.js', 'Supabase', 'LangGraph', 'RAG'],
      featured: true,
      media: [
        { alt: '数字孪生产线三维界面占位图', label: '三维产线界面' },
        { alt: '数字孪生多智能体工作流占位图', label: '智能体工作流' },
        { alt: '物理产线同步实验占位图', label: '虚实同步实验' },
      ],
    },
    {
      id: 'industrial-disassembly-robot',
      title: '工业拆卸工具推荐机器人',
      period: '2025.04–2025.06',
      role: '核心开发者',
      category: '机器人',
      description:
        '针对退役汽车动力电池拆卸，构建多模态感知—决策—执行系统，通过语音指令和场景理解驱动机械臂取送工具。',
      highlights: [
        '融合 FastSAM、视觉语言模型与 Set-of-Mark prompting 进行场景理解。',
        '使用 GraspNet 从点云生成抗碰撞抓取位姿，并通过 MCP 控制 UR 机械臂。',
        '获得第十二届 NVIDIA Sky Hackathon 卓越奖（全国第二名）。',
      ],
      tech: ['LangGraph', 'VLA', 'FastSAM', 'GraspNet', 'MCP', 'UR Robot'],
      featured: true,
      links: [
        { label: '视频', href: 'https://www.bilibili.com/video/BV1sRj3zAEXG' },
        {
          label: 'GitCode',
          href: 'https://gitcode.com/baomingcanjia/URgrasp_agent',
        },
        { label: 'GitHub', href: 'https://github.com/SsspongeBob/Hackathon' },
      ],
      media: [
        { alt: '工业拆卸机器人实验占位图', label: '机器人实验' },
        { alt: '工业拆卸视觉理解占位图', label: '视觉理解' },
        { alt: '工业拆卸抓取规划占位图', label: '抓取规划' },
      ],
    },
    {
      id: 'abb-gofa-agent',
      title: 'ABB GoFa 机器人任务规划智能体',
      period: '2025.07–2025.09',
      role: '机器人应用软件开发实习生',
      category: '机器人',
      description:
        '在 ABB 机器人研发团队中构建基于 Azure OpenAI 的任务规划智能体，将自然语言任务转换为可执行的 RAPID 指令。',
      highlights: [
        '通过 RWS 服务支持任务拆解、串并行执行和失败处理。',
        '构建 App Studio 内的 RAG 编程助手，帮助工程师生成机器人功能并检索技术资料。',
      ],
      tech: ['Azure OpenAI', 'LangGraph', 'RAPID', 'RWS', 'MCP'],
      media: [
        { alt: 'ABB GoFa 机器人占位图', label: 'GoFa 机器人' },
        { alt: 'ABB 任务规划界面占位图', label: '任务规划' },
      ],
    },
    {
      id: 'crane-robot',
      title: '全国大学生起重机创意大赛机器人',
      period: '2022.02–2022.11',
      role: '队长与核心开发者',
      category: '硬件',
      description:
        '设计 STM32 驱动的自主起重机器人，通过机械结构、嵌入式控制和路径规划完成限定路线上的多货物搬运。',
      highlights: [
        '使用 C 语言控制电机、舵机和机械臂，并通过 CAN 总线协调各模块。',
        '将总运行时间从 4 分 32 秒缩短至 3 分 15 秒，并获得全国一等奖。',
      ],
      tech: ['STM32', 'C', 'CAN Bus', 'Mechanical Design', 'Path Planning'],
      links: [{ label: '视频', href: 'https://www.bilibili.com/video/BV1J2p6zXEnv/' }],
      media: [
        { alt: '起重机器人整机占位图', label: '机器人整机' },
        { alt: '起重机器人机构占位图', label: '机械机构' },
      ],
    },
    {
      id: 'ai-agents-town',
      title: 'AI Agents Town',
      period: '2024.12–2025.04',
      role: '全栈开发实习生',
      category: '软件',
      description:
        '在浏览器虚拟世界中构建具备长期记忆和上下文交互能力的 LLM 智能体，玩家行为会持续影响角色关系和剧情状态。',
      highlights: [
        '使用 Phaser 构建游戏世界，并通过 Event Bus 与 React 交互。',
        '使用 RAG、Postgres 与 Neo4j 管理角色记忆、经历和关系。',
      ],
      tech: ['React', 'Phaser', 'LangChain', 'RAG', 'Postgres', 'Neo4j'],
      media: [
        { alt: 'AI Agents Town 游戏世界占位图', label: '游戏世界' },
        { alt: 'AI Agents Town 智能体对话占位图', label: '智能体对话' },
      ],
    },
  ],
  en: [
    {
      id: 'digital-twin-production-line',
      title: 'LLM Multi-Agent Digital-Twin Production Line',
      period: 'Sep 2024–Jun 2026',
      role: 'Project Lead',
      category: 'Research',
      description:
        'Built a real-time 3D model of a physical production line and assigned an LLM agent to each unit so they could perceive state, coordinate decisions, and assist with physical-system control.',
      highlights: [
        'Built the complete application with React, Next.js, Supabase, React Flow, and Three.js / R3F.',
        'Synchronized physical and virtual state and pose data through Socket and WebSocket connections.',
        'Integrated STT/TTS, streaming multi-agent dialogue, tool calls, and RAG over production knowledge.',
      ],
      tech: ['React', 'Next.js', 'Three.js', 'Supabase', 'LangGraph', 'RAG'],
      featured: true,
      media: [
        {
          alt: 'Placeholder for the digital-twin 3D interface',
          label: '3D production line',
        },
        {
          alt: 'Placeholder for the multi-agent workflow',
          label: 'Agent workflow',
        },
        {
          alt: 'Placeholder for the physical–virtual synchronization experiment',
          label: 'Synchronization experiment',
        },
      ],
    },
    {
      id: 'industrial-disassembly-robot',
      title: 'Industrial Disassembly Tool-Recommendation Robot',
      period: 'Apr 2025–Jun 2025',
      role: 'Core Developer',
      category: 'Robotics',
      description:
        'Built a multimodal perception–decision–action system for retired EV-battery disassembly, using voice commands and scene understanding to direct a robot arm in delivering tools.',
      highlights: [
        'Combined FastSAM, vision-language models, and Set-of-Mark prompting for scene understanding.',
        'Generated collision-aware grasp poses from point clouds with GraspNet and controlled a UR robot through MCP.',
        'Won an Excellence Award (2nd place) at the 12th NVIDIA Sky Hackathon.',
      ],
      tech: ['LangGraph', 'VLA', 'FastSAM', 'GraspNet', 'MCP', 'UR Robot'],
      featured: true,
      links: [
        { label: 'Video', href: 'https://www.bilibili.com/video/BV1sRj3zAEXG' },
        {
          label: 'GitCode',
          href: 'https://gitcode.com/baomingcanjia/URgrasp_agent',
        },
        { label: 'GitHub', href: 'https://github.com/SsspongeBob/Hackathon' },
      ],
      media: [
        {
          alt: 'Placeholder for the industrial disassembly robot experiment',
          label: 'Robot experiment',
        },
        {
          alt: 'Placeholder for visual scene understanding',
          label: 'Visual understanding',
        },
        { alt: 'Placeholder for grasp planning', label: 'Grasp planning' },
      ],
    },
    {
      id: 'abb-gofa-agent',
      title: 'Task-Planning Agent for the ABB GoFa Robot',
      period: 'Jul 2025–Sep 2025',
      role: 'Robotics Application Software Developer Intern',
      category: 'Robotics',
      description:
        'Built an Azure OpenAI task-planning agent in ABB Robotics R&D that translated natural-language tasks into executable RAPID commands.',
      highlights: [
        'Used RWS services for task decomposition, serial and parallel execution, and failure handling.',
        'Built a RAG coding assistant in App Studio for robot-function generation and technical retrieval.',
      ],
      tech: ['Azure OpenAI', 'LangGraph', 'RAPID', 'RWS', 'MCP'],
      media: [
        { alt: 'Placeholder for the ABB GoFa robot', label: 'GoFa robot' },
        {
          alt: 'Placeholder for the ABB task-planning interface',
          label: 'Task planning',
        },
      ],
    },
    {
      id: 'crane-robot',
      title: 'National Crane Creativity Competition Robot',
      period: 'Feb 2022–Nov 2022',
      role: 'Team Lead & Core Developer',
      category: 'Hardware',
      description:
        'Designed an STM32-powered autonomous crane robot that moved multiple payloads along a specified route using mechanical design, embedded control, and path planning.',
      highlights: [
        'Programmed motors, servos, and the robot arm in C and coordinated modules over CAN bus.',
        'Reduced total operating time from 4m32s to 3m15s and won national first prize.',
      ],
      tech: ['STM32', 'C', 'CAN Bus', 'Mechanical Design', 'Path Planning'],
      links: [
        {
          label: 'Video',
          href: 'https://www.bilibili.com/video/BV1J2p6zXEnv/',
        },
      ],
      media: [
        {
          alt: 'Placeholder for the complete crane robot',
          label: 'Complete robot',
        },
        {
          alt: 'Placeholder for the crane robot mechanism',
          label: 'Mechanical system',
        },
      ],
    },
    {
      id: 'ai-agents-town',
      title: 'AI Agents Town',
      period: 'Dec 2024–Apr 2025',
      role: 'Full-Stack Developer Intern',
      category: 'Software',
      description:
        'Built LLM-driven characters with long-term memory and contextual interaction inside a browser-based virtual world where player actions changed relationships and story state.',
      highlights: [
        'Built the game world in Phaser and connected it to React through an event bus.',
        'Used RAG, Postgres, and Neo4j to manage character memory, experience, and relationships.',
      ],
      tech: ['React', 'Phaser', 'LangChain', 'RAG', 'Postgres', 'Neo4j'],
      media: [
        {
          alt: 'Placeholder for the AI Agents Town game world',
          label: 'Game world',
        },
        {
          alt: 'Placeholder for an AI Agents Town character conversation',
          label: 'Agent conversation',
        },
      ],
    },
  ],
}
