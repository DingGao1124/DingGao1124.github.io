import type { Experience, LinkItem, Project, Publication, ResearchArea } from "./types"

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
]

export const projects: Project[] = [
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
    tech: ["React", "Next.js", "Three.js", "Supabase", "LangChain", "LangGraph"],
  },
  {
    title: "Industrial Disassembly Tool-Recommendation Robot — NVIDIA Sky Hackathon",
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
      { label: "Video", href: "https://www.bilibili.com/video/BV1sRj3zAEXG" },
      { label: "GitCode", href: "https://gitcode.com/baomingcanjia/URgrasp_agent" },
      { label: "GitHub", href: "https://github.com/SsspongeBob/Hackathon" },
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
      { label: "Video", href: "https://www.bilibili.com/video/BV1J2p6zXEnv/" },
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
      { label: "Video", href: "https://www.bilibili.com/video/BV1eypCzQEhy/" },
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
    description: "To be added: the extension's goals, features, and technology stack.",
    highlights: [
      "The Yuque portfolio lists this project title; this initial entry is retained for future completion.",
    ],
    tech: ["Chrome Extension", "LLM", "To be added"],
  },
]

export const publications: Publication[] = [
  {
    title:
      "Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration",
    meta: "Journal of Manufacturing Systems, 2025. Co-author.",
    note: "DOI: 10.1016/J.JMSY.2025.10.005",
  },
  {
    title:
      "Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly",
    meta: "Robotics and Computer-Integrated Manufacturing, 2026. Co-author.",
    note: "DOI: 10.1016/J.RCIM.2025.103207",
  },
  {
    title:
      "Self-Evolving Digital Twins in Flexible Manufacturing: A Large Language Model-Powered Multi-Agent Approach",
    meta: "Digital Engineering. First author.",
    note: "Status: Major Revision.",
  },
  {
    title: "Precast Component System Based on Conductive Concrete",
    meta: "Utility model patent. Co-inventor.",
    note: "Patent No. ZL 12601087.",
  },
  {
    title: "Angle-Adjustable Stage and Method of Use",
    meta: "Invention patent. Co-inventor.",
    note: "Publication No. CN113702385A.",
  },
]

export const experiences: Experience[] = [
  {
    organization: "Donghua University",
    role: "Research Assistant — Digital Twins & LLM Multi-Agent Systems",
    period: "Sep 2023 - Present",
    summary:
      "Conducting research with Prof. Jinsong Bao on digital-twin systems for flexible manufacturing, LLM-based multi-agent modeling, physical-virtual synchronization, and natural-language interaction.",
  },
  {
    organization: "CAERULEAN AI INC.",
    role: "Full-Stack Developer Intern",
    period: "Dec 2024 - Apr 2025",
    summary:
      "Developed a browser-based virtual world populated by AI agents, using Phaser, LangChain, RAG, a graph database, and memory augmentation for contextual interaction.",
  },
  {
    organization: "Bilibili",
    role: "Front-End Developer Intern",
    period: "Jun 2025 - Jul 2025",
    summary:
      "Contributed to account verification and campaign pages for mobile and desktop, and built AI-agent error monitoring with RAG-based diagnostic retrieval.",
  },
  {
    organization: "ABB Robot Super Factory",
    role: "Robotics Application Software Developer Intern",
    period: "Jul 2025 - Sep 2025",
    summary:
      "Worked on embodied AI for the GoFa collaborative robot, RAPID and RWS service wrappers, task-planning agents, and supervisory-system integration.",
  },
  {
    organization: "Tesla Gigafactory Shanghai",
    role: "Full-Stack Developer Intern",
    period: "Oct 2025 - Jan 2026",
    summary:
      "Contributed to the development and refactoring of an internal tracker platform supporting user feedback, task prioritization, Kafka messaging, and deployment across multiple environments.",
  },
]

export const education = [
  "M.S. in Intelligent Manufacturing, Donghua University, Sep 2023 - Present (expected Jun 2026)",
  "B.E. in Mechanical Engineering, Nanjing Institute of Technology, Sep 2019 - Jun 2023",
]

export const honors = [
  "First-, second-, and academic-tier scholarships on multiple occasions",
  "National First Prize, Chinese Mathematics Competitions for College Students",
  "National First Prize, 6th China University Student Crane Innovation Competition",
  "National Second Prize, 12th NVIDIA Sky Hackathon",
]
