export type NewsItem = {
  type: 'Update' | 'Milestone'
  date: string
  text: string
  href?: string
  linkLabel?: string
}

export type News = NewsItem[]

export const news: Record<SiteLocale, News> = {
  en: [
    {
      type: 'Milestone',
      date: '06/2026',
      text: "I completed my M.Eng. in Intelligent Manufacturing at DHU, with my thesis named 'Digital Twin Modeling Method for Flexible Production Lines Based on Large Language Model Multi-Agent Systems' 🎓.",
      href: 'https://github.com/DingGao1124/Thesis-MultiAgents',
      linkLabel: 'View My Work.',
    },
    {
      type: 'Milestone',
      date: '03/2026',
      text: "Our paper, 'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach,' was accepted by Digital Engineering (DE) 🎉.",
      href: 'https://doi.org/10.1016/j.dte.2026.100099',
      linkLabel: 'View Our Work.',
    },
    {
      type: 'Update',
      date: '01/2026',
      text: 'I finished my full-stack development internship with the R&D Department at Tesla Gigafactory Shanghai, where I built an agentic workflow for analyzing Model 3 and Model Y user feedback.',
    },
    {
      type: 'Milestone',
      date: '12/2025',
      text: "Our paper, 'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly,' was accepted by Robotics and Computer-Integrated Manufacturing (RCIM) 🎉.",
      href: 'https://doi.org/10.1016/j.rcim.2025.103207',
      linkLabel: 'View Our Work.',
    },
    {
      type: 'Update',
      date: '11/2025',
      text: 'I received a First-Class Scholarship (Top 5%) from DHU.',
    },
    {
      type: 'Update',
      date: '09/2025',
      text: 'I finished my robotics application software internship with the R&D Department at ABB Robot Super Factory, developing an LLM-driven robotic task planner and a RAG-based AppStudio assistant.',
    },
    {
      type: 'Milestone',
      date: '08/2025',
      text: "Our paper, 'Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration,' was accepted by the Journal of Manufacturing Systems (JMS) 🎉!",
      href: 'https://doi.org/10.1016/j.jmsy.2025.10.005',
      linkLabel: 'View Our Work.',
    },
    {
      type: 'Update',
      date: '07/2025',
      text: 'I finished my software development internship at Bilibili, where I built an AI-assisted error-monitoring pipeline and a RAG-based diagnostic agent.',
    },
    {
      type: 'Milestone',
      date: '06/2025',
      text: 'Our embodied-AI robot (based on LLM multi-agent systems) won the Excellence Award (National Second Place) at the 12th NVIDIA Sky Hackathon 🥈!',
    },
    {
      type: 'Update',
      date: '06/2025',
      text: 'I completed a research project on an embodied-AI robotic system for industrial disassembly, integrating multimodal perception, task planning, grasp planning, and UR robot control 🤖.',
    },
    {
      type: 'Update',
      date: '04/2025',
      text: 'I completed my full-stack development internship at Caerulean AI Inc., where I built a memory-augmented multi-agent system for an interactive virtual world.',
    },
    {
      type: 'Update',
      date: '11/2024',
      text: 'I received a First-Class Scholarship (Top 5%) from DHU.',
    },
    {
      type: 'Update',
      date: '11/2023',
      text: 'I received a Second-Class Scholarship from DHU.',
    },
    {
      type: 'Milestone',
      date: '09/2023',
      text: 'I began my M.Eng. at Donghua University (DHU), focusing on Intelligent Manufacturing and LLM-Enabled Digital Twin.',
    },
    {
      type: 'Milestone',
      date: '06/2023',
      text: "I completed my B.Eng. in Mechanical Engineering at NJIT, with my thesis named 'Development of a 3-DOF Ball Screw Defect Detection Platform' 🎓.",
    },
    {
      type: 'Milestone',
      date: '06/2023',
      text: 'I was named the Outstanding Graduate Student.',
    },
    {
      type: 'Update',
      date: '05/2023',
      text: 'I was named a University Merit Student.',
    },
    {
      type: 'Update',
      date: '05/2023',
      text: 'I received a Second-Class Scholarship from NJIT.',
    },
    {
      type: 'Milestone',
      date: '01/2023',
      text: 'I got the opportunity to participate in the 14th National University Students Mathematics Competition and won the National First Prize 🥇! I made it eventually 🎉!',
    },
    {
      type: 'Update',
      date: '11/2022',
      text: 'I participated again in the 19th Provincial University Students Mathematics Competition and won the first prize 🥇!',
    },
    {
      type: 'Update',
      date: '10/2022',
      text: 'I was named a University Merit Student.',
    },
    {
      type: 'Update',
      date: '10/2022',
      text: 'I received a Second-Class Scholarship from NJIT.',
    },
    {
      type: 'Update',
      date: '10/2022',
      text: 'I participated again in the 14th School-Level Students Mathematics Competition and won the First Prize 🥇!',
    },
    {
      type: 'Update',
      date: '05/2022',
      text: 'I received a Second-Class Scholarship from NJIT.',
    },
    {
      type: 'Update',
      date: '11/2021',
      text: 'I received a Third-Class Scholarship from NJIT.',
    },
    {
      type: 'Milestone',
      date: '11/2021',
      text: "Our invention patent application, 'An Angle-Adjustable Stage and Its Use Method' (Application No. 202110855862.2), was granted and published 🎉.",
      href: 'https://patents.google.com/patent/CN113702385A/en',
      linkLabel: 'View Patent.',
    },
    {
      type: 'Milestone',
      date: '11/2021',
      text: 'We were thrilled that our mobile crane robot won the National First Prize at the 6th National University Students Mobile Crane Robot Competition and was nominated for the Best Creative Design Award 🏆! Great Team 🎉!',
      href: 'https://njit.edu.cn/info/1042/17898.htm',
      linkLabel: 'View Our Work.',
    },
    {
      type: 'Update',
      date: '05/2021',
      text: 'I received a First-Class Scholarship (Top 5%) from NJIT.',
    },
    {
      type: 'Milestone',
      date: '02/2021',
      text: "Our utility model patent, 'A Prefabricated Component System Based on Conductive Concrete' (Application No. 202020811827.1), was granted and published 🎉.",
      href: 'https://patents.google.com/patent/CN212613158U/en',
      linkLabel: 'View Patent.',
    },
    {
      type: 'Update',
      date: '11/2020',
      text: 'I received a Third-Class Scholarship from NJIT.',
    },
    {
      type: 'Update',
      date: '11/2020',
      text: 'I participated in the 17th Provincial University Students Mathematics Competition and won the third prize 🥉.',
    },
    {
      type: 'Update',
      date: '10/2020',
      text: 'I received a Second-Class Scholarship from NJIT.',
    },
    {
      type: 'Update',
      date: '10/2020',
      text: 'I participated in the 12th School-Level Students Mathematics Competition and won the Third Prize 🥉.',
    },
    {
      type: 'Milestone',
      date: '09/2019',
      text: 'I started my university life at Nanjing Institute of Technology (NJIT), majoring in Mechanical Engineering 🎉.',
    },
    {
      type: 'Milestone',
      date: '09/2016 - 06/2019',
      text: 'I attended the High School Affiliated to Nantong University. Despite the intense pressure of preparing for the Gaokao, the time I shared with my classmates and teachers left me with memories I will treasure for life.',
    },
    {
      type: 'Milestone',
      date: '09/2013 - 06/2016',
      text: 'I attended Yuelong Middle School in Jiangsu, China. My homeroom teacher Mr. Ma was demanding but deeply committed to his students, and I remain grateful for his guidance.',
    },
    {
      type: 'Milestone',
      date: '09/2007 - 06/2013',
      text: 'I attended Ligang Primary School in Jiangsu, China, where I made many unforgettable memories—both good and bad.',
    },
    {
      type: 'Milestone',
      date: '09/2004 - 06/2007',
      text: 'I attended Ligang Kindergarten in Jiangsu, China—and, for the record, the cake there was delicious 🎂.',
    },
    {
      type: 'Milestone',
      date: '11/2001 - 08/2004',
      text: 'Before kindergarten, I lived in the countryside with my grandparents. I am deeply grateful for the love, care, and companionship they gave me as I grew up.',
    },
    {
      type: 'Milestone',
      date: '11/2001',
      text: 'I was born, thanks to my parents 👶.',
    },
  ],
  zh: [
    {
      type: 'Milestone',
      date: '2026.06',
      text: '我完成了东华大学智能制造工程硕士学位，毕业论文聚焦基于大语言模型多智能体系统的柔性产线数字孪生建模。',
      href: 'https://github.com/DingGao1124/Thesis-MultiAgents',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Milestone',
      date: '2026.03',
      text: '我们的论文《Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach》被 Digital Engineering（DE）接收。',
      href: 'https://doi.org/10.1016/j.dte.2026.100099',
      linkLabel: '查看我们的工作。',
    },
    {
      type: 'Update',
      date: '2026.01',
      text: '我完成了在特斯拉上海超级工厂研发部门的全栈开发实习，为 Model 3 与 Model Y 用户反馈分析构建了智能体工作流。',
      href: '',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Milestone',
      date: '2025.12',
      text: '我们的论文《Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human-robot collaborative disassembly》被 Robotics and Computer-Integrated Manufacturing（RCIM）接收。',
      href: 'https://doi.org/10.1016/j.rcim.2025.103207',
      linkLabel: '查看我们的工作。',
    },
    {
      type: 'Update',
      date: '2025.11',
      text: '我获得东华大学一等奖学金（Top 5%）。',
      href: '',
      linkLabel: '查看奖项。',
    },
    {
      type: 'Update',
      date: '2025.09',
      text: '我完成了在 ABB 机器人超级工厂研发部门的机器人应用软件开发实习，开发了由 LLM 驱动的机器人任务规划器与基于 RAG 的 AppStudio 助手。',
      href: '',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Milestone',
      date: '2025.08',
      text: '我们的论文《Historical visual question answering with large language model for Augmented Reality-assisted Human-Robot Collaboration》被 Journal of Manufacturing Systems（JMS）接收。',
      href: 'https://doi.org/10.1016/j.jmsy.2025.10.005',
      linkLabel: '查看我们的工作。',
    },
    {
      type: 'Update',
      date: '2025.07',
      text: '我完成了在哔哩哔哩的软件开发实习，构建了 AI 辅助错误监测流程与基于 RAG 的诊断智能体。',
      href: '',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Milestone',
      date: '2025.06',
      text: '2025 年，我们基于 LLM 多智能体系统的具身智能机器人获得第十二届 NVIDIA Sky Hackathon 卓越奖（全国第二名）。',
      href: '',
      linkLabel: '查看我们的工作。',
    },
    {
      type: 'Update',
      date: '2025.06',
      text: '我完成了工业拆卸具身智能机器人系统研究助理项目，集成了多模态感知、任务规划、抓取规划与 UR 机器人控制。',
      href: '',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Update',
      date: '2025.04',
      text: '我完成了在 Caerulean AI Inc. 的全栈开发实习，为交互式虚拟世界构建了具备记忆能力的多智能体系统。',
      href: '',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Update',
      date: '2024.11',
      text: '我获得东华大学一等奖学金（Top 5%）。',
      href: '',
      linkLabel: '查看奖项。',
    },
    {
      type: 'Update',
      date: '2023.11',
      text: '我获得东华大学二等奖学金。',
      href: '',
      linkLabel: '查看奖项。',
    },
    {
      type: 'Update',
      date: '2023.06',
      text: '我进入东华大学攻读智能制造工程硕士学位，并开始开展基于 LLM 的数字孪生研究。',
      href: '',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Milestone',
      date: '2023.06',
      text: '我完成了南京工程学院机械工程专业工学学士学位，毕业论文题目为《三自由度滚珠丝杠缺陷检测平台开发》。',
      href: '',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Milestone',
      date: '2023.06',
      text: '2023 年，我获得优秀毕业生荣誉。',
      href: '',
      linkLabel: '查看奖项。',
    },
    {
      type: 'Update',
      date: '2022.10 - 2023.05',
      text: '我在 2022 年和 2023 年获评校三好学生。',
      href: '',
      linkLabel: '查看奖项。',
    },
    {
      type: 'Update',
      date: '2023.05',
      text: '我获得南京工程学院二等奖学金。',
    },
    {
      type: 'Milestone',
      date: '2023.01',
      text: '我获得全国大学生数学竞赛全国一等奖！',
      href: '',
      linkLabel: '查看奖项。',
    },
    {
      type: 'Update',
      date: '2022.11',
      text: '我获得全国大学生数学竞赛省级一等奖。',
    },
    {
      type: 'Update',
      date: '2022.10',
      text: '我获得南京工程学院二等奖学金。',
    },
    {
      type: 'Update',
      date: '2022.10',
      text: '我获得全国大学生数学竞赛校级一等奖。',
    },
    {
      type: 'Update',
      date: '2022.05',
      text: '我获得南京工程学院二等奖学金。',
    },
    {
      type: 'Update',
      date: '2021.11',
      text: '我获得南京工程学院三等奖学金。',
    },
    {
      type: 'Milestone',
      date: '2021.11',
      text: '我们的发明专利申请《一种角度可调的载物台及其使用方法》（申请号：202110855862.2）正式公开。',
      href: 'https://patents.google.com/patent/CN113702385A/zh',
      linkLabel: '查看专利。',
    },
    {
      type: 'Milestone',
      date: '2021.11',
      text: '我们的移动起重机器人获得第六届全国大学生起重机创意大赛全国一等奖。',
      href: 'https://njit.edu.cn/info/1042/17898.htm',
      linkLabel: '查看我们的工作。',
    },
    {
      type: 'Update',
      date: '2021.05',
      text: '我获得南京工程学院一等奖学金（Top 5%）。',
    },
    {
      type: 'Milestone',
      date: '2021.02',
      text: '我们的实用新型专利《一种基于导电混凝土的装配式预制构件系统》（申请号：202020811827.1）获得授权并公告。',
      href: 'https://patents.google.com/patent/CN212613158U/zh',
      linkLabel: '查看专利。',
    },
    {
      type: 'Update',
      date: '2020.11',
      text: '我获得南京工程学院三等奖学金。',
    },
    {
      type: 'Update',
      date: '2020.11',
      text: '我获得全国大学生数学竞赛省级三等奖！',
      href: '',
      linkLabel: '查看奖项。',
    },
    {
      type: 'Update',
      date: '2020.10',
      text: '我获得南京工程学院二等奖学金。',
    },
    {
      type: 'Update',
      date: '2020.10',
      text: '我获得全国大学生数学竞赛校级三等奖。',
    },
    {
      type: 'Update',
      date: '2019.09',
      text: '我进入南京工程学院攻读机械工程专业工学学士学位。',
      href: '',
      linkLabel: '查看我的工作。',
    },
    {
      type: 'Milestone',
      date: '2016.09 - 2019.06',
      text: '我就读于南通大学附属中学。虽然升学压力很大，但与同学和老师们共同度过的时光，为我留下了此生难忘的美好回忆。',
    },
    {
      type: 'Milestone',
      date: '2013.09 - 2016.06',
      text: '我就读于江苏省南通市崇川区跃龙中学。班主任虽然严厉，却始终认真负责，我一直感谢他的教导与付出。',
    },
    {
      type: 'Milestone',
      date: '2007.09 - 2013.06',
      text: '我就读于江苏省南通市通州区李港小学，在那里留下了许多难忘的回忆——有美好的，也有不那么美好的。',
    },
    {
      type: 'Milestone',
      date: '2004.09 - 2007.06',
      text: '我就读于江苏省南通市通州区李港幼儿园——顺便一提，那里的蛋糕真的很好吃 🎂。',
    },
    {
      type: 'Milestone',
      date: '2001.11 - 2004.08',
      text: '上幼儿园前，我在乡下和祖父母一起生活。感谢他们给予我的陪伴、照顾与养育。',
    },
    {
      type: 'Milestone',
      date: '2001.11',
      text: '我出生了，感谢爸爸妈妈 👶。',
    },
  ],
}

export default news
