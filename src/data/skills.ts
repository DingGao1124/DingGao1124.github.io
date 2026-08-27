export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: Record<SiteLocale, SkillGroup[]> = {
  zh: [
    {
      label: "编程语言",
      items: ["Python", "JavaScript / TypeScript", "C", "C++", "MATLAB"],
    },
    {
      label: "人工智能",
      items: ["OpenAI API", "微调与部署", "RAG", "MCP", "LLM 多智能体系统"],
    },
    {
      label: "Web 与部署",
      items: ["React", "Next.js", "Vue", "Angular", "Docker", "Kubernetes"],
    },
    {
      label: "机器人与嵌入式",
      items: ["STM32", "Keil MDK", "STM32CubeMX", "Proteus", "RAPID / RWS"],
    },
    {
      label: "CAD / CAM",
      items: ["AutoCAD", "SolidWorks", "UG NX", "ANSYS", "Pro/ENGINEER"],
    },
    {
      label: "基础与语言",
      items: [
        "Windows / Linux / macOS",
        "数据结构与算法",
        "计算机网络与 Socket 编程",
        "IELTS 7.0（L 7.5 / R 8.0 / W 6.0 / S 6.0）",
      ],
    },
  ],
  en: [
    {
      label: "Programming",
      items: ["Python", "JavaScript / TypeScript", "C", "C++", "MATLAB"],
    },
    {
      label: "Artificial Intelligence",
      items: [
        "OpenAI API",
        "Fine-tuning & deployment",
        "RAG",
        "MCP",
        "LLM multi-agent systems",
      ],
    },
    {
      label: "Web & Deployment",
      items: ["React", "Next.js", "Vue", "Angular", "Docker", "Kubernetes"],
    },
    {
      label: "Robotics & Embedded",
      items: ["STM32", "Keil MDK", "STM32CubeMX", "Proteus", "RAPID / RWS"],
    },
    {
      label: "CAD / CAM",
      items: ["AutoCAD", "SolidWorks", "UG NX", "ANSYS", "Pro/ENGINEER"],
    },
    {
      label: "Foundations & Language",
      items: [
        "Windows / Linux / macOS",
        "Data structures & algorithms",
        "Computer networks & Socket programming",
        "IELTS 7.0 (L 7.5 / R 8.0 / W 6.0 / S 6.0)",
      ],
    },
  ],
}
