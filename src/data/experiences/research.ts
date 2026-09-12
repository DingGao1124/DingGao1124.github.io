export type ResearchEntry = {
  id: string
  organization: string
  role: string
  period: string
  location: string
  advisor: string
  summary: string
  highlights: string[]
  media: {
    src?: string
    alt: string
    label: string
  }
}

export const research: Record<SiteLocale, ResearchEntry[]> = {
  en: [
    {
      id: 'digital-twin-agents',
      organization: 'Donghua University',
      role: 'Graduate Research - LLM-Enabled Digital Twins for Flexible Manufacturing Automation',
      period: 'Sep 2023-Jun 2026',
      location: 'Shanghai, China',
      advisor: 'Prof. Jinsong Bao',
      summary:
        'Proposed a knowledge-behavior-geometry framework in which LLM agents generate, coordinate, and reconfigure digital twin models as production tasks and system states change.',
      highlights: [
        'Built a digital twin platform with interactive 3D models, real-time physical-virtual synchronization, and natural-language interaction.',
        'Connected agent reasoning to the line through event-driven tool calls and RAG-based manufacturing knowledge retrieval.',
        'Validated on a parts defect-monitoring and sorting line: 47% less changeover and recovery time and a lower false-positive rate than conventional methods.',
      ],
      media: {
        alt: 'Placeholder for the digital-twin production-line platform',
        label: 'Digital-twin platform',
      },
    },
    {
      id: 'industrial-disassembly',
      organization: 'Donghua University',
      role: 'Research Assistant - Embodied AI Robotic System for Industrial Disassembly',
      period: 'Apr 2025-Jun 2025',
      location: 'Shanghai, China',
      advisor: 'Dr. Jiahui Si',
      summary:
        'Developed a multimodal perception-decision-action system for retired EV-battery disassembly, with voice-guided planning and robotic tool handling.',
      highlights: [
        'Built a LangGraph agent with a voice-specialized LLM for real-time task planning, tool selection, and human-robot interaction.',
        'Combined FastSAM and VLMs for scene understanding with Strategy of Mind prompting and GraspNet for grasp planning.',
        'Exposed UR robot control through MCP tool calls for collision-free tool pickup and delivery.',
      ],
      media: {
        alt: 'Placeholder for the embodied industrial disassembly system',
        label: 'Embodied disassembly system',
      },
    },
    {
      id: 'ball-screw-platform',
      organization: 'Nanjing Institute of Technology',
      role: 'Undergraduate Thesis - 3-DOF Ball Screw Defect Detection Platform',
      period: 'Jan 2023-Jun 2023',
      location: 'Nanjing, China',
      advisor: 'A/Prof. Fei Hao',
      summary:
        'Designed a 3-DOF mechatronic platform for ball-screw defect detection, including load analysis, motor-torque calculations, and component selection.',
      highlights: [
        'Produced 2D engineering drawings, 3D CAD/UG models, and kinematic simulations of the platform.',
        'Built an 8051 controller for stepper-driven linear and arc motion, validating circuit and control behavior in Proteus.',
      ],
      media: {
        alt: 'Placeholder for the 3-DOF ball screw defect detection platform',
        label: '3-DOF inspection platform',
      },
    },
    {
      id: 'mobile-crane-robot',
      organization: 'Nanjing Institute of Technology',
      role: 'Robotics Competition - National University Students Mobile Crane Robot Competition',
      period: 'Feb 2022-Nov 2022',
      location: 'Nanjing, China',
      advisor: 'A/Prof. Fei Hao',
      summary:
        'Led the development of a mobile crane robot that transports and places objects along designated routes, covering mechanical design, motion analysis, and system integration.',
      highlights: [
        'Programmed an STM32 control system for DC motors, encoder motors, servos, and robotic arms, coordinated over CAN bus.',
        'Added a dynamic shortest-path algorithm and moved to a triple-motor mechanism, cutting operation time from 4 min 32 s to 3 min 15 s.',
      ],
      media: {
        alt: 'Placeholder for the mobile crane robot',
        label: 'Mobile crane robot',
      },
    },
  ],
  zh: [
    {
      id: 'digital-twin-agents',
      organization: '东华大学',
      role: '基于 LLM 的柔性制造自动化数字孪生研究',
      period: '2023.09-2026.06',
      location: '上海',
      advisor: '包劲松 教授',
      summary: '提出并验证了由 LLM 智能体生成、协同与重构数字孪生模型的知识-行为-几何框架。',
      highlights: [
        '开发了集交互式三维模型、实时虚实同步与自然语言交互于一体的数字孪生平台。',
        '通过事件驱动工具调用与制造知识 RAG，把智能体推理接入真实产线。',
        '在零件缺陷监测与分拣产线上验证：换线与恢复时间降低 47%，误报率低于传统方法。',
      ],
      media: { alt: '数字孪生产线平台占位图', label: 'Digital-twin platform' },
    },
    {
      id: 'industrial-disassembly',
      organization: '东华大学',
      role: '工业拆卸具身智能机器人系统',
      period: '2025.04-2025.06',
      location: '上海',
      advisor: '司家辉 博士',
      summary: '开发了面向退役电动汽车电池拆卸的多模态感知-决策-执行系统。',
      highlights: [
        '使用 LangGraph 与语音专用大模型构建实时任务规划、工具选择与人机交互智能体。',
        '结合 FastSAM、VLM 与 Strategy of Mind prompting 完成场景理解与抓取规划。',
        '通过 MCP 工具调用控制 UR 机器人完成无碰撞工具取送。',
      ],
      media: { alt: '工业拆卸机器人实验占位图', label: 'Embodied disassembly system' },
    },
    {
      id: 'ball-screw-platform',
      organization: '南京工程学院',
      role: '三自由度滚珠丝杠缺陷检测平台',
      period: '2023.01-2023.06',
      location: '南京',
      advisor: '郝飞 副教授',
      summary: '设计了包含机械分析、三维建模、运动仿真、嵌入式控制与电路验证的三自由度机电平台。',
      highlights: [
        '完成载荷与电机扭矩计算、零部件选型、二维工程图和 CAD/UG 三维模型。',
        '开发了基于 8051 的步进电机控制器，并在 Proteus 中验证直线与圆弧运动。',
      ],
      media: { alt: '三自由度缺陷检测平台占位图', label: '3-DOF inspection platform' },
    },
    {
      id: 'mobile-crane-robot',
      organization: '南京工程学院',
      role: '全国大学生移动起重机器人竞赛',
      period: '2022.02-2022.11',
      location: '南京',
      advisor: '郝飞 副教授',
      summary: '带领团队开发了一台沿指定路线运输并放置不同物体的移动起重机器人。',
      highlights: [
        '负责机械设计、运动分析与系统集成，并使用 STM32、CAN 总线协调电机、舵机和机械臂。',
        '开发动态最短路径算法并将执行机构由单电机升级为三电机，总运行时间由 4 分 32 秒降至 3 分 15 秒。',
      ],
      media: { alt: '移动起重机器人占位图', label: 'Mobile crane robot' },
    },
  ],
}

export default research
