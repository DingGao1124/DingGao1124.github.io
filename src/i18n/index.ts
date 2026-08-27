import enSiteInfo from "./sources/en"
import zhSiteInfo from "./sources/zh"

export const siteInfos = {
  en: enSiteInfo,
  zh: zhSiteInfo,
} as const

export type SiteInfo = (typeof siteInfos)["en"]
