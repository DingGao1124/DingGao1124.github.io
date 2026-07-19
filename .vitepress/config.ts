import path from "node:path"

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vitepress"

export default defineConfig({
  title: "高鼎 / Ding Gao",
  description: "高鼎的学术主页与精选项目作品集",
  lang: "zh-CN",
  srcDir: "site",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/human.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "高鼎 / Ding Gao" }],
    ["meta", { property: "og:description", content: "学术主页与精选项目作品集" }],
  ],
  vite: {
    plugins: [tailwindcss()],
    publicDir: path.resolve(import.meta.dirname, "../public"),
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "../src"),
      },
    },
  },
})
