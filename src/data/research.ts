type ResearchArea = {
  title: string
  description: string
}

type ResearchMedia = {
  src?: string
  alt: string
  label: string
}

type ResearchExperience = {
  id: string
  organization: string
  role: string
  period: string
  location: string
  advisor: string
  summary: string
  highlights: string[]
  media: ResearchMedia
}

export type Research = {
  label: {
    eyebrow: string
    title: string
    areasTitle: string
    experienceTitle: string
    advisorLabel: string
    pageContentsLabel: string
    showMoreLabel: string
    showLessLabel: string
  }
  content: {
    lede: string
    areas: ResearchArea[]
    experiences: ResearchExperience[]
  }
}

export const research: Record<SiteLocale, Research> = {
  en: {
    label: {
      eyebrow: 'Research',
      title: 'Research',
      areasTitle: 'Research directions',
      experienceTitle: 'Research experience',
      advisorLabel: 'Advisor',
      pageContentsLabel: 'On this page',
      showMoreLabel: 'Show more',
      showLessLabel: 'Show less',
    },
    content: {
      lede: 'I study how intelligent agents can perceive, reason about, and act within physical systems. My work brings together robot perception and control, human-robot collaboration, and digital twins for manufacturing.',
      areas: [
        {
          title: 'Robotics & Embodied AI',
          description:
            'I build intelligent systems that connect perception and reasoning to reliable action in the physical world.',
        },
        {
          title: 'Robot Perception, Planning & Control',
          description:
            'I combine vision-language models, segmentation, point-cloud grasping, and task planning in closed-loop robot systems.',
        },
        {
          title: 'Human-Robot Collaboration',
          description:
            'I study voice interaction, augmented reality, and industrial disassembly as settings for safer and more effective collaboration.',
        },
        {
          title: 'Digital Twins & Cyber-Physical Manufacturing',
          description:
            'I model the knowledge, behavior, and geometry of flexible production systems and connect agent reasoning to live production state.',
        },
      ],
      experiences: [
        {
          id: 'digital-twin-agents',
          organization: 'Donghua University',
          role: 'Graduate Research - LLM-Enabled Digital Twins for Flexible Manufacturing Automation',
          period: 'Sep 2023-Jun 2026',
          location: 'Shanghai, China',
          advisor: 'Prof. Jinsong Bao',
          summary:
            'Proposed a knowledge-behavior-geometry framework that used LLM-based agents to generate, coordinate, and reconfigure digital twin models in response to changing production tasks and system states.',
          highlights: [
            'Developed a digital twin platform integrating interactive 3D models, real-time physical-virtual synchronization, event-driven agent tool calls, RAG-based manufacturing knowledge retrieval, and natural-language interaction.',
            'Evaluated the framework on a parts defect-monitoring and sorting line; experiments reported a 47% reduction in changeover and recovery time and a lower false-positive rate than conventional methods.',
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
            'Developed a multimodal perception-decision-action system for retired EV-battery disassembly, enabling voice-guided task planning and robotic tool-handling operations.',
          highlights: [
            'Constructed a LangGraph-based agent integrated with a voice-specialized LLM for real-time task planning, tool selection, and human-robot interaction.',
            'Combined FastSAM and VLMs for scene understanding, Strategy of Mind prompting for grasp planning, and GraspNet with MCP tool calling to control a UR robot for collision-free tool pickup and delivery.',
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
            'Produced 2D engineering drawings and 3D CAD/UG models, and conducted kinematic simulations of the platform.',
            'Developed an 8051-based controller for stepper-driven linear and arc motion and validated its circuit and control behavior through Proteus simulations.',
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
            'Led the development of a mobile crane robot for transporting and placing different objects along designated routes, including mechanical design, motion analysis, and system integration.',
          highlights: [
            'Programmed an STM32-based control system for DC motors, encoder motors, servos, and robotic arms, coordinating multiple actuators through CAN bus communication for precise movement and manipulation.',
            'Developed a dynamic shortest-path algorithm and upgraded the actuation mechanism from a single- to triple-motor configuration, reducing total operation time from 4 min 32 sec to 3 min 15 sec.',
          ],
          media: {
            alt: 'Placeholder for the mobile crane robot',
            label: 'Mobile crane robot',
          },
        },
      ],
    },
  },
  zh: {
    label: {
      eyebrow: '研究',
      title: '研究',
      areasTitle: '研究方向',
      experienceTitle: '研究经历',
      advisorLabel: '导师',
      pageContentsLabel: '本页目录',
      showMoreLabel: '展开',
      showLessLabel: '收起',
    },
    content: {
      lede: '我的工作涵盖数字孪生、LLM 多智能体、具身智能与人机协作，关注如何把数字模型和智能推理连接到可靠的物理执行。',
      areas: [
        {
          title: '机器人与具身智能',
          description: '让智能体通过可靠的感知、推理与执行连接真实物理系统。',
        },
        {
          title: '机器人感知、规划与控制',
          description: '结合视觉语言模型、图像分割、点云抓取和任务规划构建机器人闭环系统。',
        },
        {
          title: '人机协作',
          description: '研究语音交互、增强现实和工业拆卸场景中的协作效率与执行可靠性。',
        },
        {
          title: '数字孪生与信息物理制造系统',
          description: '使用知识、行为与几何模型表达柔性产线，并将智能体推理连接到生产状态。',
        },
      ],
      experiences: [
        {
          id: 'digital-twin-agents',
          organization: '东华大学',
          role: '基于 LLM 的柔性制造自动化数字孪生研究',
          period: '2023.09-2026.06',
          location: '上海',
          advisor: '包劲松 教授',
          summary:
            '提出并验证了一个由 LLM 智能体生成、协同与重构数字孪生模型的知识-行为-几何框架。',
          highlights: [
            '开发了集成交互式三维模型、实时虚实同步、事件驱动工具调用、制造知识 RAG 与自然语言交互的数字孪生平台。',
            '在零件缺陷监测与分拣产线上完成实验，换线与恢复时间降低 47%，误报率低于传统方法。',
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
            '使用 LangGraph 与语音专用大模型构建实时任务规划、工具选择和人机交互智能体。',
            '结合 FastSAM、VLM、Strategy of Mind prompting、GraspNet 与 MCP，控制 UR 机器人完成无碰撞工具取送。',
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
          summary:
            '设计了包含机械分析、三维建模、运动仿真、嵌入式控制与电路验证的三自由度机电平台。',
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
    },
  },
}

export default research
