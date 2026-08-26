# 变更日志

## 2026-08-26

- 首页 About 区改版：左侧 About 正文与兴趣/教育，右侧圆形头像、姓名、职位、机构与联系图标；移除顶部大字标题，头像改用 `public/avatar.webp`。涉及 `src/pages/HomePage.vue`、`src/i18n/data.ts`、`src/data/profile*.ts`。
- 部署：`npm ci` 改为 `npm install`（锁文件仅含 macOS 二进制，Linux CI 无法用 `npm ci`）。涉及 `.github/workflows/deploy.yml`。
- 内容卡片：新增 `ContentEntry` 统一卡片（标题 / 元信息 / Markdown 内容 / 图片 / 图标链接），用于项目、论文、经历与教育页面。涉及 `src/components/site/ContentEntry.vue` 等。
- 数据模型：`LinkItem` 增加 `icon`；`Project`、`Publication` 增加 `images`；`Publication` 增加 `type`/`links`；新增 `Education` 结构化类型。涉及 `src/data/types.ts` 与两个 profile 文件。
- 主题：新增浅色/深色切换并记忆偏好。
- 国际化：新增英文默认 + `/zh/` 中文，接入导航与结构化内容。
- 重构：改为研究组主页式编辑结构，六组导航映射真实路由并拆分独立页面。
