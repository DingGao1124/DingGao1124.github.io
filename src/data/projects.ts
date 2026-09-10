type ProjectLink = {
  label: string
  href: string
}

type ProjectMedia = {
  src?: string
  alt: string
  label: string
}

type ProjectItem = {
  id: string
  title: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  links?: ProjectLink[]
  media: ProjectMedia
}

type ProjectSection = {
  id: string
  title: string
  items: ProjectItem[]
}

export type Projects = {
  label: {
    eyebrow: string
    title: string
    pageContentsLabel: string
    showMoreLabel: string
    showLessLabel: string
  }
  content: {
    lede: string
    sections: ProjectSection[]
    moreLink: ProjectLink
  }
}

export const projects: Record<SiteLocale, Projects> = {
  en: {
    label: {
      eyebrow: 'Projects',
      title: 'Projects',
      pageContentsLabel: 'On this page',
      showMoreLabel: 'Show more',
      showLessLabel: 'Show less',
    },
    content: {
      lede: 'I build practical systems that connect robot control, agent orchestration, multimodal interaction, and evidence-grounded AI products.',
      sections: [
        {
          id: 'robotic-embodied-ai',
          title: 'Robotic & Embodied AI',
          items: [
            {
              id: 'mobile-crane-robot',
              title: 'STM32 Autonomous Mobile Crane Robot',
              period: 'Feb 2022-Nov 2022',
              description:
                'Built a competition robot that autonomously transported and placed different objects along designated routes.',
              highlights: [
                'Designed the mechanical structure, analyzed its motion, and integrated the complete sensing, actuation, and control system.',
                'Coordinated DC motors, encoder motors, servos, and robotic arms through an STM32 controller and CAN bus communication.',
                'Developed a dynamic shortest-path algorithm and upgraded the mechanism from one to three motors, reducing operation time from 4 min 32 sec to 3 min 15 sec and earning a National First Prize.',
              ],
              tech: ['STM32', 'C', 'CAN Bus', 'Path Planning', 'Mechanical'],
              links: [
                {
                  label: 'Video',
                  href: 'https://www.bilibili.com/video/BV1J2p6zXEnv/',
                },
              ],
              media: {
                alt: 'Placeholder for the STM32 autonomous mobile crane robot',
                label: 'Mobile crane robot',
              },
            },
            {
              id: 'universal-grasping-robot',
              title: 'Voice-Guided Embodied AI Robot for Universal Grasping',
              period: '2025',
              description:
                'Created a vision-language-action agent for voice-guided UR robot grasping and tool-delivery tasks for the 12th NVIDIA Sky Hackathon.',
              highlights: [
                'Converted spoken requests into real-time task plans, tool selections, and robot actions through a LangGraph agent.',
                'Combined FastSAM and vision-language models for scene understanding with Strategy of Mind prompting and GraspNet for grasp planning.',
                'Exposed UR robot actions through MCP tools for collision-free pickup and delivery; the project received the Excellence Award (National Second Place).',
              ],
              tech: ['LangGraph', 'VLM', 'FastSAM', 'GraspNet', 'MCP', 'UR Robot'],
              links: [
                { label: 'Video', href: 'https://www.bilibili.com/video/BV1sRj3zAEXG' },
                {
                  label: 'GitHub',
                  href: 'https://github.com/DingGao1124/Hackathon',
                },
                {
                  label: 'GitCode',
                  href: 'https://gitcode.com/baomingcanjia/URgrasp_agent',
                },
              ],
              media: {
                alt: 'Placeholder for the voice-guided embodied AI grasping robot',
                label: 'Embodied grasping robot',
              },
            },
            {
              id: 'abb-gofa-agent',
              title: 'Natural-Language Task Planner for ABB GoFa',
              period: 'Jul 2025-Sep 2025',
              description:
                'Developed an LLM-driven planner that translated natural-language instructions into executable operations for an ABB GoFa robot.',
              highlights: [
                'Decomposed complex instructions into multi-step task lists and coordinated parallel robot operations with execution-status tracking.',
                'Built an MCP server around Robot Web Services and RAPID operations for equipment queries, motion, picking, placing, and tool-call feedback.',
                'Added execution-failure handling and short-term conversation context so the planner could respond to unsuccessful actions and continue the workflow.',
              ],
              tech: ['Azure OpenAI', 'MCP', 'RAPID', 'RWS', 'Task Planning', 'ABB GoFa'],
              media: {
                alt: 'Placeholder for the ABB GoFa natural-language task planner',
                label: 'ABB GoFa task planner',
              },
            },
          ],
        },
        {
          id: 'llm-ai-agents',
          title: 'LLM-Based AI Agents',
          items: [
            {
              id: 'deep-agents',
              title: 'Deep Agents: Harness-Engineered Web Automation',
              period: '',
              description:
                'Built a controlled agent harness that turns visual references, wireframes, and content into responsive web pages and isolated browser previews.',
              highlights: [
                'Orchestrates visual analysis, page design, HTML implementation, validation, review, and preview publication as one observable workflow.',
                'Delegates bounded work to design, implementation, and quality-review subagents while streaming plans, reasoning, tools, and approval requests.',
                'Uses thread-scoped state, Skills, filesystem isolation, retries, call budgets, and deterministic HTML quality gates to produce verifiable artifacts.',
              ],
              tech: ['Deep Agents', 'LangGraph', 'React', 'Vite', 'Skills', 'MCP'],
              links: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/DingGao1124/DeepAgents',
                },
              ],
              media: {
                alt: 'Placeholder for the Deep Agents web automation interface',
                label: 'Agent harness interface',
              },
            },
            {
              id: 'llm-workstation',
              title: 'LLM Workstation for Flexible Manufacturing',
              period: '',
              description:
                'Developed a configurable agent workstation that binds language models, manufacturing knowledge, digital assets, and production-line operations into reusable workflows.',
              highlights: [
                'Supports custom agents with configurable roles, goals, models, knowledge bases, digital assets, and assigned tasks.',
                'Provides a visual workflow for composing agents and Crews around retrieval, model acquisition, parsing, and equipment-control tools.',
                'Connects to production-line devices through WebSocket for equipment control, database queries, data analysis, and monitoring.',
              ],
              tech: ['LLM Agents', 'RAG', 'Workflows', 'WebSocket', 'Digital Assets'],
              links: [
                {
                  label: 'Video',
                  href: 'https://www.bilibili.com/video/BV1eypCzQEhy/',
                },
              ],
              media: {
                alt: 'Placeholder for the flexible-manufacturing LLM workstation',
                label: 'LLM workstation',
              },
            },
            {
              id: 'ai-agents-town',
              title: 'AI Agents Town: Interactive Multi-Agent Virtual World',
              period: 'Dec 2024-Apr 2025',
              description:
                'Created an interactive browser-based town in which configurable AI characters maintain context and interact with users and one another.',
              highlights: [
                'Lets users create NPC profiles with names, demographic attributes, and personalities, then manage relationships between characters.',
                'Supports multiple maps and import/export workflows for reusable world and character configurations.',
                'Integrates LangChain agents, contextual memory, and retrieval-augmented reasoning into a Phaser virtual environment.',
              ],
              tech: ['LangChain', 'Multi-Agent', 'RAG', 'Phaser', 'React'],
              links: [
                {
                  label: 'Figma',
                  href: 'https://www.figma.com/design/GP7iw7lfmpA006eMKg5kFK/NPC-UI?node-id=0-1&p=f',
                },
              ],
              media: {
                alt: 'Placeholder for the interactive AI Agents Town',
                label: 'AI Agents Town',
              },
            },
          ],
        },
        {
          id: 'full-stack-ai-platforms',
          title: 'Full-Stack AI Platforms',
          items: [
            {
              id: 'bilibili-ai-feedback',
              title: 'Bilibili Audience Feedback Intelligence',
              period: '',
              description:
                'Built an AI-assisted review workspace that turns real Bilibili danmaku and comments into evidence-backed insights for video creators.',
              highlights: [
                'Accepts a video URL, BV ID, or b23.tv short link, retrieves the underlying feedback, and displays the real data distribution before analysis.',
                'Streams the analysis process while extracting high-frequency topics, sentiment, valuable audience feedback, and actionable content suggestions.',
                'Links each insight to original comments or danmaku and visualizes comment-user levels, danmaku density, sentiment timelines, and priority feedback.',
              ],
              tech: ['LLM Agents', 'Streaming', 'Data Viz', 'Bilibili', 'Evidence'],
              media: {
                alt: 'Placeholder for the Bilibili audience feedback analysis workspace',
                label: 'Audience feedback workspace',
              },
            },
            {
              id: 'whatsapp-ai-robot',
              title: 'WhatsApp AI Property-Service Agent',
              period: '',
              description:
                'Built an AI-assisted messaging and work-order system that responds to rental customers and helps staff manage service requests.',
              highlights: [
                'Receives WhatsApp messages through a Twilio webhook and synchronizes requests with the backend in real time.',
                'Provides a WebSocket-based workspace where staff can inspect the customer conversation, review the agent response, and send a reply back through WhatsApp.',
                'Turns requests into traceable work orders with status, priority, property, location, knowledge, and approval information.',
              ],
              tech: ['WhatsApp', 'Twilio', 'Webhooks', 'WebSocket', 'AI Agent', 'Work Orders'],
              media: {
                alt: 'Placeholder for the WhatsApp property-service agent workspace',
                label: 'WhatsApp service agent',
              },
            },
            {
              id: 'llm-chrome-extension',
              title: 'Multimodal LLM Chrome Extension',
              period: '',
              description:
                'Developed an in-browser AI assistant that combines webpage context, visual understanding, search, and personal knowledge for contextual conversations.',
              highlights: [
                'Answers questions against the active webpage without requiring users to move content into a separate chat application.',
                'Uses a vision-language model for image recognition, image description, and visual question answering.',
                'Supports internet search, knowledge-base interaction, and an embedded conversation panel within the current browsing flow.',
              ],
              tech: ['Chrome', 'LLM', 'VLM', 'Web Search', 'Knowledge', 'RAG'],
              media: {
                alt: 'Placeholder for the multimodal LLM Chrome extension',
                label: 'Browser AI assistant',
              },
            },
            {
              id: 'three-stooges',
              title: 'The Three Stooges: Research Collaboration Platform',
              period: '',
              description:
                'Built a research-focused website for organizing literature, exchanging technical ideas, and discussing questions with specialized LLM agents.',
              highlights: [
                'Lets researchers manage a personal collection of their top 100 papers and organize discussions by technical board.',
                'Supports publishing viewpoints, commenting on other researchers’ posts, and returning to the source material behind a discussion.',
                'Includes configurable research agents and a fine-tuned digital-twin assistant for deeper academic question answering.',
              ],
              tech: ['LLM Agents', 'Research', 'Literature', 'Community', 'Full-Stack'],
              media: {
                alt: 'Placeholder for The Three Stooges research collaboration platform',
                label: 'Research collaboration platform',
              },
            },
          ],
        },
      ],
      moreLink: {
        label: 'View more projects on my portfolio',
        href: 'https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer',
      },
    },
  },
  zh: {
    label: {
      eyebrow: '项目',
      title: '精选项目',
      pageContentsLabel: '本页目录',
      showMoreLabel: '展开',
      showLessLabel: '收起',
    },
    content: {
      lede: '我构建连接机器人控制、智能体编排、多模态交互与可信证据的实用 AI 系统。',
      sections: [
        {
          id: 'robotic-embodied-ai',
          title: '机器人与具身智能',
          items: [
            {
              id: 'mobile-crane-robot',
              title: '基于 STM32 的自主移动起重机器人',
              period: '2022.02-2022.11',
              description: '开发了一台能够沿指定路线自主运输并放置不同物体的竞赛机器人。',
              highlights: [
                '完成机械结构设计、运动分析，以及感知、执行与控制系统的整机集成。',
                '使用 STM32 控制器和 CAN 总线协调直流电机、编码器电机、舵机与机械臂。',
                '开发动态最短路径算法，并将执行机构由单电机升级为三电机，使总运行时间从 4 分 32 秒降至 3 分 15 秒，项目获得全国一等奖。',
              ],
              tech: ['STM32', 'C', 'CAN Bus', 'Path Planning', 'Mechanical'],
              links: [
                {
                  label: '演示视频',
                  href: 'https://www.bilibili.com/video/BV1J2p6zXEnv/',
                },
              ],
              media: {
                alt: '基于 STM32 的自主移动起重机器人主图占位',
                label: '移动起重机器人',
              },
            },
            {
              id: 'universal-grasping-robot',
              title: '语音引导的通用抓取具身智能机器人',
              period: '2025',
              description:
                '为第十二届 NVIDIA Sky Hackathon 开发了面向 UR 机器人抓取与工具取送任务的视觉-语言-动作智能体。',
              highlights: [
                '通过 LangGraph 智能体将语音请求转换为实时任务规划、工具选择与机器人动作。',
                '结合 FastSAM、视觉语言模型、Strategy of Mind prompting 与 GraspNet 完成场景理解和抓取规划。',
                '通过 MCP 暴露 UR 机器人动作，实现无碰撞工具抓取与取送；项目获得卓越奖（全国第二名）。',
              ],
              tech: ['LangGraph', 'VLM', 'FastSAM', 'GraspNet', 'MCP', 'UR Robot'],
              links: [
                { label: '演示视频', href: 'https://www.bilibili.com/video/BV1sRj3zAEXG' },
                {
                  label: 'GitHub',
                  href: 'https://github.com/DingGao1124/Hackathon',
                },
                {
                  label: 'GitCode',
                  href: 'https://gitcode.com/baomingcanjia/URgrasp_agent',
                },
              ],
              media: {
                alt: '语音引导具身智能抓取机器人主图占位',
                label: '具身智能抓取机器人',
              },
            },
            {
              id: 'abb-gofa-agent',
              title: 'ABB GoFa 自然语言任务规划智能体',
              period: '2025.07-2025.09',
              description: '开发了将自然语言指令转换为 ABB GoFa 可执行操作的 LLM 任务规划器。',
              highlights: [
                '将复杂指令拆解为多步骤任务列表，协调并行机器人操作并持续跟踪执行状态。',
                '围绕 Robot Web Services 与 RAPID 操作构建 MCP Server，支持设备查询、运动、抓取、放置与工具调用反馈。',
                '加入执行失败处理和短期对话上下文，使规划器能够响应失败动作并继续后续流程。',
              ],
              tech: ['Azure OpenAI', 'MCP', 'RAPID', 'RWS', 'Task Planning', 'ABB GoFa'],
              media: {
                alt: 'ABB GoFa 自然语言任务规划智能体主图占位',
                label: 'ABB GoFa 任务规划器',
              },
            },
          ],
        },
        {
          id: 'llm-ai-agents',
          title: '基于 LLM 的 AI 智能体',
          items: [
            {
              id: 'deep-agents',
              title: 'Deep Agents：基于 Harness Engineering 的网页自动化',
              period: '',
              description:
                '构建了一个受控智能体 Harness，将视觉参考、线框图与内容转化为响应式网页和隔离的浏览器预览。',
              highlights: [
                '把视觉分析、页面设计、HTML 实现、验证、评审和预览发布编排为一个可观测工作流。',
                '将设计、实现与质量评审委派给边界明确的专用子智能体，并实时展示计划、推理、工具调用与审批请求。',
                '使用线程级状态、Skills、文件系统隔离、重试、调用预算和确定性 HTML 质量门禁生成可验证产物。',
              ],
              tech: ['Deep Agents', 'LangGraph', 'React', 'Vite', 'Skills', 'MCP'],
              links: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/DingGao1124/DeepAgents',
                },
              ],
              media: {
                alt: 'Deep Agents 网页自动化界面主图占位',
                label: '智能体 Harness 界面',
              },
            },
            {
              id: 'llm-workstation',
              title: '面向柔性制造的 LLM 智能工作站',
              period: '',
              description:
                '开发了一个可配置的智能体工作站，将语言模型、制造知识、数字资产与产线操作绑定为可复用工作流。',
              highlights: [
                '支持配置智能体角色、目标、模型、知识库、数字资产和所承担的任务。',
                '通过可视化工作流组合智能体与 Crew，并接入检索、模型获取、数据解析和设备控制工具。',
                '通过 WebSocket 连接产线设备，支持设备控制、数据库查询、数据分析与监控。',
              ],
              tech: ['LLM Agents', 'RAG', 'Workflows', 'WebSocket', 'Digital Assets'],
              links: [
                {
                  label: '演示视频',
                  href: 'https://www.bilibili.com/video/BV1eypCzQEhy/',
                },
              ],
              media: {
                alt: '面向柔性制造的 LLM 智能工作站主图占位',
                label: 'LLM 智能工作站',
              },
            },
            {
              id: 'ai-agents-town',
              title: 'AI Agents Town：交互式多智能体虚拟世界',
              period: '2024.12-2025.04',
              description:
                '构建了一个浏览器虚拟小镇，使可配置 AI 角色能够维持上下文并与用户及其他角色交互。',
              highlights: [
                '支持创建包含姓名、人口属性与性格的 NPC，并管理角色之间的关系。',
                '支持多个地图，以及世界与角色配置的导入和导出。',
                '将 LangChain 智能体、上下文记忆与检索增强推理集成到 Phaser 虚拟环境。',
              ],
              tech: ['LangChain', 'Multi-Agent', 'RAG', 'Phaser', 'React'],
              links: [
                {
                  label: 'Figma',
                  href: 'https://www.figma.com/design/GP7iw7lfmpA006eMKg5kFK/NPC-UI?node-id=0-1&p=f',
                },
              ],
              media: {
                alt: '交互式 AI Agents Town 主图占位',
                label: 'AI Agents Town',
              },
            },
          ],
        },
        {
          id: 'full-stack-ai-projects',
          title: '全栈 AI 项目',
          items: [
            {
              id: 'bilibili-ai-feedback',
              title: 'Bilibili 观众反馈智能分析平台',
              period: '',
              description: '构建了一个将真实 B 站弹幕与评论转化为可追溯创作洞察的 AI 复盘工作台。',
              highlights: [
                '支持输入视频链接、BV 号或 b23.tv 短链，抓取真实反馈并在分析前展示数据分布。',
                '实时流式展示分析过程，提取高频话题、情绪倾向、高价值反馈和可执行创作建议。',
                '将每条洞察关联至原始评论或弹幕，并可视化评论用户等级、弹幕密度、情绪时间轴与重点反馈。',
              ],
              tech: ['LLM Agents', 'Streaming', 'Data Viz', 'Bilibili', 'Evidence'],
              media: {
                alt: 'Bilibili 观众反馈智能分析平台主图占位',
                label: '观众反馈复盘工作台',
              },
            },
            {
              id: 'whatsapp-ai-robot',
              title: 'WhatsApp AI 物业服务智能体',
              period: '',
              description: '构建了一个响应租赁客户请求并辅助员工处理服务工单的 AI 消息系统。',
              highlights: [
                '通过 Twilio Webhook 接收 WhatsApp 消息，并将客户请求实时同步到后端。',
                '提供基于 WebSocket 的工作台，员工可查看客户对话、审核智能体回复，并通过 WhatsApp 回传消息。',
                '将请求转化为可追踪工单，记录状态、优先级、房源、位置、知识与审批信息。',
              ],
              tech: ['WhatsApp', 'Twilio', 'Webhooks', 'WebSocket', 'AI Agent', 'Work Orders'],
              media: {
                alt: 'WhatsApp AI 物业服务智能体主图占位',
                label: 'WhatsApp 服务智能体',
              },
            },
            {
              id: 'llm-chrome-extension',
              title: '多模态 LLM Chrome 浏览器扩展',
              period: '',
              description:
                '开发了一个结合网页上下文、视觉理解、搜索与个人知识库的浏览器内 AI 助手。',
              highlights: [
                '基于当前网页内容回答问题，无需将材料复制到独立聊天应用。',
                '使用视觉语言模型进行图像识别、图片描述与视觉问答。',
                '支持互联网搜索、知识库交互，以及嵌入当前浏览流程的对话面板。',
              ],
              tech: ['Chrome', 'LLM', 'VLM', 'Web Search', 'Knowledge', 'RAG'],
              media: {
                alt: '多模态 LLM Chrome 浏览器扩展主图占位',
                label: '浏览器 AI 助手',
              },
            },
            {
              id: 'three-stooges',
              title: '三个臭皮匠：科研协作平台',
              period: '',
              description:
                '构建了一个用于组织文献、交流技术观点并与专用 LLM 智能体讨论问题的科研网站。',
              highlights: [
                '支持研究者管理个人 Top 100 论文，并按技术板块组织讨论。',
                '支持发布观点、评论他人内容，并回到讨论所依据的原始材料。',
                '提供可配置科研智能体，以及面向数字孪生研究微调的问答助手。',
              ],
              tech: ['LLM Agents', 'Research', 'Literature', 'Community', 'Full-Stack'],
              media: {
                alt: '三个臭皮匠科研协作平台主图占位',
                label: '科研协作平台',
              },
            },
          ],
        },
      ],
      moreLink: {
        label: '在我的 Portfolio 中查看更多项目',
        href: 'https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer',
      },
    },
  },
}

export default projects
