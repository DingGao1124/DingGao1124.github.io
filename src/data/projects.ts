type LinkItem = {
  label: string
  href: string
  /** Optional key used to map to a Lucide icon in the content cards. */
  icon?: string
  /** Optional short description shown next to the label. */
  description?: string
}

export type ProjectCategory =
  | "Research"
  | "Robotics"
  | "Software"
  | "Hardware"
  | "研究"
  | "机器人"
  | "软件"
  | "硬件"

export type Project = {
  title: string
  period?: string
  role?: string
  category: ProjectCategory
  description: string
  highlights: string[]
  tech: string[]
  links?: LinkItem[]
  images?: string[]
}

export const projects: Record<SiteLocale, Project[]> = {
  zh: [
    {
      title: "基于 LLM 多智能体的数字孪生产线监控平台",
      period: "2024.09 - 至今",
      role: "项目负责人",
      category: "研究",
      description:
        "构建物理生产流水线的虚拟三维模型，为产线单元配置 LLM 驱动智能体，使其感知自身状态并与相邻智能体交互，持续更新虚拟产线状态并辅助控制物理产线。",
      highlights: [
        "使用 React、Next.js、Supabase、ReactFlow 与 ThreeJS/R3F 构建前后端与三维展示。",
        "通过 Socket / WebSocket 同步真实产线位置位姿与前端 ThreeJS 模型状态。",
        "集成 STT/TTS 与语音大语言模型，支持自然语言交互与生产知识 RAG 检索。",
      ],
      tech: [
        "React",
        "Next.js",
        "ThreeJS",
        "Supabase",
        "LangChain",
        "LangGraph",
      ],
    },
    {
      title: "NVIDIA Sky Hackathon 工业拆卸工具推荐机器人",
      period: "2025.04 - 2025.06",
      role: "核心开发者",
      category: "机器人",
      description:
        "针对退役汽车动力电池拆卸场景，开发多模态感知-决策-执行系统，通过语音指令和场景理解驱动 LLM 生成拆卸策略并控制机械臂夹取工具。",
      highlights: [
        "融合 YOLO-World、FastSAM、VLLM 与 SoM prompting，提升细粒度视觉识别能力。",
        "使用 GraspNet 从点云生成抗碰撞抓取位姿，并通过 MCP / Socket 与 UR 机械臂通信。",
        "获得第十二届 NVIDIA Sky Hackathon 全国二等奖。",
      ],
      tech: ["LLM", "VLA", "FastSAM", "GraspNet", "LangGraph", "MCP"],
      links: [
        {
          label: "视频",
          href: "https://www.bilibili.com/video/BV1sRj3zAEXG",
          icon: "video",
        },
        {
          label: "GitCode",
          href: "https://gitcode.com/baomingcanjia/URgrasp_agent",
          icon: "code",
        },
        {
          label: "GitHub",
          href: "https://github.com/SsspongeBob/Hackathon",
          icon: "github",
        },
      ],
    },
    {
      title: "LLM-based Agent for ABB GoFa Robot",
      period: "2025.07 - 2025.09",
      role: "应用软件开发-机器人",
      category: "机器人",
      description:
        "在 ABB 机器人与离散自动化 R&D 部门，围绕 GoFa 协作机器人构建基于 Azure OpenAI 的任务规划智能体，并与 RWS、RAPID 和上位机软件集成。",
      highlights: [
        "通过 LangGraph 构建多任务节点，支持长序列任务拆解、串并行执行与异常处理。",
        "封装 RWS 服务以动态读取和修改 RAPID 变量，降低重复修改机器人代码的成本。",
        "待补充：Project Description / README / workflow 摘要。",
      ],
      tech: ["Azure OpenAI", "LangGraph", "RAPID", "RWS", "Vue", "MCP"],
    },
    {
      title: "第六届中国大学生起重机创意大赛",
      period: "2022.02 - 2022.11",
      role: "队长 & 核心开发员",
      category: "硬件",
      description:
        "设计 STM32 驱动的自主起重机器人，在限定时间内沿指定路线搬运多种货物，并通过机械结构、驱动程序和路径规划算法提升效率。",
      highlights: [
        "设计移动底盘与 3D 打印扇形机构，改善接口限制下的取放定位问题。",
        "使用 C 语言驱动直流电机、编码器电机、舵机和机械臂，并通过 CAN 总线协调模块。",
        "作品获全国一等奖，整体工作时间由 4min32s 缩短至 3min15s。",
      ],
      tech: ["STM32", "C", "CAN Bus", "Mechanical Design", "Path Planning"],
      links: [
        {
          label: "视频",
          href: "https://www.bilibili.com/video/BV1J2p6zXEnv/",
          icon: "video",
        },
      ],
    },
    {
      title: "AI Agents Town",
      period: "2024.12 - 2025.04",
      role: "全栈开发工程师",
      category: "软件",
      description:
        "将游戏引擎与前端结合，实现 LLM 驱动的 AI 智能体小镇，玩家行动会影响小镇剧情走向。",
      highlights: [
        "通过 Phaser 构建游戏场景、NPC、玩家和游戏世界，并用 Event Bus 与 React 交互。",
        "NPC 具备长短期记忆和经历总结能力，使用 RAG 增强上下文交互。",
        "使用图数据库维护角色关系，并通过 tool calling 推动剧情状态变化。",
      ],
      tech: ["React", "Vite", "Phaser", "LangChain", "Postgres", "Neo4J"],
    },
    {
      title: "WhatsApp 智能体客服",
      category: "软件",
      description:
        "面向租房客户需求，构建可监听 WhatsApp 消息并调用智能体进行自动回复的客服系统。",
      highlights: [
        "通过 Twilio WebHook 监听客户消息，并同步至后台聊天界面。",
        "后台基于 WebSocket 同时展示用户消息与智能体回复。",
        "支持工单、问答和配送等请求类型；待补充：业务规则与评估方式。",
      ],
      tech: ["Twilio", "WebHook", "WebSocket", "LLM Agent"],
    },
    {
      title: "LLM Work Station",
      category: "软件",
      description: "待补充：功能说明。",
      highlights: ["已保留作品视频链接，后续补充功能边界、技术栈和演示说明。"],
      tech: ["LLM", "待补充"],
      links: [
        {
          label: "视频",
          href: "https://www.bilibili.com/video/BV1eypCzQEhy/",
          icon: "video",
        },
      ],
    },
    {
      title: "The Three Stooges Website",
      category: "软件",
      description:
        "面向研究交流设计的网站，支持管理 Top 100 论文、发布观点、评论讨论，并与面向数字孪生研究微调的 LLM 对话。",
      highlights: [
        "支持论文管理、观点发布、评论互动和研究问答。",
        "待补充：系统截图、部署地址与模型微调说明。",
      ],
      tech: ["Web", "LLM", "Digital Twin", "待补充"],
    },
    {
      title: "LLM Chrome Extension",
      category: "软件",
      description: "待补充：Chrome Extension 的目标、功能与技术栈。",
      highlights: [
        "语雀 Portfolio 已列出该项目标题，首版保留位置以便后续完善。",
      ],
      tech: ["Chrome Extension", "LLM", "待补充"],
    },
  ],
  en: [
    {
      title: "LLM Multi-Agent Digital-Twin Production Line Monitoring Platform",
      period: "Sep 2024 - Present",
      role: "Project Lead",
      category: "Research",
      description:
        "Built a virtual 3D model of a physical production line and assigned an LLM-driven agent to each unit. The agents perceive their own state, communicate with adjacent agents, continuously update the virtual line, and assist with control of the physical system.",
      highlights: [
        "Built the full-stack application and 3D visualization with React, Next.js, Supabase, React Flow, and Three.js / React Three Fiber.",
        "Synchronized position and pose data from the physical line with the Three.js scene through Socket and WebSocket connections.",
        "Integrated STT, TTS, and a voice-enabled LLM for natural-language interaction and RAG over production knowledge.",
      ],
      tech: [
        "React",
        "Next.js",
        "Three.js",
        "Supabase",
        "LangChain",
        "LangGraph",
      ],
    },
    {
      title:
        "Industrial Disassembly Tool-Recommendation Robot — NVIDIA Sky Hackathon",
      period: "Apr 2025 - Jun 2025",
      role: "Core Developer",
      category: "Robotics",
      description:
        "Developed a multimodal perception-decision-action system for dismantling retired EV batteries. Voice commands and scene understanding guide an LLM in generating a disassembly strategy and controlling a robot arm to retrieve tools.",
      highlights: [
        "Combined YOLO-World, FastSAM, VLLM, and Set-of-Mark prompting to improve fine-grained visual recognition.",
        "Used GraspNet to generate collision-aware grasp poses from point clouds and connected to a UR robot through MCP and Socket interfaces.",
        "Won second prize nationally in the 12th NVIDIA Sky Hackathon.",
      ],
      tech: ["LLM", "VLA", "FastSAM", "GraspNet", "LangGraph", "MCP"],
      links: [
        {
          label: "Video",
          href: "https://www.bilibili.com/video/BV1sRj3zAEXG",
          icon: "video",
        },
        {
          label: "GitCode",
          href: "https://gitcode.com/baomingcanjia/URgrasp_agent",
          icon: "code",
        },
        {
          label: "GitHub",
          href: "https://github.com/SsspongeBob/Hackathon",
          icon: "github",
        },
      ],
    },
    {
      title: "LLM-based Agent for ABB GoFa Robot",
      period: "Jul 2025 - Sep 2025",
      role: "Robotics Application Software Developer",
      category: "Robotics",
      description:
        "Built an Azure OpenAI-based task-planning agent for the GoFa collaborative robot in ABB's Robotics and Discrete Automation R&D team, integrating it with RWS, RAPID, and supervisory software.",
      highlights: [
        "Built a multi-node LangGraph workflow for long-horizon task decomposition, serial and parallel execution, and exception handling.",
        "Wrapped RWS services to read and update RAPID variables dynamically, reducing repeated changes to robot code.",
        "To be added: project description, README, and workflow summary.",
      ],
      tech: ["Azure OpenAI", "LangGraph", "RAPID", "RWS", "Vue", "MCP"],
    },
    {
      title: "6th China University Student Crane Innovation Competition",
      period: "Feb 2022 - Nov 2022",
      role: "Team Lead & Core Developer",
      category: "Hardware",
      description:
        "Designed an STM32-powered autonomous crane robot that transported multiple payloads along a specified route within a time limit, improving efficiency through mechanical design, embedded control, and path-planning algorithms.",
      highlights: [
        "Designed the mobile chassis and a 3D-printed sector mechanism to improve pick-and-place positioning under interface constraints.",
        "Programmed DC motors, encoder motors, servos, and the robot arm in C, coordinating modules over CAN bus.",
        "Won first prize nationally and reduced total operating time from 4m32s to 3m15s.",
      ],
      tech: ["STM32", "C", "CAN Bus", "Mechanical Design", "Path Planning"],
      links: [
        {
          label: "Video",
          href: "https://www.bilibili.com/video/BV1J2p6zXEnv/",
          icon: "video",
        },
      ],
    },
    {
      title: "AI Agents Town",
      period: "Dec 2024 - Apr 2025",
      role: "Full-Stack Developer",
      category: "Software",
      description:
        "Combined a game engine with a web interface to create a town populated by LLM-driven agents, where player actions influence how the story develops.",
      highlights: [
        "Built the game scene, NPCs, player, and world in Phaser, using an event bus to communicate with React.",
        "Gave NPCs short- and long-term memory with experience summarization, using RAG to enrich contextual interactions.",
        "Maintained character relationships in a graph database and advanced story state through tool calling.",
      ],
      tech: ["React", "Vite", "Phaser", "LangChain", "Postgres", "Neo4j"],
    },
    {
      title: "WhatsApp Customer-Service Agent",
      category: "Software",
      description:
        "Built a customer-service system for rental inquiries that listens for WhatsApp messages and invokes an agent to respond automatically.",
      highlights: [
        "Received customer messages through a Twilio webhook and synchronized them with an administrative chat interface.",
        "Displayed customer messages and agent responses together in real time over WebSocket.",
        "Supported ticketing, Q&A, and delivery requests; to be added: business rules and evaluation methodology.",
      ],
      tech: ["Twilio", "Webhook", "WebSocket", "LLM Agent"],
    },
    {
      title: "LLM Work Station",
      category: "Software",
      description: "To be added: feature overview.",
      highlights: [
        "The project video is available; scope, technology stack, and demonstration notes will be added later.",
      ],
      tech: ["LLM", "To be added"],
      links: [
        {
          label: "Video",
          href: "https://www.bilibili.com/video/BV1eypCzQEhy/",
          icon: "video",
        },
      ],
    },
    {
      title: "The Three Stooges Website",
      category: "Software",
      description:
        "Designed a research community website for managing a Top 100 paper collection, publishing viewpoints, discussing comments, and chatting with an LLM fine-tuned for digital-twin research.",
      highlights: [
        "Supported paper management, viewpoint publishing, comment discussions, and research Q&A.",
        "To be added: system screenshots, deployment URL, and model fine-tuning details.",
      ],
      tech: ["Web", "LLM", "Digital Twin", "To be added"],
    },
    {
      title: "LLM Chrome Extension",
      category: "Software",
      description:
        "To be added: the extension's goals, features, and technology stack.",
      highlights: [
        "The Yuque portfolio lists this project title; this initial entry is retained for future completion.",
      ],
      tech: ["Chrome Extension", "LLM", "To be added"],
    },
  ],
}
