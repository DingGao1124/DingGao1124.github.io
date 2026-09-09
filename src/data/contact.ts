export type Contact = {
  email: string
  phone: string
  phoneHref: string
  cvHref: string
  profileLinks: {
    label: string
    href: string
    iconSize?: number
    iconSrc?: string
  }[]
  label: {
    eyebrow: string
    title: string
    phoneLabel: string
    profilesMainTitle: string
    profilesSubTitle: string
    cvTitle: string
    viewCvLabel: string
    downloadCvLabel: string
    pageContentsLabel: string
  }
  content: {
    lede: string
    cvDescription: string
  }
}

export const contact: Record<SiteLocale, Contact> = {
  en: {
    email: 'gaodings@163.com',
    phone: '+86 159 6295 6251',
    phoneHref: 'tel:+8615962956251',
    cvHref: '/cv/Ding_Gao_CV.pdf',
    profileLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/DingGao1124',
        iconSrc: '/media/GitHub.svg',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ding-gao-995147349/',
        iconSrc: '/media/Linkin.svg',
      },
      {
        label: 'Videos',
        href: 'https://space.bilibili.com/441110980/upload/video',
        iconSize: 7,
        iconSrc: '/media/BILIBILI.svg',
      },
      {
        label: 'Portfolio',
        href: 'https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer',
        iconSrc: '/media/Yuque.svg',
      },
    ],
    label: {
      eyebrow: 'Contact',
      title: 'Contact',
      phoneLabel: 'Phone',
      profilesMainTitle: 'You can find me: ',
      profilesSubTitle: 'Or visit my social media: ',
      cvTitle: 'Curriculum vitae',
      viewCvLabel: 'View CV',
      downloadCvLabel: 'Download CV',
      pageContentsLabel: 'On this page',
    },
    content: {
      lede: 'I warmly welcome conversations about robotics, embodied and agentic AI, digital twins, and intelligent manufacturing.',
      cvDescription: 'You can view and download my latest CV here.',
    },
  },
  zh: {
    email: 'gaodings@163.com',
    phone: '+86 159 6295 6251',
    phoneHref: 'tel:+8615962956251',
    cvHref: '/cv/Ding_Gao_CV.pdf',
    profileLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/DingGao1124',
        iconSrc: '/media/GitHub.svg',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ding-gao-995147349/',
        iconSrc: '/media/Linkin.svg',
      },
      {
        label: 'Portfolio',
        href: 'https://www.yuque.com/einsteinding/zg7uxv/vmpbgefbiitnqrer',
        iconSrc: '/media/Yuque.svg',
      },
    ],
    label: {
      eyebrow: '联系',
      title: '联系',
      phoneLabel: '电话',
      profilesMainTitle: '你可以这样联系我：',
      profilesSubTitle: '或者通过：',
      cvTitle: '个人简历',
      viewCvLabel: '预览简历',
      downloadCvLabel: '下载简历',
      pageContentsLabel: '本页目录',
    },
    content: {
      lede: '如需交流机器人、智能体系统、全栈工程或智能制造相关话题，邮件是最直接的方式。',
      cvDescription: '下载最新版本的个人简历 PDF。',
    },
  },
}

export default contact
