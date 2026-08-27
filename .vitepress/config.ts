import path from "node:path"

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vitepress"

export default defineConfig({
  srcDir: "site",
  cleanUrls: true,
  appearance: false,
  title: "Ding Gao",
  description:
    "Personal portfolio of Ding Gao — full-stack engineering, robotics research, digital twins, and intelligent systems.",
  head: [
    ["link", { rel: "icon", href: "/human.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#f6f7f8" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Ding Gao" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    [
      "script",
      {},
      `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?"#11161a":"#f6f7f8")}catch(e){}})()`,
    ],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "Ding Gao",
      description:
        "Personal portfolio of Ding Gao — full-stack engineering, robotics research, digital twins, and intelligent systems.",
      head: [
        ["meta", { property: "og:title", content: "Ding Gao" }],
        [
          "meta",
          {
            property: "og:description",
            content:
              "Personal portfolio of Ding Gao — full-stack engineering, robotics research, digital twins, and intelligent systems.",
          },
        ],
      ],
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      title: "高鼎 / Ding Gao",
      description: "高鼎的个人主页：全栈工程、机器人研究、数字孪生与智能系统。",
      head: [
        ["meta", { property: "og:title", content: "高鼎 / Ding Gao" }],
        [
          "meta",
          {
            property: "og:description",
            content:
              "高鼎的个人主页：全栈工程、机器人研究、数字孪生与智能系统。",
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
