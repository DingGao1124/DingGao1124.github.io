export type Skill = {
  label: string
  value: number
}

export type SkillGroup = {
  label: string
  detail: string
  showInProfile: boolean
  skills: Skill[]
}

export type TechTopics = SkillGroup[]

export const techTopics: Record<SiteLocale, TechTopics> = {
  en: [
    {
      label: 'Robotics & Automation',
      detail:
        'Robot task planning and grasping, UR and ABB robot integration, RAPID/RWS, multi-actuator control, and CAN bus.',
      showInProfile: true,
      skills: [
        { label: 'Task planning', value: 90 },
        { label: 'ABB / UR integration', value: 84 },
        { label: 'Grasping & vision', value: 80 },
        { label: 'Multi-actuator control', value: 76 },
      ],
    },
    {
      label: 'Embodied & Agentic AI',
      detail:
        'LLM/VLM-based agents, multi-agent coordination, RAG, MCP, LangChain, LangGraph, Deep Agents, FastSAM, and GraspNet.',
      showInProfile: true,
      skills: [
        { label: 'LLM / VLM agents', value: 94 },
        { label: 'Multi-agent systems', value: 92 },
        { label: 'RAG / MCP', value: 88 },
        { label: 'Computer vision', value: 78 },
      ],
    },
    {
      label: 'Programming',
      detail: 'Python, JavaScript/TypeScript; familiar with C, C++, C#, and MATLAB.',
      showInProfile: true,
      skills: [
        { label: 'Python', value: 94 },
        { label: 'TypeScript', value: 91 },
        { label: 'C#', value: 80 },
        { label: 'C / C++', value: 76 },
        { label: 'MATLAB', value: 72 },
      ],
    },
    {
      label: 'Software Development',
      detail: 'Git, React, Angular, Vue, Next.js, NestJS, Docker, Kubernetes, and Jenkins.',
      showInProfile: true,
      skills: [
        { label: 'React / Vue / Angular', value: 90 },
        { label: 'NestJS / Next.js', value: 86 },
        { label: 'Git', value: 92 },
        { label: 'Docker / Kubernetes', value: 74 },
        { label: 'Jenkins', value: 70 },
      ],
    },
    {
      label: 'Embedded Systems & CAD',
      detail:
        'STM32/8051, Keil MDK, Proteus, AutoCAD, SolidWorks, and UG NX; familiar with ANSYS and Pro/ENGINEER.',
      showInProfile: true,
      skills: [
        { label: 'STM32 / 8051', value: 84 },
        { label: 'CAN bus', value: 80 },
        { label: 'SolidWorks / UG NX', value: 78 },
        { label: 'ANSYS', value: 70 },
      ],
    },
    {
      label: 'English',
      detail: 'IELTS 7.0 (Listening 7.5, Reading 8.0, Writing 6.0, Speaking 6.0).',
      showInProfile: false,
      skills: [{ label: 'IELTS 7.0', value: 80 }],
    },
  ],
  zh: [
    {
      label: '机器人与自动化',
      detail: '机器人任务规划与抓取、UR 与 ABB 机器人集成、RAPID/RWS、多执行器控制和 CAN 总线。',
      showInProfile: true,
      skills: [
        { label: '任务规划', value: 90 },
        { label: 'ABB / UR 集成', value: 84 },
        { label: '抓取与视觉', value: 80 },
        { label: '多执行器控制', value: 76 },
      ],
    },
    {
      label: '具身智能与智能体 AI',
      detail:
        '基于 LLM/VLM 的智能体、多智能体协同、RAG、MCP、LangChain、LangGraph、Deep Agents、FastSAM 和 GraspNet。',
      showInProfile: true,
      skills: [
        { label: 'LLM / VLM 智能体', value: 94 },
        { label: '多智能体系统', value: 92 },
        { label: 'RAG / MCP', value: 88 },
        { label: '计算机视觉', value: 78 },
      ],
    },
    {
      label: '编程语言',
      detail: 'Python、JavaScript/TypeScript；熟悉 C、C++、C# 和 MATLAB。',
      showInProfile: true,
      skills: [
        { label: 'Python', value: 94 },
        { label: 'TypeScript', value: 91 },
        { label: 'C#', value: 80 },
        { label: 'C / C++', value: 76 },
        { label: 'MATLAB', value: 72 },
      ],
    },
    {
      label: '软件开发',
      detail: 'Git、React、Angular、Vue、Next.js、NestJS、Docker、Kubernetes 和 Jenkins。',
      showInProfile: true,
      skills: [
        { label: 'React / Vue / Angular', value: 90 },
        { label: 'NestJS / Next.js', value: 86 },
        { label: 'Git', value: 92 },
        { label: 'Docker / Kubernetes', value: 74 },
        { label: 'Jenkins', value: 70 },
      ],
    },
    {
      label: '嵌入式系统与 CAD',
      detail:
        'STM32/8051、Keil MDK、Proteus、AutoCAD、SolidWorks 和 UG NX；熟悉 ANSYS 与 Pro/ENGINEER。',
      showInProfile: true,
      skills: [
        { label: 'STM32 / 8051', value: 84 },
        { label: 'CAN 总线', value: 80 },
        { label: 'SolidWorks / UG NX', value: 78 },
        { label: 'ANSYS', value: 70 },
      ],
    },
    {
      label: '英语',
      detail: 'IELTS 7.0（听力 7.5、阅读 8.0、写作 6.0、口语 6.0）。',
      showInProfile: false,
      skills: [{ label: 'IELTS 7.0', value: 80 }],
    },
  ],
}

export default techTopics
