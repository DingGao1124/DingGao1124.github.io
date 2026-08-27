export type ResearchArea = {
  title: string
  description: string
}

export const researchAreas: Record<SiteLocale, ResearchArea[]> = {
  zh: [
    {
      title: "Digital Twin",
      description:
        "面向柔性制造与产线监控，构建知识、行为、几何三类模型，并关注虚实状态同步。",
    },
    {
      title: "LLM-based Multi-Agent Systems",
      description:
        "使用 LangChain / LangGraph 构建智能体工作流、流式对话、工具调用与 RAG 检索。",
    },
    {
      title: "Embodied AI / VLA",
      description:
        "结合视觉语言模型、分割、点云抓取与机械臂控制，实现感知-决策-执行闭环。",
    },
    {
      title: "Human-Robot Collaboration",
      description:
        "关注 AR 辅助、工业拆卸、语音交互和机器人任务规划中的人机协同问题。",
    },
  ],
  en: [
    {
      title: "Digital Twin",
      description:
        "Building knowledge, behavior, and geometry models for flexible manufacturing and production-line monitoring, with a focus on synchronizing physical and virtual states.",
    },
    {
      title: "LLM-based Multi-Agent Systems",
      description:
        "Building agent workflows, streaming conversations, tool use, and retrieval-augmented generation with LangChain and LangGraph.",
    },
    {
      title: "Embodied AI / VLA",
      description:
        "Combining vision-language models, segmentation, point-cloud grasping, and robot control to close the perception-decision-action loop.",
    },
    {
      title: "Human-Robot Collaboration",
      description:
        "Exploring human-robot collaboration in AR assistance, industrial disassembly, voice interaction, and robot task planning.",
    },
  ],
}
