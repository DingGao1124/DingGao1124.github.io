import path from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

const setUpThemeScript = `(function () {
  try {
    var stored = localStorage.getItem("theme")
    var dark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
    document.documentElement.classList.toggle("dark", dark)
    var meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute("content", dark ? "#1e1e1e" : "#f6f1e7")
  } catch (e) {
    // no-op
  }
})()`

export default defineConfig({
  srcDir: 'site',
  cleanUrls: true,
  appearance: false,
  title: 'Ding Gao',
  description:
    'Personal portfolio of Ding Gao — full-stack engineering, robotics research, digital twins, and intelligent systems.',
  head: [
    ['link', { rel: 'icon', href: '/Overwatch.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#f6f1e7' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Ding Gao' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['script', {}, setUpThemeScript],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Ding Gao',
      description:
        'Personal portfolio of Ding Gao — full-stack engineering, robotics research, digital twins, and intelligent systems.',
      head: [
        ['meta', { property: 'og:title', content: 'Ding Gao' }],
        [
          'meta',
          {
            property: 'og:description',
            content:
              'Personal portfolio of Ding Gao — full-stack engineering, robotics research, digital twins, and intelligent systems.',
          },
        ],
      ],
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '高鼎 / Ding Gao',
      description: '高鼎的个人主页：全栈工程、机器人研究、数字孪生与智能系统。',
      head: [
        ['meta', { property: 'og:title', content: '高鼎 / Ding Gao' }],
        [
          'meta',
          {
            property: 'og:description',
            content: '高鼎的个人主页：全栈工程、机器人研究、数字孪生与智能系统。',
          },
        ],
      ],
    },
  },
  markdown: {
    image: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    math: false,
  },
  vite: {
    plugins: [tailwindcss()],
    publicDir: path.resolve(import.meta.dirname, '../public'),
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '../src'),
      },
    },
  },
})
