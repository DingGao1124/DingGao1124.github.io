import path from "node:path"

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vitepress"

export default defineConfig({
  srcDir: "site",
  cleanUrls: true,
  appearance: false,
  title: "Ding Gao",
  description:
    "Academic profile of Ding Gao — digital twins, LLM multi-agent systems, embodied AI robotics, and industrial software.",
  head: [
    ["link", { rel: "icon", href: "/human.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#fafaf8" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Ding Gao" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    [
      "script",
      {},
      `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`,
    ],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "Ding Gao",
      description:
        "Academic profile of Ding Gao — digital twins, LLM multi-agent systems, embodied AI robotics, and industrial software.",
      head: [
        ["meta", { property: "og:title", content: "Ding Gao" }],
        [
          "meta",
          {
            property: "og:description",
            content:
              "Academic profile of Ding Gao — digital twins, LLM multi-agent systems, embodied AI robotics, and industrial software.",
          },
        ],
      ],
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      title: "高鼎 / Ding Gao",
      description:
        "高鼎的学术主页：数字孪生、LLM 多智能体系统、具身智能机器人与工业软件。",
      head: [
        ["meta", { property: "og:title", content: "高鼎 / Ding Gao" }],
        [
          "meta",
          {
            property: "og:description",
            content:
              "高鼎的学术主页：数字孪生、LLM 多智能体系统、具身智能机器人与工业软件。",
          },
        ],
      ],
    },
  },
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
