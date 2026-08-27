# 代码检查与格式化（oxlint / oxfmt）

项目使用 Oxc 工具链的两个命令行工具做代码质量：

- `oxlint`：JavaScript / TypeScript / Vue 的 linter（代码检查）。
- `oxfmt`：formatter（代码格式化），与 Prettier 兼容但吞吐量更高。

两者均为 Rust 实现，速度远快于同类工具（oxfmt 约为 Prettier 的 30 倍）。

## 安装与命令

依赖：`oxlint@^1.80.0`、`oxfmt@^0.65.0`（devDependencies）。

| 命令                   | 作用                                    |
| ---------------------- | --------------------------------------- |
| `npm run lint`         | 检查 `src` 与 `.vitepress` 中的代码问题 |
| `npm run format`       | 格式化 `src` 与 `.vitepress`，写回文件  |
| `npm run format:check` | 仅检查格式差异、不写文件，用于 CI 校验  |

命令作用域限定在 `src` 和 `.vitepress`，避免 oxfmt 误格式化 `docs/`、Markdown 文档与 `package.json`（oxfmt 默认会重排 `package.json` 字段顺序）。

## 配置文件

### `.oxfmtrc.json`（格式化）

匹配项目的代码规范：

- `semi: false` —— 语句结尾不加分号。
- `singleQuote: false` —— 使用双引号。
- `tabWidth: 2` —— 两空格缩进。
- `trailingComma: "all"` —— 多行结构保留尾逗号。
- `printWidth: 80` —— 行宽 80 字符换行。
- `ignorePatterns` —— 忽略构建产物（`dist`、`.vitepress/dist`、`.vitepress/cache`）。

### `.oxlintrc.json`（检查）

- `plugins`：`typescript`、`unicorn`、`oxc`、`vue`。
- `categories`：
  - `correctness: error` —— 直接写错/无用的代码（红色）。
  - `suspicious: warn` —— 很可能写错（黄色）。
  - `perf: warn` —— 性能优化建议（黄色）。
- `env`：`builtin`、`browser`、`node`。
- `ignorePatterns` —— 与格式化一致，忽略构建产物。

## 编辑器集成

- 安装 VS Code 扩展 `oxc.oxc-vscode`，可在编辑器内实时显示 lint 波浪线（红 = error、黄 = warn），并支持保存时自动用 oxfmt 格式化。
- 可选：在 `.vscode/settings.json` 中配置 `"editor.rulers": [80]` 与 `"editor.formatOnSave": true`，在 80 列显示竖线并在保存时自动换行。

## 设计说明

- 行宽等纯格式问题由 oxfmt 负责，oxlint 不提供 `max-len` 类规则；因此超长行不会产生 lint 波浪线，只会在 `format` / `format:check` 中被处理。
- `format:check` 面向 CI：存在未格式化文件时以非零退出，用于阻断未格式化的提交。
