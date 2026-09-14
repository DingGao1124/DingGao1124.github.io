export type NotebookDoc = {
  title: string
  date: string
  href?: string
}

export type Notebook = {
  title: string
  /** Directory under `site/blogs/`. */
  folder: string
  description?: string
  /** Keeps the notebook off the page and out of the build. */
  private?: boolean
  docs: readonly NotebookDoc[]
}

export type Blog = {
  label: {
    eyebrow: string
    title: string
    postsTitle: string
    emptyLabel: string
  }
  notebooks: readonly Notebook[]
}

const notebooks: readonly Notebook[] = [
  {
    title: 'Self Planning',
    folder: 'self-planning',
    private: true,
    docs: [
      { title: '评测&笔试', date: '2025-10-30 17:46' },
      { title: '企业招聘', date: '2025-10-16 20:12' },
      { title: '企业面试', date: '2025-10-13 17:51' },
    ],
  },
  {
    title: '学习笔记',
    folder: 'study-notes',
    private: true,
    docs: [
      { title: 'Python 学习笔记 2', date: '2025-09-05 10:27' },
      { title: 'Python 设计模式', date: '2025-06-08 14:02' },
      { title: 'Python 学习笔记', date: '2025-05-23 15:12' },
    ],
  },
  {
    title: 'Artificial Intelligence',
    folder: 'artificial-intelligence',
    private: true,
    docs: [
      { title: 'Refactoring', date: '08-17 11:30' },
      { title: 'Instruments', date: '02-06 23:27' },
      { title: 'OpenAI 文档学习', date: '2025-08-25 15:18' },
    ],
  },
  {
    title: 'Frontend',
    folder: 'frontend',
    description: '前端学习总结。',
    private: true,
    docs: [
      { title: 'R3F + Drei', date: '01-27 21:21' },
      { title: '事件循环', date: '01-15 14:37' },
      { title: '常见效果实现', date: '2025-11-18 10:52' },
    ],
  },
  {
    title: 'Backend',
    folder: 'backend',
    description: '后端学习总结。',
    private: true,
    docs: [
      { title: 'Cron Task', date: '05-21 17:32' },
      { title: 'FastAPI 学习笔记', date: '2024-11-14 16:44' },
      { title: 'Authentication', date: '2024-11-14 14:23' },
    ],
  },
  {
    title: 'Flush Bonding',
    folder: 'flush-bonding',
    description: '嵌入式相关知识学习。',
    private: true,
    docs: [
      { title: 'C++ 并行编程', date: '03-14 15:49' },
      { title: 'QT 学习笔记', date: '01-30 17:59' },
      { title: 'C 语言进阶', date: '2025-12-27 23:13' },
    ],
  },
  {
    title: 'Application',
    folder: 'application',
    private: true,
    docs: [
      { title: 'Portfolio', date: '09-11 01:26' },
      { title: 'WaterlooWorks 岗位分析', date: '08-08 17:25' },
      { title: 'TA/RA', date: '08-08 16:45' },
    ],
  },
  {
    title: 'IELTS',
    folder: 'ielts',
    private: true,
    docs: [
      { title: 'Daily Routine', date: '2025-05-28 10:54' },
      { title: 'IELTS Words', date: '2025-05-23 11:27' },
      { title: '刘黑眼圈子', date: '2025-05-22 20:52' },
    ],
  },
  {
    title: '计算机基础',
    folder: 'computer-fundamentals',
    private: true,
    docs: [
      { title: '协变、逆变、不变', date: '2025-12-18 11:13' },
      { title: '算法集锦', date: '2025-09-20 12:31' },
      { title: '计算机网络', date: '2025-09-18 18:47' },
    ],
  },
  {
    title: 'Deployment',
    folder: 'deployment',
    private: true,
    docs: [
      { title: 'NGINX', date: '2024-10-17 16:05' },
      { title: 'Kubernetes', date: '2024-06-17 20:53' },
      { title: 'Helm', date: '2024-06-17 14:26' },
    ],
  },
  {
    title: '研究生论文',
    folder: 'graduate-thesis',
    private: true,
    docs: [
      { title: 'DTDL', date: '01-10 20:53' },
      { title: 'Top 100 参考文献整理', date: '01-09 10:18' },
      { title: '1.5会议纪要', date: '01-05 15:10' },
    ],
  },
  {
    title: 'Internship',
    folder: 'internship',
    private: true,
    docs: [
      { title: 'LLM机械臂项目纪要', date: '04-06 16:42' },
      { title: '入职记录', date: '2025-09-22 16:25' },
      { title: '初识 TPU FlexPendant&RAPID', date: '2025-07-16' },
    ],
  },
  {
    title: 'Robotics',
    folder: 'robotics',
    private: true,
    docs: [
      { title: 'ROS2学习笔记', date: '2025-07-20 01:38' },
      { title: 'Machine Learning', date: '2025-07-20 00:43' },
      { title: '相机标定', date: '2025-07-16 11:24' },
    ],
  },
  {
    title: 'Architecture Design',
    folder: 'architecture-design',
    private: true,
    docs: [
      { title: 'Dependency Injection', date: '01-11 18:27' },
      { title: 'Web Application', date: '2025-12-14 16:38' },
    ],
  },
  {
    title: 'News',
    folder: 'news',
    description: '记录历史上发生的事情。',
    private: true,
    docs: [
      { title: '论文图片收集', date: '01-10 17:09' },
      { title: 'News Record', date: '01-09 13:14' },
    ],
  },
  {
    title: 'Games',
    folder: 'games',
    description: 'Thoughts about games.',
    private: true,
    docs: [{ title: 'Elden Ring', date: '01-13 12:55' }],
  },
]

export const blogs: Record<SiteLocale, Blog> = {
  en: {
    label: {
      eyebrow: 'Blog',
      title: 'Blog',
      postsTitle: 'Posts',
      emptyLabel: 'Under construction, coming soon...',
    },
    notebooks,
  },
  zh: {
    label: {
      eyebrow: '博客',
      title: '博客',
      postsTitle: '文章',
      emptyLabel: '还没有内容。',
    },
    notebooks,
  },
}

export default blogs
