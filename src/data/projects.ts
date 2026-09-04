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
  links?: ProjectLink[]
  media: ProjectMedia
}

export const projects: Record<SiteLocale, Project[]> = {
  en: [
    {
      id: 'digital-twin-production-line',
      title: 'LLM Multi-Agent Digital Twin for Flexible Production Lines',
      period: 'Sep 2023-Jun 2026',
      role: 'Graduate Researcher',
      category: 'Digital Twins',
      description:
        'Proposed a knowledge-behavior-geometry framework that used LLM-based agents to generate, coordinate, and reconfigure digital twin models in response to changing production tasks and system states.',
      highlights: [
        'Developed a digital twin platform integrating interactive 3D models, real-time physical-virtual synchronization, event-driven agent tool calls, RAG-based manufacturing knowledge retrieval, and natural-language interaction.',
        'Evaluated the framework on a parts defect-monitoring and sorting line; experiments reported a 47% reduction in changeover and recovery time and a lower false-positive rate than conventional methods.',
      ],
      tech: ['LLM Agents', 'RAG', 'Three.js', 'React', 'Next.js', 'WebSocket'],
      media: {
        alt: 'Placeholder for the digital-twin production-line interface',
        label: 'Production-line interface',
      },
    },
    {
      id: 'industrial-disassembly-robot',
      title: 'Embodied AI Robot for Industrial Disassembly',
      period: 'Apr 2025-Jun 2025',
      role: 'Research Assistant',
      category: 'Embodied AI',
      description:
        'Developed a multimodal perception-decision-action system for retired EV-battery disassembly, enabling voice-guided task planning and robotic tool-handling operations.',
      highlights: [
        'Constructed a LangGraph-based agent integrated with a voice-specialized LLM for real-time task planning, tool selection, and human-robot interaction.',
        'Combined FastSAM and VLMs for scene understanding, Strategy of Mind prompting for grasp planning, and GraspNet with MCP tool calling to control a UR robot for collision-free tool pickup and delivery.',
      ],
      tech: ['LangGraph', 'VLM', 'FastSAM', 'GraspNet', 'MCP', 'UR Robot'],
      links: [
        { label: 'Video', href: 'https://www.bilibili.com/video/BV1sRj3zAEXG' },
        {
          label: 'GitCode',
          href: 'https://gitcode.com/baomingcanjia/URgrasp_agent',
        },
        { label: 'GitHub', href: 'https://github.com/SsspongeBob/Hackathon' },
      ],
      media: {
        alt: 'Placeholder for the industrial disassembly robot experiment',
        label: 'Robot experiment',
      },
    },
    {
      id: 'abb-gofa-agent',
      title: 'Task-Planning Agent for the ABB GoFa Robot',
      period: 'Jul 2025-Sep 2025',
      role: 'Robotics Application Software Intern',
      category: 'Robot Automation',
      description:
        'Developed an LLM-driven robotic task planner using Azure OpenAI and MCP, decomposing complex natural-language instructions into executable RAPID commands through Robot Web Services.',
      highlights: [
        'Implemented parallel task coordination and execution-failure handling, enabling the planner to manage multi-step robot operations and respond to unsuccessful actions.',
        'Improved Tangram recognition under variable lighting through dynamic HSV parameter adjustment and developed a RAG-based AppStudio assistant for robot-function generation and technical knowledge retrieval.',
      ],
      tech: ['Azure OpenAI', 'MCP', 'RAPID', 'RWS', 'RAG'],
      media: { alt: 'Placeholder for the ABB GoFa robot', label: 'GoFa robot' },
    },
    {
      id: 'mobile-crane-robot',
      title: 'Mobile Crane Robot',
      period: 'Feb 2022-Nov 2022',
      role: 'Team Lead',
      category: 'Robotics & Embedded Systems',
      description:
        'Led the development of a mobile crane robot for transporting and placing different objects along designated routes, including mechanical design, motion analysis, and system integration.',
      highlights: [
        'Programmed an STM32-based control system for DC motors, encoder motors, servos, and robotic arms, coordinating multiple actuators through CAN bus communication for precise movement and manipulation.',
        'Developed a dynamic shortest-path algorithm and upgraded the actuation mechanism from a single- to triple-motor configuration, reducing total operation time from 4 min 32 sec to 3 min 15 sec.',
      ],
      tech: ['STM32', 'C', 'CAN Bus', 'Path Planning', 'Mechanical Design'],
      links: [
        {
          label: 'Video',
          href: 'https://www.bilibili.com/video/BV1J2p6zXEnv/',
        },
      ],
      media: {
        alt: 'Placeholder for the complete mobile crane robot',
        label: 'Complete robot',
      },
    },
    {
      id: 'multi-agent-virtual-world',
      title: 'Interactive Multi-Agent Virtual World',
      period: 'Dec 2024-Apr 2025',
      role: 'Full-Stack Developer Intern',
      category: 'Agent Systems',
      description:
        'Architected a LangChain-based multi-agent system for an interactive virtual world, incorporating memory-augmented agents and RAG-enhanced contextual reasoning.',
      highlights: [
        'Integrated the agent system into a browser-based Phaser environment, enabling agents to maintain contextual memory and support more coherent user-agent interactions.',
      ],
      tech: ['LangChain', 'RAG', 'Phaser', 'React'],
      media: {
        alt: 'Placeholder for the interactive multi-agent virtual world',
        label: 'Virtual world',
      },
    },
  ],
  zh: [
    {
      id: 'digital-twin-production-line',
      title: '基于 LLM 多智能体的柔性产线数字孪生平台',
      period: '2023.09-2026.06',
      role: '研究生研究',
      category: '数字孪生',
      description: '构建了连接实时生产状态、三维模型、制造知识与 LLM 智能体的数字孪生平台。',
      highlights: [
        '提出知识-行为-几何框架，使智能体能够随生产任务与系统状态变化生成、协同和重构模型。',
        '集成交互式三维模型、虚实同步、事件驱动工具调用、制造知识 RAG 与自然语言交互。',
        '在零件缺陷监测与分拣产线上完成验证，将换线与恢复时间降低 47%。',
      ],
      tech: ['LLM Agents', 'RAG', 'Three.js', 'React', 'Next.js', 'WebSocket'],
      media: { alt: '数字孪生产线界面占位图', label: 'Production-line interface' },
    },
    {
      id: 'industrial-disassembly-robot',
      title: '工业拆卸具身智能机器人',
      period: '2025.04-2025.06',
      role: '研究助理',
      category: '具身智能',
      description: '开发了面向退役电动汽车电池拆卸的语音引导感知-决策-执行系统。',
      highlights: [
        '使用 LangGraph 和语音专用大模型完成实时任务规划、工具选择与人机交互。',
        '结合 FastSAM、VLM 与 Strategy of Mind prompting 理解场景并规划抓取。',
        '通过 GraspNet 与 MCP 控制 UR 机器人完成无碰撞工具取送。',
      ],
      tech: ['LangGraph', 'VLM', 'FastSAM', 'GraspNet', 'MCP', 'UR Robot'],
      links: [
        { label: 'Video', href: 'https://www.bilibili.com/video/BV1sRj3zAEXG' },
        { label: 'GitCode', href: 'https://gitcode.com/baomingcanjia/URgrasp_agent' },
        { label: 'GitHub', href: 'https://github.com/SsspongeBob/Hackathon' },
      ],
      media: { alt: '工业拆卸机器人实验占位图', label: 'Robot experiment' },
    },
    {
      id: 'abb-gofa-agent',
      title: 'ABB GoFa 机器人任务规划智能体',
      period: '2025.07-2025.09',
      role: '机器人应用软件开发实习生',
      category: '机器人自动化',
      description: '在 ABB 机器人研发部门开发了将自然语言任务转换为 RAPID 指令的任务规划智能体。',
      highlights: [
        '使用 Azure OpenAI、MCP 与 Robot Web Services 拆解并执行多步骤机器人任务。',
        '实现并行任务协调和执行失败处理。',
        '改进了变化光照下的七巧板识别，并开发 AppStudio RAG 编程助手。',
      ],
      tech: ['Azure OpenAI', 'MCP', 'RAPID', 'RWS', 'RAG'],
      media: { alt: 'ABB GoFa 机器人占位图', label: 'GoFa robot' },
    },
    {
      id: 'mobile-crane-robot',
      title: '移动起重机器人',
      period: '2022.02-2022.11',
      role: '队长',
      category: '机器人与嵌入式',
      description: '带领团队设计并集成了一台沿指定路线运输和放置多类物体的移动起重机器人。',
      highlights: [
        '负责机械设计、运动分析、STM32 控制与 CAN 总线多执行器协调。',
        '开发动态最短路径算法，并将执行机构由单电机升级为三电机。',
        '将总运行时间从 4 分 32 秒降至 3 分 15 秒，项目获得全国一等奖。',
      ],
      tech: ['STM32', 'C', 'CAN Bus', 'Path Planning', 'Mechanical Design'],
      links: [{ label: 'Video', href: 'https://www.bilibili.com/video/BV1J2p6zXEnv/' }],
      media: { alt: '移动起重机器人整机占位图', label: 'Complete robot' },
    },
    {
      id: 'multi-agent-virtual-world',
      title: '交互式多智能体虚拟世界',
      period: '2024.12-2025.04',
      role: '全栈开发实习生',
      category: '智能体系统',
      description: '为浏览器虚拟世界构建了具备长期记忆与检索增强上下文推理能力的多智能体系统。',
      highlights: [
        '使用 LangChain 设计记忆增强智能体和 RAG 上下文流程。',
        '将智能体系统集成到 Phaser 环境中，使角色能够维持更连贯的上下文交互。',
      ],
      tech: ['LangChain', 'RAG', 'Phaser', 'React'],
      media: { alt: '多智能体虚拟世界占位图', label: 'Virtual world' },
    },
  ],
}
