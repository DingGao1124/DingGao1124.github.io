# Ding Gao's Website

基于 VitePress、Vue 3、Tailwind CSS 和 shadcn-vue 构建的个人学术主页。VitePress 在构建阶段将页面预渲染为静态 HTML，并通过 GitHub Actions 部署到 GitHub Pages。

## 功能特性

- 中英文国际化：根路径 `/` 提供英文内容，`/zh/` 提供简体中文内容，界面文案与结构化履历随语言切换。
- 主题亮度切换：顶栏太阳/月亮图标在浅色与深色主题间切换，记忆用户选择，未选择时跟随系统偏好。

## 开发

```bash
npm install
npm run dev
```

## 检查与构建

```bash
npm run typecheck
npm run build
npm run preview
```

构建产物位于 `.vitepress/dist`。

## 项目文档

- [变更日志](CHANGELOG.md)：精简记录变更内容（位于项目根目录）
- [国际化](docs/i18n.md)：语言路由、内容组织与新增语言方式
- [代码检查与格式化](docs/tooling.md)：oxlint / oxfmt 的配置与使用

`docs/` 仅在新技术实现或重大更新时写完整技术文档；功能变更精简记录在根目录的 `CHANGELOG.md`。

## 目录结构

```text
.
├── CHANGELOG.md              # 功能变更记录
├── docs/                     # 重要的技术实现文档（如国际化、架构设计）
├── .vitepress/              # VitePress 配置与全局布局
├── site/                    # Markdown 页面入口（按语言/路由组织）
├── src/api/                 # 预留的 API 层
├── src/components/          # 业务组件（site/ 复用原语，projects/ 等按功能拆分）
├── src/components/ui/       # shadcn-vue 组件源码
├── src/data/                # 按分类组织的结构化内容与类型（中英文在同一文件）
├── src/hooks/               # 组合式函数（语言、内容选择）
├── src/i18n/                # 界面文案资源
├── src/lib/                 # 通用工具
├── src/pages/               # 各路由页面视图
├── src/styles/              # 全局样式与主题变量
├── src/types/               # 类型定义
├── src/utils/               # 工具函数
└── public/                  # 静态资源
```
