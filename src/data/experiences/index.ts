import education, { type EducationRecord } from './education'
import honors, { type HonorRecord } from './honors'
import professional, { type ProfessionalEntry } from './professional'
import research, { type ResearchEntry } from './research'

export type Experience = {
  label: {
    eyebrow: string
    title: string
    professionalTitle: string
    researchTitle: string
    educationTitle: string
    skillsTitle: string
    honorsTitle: string
    gpaLabel: string
    rankLabel: string
    awardsLabel: string
    competitionsLabel: string
    thesisLabel: string
    advisorLabel: string
    pageContentsLabel: string
    showMoreLabel: string
    showLessLabel: string
  }
  content: {
    professional: ProfessionalEntry[]
    research: ResearchEntry[]
    education: EducationRecord[]
    honors: HonorRecord[]
  }
}

export const experiences: Record<SiteLocale, Experience> = {
  en: {
    label: {
      eyebrow: 'Experience',
      title: 'Experience',
      professionalTitle: 'Professional experience',
      researchTitle: 'Research experience',
      educationTitle: 'Education',
      skillsTitle: 'Professional skills',
      honorsTitle: 'Selected honors',
      gpaLabel: 'GPA',
      rankLabel: 'Major rank',
      awardsLabel: 'Awards',
      competitionsLabel: 'Competitions',
      thesisLabel: 'Thesis',
      advisorLabel: 'Advisor',
      pageContentsLabel: 'On this page',
      showMoreLabel: 'Show more',
      showLessLabel: 'Show less',
    },
    content: {
      professional: professional.en,
      research: research.en,
      education: education.en,
      honors: honors.en,
    },
  },
  zh: {
    label: {
      eyebrow: '经历',
      title: '经历',
      professionalTitle: '行业经历',
      researchTitle: '研究经历',
      educationTitle: '教育背景',
      skillsTitle: '专业技能',
      honorsTitle: '荣誉与竞赛',
      gpaLabel: 'GPA',
      rankLabel: '专业排名',
      awardsLabel: '奖项',
      competitionsLabel: '竞赛',
      thesisLabel: '毕业设计',
      advisorLabel: '导师',
      pageContentsLabel: '本页目录',
      showMoreLabel: '展开',
      showLessLabel: '收起',
    },
    content: {
      professional: professional.zh,
      research: research.zh,
      education: education.zh,
      honors: honors.zh,
    },
  },
}

export default experiences
