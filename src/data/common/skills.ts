export type Skill = {
  label: string
  value: number
}

export type SkillGroup = {
  label: string
  showInProfile: boolean
  skills: Skill[]
}

export type TechTopics = SkillGroup[]

export const techTopics: Record<SiteLocale, TechTopics> = {
  en: [
    {
      label: 'Programming',
      showInProfile: true,
      skills: [
        { label: 'Python', value: 84 },
        { label: 'TypeScript/JavaScript', value: 82 },
        { label: 'C#', value: 68 },
        { label: 'C / C++', value: 70 },
        { label: 'MATLAB', value: 62 },
      ],
    },
    {
      label: 'Hardware Development',
      showInProfile: true,
      skills: [
        { label: 'SolidWorks / UG NX', value: 78 },
        { label: 'CAD', value: 80 },
        { label: 'STM32 / C8051', value: 78 },
        { label: 'RS232 / RS485 / CAN bus', value: 70 },
        { label: 'ANSYS / Pro/E', value: 58 },
      ],
    },
    {
      label: 'Software Development',
      showInProfile: true,
      skills: [
        { label: 'React / Vue / Angular', value: 80 },
        { label: 'Django / FastAPI', value: 55 },
        { label: 'NestJS / Next.js', value: 72 },
        { label: 'Docker / Kubernetes', value: 64 },
        { label: 'Jenkins / GitHub Actions', value: 60 },
      ],
    },
    {
      label: 'Embodied & Agentic AI',
      showInProfile: true,
      skills: [
        { label: 'Multi-Agent Systems', value: 88 },
        { label: 'LangChain / LangGraph', value: 86 },
        { label: 'Harness Engineering / Deep Agents', value: 80 },
        { label: 'RAG / MCP / AI Skills', value: 84 },
        { label: 'VLA / VLM Agents', value: 82 },
      ],
    },
    {
      label: 'Robotics & Automation',
      showInProfile: true,
      skills: [
        { label: 'Task planning / Grasping', value: 82 },
        { label: 'UR / ABB integration', value: 80 },
        { label: 'RAPID / RWS', value: 76 },
        { label: 'Multi-actuator control', value: 78 },
        { label: 'Trajectory planning', value: 64 },
      ],
    },
    {
      label: 'English',
      showInProfile: false,
      skills: [{ label: 'IELTS 7.0', value: 78 }],
    },
  ],
  zh: [
    {
      label: '机器人与自动化',
      showInProfile: true,
      skills: [
        { label: '任务规划', value: 82 },
        { label: 'ABB / UR 集成', value: 80 },
        { label: '抓取与视觉', value: 80 },
        { label: '多执行器控制', value: 78 },
      ],
    },
    {
      label: '具身智能与智能体 AI',
      showInProfile: true,
      skills: [
        { label: 'LLM / VLM 智能体', value: 82 },
        { label: '多智能体系统', value: 88 },
        { label: 'RAG / MCP', value: 84 },
        { label: '计算机视觉', value: 76 },
      ],
    },
    {
      label: '编程语言',
      showInProfile: true,
      skills: [
        { label: 'Python', value: 84 },
        { label: 'TypeScript', value: 82 },
        { label: 'C#', value: 68 },
        { label: 'C / C++', value: 70 },
        { label: 'MATLAB', value: 62 },
      ],
    },
    {
      label: '软件开发',
      showInProfile: true,
      skills: [
        { label: 'React / Vue / Angular', value: 80 },
        { label: 'NestJS / Next.js', value: 72 },
        { label: 'Git', value: 78 },
        { label: 'Docker / Kubernetes', value: 64 },
        { label: 'Jenkins', value: 60 },
      ],
    },
    {
      label: '嵌入式系统与 CAD',
      showInProfile: true,
      skills: [
        { label: 'STM32 / 8051', value: 78 },
        { label: 'CAN 总线', value: 70 },
        { label: 'SolidWorks / UG NX', value: 78 },
        { label: 'ANSYS', value: 58 },
      ],
    },
    {
      label: '英语',
      showInProfile: false,
      skills: [{ label: 'IELTS 7.0', value: 78 }],
    },
  ],
}

export default techTopics
