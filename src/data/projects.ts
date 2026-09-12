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
                'Built a competition robot that autonomously transported and placed objects along designated routes.',
              highlights: [
                'Designed the mechanical structure and integrated sensing, actuation, and control.',
                'Coordinated DC motors, encoder motors, servos, and robotic arms through an STM32 controller and CAN bus.',
                'Added a dynamic shortest-path algorithm and moved from one to three motors, cutting operation time from 4 min 32 s to 3 min 15 s.',
                'This project received the National First Place Award.',
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
                'Exposed UR robot actions through MCP tools for collision-free pickup and delivery.',
                'This project received the Excellence Award (National Second Place).',
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
                'Built an LLM planner that turns natural-language instructions into executable operations for an ABB GoFa robot.',
              highlights: [
                'Decomposes instructions into multi-step task lists and coordinates parallel robot operations with execution-status tracking.',
                'Built an MCP server over Robot Web Services and RAPID for equipment queries, motion, picking, placing, and tool-call feedback.',
                'Added execution-failure handling and short-term context so the planner can recover and continue the workflow.',
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
                'Built a controlled agent harness that turns visual references, wireframes, and content into responsive web pages with isolated browser previews.',
              highlights: [
                'Orchestrates visual analysis, design, HTML implementation, validation, review, and preview publication as one observable workflow.',
                'Delegates bounded work to design, implementation, and quality-review subagents, streaming plans, reasoning, tool calls, and approvals.',
                'Relies on thread-scoped state, Skills, filesystem isolation, retries, call budgets, and deterministic HTML quality gates for verifiable artifacts.',
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
                'Developed a configurable workstation that binds language models, manufacturing knowledge, digital assets, and production-line operations into reusable agent workflows.',
              highlights: [
                'Configures agents with roles, goals, models, knowledge bases, digital assets, and assigned tasks.',
                'Composes agents and Crews in a visual workflow with retrieval, model-acquisition, parsing, and equipment-control tools.',
                'Connects to production-line devices over WebSocket for control, database queries, data analysis, and monitoring.',
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
                'Created a browser-based town where configurable AI characters keep context and interact with users and one another.',
              highlights: [
                'Lets users define NPC names, demographics, and personalities, and manage relationships between characters.',
                'Integrates LangChain agents, contextual memory, and retrieval-augmented reasoning into a Phaser environment.',
                'Supports multiple maps with import/export of reusable world and character configurations.',
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
          title: 'Full-Stack Web Platforms',
          items: [
            {
              id: 'bilibili-ai-feedback',
              title: 'Bilibili Audience Feedback Intelligence',
              period: '',
              description:
                'Built an AI review workspace that turns real Bilibili danmaku and comments into evidence-backed insights for creators.',
              highlights: [
                'Accepts a video URL, BV ID, or b23.tv short link, retrieves the real feedback, and shows the data distribution before analysis.',
                'Streams the analysis to extract high-frequency topics, sentiment, valuable feedback, and actionable content suggestions.',
                'Links every insight back to the original comments or danmaku, with views for user levels, danmaku density, sentiment timelines, and priority feedback.',
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
                'Built an AI-assisted messaging and work-order system that answers rental customers and helps staff manage service requests.',
              highlights: [
                'Receives WhatsApp messages through a Twilio webhook and synchronizes them with the backend in real time.',
                'Gives staff a WebSocket workspace to review the conversation and agent reply, and turns each request into a traceable work order with status, priority, property, and approval details.',
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
                'Developed an in-browser AI assistant that combines webpage context, visual understanding, search, and personal knowledge in one conversation panel.',
              highlights: [
                'Answers questions against the active webpage without moving content into a separate chat application.',
                'Uses a vision-language model for image recognition and visual question answering, plus web search and knowledge-base access.',
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
                'Built a research website for organizing literature, exchanging technical ideas, and discussing questions with specialized LLM agents.',
              highlights: [
                'Lets researchers curate their top 100 papers and organize discussions by technical board, with viewpoints, comments, and links back to source material.',
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
      sections: [
        {
          id: 'robotic-embodied-ai',
          title: '机器人与具身智能',
          items: [
            {
              id: 'mobile-crane-robot',
              title: '基于 STM32 的自主移动起重机器人',
              period: '2022.02-2022.11',
              description: '开发了一台沿指定路线自主运输并放置物体的竞赛机器人。',
              highlights: [
                '完成机械结构设计，并集成感知、执行与控制系统。',
                '使用 STM32 与 CAN 总线协调直流电机、编码器电机、舵机与机械臂。',
                '加入动态最短路径算法，将执行机构由单电机升级为三电机，总运行时间从 4 分 32 秒降至 3 分 15 秒，项目获得全国一等奖。',
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
              description: '开发了将自然语言指令转为 ABB GoFa 可执行操作的 LLM 任务规划器。',
              highlights: [
                '将指令拆解为多步骤任务列表，协调并行机器人操作并跟踪执行状态。',
                '基于 Robot Web Services 与 RAPID 构建 MCP Server，支持设备查询、运动、抓取、放置与工具调用反馈。',
                '加入执行失败处理与短期上下文，使规划器能够从失败动作中恢复并继续流程。',
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
                '构建了一个受控智能体 Harness，将视觉参考、线框图与内容转化为响应式网页，并生成隔离的浏览器预览。',
              highlights: [
                '把视觉分析、页面设计、HTML 实现、验证、评审与预览发布编排为一个可观测工作流。',
                '将设计、实现与质量评审委派给边界明确的专用子智能体，并实时展示计划、推理、工具调用与审批。',
                '依赖线程级状态、Skills、文件系统隔离、重试、调用预算与确定性 HTML 质量门禁生成可验证产物。',
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
                '构建了一个浏览器虚拟小镇，使可配置 AI 角色能够维持上下文并与其他角色交互。',
              highlights: [
                '支持定义 NPC 姓名、人口属性与性格，并管理角色之间的关系。',
                '将 LangChain 智能体、上下文记忆与检索增强推理集成到 Phaser 环境。',
                '支持多个地图，以及世界与角色配置的导入导出。',
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
                '支持输入视频链接、BV 号或 b23.tv 短链，抓取真实反馈并展示数据分布。',
                '流式展示分析过程，提取高频话题、情绪倾向、高价值反馈与可执行创作建议。',
                '将每条洞察关联至原始评论或弹幕，并可视化用户等级、弹幕密度、情绪时间轴与重点反馈。',
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
              description: '构建了一个自动应答租赁客户并辅助员工处理服务工单的 AI 消息系统。',
              highlights: [
                '通过 Twilio Webhook 接收 WhatsApp 消息，并实时同步到后端。',
                '提供 WebSocket 工作台供员工审核对话与智能体回复，并将请求转化为带状态、优先级、房源与审批信息的可追踪工单。',
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
                '使用视觉语言模型完成图像识别与视觉问答，并支持联网搜索与知识库访问。',
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
                '支持研究者管理个人 Top 100 论文，并按技术板块讨论；可发布观点、评论他人内容，并回到讨论所依据的原始材料。',
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
