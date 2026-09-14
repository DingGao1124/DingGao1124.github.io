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
    honorsTitle: string
    gpaLabel: string
    rankLabel: string
    thesisLabel: string
    advisorLabel: string
    departmentLabel: string
    roleLabel: string
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
      professionalTitle: 'Work/Intern Experience',
      researchTitle: 'Research Experience',
      educationTitle: 'Education',
      honorsTitle: 'Selected honors',
      gpaLabel: 'GPA',
      rankLabel: 'Major rank',
      thesisLabel: 'Thesis',
      advisorLabel: 'Advisor',
      departmentLabel: 'Department',
      roleLabel: 'Role',
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
      honorsTitle: '荣誉与竞赛',
      gpaLabel: 'GPA',
      rankLabel: '专业排名',
      thesisLabel: '毕业设计',
      advisorLabel: '导师',
      departmentLabel: '部门',
      roleLabel: '职位',
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
