type ExperienceItem = {
  id: string
  organization: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  logoSrc?: string
  media: {
    src?: string
    alt: string
    label: string
  }
}

export type Education = {
  school: string
  degree: string
  period: string
  location: string
  gpa: string
  rank?: string
  awards: string[]
  competitions: string[]
  thesis?: string
}

type Honor = {
  year: string
  title: string
  detail?: string
}

export type Experience = {
  label: {
    eyebrow: string
    title: string
    professionalTitle: string
    educationTitle: string
    skillsTitle: string
    honorsTitle: string
    gpaLabel: string
    rankLabel: string
    awardsLabel: string
    competitionsLabel: string
    thesisLabel: string
    pageContentsLabel: string
    showMoreLabel: string
    showLessLabel: string
  }
  content: {
    lede: string
    items: ExperienceItem[]
    education: Education[]
    honors: Honor[]
  }
}

export const experiences: Record<SiteLocale, Experience> = {
  en: {
    label: {
      eyebrow: 'Experience',
      title: 'Experience',
      professionalTitle: 'Professional experience',
      educationTitle: 'Education',
      skillsTitle: 'Professional skills',
      honorsTitle: 'Honors & competitions',
      gpaLabel: 'GPA',
      rankLabel: 'Major rank',
      awardsLabel: 'Awards',
      competitionsLabel: 'Competitions',
      thesisLabel: 'Thesis',
      pageContentsLabel: 'On this page',
      showMoreLabel: 'Show more',
      showLessLabel: 'Show less',
    },
    content: {
      lede: 'My experience connects research prototypes with production software, from robot applications and industrial data systems to embedded control.',
      items: [
        {
          id: 'tesla',
          organization: 'Tesla Gigafactory',
          role: 'Full-Stack Development Intern · R&D Department',
          period: 'Sep 2025-Jan 2026',
          location: 'Shanghai, China',
          summary:
            'Engineered an agentic harness using LangChain Deep Agents, incorporating TODO-based planning and specialized subagents to orchestrate multi-step analysis of Model 3 and Model Y user-feedback data.',
          highlights: [
            'Developed an agent-driven data-processing workflow that recognized user intent, grouped records by request type, delegated clustering tasks to subagents, and synthesized their results into structured analytical outputs.',
            'Integrated agent outputs into an Angular/C# internal visualization platform, enabling R&D teams to identify critical issues, prioritize high-demand feature requests, and adjust product-development priorities based on data insights.',
          ],
          logoSrc: '/company/Tesla.svg',
          media: {
            alt: 'Placeholder for the Tesla agentic user-feedback analysis system',
            label: 'Agentic feedback analysis',
          },
        },
        {
          id: 'abb',
          organization: 'ABB Robot Super Factory',
          role: 'Software Development Intern · Robotics Application Software · R&D Department',
          period: 'Jul 2025-Sep 2025',
          location: 'Shanghai, China',
          summary:
            'Developed an LLM-driven robotic task planner using Azure OpenAI and MCP, decomposing complex natural-language instructions into executable RAPID commands through Robot Web Services.',
          highlights: [
            'Implemented parallel task coordination and execution-failure handling, enabling the planner to manage multi-step robot operations and respond to unsuccessful actions.',
            'Improved Tangram recognition under variable lighting through dynamic HSV parameter adjustment and developed a RAG-based AppStudio assistant for robot-function generation and technical knowledge retrieval.',
          ],
          logoSrc: '/company/ABB.svg',
          media: {
            alt: 'Placeholder for the ABB robot task-planning system',
            label: 'Robot task planning',
          },
        },
        {
          id: 'bilibili',
          organization: 'Bilibili',
          role: 'Software Development Intern',
          period: 'Jun 2025-Jul 2025',
          location: 'Shanghai, China',
          summary:
            'Built an AI-assisted error-monitoring pipeline using NestJS scheduled jobs to capture JavaScript and unhandled rejection errors, analyze them with LLM agents, and store the results in MySQL.',
          highlights: [
            'Developed a RAG-based diagnostic agent that retrieved relevant technical knowledge and generated structured JSON solutions for frontend visualization.',
          ],
          logoSrc: '/company/BILIBILI.svg',
          media: {
            alt: 'Placeholder for the Bilibili AI-assisted error-monitoring pipeline',
            label: 'AI error monitoring',
          },
        },
        {
          id: 'caerulean',
          organization: 'Caerulean AI Inc.',
          role: 'Full-Stack Developer Intern · Remote',
          period: 'Dec 2024-Apr 2025',
          location: 'Vancouver, Canada',
          summary:
            'Architected a LangChain-based multi-agent system for an interactive virtual world, incorporating memory-augmented agents and RAG-enhanced contextual reasoning.',
          highlights: [
            'Integrated the agent system into a browser-based Phaser environment, enabling agents to maintain contextual memory and support more coherent user-agent interactions.',
          ],
          media: {
            alt: 'Placeholder for the interactive multi-agent virtual world',
            label: 'Multi-agent virtual world',
          },
        },
      ],
      education: [
        {
          school: 'Donghua University',
          degree: 'Master of Engineering in Intelligent Manufacturing',
          period: 'Sep 2023-Jun 2026',
          location: 'Shanghai',
          gpa: '3.93/4.0',
          awards: [
            'First-Class Scholarship (Top 5%) twice and Second-Class Scholarship once (2023-2026)',
          ],
          competitions: ['Excellence Award, 12th NVIDIA Sky Hackathon (2nd place)'],
          thesis:
            'Digital Twin Modeling Method for Flexible Production Lines Based on Large Language Model Multi-Agent Systems',
        },
        {
          school: 'Nanjing Institute of Technology',
          degree: 'Bachelor of Engineering in Mechanical Engineering',
          period: 'Sep 2019-Jun 2023',
          location: 'Nanjing',
          gpa: '3.77/4.0 (last two years)',
          rank: '4/99',
          awards: [
            'First-Class Scholarship (Top 5%) once and Second-Class Scholarship four times (2020-2023)',
            'University Merit Student (2022, 2023) and Outstanding Graduate',
          ],
          competitions: [
            'National First Prize, National College Students Mathematics Competition (2023)',
            'Provincial First Prize (2022) and Third Prize (2020), Provincial College Students Mathematics Competition',
            'National First Prize, 6th National College Students Crane Creativity Competition',
          ],
          thesis: '3-DOF Ball Screw Defect Detection Platform',
        },
      ],
      honors: [
        {
          year: '2025',
          title: 'Excellence Award (National Second Place), 12th NVIDIA Sky Hackathon',
          detail: 'Embodied AI Robot based on LLM Multi-Agent Systems',
        },
        {
          year: '2023',
          title: 'National First Prize, National University Students Mathematics Competition',
          detail: 'Provincial First Prize, 2022; Provincial Third Prize, 2020',
        },
        {
          year: '2022',
          title:
            'National First Prize, 6th National University Students Mobile Crane Robot Competition',
        },
        {
          year: '2020–2026',
          title: 'University scholarships',
          detail:
            'Donghua University First-Class (Top 5%) (2x) and Second-Class (1x), 2023-2026; Nanjing Institute of Technology First-Class (Top 5%) (1x) and Second-Class (4x), 2020-2023',
        },
        {
          year: '2022–2023',
          title: 'University Merit Student, 2022 and 2023; Outstanding Graduate Award, 2023',
        },
      ],
    },
  },
  zh: {
    label: {
      eyebrow: '经历',
      title: '经历',
      professionalTitle: '行业经历',
      educationTitle: '教育背景',
      skillsTitle: '专业技能',
      honorsTitle: '荣誉与竞赛',
      gpaLabel: 'GPA',
      rankLabel: '专业排名',
      awardsLabel: '奖项',
      competitionsLabel: '竞赛',
      thesisLabel: '毕业设计',
      pageContentsLabel: '本页目录',
      showMoreLabel: '展开',
      showLessLabel: '收起',
    },
    content: {
      lede: '覆盖工业软件、机器人研发、教育背景、专业技能与代表性荣誉的完整履历。',
      items: [
        {
          id: 'tesla',
          organization: 'Tesla Gigafactory',
          role: '全栈开发实习生 · 研发部门',
          period: '2025.09-2026.01',
          location: '上海',
          summary: '为 Model 3 与 Model Y 用户反馈分析构建了基于智能体的处理与可视化流程。',
          highlights: [
            '使用 LangChain Deep Agents 构建智能体框架，通过 TODO 规划与专用子智能体编排多步骤反馈分析。',
            '实现了意图识别、请求类型分组、子智能体聚类和结构化结果汇总。',
            '将智能体输出接入 Angular/C# 内部平台，帮助研发团队识别关键问题并调整产品优先级。',
          ],
          logoSrc: '/company/Tesla.svg',
          media: { alt: 'Tesla 用户反馈分析系统占位图', label: 'Agentic feedback analysis' },
        },
        {
          id: 'abb',
          organization: 'ABB Robot Super Factory',
          role: '机器人应用软件开发实习生 · 研发部门',
          period: '2025.07-2025.09',
          location: '上海',
          summary: '开发了机器人任务规划智能体、视觉稳健性工具与 AppStudio RAG 助手。',
          highlights: [
            '使用 Azure OpenAI、MCP 与 Robot Web Services 将自然语言指令拆解为可执行 RAPID 命令。',
            '实现了并行任务协调与执行失败处理。',
            '通过动态 HSV 参数调整改善变化光照下的七巧板识别，并开发机器人功能生成与技术检索助手。',
          ],
          logoSrc: '/company/ABB.svg',
          media: { alt: 'ABB 机器人任务规划系统占位图', label: 'Robot task planning' },
        },
        {
          id: 'bilibili',
          organization: 'Bilibili',
          role: '软件开发实习生',
          period: '2025.06-2025.07',
          location: '上海',
          summary: '构建了由 LLM 智能体分析前端错误并输出结构化诊断结果的监测流程。',
          highlights: [
            '使用 NestJS 定时任务捕获 JavaScript 与未处理 Promise rejection 错误，并将分析结果写入 MySQL。',
            '开发了检索相关技术知识并为前端可视化生成结构化 JSON 解决方案的 RAG 诊断智能体。',
          ],
          logoSrc: '/company/BILIBILI.svg',
          media: { alt: '哔哩哔哩错误监测系统占位图', label: 'AI error monitoring' },
        },
        {
          id: 'caerulean',
          organization: 'Caerulean AI Inc.',
          role: '全栈开发实习生（远程）',
          period: '2024.12-2025.04',
          location: '加拿大温哥华',
          summary: '为交互式浏览器虚拟世界构建了记忆增强、多智能体与 RAG 上下文推理系统。',
          highlights: [
            '使用 LangChain 设计多智能体架构、长期记忆与检索增强上下文流程。',
            '将智能体系统集成到 Phaser 环境中，使用户与智能体之间保持更连贯的上下文交互。',
          ],
          media: { alt: '多智能体虚拟世界占位图', label: 'Multi-agent virtual world' },
        },
      ],
      education: [
        {
          school: '东华大学',
          degree: '智能制造 · 工程硕士',
          period: '2023.09–2026.06',
          location: '上海',
          gpa: '3.93 / 4.0',
          awards: ['校级一等奖学金 2 次（Top 5%）与二等奖学金 1 次（2023-2026）'],
          competitions: ['第十二届 NVIDIA Sky Hackathon 卓越奖（全国第二名）'],
          thesis: '基于大语言模型多智能体系统的柔性产线数字孪生建模方法',
        },
        {
          school: '南京工程学院',
          degree: '机械工程 · 工学学士',
          period: '2019.09–2023.06',
          location: '南京',
          gpa: '3.77 / 4.0（后两学年）',
          rank: '4 / 99',
          awards: [
            '校级一等奖学金与二等奖学金共五次（2020–2023）',
            '三好学生（2022、2023）与优秀毕业生',
          ],
          competitions: [
            '全国大学生数学竞赛全国一等奖（2023）',
            '省级大学生数学竞赛一等奖（2022）与三等奖（2020）',
            '第六届全国大学生起重机创意大赛全国一等奖',
          ],
          thesis: '三自由度滚珠丝杠缺陷检测平台',
        },
      ],
      honors: [
        {
          year: '2025',
          title: '第十二届 NVIDIA Sky Hackathon 卓越奖（全国第二名）',
          detail: '面向退役电池拆卸的具身智能工具推荐机器人',
        },
        {
          year: '2023',
          title: '全国大学生数学竞赛全国一等奖',
        },
        {
          year: '2022',
          title: '第六届中国大学生起重机创意大赛全国一等奖',
        },
        {
          year: '2020–2026',
          title: '校级一等奖学金、二等奖学金与学业奖学金',
          detail:
            '东华大学一等奖学金 2 次、二等奖学金 1 次；南京工程学院一等奖学金 1 次、二等奖学金 4 次',
        },
        {
          year: '2022–2023',
          title: '三好学生与优秀毕业生',
          detail: '南京工程学院',
        },
      ],
    },
  },
}

export default experiences
