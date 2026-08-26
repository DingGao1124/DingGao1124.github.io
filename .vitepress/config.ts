import path from "node:path"

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vitepress"

export default defineConfig({
  srcDir: "site",
  cleanUrls: true,
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "Ding Gao",
      description: "Ding Gao's academic profile and selected project portfolio.",
      head: [
        ["meta", { property: "og:title", content: "Ding Gao" }],
        [
          "meta",
          {
            property: "og:description",
            content: "Academic profile and selected project portfolio.",
          },
        ],
      ],
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      title: "高鼎 / Ding Gao",
      description: "高鼎的学术主页与精选项目作品集。",
      head: [
        ["meta", { property: "og:title", content: "高鼎 / Ding Gao" }],
        ["meta", { property: "og:description", content: "学术主页与精选项目作品集。" }],
      ],
    },
  },
  head: [
    ["link", { rel: "icon", href: "/human.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { property: "og:type", content: "website" }],
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
