export type SkillProficiency = {
  label: string
  value: number
}

export type SkillItem = {
  label: string
  note: string
  detail: string
  showInProfile: boolean
  items: string[]
  proficiencies: SkillProficiency[]
}

export type Skills = SkillItem[]

export const skills: Record<SiteLocale, Skills> = {
  en: [
    {
      label: 'Robotics & Automation',
      note: 'I make robots handle the repetitive part.',
      detail:
        'Robot task planning and grasping, UR and ABB robot integration, RAPID/RWS, multi-actuator control, and CAN bus.',
      showInProfile: true,
      items: [
        'Robot task planning and grasping',
        'UR and ABB robot integration',
        'RAPID / RWS',
        'Multi-actuator control',
        'CAN bus',
      ],
      proficiencies: [
        { label: 'Task planning', value: 90 },
        { label: 'ABB / UR integration', value: 84 },
        { label: 'Grasping & vision', value: 80 },
        { label: 'Multi-actuator control', value: 76 },
      ],
    },
    {
      label: 'Embodied & Agentic AI',
      note: 'I let the agents debate before I do.',
      detail:
        'LLM/VLM-based agents, multi-agent coordination, RAG, MCP, LangChain, LangGraph, Deep Agents, FastSAM, and GraspNet.',
      showInProfile: true,
      items: [
        'LLM / VLM agents',
        'Multi-agent coordination',
        'RAG',
        'MCP',
        'LangChain',
        'LangGraph',
        'Deep Agents',
        'FastSAM',
        'GraspNet',
      ],
      proficiencies: [
        { label: 'LLM / VLM agents', value: 94 },
        { label: 'Multi-agent systems', value: 92 },
        { label: 'RAG / MCP', value: 88 },
        { label: 'Computer vision', value: 78 },
      ],
    },
    {
      label: 'Programming',
      note: 'From quick scripts to long-lived systems.',
      detail: 'Python, JavaScript/TypeScript; familiar with C, C++, C#, and MATLAB.',
      showInProfile: true,
      items: ['Python', 'JavaScript / TypeScript', 'C', 'C++', 'C#', 'MATLAB'],
      proficiencies: [
        { label: 'Python', value: 94 },
        { label: 'TypeScript', value: 91 },
        { label: 'C#', value: 80 },
        { label: 'C / C++', value: 76 },
        { label: 'MATLAB', value: 72 },
      ],
    },
    {
      label: 'Software Development',
      note: 'I prefer “works in production.”',
      detail: 'Git, React, Angular, Vue, Next.js, NestJS, Docker, Kubernetes, and Jenkins.',
      showInProfile: true,
      items: [
        'Git',
        'React',
        'Angular',
        'Vue',
        'Next.js',
        'NestJS',
        'Docker',
        'Kubernetes',
        'Jenkins',
      ],
      proficiencies: [
        { label: 'React / Vue / Angular', value: 90 },
        { label: 'NestJS / Next.js', value: 86 },
        { label: 'Git', value: 92 },
        { label: 'Docker / Kubernetes', value: 74 },
        { label: 'Jenkins', value: 70 },
      ],
    },
    {
      label: 'Embedded Systems & CAD',
      note: 'Bits, bolts, and bus messages are all welcome.',
      detail:
        'STM32/8051, Keil MDK, Proteus, AutoCAD, SolidWorks, and UG NX; familiar with ANSYS and Pro/ENGINEER.',
      showInProfile: true,
      items: [
        'STM32 / 8051',
        'Keil MDK',
        'Proteus',
        'AutoCAD',
        'SolidWorks',
        'UG NX',
        'ANSYS',
        'Pro/ENGINEER',
      ],
      proficiencies: [
        { label: 'STM32 / 8051', value: 84 },
        { label: 'CAN bus', value: 80 },
        { label: 'SolidWorks / UG NX', value: 78 },
        { label: 'ANSYS', value: 70 },
      ],
    },
    {
      label: 'English',
      note: '',
      detail: 'IELTS 7.0 (Listening 7.5, Reading 8.0, Writing 6.0, Speaking 6.0).',
      showInProfile: false,
      items: ['IELTS 7.0 (Listening 7.5 / Reading 8.0 / Writing 6.0 / Speaking 6.0)'],
      proficiencies: [],
    },
  ],
  zh: [
    {
      label: '机器人与自动化',
      note: '我让机器人接手那些重复工作。',
      detail: '机器人任务规划与抓取、UR 与 ABB 机器人集成、RAPID/RWS、多执行器控制和 CAN 总线。',
      showInProfile: true,
      items: [
        '机器人任务规划与抓取',
        'UR 与 ABB 机器人集成',
        'RAPID / RWS',
        '多执行器控制',
        'CAN 总线',
      ],
      proficiencies: [
        { label: '任务规划', value: 90 },
        { label: 'ABB / UR 集成', value: 84 },
        { label: '抓取与视觉', value: 80 },
        { label: '多执行器控制', value: 76 },
      ],
    },
    {
      label: '具身智能与智能体 AI',
      note: '我会先让智能体们辩论一轮。',
      detail:
        '基于 LLM/VLM 的智能体、多智能体协同、RAG、MCP、LangChain、LangGraph、Deep Agents、FastSAM 和 GraspNet。',
      showInProfile: true,
      items: [
        'LLM / VLM 智能体',
        '多智能体协同',
        'RAG',
        'MCP',
        'LangChain',
        'LangGraph',
        'Deep Agents',
        'FastSAM',
        'GraspNet',
      ],
      proficiencies: [
        { label: 'LLM / VLM 智能体', value: 94 },
        { label: '多智能体系统', value: 92 },
        { label: 'RAG / MCP', value: 88 },
        { label: '计算机视觉', value: 78 },
      ],
    },
    {
      label: '编程语言',
      note: '从一次性脚本写到长期运行的系统。',
      detail: 'Python、JavaScript/TypeScript；熟悉 C、C++、C# 和 MATLAB。',
      showInProfile: true,
      items: ['Python', 'JavaScript / TypeScript', 'C', 'C++', 'C#', 'MATLAB'],
      proficiencies: [
        { label: 'Python', value: 94 },
        { label: 'TypeScript', value: 91 },
        { label: 'C#', value: 80 },
        { label: 'C / C++', value: 76 },
        { label: 'MATLAB', value: 72 },
      ],
    },
    {
      label: '软件开发',
      note: '我更喜欢“在生产环境也能跑”。',
      detail: 'Git、React、Angular、Vue、Next.js、NestJS、Docker、Kubernetes 和 Jenkins。',
      showInProfile: true,
      items: [
        'Git',
        'React',
        'Angular',
        'Vue',
        'Next.js',
        'NestJS',
        'Docker',
        'Kubernetes',
        'Jenkins',
      ],
      proficiencies: [
        { label: 'React / Vue / Angular', value: 90 },
        { label: 'NestJS / Next.js', value: 86 },
        { label: 'Git', value: 92 },
        { label: 'Docker / Kubernetes', value: 74 },
        { label: 'Jenkins', value: 70 },
      ],
    },
    {
      label: '嵌入式系统与 CAD',
      note: '比特、螺栓和总线消息，我都不排斥。',
      detail:
        'STM32/8051、Keil MDK、Proteus、AutoCAD、SolidWorks 和 UG NX；熟悉 ANSYS 与 Pro/ENGINEER。',
      showInProfile: true,
      items: [
        'STM32 / 8051',
        'Keil MDK',
        'Proteus',
        'AutoCAD',
        'SolidWorks',
        'UG NX',
        'ANSYS',
        'Pro/ENGINEER',
      ],
      proficiencies: [
        { label: 'STM32 / 8051', value: 84 },
        { label: 'CAN 总线', value: 80 },
        { label: 'SolidWorks / UG NX', value: 78 },
        { label: 'ANSYS', value: 70 },
      ],
    },
    {
      label: '英语',
      note: '',
      detail: 'IELTS 7.0（听力 7.5、阅读 8.0、写作 6.0、口语 6.0）。',
      showInProfile: false,
      items: ['IELTS 7.0（听力 7.5 / 阅读 8.0 / 写作 6.0 / 口语 6.0）'],
      proficiencies: [],
    },
  ],
}

export default skills
