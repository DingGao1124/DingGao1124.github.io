import type { Education, Experience, LinkItem, Project, Publication, ResearchArea } from "./types"


export const email = "2231117@mail.dhu.edu.cn"

export const profileLinks: LinkItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ding-gao-995147349/",
  },
  {
    label: "Yuque Portfolio",
    href: "https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer?singleDoc",
  },
  {
    label: "GitHub",
    href: "https://github.com/DingGao1124",
  },
]

export const summaryTags = [
  "Digital Twin",
  "LLM Agents",
  "Embodied AI",
  "Robotics",
  "Full-Stack",
]

export const researchAreas: ResearchArea[] = [
  {
    title: "Digital Twin",
    description: "面向柔性制造与产线监控，构建知识、行为、几何三类模型，并关注虚实状态同步。",
  },
  {
    title: "LLM-based Multi-Agent Systems",
    description: "使用 LangChain / LangGraph 构建智能体工作流、流式对话、工具调用与 RAG 检索。",
  },
  {
    title: "Embodied AI / VLA",
    description: "结合视觉语言模型、分割、点云抓取与机械臂控制，实现感知-决策-执行闭环。",
  },
  {
    title: "Human-Robot Collaboration",
    description: "关注 AR 辅助、工业拆卸、语音交互和机器人任务规划中的人机协同问题。",
  },
]

export const projects: Project[] = [
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
    tech: ["React", "Next.js", "ThreeJS", "Supabase", "LangChain", "LangGraph"],
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
      { label: "视频", href: "https://www.bilibili.com/video/BV1sRj3zAEXG", icon: "video" },
      { label: "GitCode", href: "https://gitcode.com/baomingcanjia/URgrasp_agent", icon: "code" },
      { label: "GitHub", href: "https://github.com/SsspongeBob/Hackathon", icon: "github" },
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
      { label: "视频", href: "https://www.bilibili.com/video/BV1J2p6zXEnv/", icon: "video" },
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
    highlights: [
      "已保留作品视频链接，后续补充功能边界、技术栈和演示说明。",
    ],
    tech: ["LLM", "待补充"],
    links: [
      { label: "视频", href: "https://www.bilibili.com/video/BV1eypCzQEhy/", icon: "video" },
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
]

export const publications: Publication[] = [
  {
    title:
      "Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration",
    meta: "Journal of Manufacturing Systems · 2025",
    note: "DOI: 10.1016/J.JMSY.2025.10.005",
    type: "journal",
    links: [{ label: "DOI", href: "https://doi.org/10.1016/J.JMSY.2025.10.005", icon: "doi" }],
  },
  {
    title:
      "Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly",
    meta: "Robotics and Computer-Integrated Manufacturing · 2026",
    note: "DOI: 10.1016/J.RCIM.2025.103207",
    type: "journal",
    links: [{ label: "DOI", href: "https://doi.org/10.1016/J.RCIM.2025.103207", icon: "doi" }],
  },
  {
    title:
      "Self-Evolving Digital Twins in Flexible Manufacturing: A Large Language Model-Powered Multi-Agent Approach",
    meta: "Digital Engineering · First author",
    note: "Status: Major Revision.",
    type: "journal",
  },
  {
    title: "一种基于导电混凝土的预制构件系统",
    meta: "实用新型专利 · 共同发明人",
    note: "Patent No. ZL 12601087.",
    type: "patent",
  },
  {
    title: "一种角度可调节舞台及其使用方法",
    meta: "发明专利 · 共同发明人",
    note: "Publication No. CN113702385A.",
    type: "patent",
  },
]

export const experiences: Experience[] = [
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
]

export const education: Education[] = [
  {
    school: "东华大学",
    degree: "智能制造 · 硕士",
    period: "2023.09 - 至今",
    location: "上海",
  },
  {
    school: "南京工程学院",
    degree: "机械工程 · 本科",
    period: "2019.09 - 2023.06",
    location: "南京",
  },
]

export const honors = [
  "一等奖学金、二等奖学金与学业奖学金多次",
  "全国大学生数学竞赛全国一等奖",
  "第六届中国大学生起重机创意大赛全国一等奖",
  "第十二届 NVIDIA Sky Hackathon 全国二等奖",
]
