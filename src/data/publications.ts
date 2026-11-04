import collaborativeDisassemblyImage from '@/assets/publications/journal/collaborative-disassembly.jpg'
import historicalVqaImage from '@/assets/publications/journal/historical-vqa.jpg'
import selfEvolvingImage from '@/assets/publications/journal/self-evolving.png'
import cn113702385BImage from '@/assets/publications/patent/CN113702385B.webp'
import cn212613158UImage from '@/assets/publications/patent/CN212613158U.webp'

type PublicationType = 'journal' | 'conference' | 'patent'

type PublicationLink = {
  label: string
  href: string
}

type PublicationAuthor = {
  name: string
  equalContribution?: boolean
  correspondingAuthor?: boolean
}

type PublicationMedia = {
  src?: string
  /** For high resolution picture display. */
  originalSrc?: string
  alt: string
  label: string
  ratio?: number
}

export type Publication = {
  type: PublicationType
  topic: string
  title: string
  authors: PublicationAuthor[]
  venue: {
    name: string
    abbreviation?: string
  }
  publicationDate: {
    year?: string
    datetime: string
    label: string
  }
  identifier?: string
  keywords?: string[]
  links?: PublicationLink[]
  media: PublicationMedia
}

export type Publications = {
  label: {
    eyebrow: string
    title: string
    journalSectionTitle: string
    patentSectionTitle: string
    authorNotes: string
  }
  content: {
    items: Publication[]
  }
}

export const publications: Record<SiteLocale, Publications> = {
  en: {
    label: {
      eyebrow: 'Publications',
      title: 'Publications & Patents',
      journalSectionTitle: 'Journal publications',
      patentSectionTitle: 'Patents',
      authorNotes: '* Equal contribution · † Corresponding author',
    },
    content: {
      items: [
        {
          type: 'journal',
          topic: 'self-evolving-digital-twins',
          title:
            'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach',
          authors: [
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Xiaojian Wen', equalContribution: true },
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si' },
            { name: 'Cong Wang' },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: {
            name: 'Digital Engineering',
            abbreviation: 'DE',
          },
          publicationDate: { year: '2026', datetime: '2026-09', label: 'Sep 2026' },
          identifier: '10.1016/j.dte.2026.100099',
          keywords: [
            'Digital Twin',
            'Large Language Model',
            'Multi-Agent Systems',
            'Flexible Production Line',
            'Knowledge Graph',
          ],
          links: [
            { label: 'DOI', href: 'https://doi.org/10.1016/j.dte.2026.100099' },
            { label: 'CODE', href: 'https://github.com/DingGao1124/Thesis-MultiAgents' },
          ],
          media: {
            src: selfEvolvingImage,
            originalSrc: '/publications/journal/original/self-evolving.png',
            alt: 'Digital-twin production line figure: dynamic task decomposition across line, module, and unit agents over the production-line space',
            label: 'Digital-twin agent architecture',
            ratio: 1.392,
          },
        },
        // {
        //   type: 'journal',
        //   topic: 'multi-agent-digital-twin-modeling',
        //   title:
        //     'A dynamic modeling method for digital twin production lines based on multi-agent collaboration',
        //   authors: [
        //     { name: 'Xiaojian Wen' },
        //     { name: 'Ding Gao' },
        //     { name: 'Jianhao Lv' },
        //     { name: 'Jiahui Si' },
        //     { name: 'Cong Wang' },
        //     { name: 'Jinsong Bao' },
        //     { name: 'Dan Zhang' },
        //   ],
        //   venue: {
        //     name: 'Computer Integrated Manufacturing Systems',
        //     abbreviation: 'CIMS',
        //   },
        //   publicationDate: { year: '2026', datetime: '2026-06-26', label: 'Jun 2026' },
        //   identifier: '10.13196/j.cims.2025.0269',
        //   keywords: [
        //     'Digital twins',
        //     'Large language models',
        //     'Multi-agent systems',
        //     'Flexible production lines',
        //     'Knowledge graphs',
        //   ],
        //   links: [{ label: 'DOI', href: 'https://doi.org/10.13196/j.cims.2025.0269' }],
        //   media: {
        //     alt: 'Placeholder for the multi-agent digital-twin production-line modeling framework',
        //     label: 'Multi-agent digital-twin modeling framework',
        //   },
        // },
        {
          type: 'journal',
          topic: 'multi-cognitive-agent',
          title:
            'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human–robot collaborative disassembly',
          authors: [
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si', equalContribution: true },
            { name: 'Wenchao Li', equalContribution: true },
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: {
            name: 'Robotics and Computer-Integrated Manufacturing',
            abbreviation: 'RCIM',
          },
          publicationDate: { year: '2026', datetime: '2026-06', label: 'Jun 2026' },
          identifier: '10.1016/j.rcim.2025.103207',
          keywords: [
            'Single-Robot Multi-Cognitive Agent System',
            'Scene graph generation',
            'Knowledge graph',
            'Model Context Protocol',
          ],
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.rcim.2025.103207' }],
          media: {
            src: collaborativeDisassemblyImage,
            originalSrc: '/publications/journal/original/collaborative-disassembly.jpg',
            alt: 'Disassembly scene graph generation, perception graph cues, and the single-robot multi-cognitive agent architecture over a knowledge graph',
            label: 'Multi-cognitive agent system',
            ratio: 1.049,
          },
        },
        {
          type: 'journal',
          topic: 'historical-vqa',
          title:
            'Historical visual question answering with large language model for Augmented Reality-assisted Human–Robot Collaboration',
          authors: [
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si', equalContribution: true },
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: {
            name: 'Journal of Manufacturing Systems',
            abbreviation: 'JMS',
          },
          publicationDate: { year: '2025', datetime: '2025-12', label: 'Dec 2025' },
          identifier: '10.1016/j.jmsy.2025.10.005',
          keywords: [
            'Historical VQA',
            'Industrial augmented reality',
            'Human–robot collaboration',
            'Large language model',
          ],
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.jmsy.2025.10.005' }],
          media: {
            src: historicalVqaImage,
            originalSrc: '/publications/journal/original/historical-vqa.jpg',
            alt: 'Historical VQA with LLMs for AR-assisted human-robot collaboration across the perception, reasoning, and manipulation phases',
            label: 'AR-assisted HRC workflow',
            ratio: 1.779,
          },
        },
        {
          type: 'patent',
          topic: 'adjustable-stage',
          title: 'An Angle-Adjustable Stage and Its Use Method',
          authors: [
            { name: 'Fei Hao' },
            { name: 'Jinjiang Su' },
            { name: 'Renjun Ma' },
            { name: 'Ding Gao' },
            { name: 'Bailibing Jiang' },
            { name: 'Fangjiao Xia' },
          ],
          venue: {
            name: 'Invention Patent',
          },
          publicationDate: { year: '2023', datetime: '2023-06', label: 'Jun 2023' },
          identifier: 'CN113702385B',
          keywords: [
            'Visual Inspection',
            'Angle Adjustment',
            'Fine Positioning',
            'Defect Detection',
          ],
          links: [{ label: 'Patent', href: 'https://patents.google.com/patent/CN113702385B/en' }],
          media: {
            src: cn113702385BImage,
            originalSrc: cn113702385BImage,
            alt: 'Patent drawing of the angle-adjustable stage: the base, the angle-adjusting body with knobs, and the top platform with a circular opening',
            label: 'Angle-adjustable stage',
            ratio: 1.21,
          },
        },
        // {
        //   type: 'patent',
        //   topic: 'solar-folding-car-canopy',
        //   title: 'A Solar-Powered Foldable Fully Automatic Car Sunshade Canopy',
        //   authors: [
        //     { name: 'Jiangtao Xu' },
        //     { name: 'Yong Feng' },
        //     { name: 'Haojie Zhou' },
        //     { name: 'Zhiyuan Zhou' },
        //     { name: 'Zepeng Cheng' },
        //     { name: 'Ding Gao' },
        //   ],
        //   venue: {
        //     name: 'Invention Patent Application',
        //   },
        //   publicationDate: { year: '2021', datetime: '2021-05', label: 'May 2021' },
        //   identifier: 'CN112776579A',
        //   keywords: [
        //     'Solar Energy',
        //     'Foldable Canopy',
        //     'Automatic Deployment',
        //     'Photovoltaic Power Generation',
        //   ],
        //   links: [{ label: 'Patent', href: 'https://patents.google.com/patent/CN112776579A/en' }],
        //   media: {
        //     alt: 'Placeholder for the solar-powered foldable car sunshade canopy patent',
        //     label: 'Solar folding car canopy',
        //   },
        // },
        {
          type: 'patent',
          topic: 'conductive-concrete',
          title: 'A Prefabricated Component System Based on Conductive Concrete',
          authors: [
            { name: 'Fengyuan Yan' },
            { name: 'Ding Gao' },
            { name: 'Zhiwei Jiang' },
            { name: 'Linjie Li' },
          ],
          venue: {
            name: 'Utility Model Patent',
          },
          publicationDate: { year: '2021', datetime: '2021-02', label: 'Feb 2021' },
          identifier: 'CN212613158U',
          keywords: [
            'Conductive Concrete',
            'Prefabricated Components',
            'Building Heating',
            'Temperature Control',
          ],
          links: [{ label: 'Patent', href: 'https://patents.google.com/patent/CN212613158U/en' }],
          media: {
            src: cn212613158UImage,
            originalSrc: cn212613158UImage,
            alt: 'Patent drawing of the conductive-concrete prefabricated component system: the panel, its edge connectors, and the power and control boxes',
            label: 'Conductive concrete system',
            ratio: 1.348,
          },
        },
      ],
    },
  },
  zh: {
    label: {
      eyebrow: '成果',
      title: '论文与专利',
      journalSectionTitle: '期刊论文',
      patentSectionTitle: '专利',
      authorNotes: '* 共同贡献 · † 通讯作者',
    },
    content: {
      items: [
        {
          type: 'journal',
          topic: 'self-evolving-digital-twins',
          title:
            'Self-evolving digital twins in flexible manufacturing: A large language model-powered multi-agent approach',
          authors: [
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Xiaojian Wen', equalContribution: true },
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si' },
            { name: 'Cong Wang' },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: {
            name: 'Digital Engineering',
            abbreviation: 'DE',
          },
          publicationDate: { year: '2026', datetime: '2026-09', label: '2026.09' },
          identifier: '10.1016/j.dte.2026.100099',
          keywords: ['数字孪生', '大语言模型', '多智能体系统', '柔性制造'],
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.dte.2026.100099' }],
          media: {
            src: selfEvolvingImage,
            originalSrc: '/publications/journal/original/self-evolving.png',
            alt: '数字孪生产线任务分解图：从产线智能体到模块智能体、单元智能体，再映射到产线空间',
            label: 'Digital-twin agent architecture',
            ratio: 1.392,
          },
        },
        // {
        //   type: 'journal',
        //   topic: 'multi-agent-digital-twin-modeling',
        //   title: '基于多智能体协同机制的数字孪生产线动态建模方法',
        //   authors: [
        //     { name: '温晓健' },
        //     { name: '高鼎' },
        //     { name: '吕健豪' },
        //     { name: '司佳辉' },
        //     { name: '王聪' },
        //     { name: '鲍劲松' },
        //     { name: '张丹' },
        //   ],
        //   venue: {
        //     name: '计算机集成制造系统',
        //     abbreviation: 'CIMS',
        //   },
        //   publicationDate: { year: '2026', datetime: '2026-06-26', label: '2026.06' },
        //   identifier: '10.13196/j.cims.2025.0269',
        //   keywords: ['数字孪生', '大语言模型', '多智能体系统', '柔性生产线', '知识图谱'],
        //   links: [{ label: 'DOI', href: 'https://doi.org/10.13196/j.cims.2025.0269' }],
        //   media: {
        //     alt: '多智能体协同数字孪生产线动态建模框架配图占位',
        //     label: '多智能体数字孪生建模框架',
        //   },
        // },
        {
          type: 'journal',
          topic: 'multi-cognitive-agent',
          title:
            'Graph-driven Single-Robot Multi-Cognitive Agent System architecture for human–robot collaborative disassembly',
          authors: [
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si', equalContribution: true },
            { name: 'Wenchao Li', equalContribution: true },
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: {
            name: 'Robotics and Computer-Integrated Manufacturing',
            abbreviation: 'RCIM',
          },
          publicationDate: { year: '2026', datetime: '2026-06', label: '2026.06' },
          identifier: '10.1016/j.rcim.2025.103207',
          keywords: ['人机协作', '机器人拆解', '多认知智能体', '场景图'],
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.rcim.2025.103207' }],
          media: {
            src: collaborativeDisassemblyImage,
            originalSrc: '/publications/journal/original/collaborative-disassembly.jpg',
            alt: '拆解场景图生成、感知图线索与单机器人多认知智能体架构及其知识图谱支撑',
            label: 'Multi-cognitive agent system',
            ratio: 1.049,
          },
        },
        {
          type: 'journal',
          topic: 'historical-vqa',
          title:
            'Historical visual question answering with large language model for Augmented Reality-assisted Human–Robot Collaboration',
          authors: [
            { name: 'Jianhao Lv', equalContribution: true },
            { name: 'Jiahui Si', equalContribution: true },
            { name: 'Ding Gao', equalContribution: true },
            { name: 'Jinsong Bao', correspondingAuthor: true },
          ],
          venue: {
            name: 'Journal of Manufacturing Systems',
            abbreviation: 'JMS',
          },
          publicationDate: { year: '2025', datetime: '2025-12', label: '2025.12' },
          identifier: '10.1016/j.jmsy.2025.10.005',
          keywords: ['视觉问答', '增强现实', '人机协作', '大语言模型'],
          links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.jmsy.2025.10.005' }],
          media: {
            src: historicalVqaImage,
            originalSrc: '/publications/journal/original/historical-vqa.jpg',
            alt: '面向 AR 人机协作的历史视觉问答流程：感知、推理与操作三个阶段',
            label: 'AR-assisted HRC workflow',
            ratio: 1.779,
          },
        },
        {
          type: 'patent',
          topic: 'adjustable-stage',
          title: '一种角度可调的载物台及其使用方法',
          authors: [
            { name: '郝飞' },
            { name: '苏金江' },
            { name: '马仁俊' },
            { name: '高鼎' },
            { name: '江百里冰' },
            { name: '夏方娇' },
          ],
          venue: {
            name: '发明专利',
          },
          publicationDate: { year: '2023', datetime: '2023-06', label: '2023.06' },
          identifier: 'CN113702385B',
          keywords: ['视觉检测', '角度调节', '精密定位', '缺陷检测'],
          links: [{ label: '查看专利', href: 'https://patents.google.com/patent/CN113702385B/zh' }],
          media: {
            src: cn113702385BImage,
            originalSrc: cn113702385BImage,
            alt: '角度可调载物台专利附图：底座、带调节旋钮的角度调节本体，以及带圆孔的载物台面',
            label: '角度可调载物台',
            ratio: 0.909,
          },
        },
        // {
        //   type: 'patent',
        //   topic: 'solar-folding-car-canopy',
        //   title: '一种太阳能折叠式全自动汽车防晒车篷',
        //   authors: [
        //     { name: '许江涛' },
        //     { name: '冯勇' },
        //     { name: '周豪杰' },
        //     { name: '周智远' },
        //     { name: '程泽鹏' },
        //     { name: '高鼎' },
        //   ],
        //   venue: {
        //     name: '发明专利申请',
        //   },
        //   publicationDate: { year: '2021', datetime: '2021-05', label: '2021.05' },
        //   identifier: 'CN112776579A',
        //   keywords: ['太阳能', '折叠车篷', '自动展开', '光伏发电'],
        //   links: [{ label: '查看专利', href: 'https://patents.google.com/patent/CN112776579A/zh' }],
        //   media: {
        //     alt: '太阳能折叠式全自动汽车防晒车篷专利配图占位',
        //     label: '太阳能折叠式汽车车篷',
        //   },
        // },
        {
          type: 'patent',
          topic: 'conductive-concrete',
          title: '一种基于导电混凝土的装配式预制构件系统',
          authors: [{ name: '晏凤元' }, { name: '高鼎' }, { name: '姜志炜' }, { name: '李麟杰' }],
          venue: {
            name: '实用新型专利',
          },
          publicationDate: { year: '2021', datetime: '2021-02', label: '2021.02' },
          identifier: 'CN212613158U',
          keywords: ['导电混凝土', '装配式预制构件', '建筑供暖', '温度控制'],
          links: [{ label: '查看专利', href: 'https://patents.google.com/patent/CN212613158U/zh' }],
          media: {
            src: cn212613158UImage,
            originalSrc: cn212613158UImage,
            alt: '导电混凝土装配式预制构件系统专利附图：预制构件板体、边缘连接件与电源/控制盒',
            label: '导电混凝土预制构件系统',
            ratio: 1.348,
          },
        },
      ],
    },
  },
}

export default publications
