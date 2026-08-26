# 变更日志

## 2026-08-26

- 重构内容展示卡片：新增统一 `ContentEntry` 卡片组件，按「标题 → 元信息行（期刊/学校/专业/地点）→ Markdown 内容（超长时折叠为 Show more，可展开）→ 图片 → 带有图标的链接」的模板呈现，并将论文、项目、经历、教育页面统一到该卡片。涉及 `src/components/site/ContentEntry.vue`、`src/lib/markdown.ts`、`src/components/projects/ProjectEntry.vue`、`src/pages/PublicationsPage.vue`、`src/pages/ExperiencePage.vue`。
- 内容数据模型扩展：`LinkItem` 增加 `icon`（链接图标键）与 `description`；`Project` 增加 `images`；`Publication` 增加 `type`（journal/patent）、`links`、`images`；新增结构化 `Education` 类型（学校/专业/时间/地点），教育经历由字符串改为对象。涉及 `src/data/types.ts`、`src/data/profile.ts`、`src/data/profile.en.ts`。
- 新增主题亮度切换：顶栏太阳/月亮图标在浅色与深色主题间切换，记忆用户选择并在未选择时跟随系统偏好；停用 VitePress 自带外观以自管理主题类。涉及 `src/hooks/useTheme.ts`、`src/components/site/SiteHeader.vue`、`src/i18n/messages.ts`、`.vitepress/config.ts`。
- 新增英文默认的中英文国际化：首页根路径提供英文内容，`/zh/` 提供中文内容，并为导航、元数据和结构化履历接入对应语言资源。
- 对界面进行整体重构：将原先单页卡片式布局改为研究组主页 × 技术文档 × 个人学术主页的编辑式结构，引入衬线标题、等宽元数据和发丝线分隔的索引式排版；顶部六个导航分组改为真实路由（`/research/`、`/projects/` 等），并同步提供 `/zh/.../` 中文页面；首页改为学术主页概览，其余内容按研究、项目、论文、经历、联系拆分到独立页面。
