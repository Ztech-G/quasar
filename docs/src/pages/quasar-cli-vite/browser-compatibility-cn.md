---
title: 浏览器兼容性
desc: (@quasar/app-vite) How to handle the browser support with Quasar CLI.
related:
  - /quasar-cli-vite/quasar-config-file
---

为了配置你的应用程序的浏览器兼容性，你需要编辑 /quasar.config 文件：

```js /quasar.config file
build: {
  target: {
    browser: [ 'es2022', 'firefox115', 'chrome115', 'safari14' ],
    node: 'node20'
  }
}
```

根据你将使用的 Quasar 模式（单页应用/服务器端渲染/渐进式 Web 应用/桌面应用等），你会有客户端文件（在浏览器中运行），可能还有在 Node.js 环境中运行的文件。这就是上述 `target` 对象的两个键的用途。

此外，与这个配置无关，由于所有脚本标签都会作为模块注入，你需要决定是否要使用[模块预加载填充脚本](https://guybedford.com/es-module-preloading-integrity#modulepreload-polyfill)。默认情况下，不会包含该填充脚本。

```js /quasar.config file
build: {
  polyfillModulePreload: false
}
```

此外，根据你的 /postcss.config.js 文件内容，你的 CSS 也会经过 autoprefixer 处理。你可以在其中配置你所关注的浏览器版本级别：

```js /postcss.config.js
autoprefixer({
  overrideBrowserslist: [
    'last 4 Chrome versions',
    'last 4 Firefox versions',
    'last 4 Edge versions',
    'last 4 Safari versions',
    'last 4 Android versions',
    'last 4 ChromeAndroid versions',
    'last 4 FirefoxAndroid versions',
    'last 4 iOS versions'
  ]
})
```

关于如何指定 `autoprefixer` 浏览器范围的更多信息：[browserslist](https://github.com/browserslist/browserslist)。
