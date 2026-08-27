export type ResearchArea = {
  title: string
  description: string
}

export type ResearchExperience = {
  id: string
  organization: string
  role: string
  period: string
  location: string
  advisor: string
  summary: string
  highlights: string[]
}

export const researchAreas: Record<SiteLocale, ResearchArea[]> = {
  zh: [
    {
      title: "数字孪生",
      description:
        "面向柔性制造与产线监控，研究知识、行为、几何三类模型及物理系统与虚拟模型的实时同步。",
    },
    {
      title: "LLM 多智能体系统",
      description:
        "使用 LangChain 与 LangGraph 构建智能体工作流、流式对话、工具调用和检索增强生成。",
    },
    {
      title: "具身智能与 VLA",
      description:
        "结合视觉语言模型、图像分割、点云抓取与机械臂控制，构建感知—决策—执行闭环。",
    },
    {
      title: "人机协作",
      description:
        "关注增强现实辅助、工业拆卸、语音交互和机器人任务规划中的协作效率与可靠性。",
    },
  ],
  en: [
    {
      title: "Digital Twins",
      description:
        "Modeling knowledge, behavior, and geometry for flexible manufacturing while synchronizing physical production systems with their virtual counterparts.",
    },
    {
      title: "LLM Multi-Agent Systems",
      description:
        "Building agent workflows, streaming dialogue, tool use, and retrieval-augmented generation with LangChain and LangGraph.",
    },
    {
      title: "Embodied AI & VLA",
      description:
        "Combining vision-language models, segmentation, point-cloud grasping, and robot control into a perception–decision–action loop.",
    },
    {
      title: "Human–Robot Collaboration",
      description:
        "Studying collaboration reliability and efficiency in AR assistance, industrial disassembly, voice interaction, and robot task planning.",
    },
  ],
}

export const researchExperiences: Record<SiteLocale, ResearchExperience[]> = {
  zh: [
    {
      id: "digital-twin-agents",
      organization: "东华大学",
      role: "研究助理 — 数字孪生与 LLM 多智能体系统",
      period: "2023.09–2026.06",
      location: "上海",
      advisor: "包劲松 教授",
      summary:
        "设计并实现融合数字孪生、生产线实时同步和 LLM 多智能体协作的完整系统架构。",
      highlights: [
        "使用 React、Next.js、Three.js / R3F 与 Supabase 构建前端、三维场景和数据服务。",
        "通过 Socket / WebSocket 同步物理产线单元与虚拟模型的状态和位姿。",
        "提出知识、行为、几何三模型框架，并实现流式智能体对话、事件驱动工具调用和 STT/TTS 语音交互。",
        "通过 RAG 支持以自然语言检索生产知识。",
      ],
    },
    {
      id: "industrial-disassembly",
      organization: "东华大学",
      role: "研究助理 — 工业拆卸嵌入式 AI 工具推荐机器人",
      period: "2025.04–2025.06",
      location: "上海",
      advisor: "司家辉 博士",
      summary:
        "面向退役电动汽车电池拆卸，开发多模态感知—决策—执行系统，通过语音指令驱动策略生成和机械臂取送工具。",
      highlights: [
        "使用 LangGraph 与通义千问语音模型构建实时任务规划与语音交互智能体。",
        "结合 FastSAM、视觉语言模型与 Set-of-Mark prompting 提升抓取规划的场景理解准确性。",
        "使用 GraspNet 从点云生成抗碰撞抓取位姿，并通过 MCP 控制 UR 机械臂。",
      ],
    },
    {
      id: "ball-screw-platform",
      organization: "南京工程学院",
      role: "本科毕业设计 — 三自由度滚珠丝杠缺陷检测平台",
      period: "2023.01–2023.06",
      location: "南京",
      advisor: "郝飞 副教授",
      summary:
        "完成缺陷检测平台的机械选型、三维建模、运动仿真、嵌入式控制和电路验证。",
      highlights: [
        "完成轴向/径向载荷与电机扭矩计算，并使用 CAD 与 UG NX 进行二维工程图和三维建模。",
        "使用 8051 单片机和 C 语言生成 PWM 信号，控制步进电机完成直线与圆弧运动。",
        "在 Proteus 中设计电路原理图并验证控制系统行为。",
      ],
    },
  ],
  en: [
    {
      id: "digital-twin-agents",
      organization: "Donghua University",
      role: "Research Assistant — Digital Twins & LLM Multi-Agent Systems",
      period: "Sep 2023–Jun 2026",
      location: "Shanghai",
      advisor: "Prof. Jinsong Bao",
      summary:
        "Designed and implemented a complete architecture combining digital twins, real-time production-line synchronization, and LLM multi-agent coordination.",
      highlights: [
        "Built the interface, 3D scene, and data services with React, Next.js, Three.js / R3F, and Supabase.",
        "Synchronized physical production units with virtual models over Socket and WebSocket connections.",
        "Proposed a knowledge–behavior–geometry model and implemented streaming agent dialogue, event-driven tool calls, and STT/TTS voice interaction.",
        "Added RAG-based natural-language access to production knowledge.",
      ],
    },
    {
      id: "industrial-disassembly",
      organization: "Donghua University",
      role: "Research Assistant — Embedded-AI Tool Recommendation Robot",
      period: "Apr 2025–Jun 2025",
      location: "Shanghai",
      advisor: "Dr. Jiahui Si",
      summary:
        "Developed a multimodal perception–decision–action system for retired EV-battery disassembly, using voice commands to drive strategy generation and robotic tool delivery.",
      highlights: [
        "Built real-time task planning and voice interaction with LangGraph and Alibaba's Tongyi Qianwen voice model.",
        "Combined FastSAM, vision-language models, and Set-of-Mark prompting to improve scene understanding for grasp planning.",
        "Generated collision-aware poses from point clouds with GraspNet and controlled a UR robot through MCP.",
      ],
    },
    {
      id: "ball-screw-platform",
      organization: "Nanjing Institute of Technology",
      role: "Undergraduate Thesis — 3-DOF Ball Screw Defect Detection Platform",
      period: "Jan 2023–Jun 2023",
      location: "Nanjing",
      advisor: "A/Prof. Fei Hao",
      summary:
        "Completed the platform's mechanical selection, 3D modeling, motion simulation, embedded control, and circuit validation.",
      highlights: [
        "Calculated axial and radial loads and motor torque, then produced engineering drawings and 3D models in CAD and UG NX.",
        "Programmed an 8051 microcontroller in C to generate PWM signals for linear and arc motion.",
        "Designed the circuit schematic and validated controller behavior in Proteus.",
      ],
    },
  ],
}
