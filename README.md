# Personal Profile

基于 VitePress、Vue 3、Tailwind CSS 和 shadcn-vue 构建的个人学术主页。VitePress 在构建阶段将页面预渲染为静态 HTML，并通过 GitHub Actions 部署到 GitHub Pages。

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

## 目录结构

```text
.
├── .vitepress/          # VitePress 配置与全局布局
├── site/                # Markdown 页面入口
├── src/components/home/ # 首页业务组件
├── src/components/ui/   # shadcn-vue 组件源码
├── src/data/            # 结构化内容与类型
├── src/lib/             # 通用工具
├── src/styles/          # 全局样式与主题变量
└── public/              # 静态资源
```
