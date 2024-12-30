import { Quasar } from 'quasar'

import { fasCubes, fasBolt } from '@quasar/extras/fontawesome-v5'

import {
  mdiBug, mdiClipboardText, mdiCodepen, mdiFlare, mdiFlask, mdiGithub, mdiJsfiddle, mdiPaletteSwatch, mdiPuzzle, mdiShoppingMusic,
  mdiStarCircle, mdiThemeLightDark, mdiViewDashboard, mdiSecurity, mdiMathIntegralBox
} from '@quasar/extras/mdi-v6'

import { socialLinks } from './links.social.js'

export const versionLinks = [{
  name: `v${Quasar.version}`,
  children: [
    {
      header: `Latest (v${Quasar.version})`
    },
    { name: 'Release notes', icon: mdiClipboardText, path: '/start/release-notes' },
    { name: 'Report a bug', icon: mdiBug, path: 'https://github.com/quasarframework/quasar/issues', external: true },
    { name: 'Report a vulnerability', icon: mdiSecurity, path: '/security/report-a-vulnerability', external: true },
    { name: 'Repository', icon: mdiGithub, path: 'https://github.com/quasarframework', external: true },
    {
      header: 'Older Releases'
    },
    { name: 'v1', path: 'https://v1.quasar.dev/', external: true },
    { name: 'v0.17', path: 'https://v0-17.quasar-framework.org/', external: true },
    { name: 'v0.16', path: 'https://v0-16.quasar-framework.org/', external: true },
    { name: 'v0.15', path: 'https://v0-15.quasar-framework.org/', external: true },
    { name: 'v0.14', path: 'https://v0-14.quasar-framework.org/', external: true },
    { name: 'v0.13', path: 'https://v0-13.quasar-framework.org/', external: true }
  ]
}]

const gettingStarted = {
  name: 'Getting Started',
  nameCn: '新手入门',
  mq: 510,
  children: [
    { name: 'Quick Start', nameCn: '快速开始', path: '/start/quick-start' },
    {
      name: 'Installation',
      nameCn: '安装',
      children: [
        { name: 'Pick Quasar Flavour', nameCn: '选择Quasar类型', path: '/start/pick-quasar-flavour' },
        {
          separator: true
        },
        { name: 'Quasar CLI', path: '/start/quasar-cli' },
        { name: 'UMD / Standalone', path: '/start/umd' },
        { name: 'Vue CLI Plugin', nameCn: 'Vue CLI 插件', path: '/start/vue-cli-plugin' },
        { name: 'Vite Plugin', nameCn: 'Vite 插件', path: '/start/vite-plugin' }
      ]
    },
    { name: 'How to use Vue', nameCn: '如何使用Vue', path: '/start/how-to-use-vue' },
    { name: 'Playground', nameCn: '演示', path: '/start/playground' },
    { name: 'Upgrade Guide', nameCn: '升级指导', path: '/start/upgrade-guide' },
    { name: 'VS Code Configuration', nameCn: 'VS Code配置', path: '/start/vs-code-configuration' }
  ]
}

const tools = {
  name: 'Tools',
  nameCn: '工具集',
  mq: 600,
  children: [
    { name: 'Awesome List', nameCn: '优秀工具集', icon: mdiFlare, path: 'https://awesome.quasar.dev', external: true },
    { name: 'Integrations', nameCn: '集成', icon: mdiMathIntegralBox, path: '/integrations' },
    { name: 'App Extensions', nameCn: 'App扩展', icon: mdiPuzzle, path: '/app-extensions/discover' },
    {
      header: '帮助'
    },
    { name: 'Icon Genie CLI', icon: mdiStarCircle, path: '/icongenie/introduction' },
    { name: 'Theme Builder', nameCn: '主题构建器', icon: mdiPaletteSwatch, path: '/style/theme-builder' },
    { name: 'Dark Mode', nameCn: '暗黑模式', icon: mdiThemeLightDark, path: '/style/dark-mode' },
    { name: 'Layout Builder', nameCn: '布局构建器', icon: mdiViewDashboard, path: '/layout-builder', external: true },
    { name: 'Layout Gallery', nameCn: '布局展示', icon: mdiShoppingMusic, path: '/layout/gallery' },
    { name: 'Flex Playground', nameCn: 'Flex演示', icon: mdiFlask, path: '/layout/grid/flex-playground' },
    {
      header: '演示'
    },
    { name: 'Codepen', icon: mdiCodepen, path: 'https://codepen.quasar.dev', external: true },
    { name: 'jsFiddle', icon: mdiJsfiddle, path: 'https://jsfiddle.quasar.dev', external: true },
    { name: 'Stackblitz (Vite)', icon: fasBolt, path: 'https://stackblitz.quasar.dev', external: true },
    { name: 'Stackblitz (Webpack)', icon: fasBolt, path: 'https://stackblitz-webpack.quasar.dev', external: true },
    { name: 'Codesandbox', icon: fasCubes, path: 'https://codesandbox.quasar.dev', external: true }
  ]
}

export const primaryToolbarLinks = [
  { name: 'Docs', nameCn: '文档', mq: 750, path: '/docs' },
  { name: 'Components', nameCn: '组件', mq: 860, path: '/components' },
  { name: 'Sponsors', nameCn: '赞助', mq: 1190, path: '/sponsors-and-backers' },
  { name: 'Team', nameCn: '讨论组', mq: 1310, path: '/meet-the-team' },
  { name: 'Blog', nameCn: '博客', mq: 1400, path: 'https://blog.quasar.dev', external: true }
]

export const secondaryToolbarLinks = [
  { name: 'Why Quasar?', nameCn: '为什么用Quasar?', mq: 750, path: '/introduction-to-quasar' },
  gettingStarted,
  tools,
  { name: 'Announcements', nameCn: '注意事项', mq: 910, path: 'https://github.com/quasarframework/quasar/discussions/categories/announcements', external: true },
  { name: 'Roadmap', nameCn: '路线图', mq: 1000, path: 'https://roadmap.quasar.dev', external: true },
  { name: 'Video Tutorials', nameCn: '视频教程', mq: 1130, path: '/video-tutorials' },
  { name: 'Brand resources', nameCn: '品牌资源', mq: 1400, path: 'https://github.com/quasarframework/quasar-art', external: true }
]

export const moreLinks = [{
  name: 'More',
  children: [
    ...primaryToolbarLinks,
    {
      separator: true
    },
    ...secondaryToolbarLinks,
    socialLinks
  ]
}]
