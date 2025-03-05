---
title: 将项目转换为使用 Vite 的 Quasar CLI 项目
desc: (@quasar/app-vite) How to convert a Quasar CLI with Webpack project to a Quasar CLI with Vite one.
---

本页面将指导你如何把一个使用 Webpack 的 Quasar CLI 项目（@quasar/app-webpack v4）转换为使用 Vite 的 Quasar CLI 项目（@quasar/app-vite v2）。

### 步骤 1: 编辑 package.json

使用 Webpack 的 Quasar CLI 项目依赖于 `/package.json` 中的 `browserslist` 字段来指定目标浏览器。但在使用 Vite 的 Quasar CLI 项目中，该属性不再有任何意义。使用 Vite 的 Quasar CLI 所管理的项目，其工作方式与前者完全不同，你可能需要查看[浏览器兼容性](/quasar-cli-vite/browser-compatibility)页面。

```diff /package.json
dependencies: {
- core-js
},

devDependencies: {
- "@quasar/app-webpack": "^4.0.0"
+ "@quasar/app-vite": "^2.0.0"

+ "postcss": "^8.4.14"
+ "postcss-rtlcss": "^5.4.0" // if using RTL support

- eslint-webpack-plugin
- ts-loader
- workbox-webpack-plugin
}

- browserslist: {}
```

使用 yarn/npm/pnpm/bun install.

### 步骤 2: 各种各样的文件

* 删除 `/babel.config.js`. 现在它将毫无用处。
* 如果你需要RTL支持，需要编辑 `/postcss.config.js`. 需要手动安装 `postcss-rtlcss` 并且编辑以下内容:

  ```diff /postcss.config.js
  + import rtlcss from 'postcss-rtlcss'

  export default {
    plugins: [
  +   rtlcss()
    ]
  }
  ```

### 步骤 3: 从原始文件夹中复制文件夹。

从你原来的项目文件夹中，按原样复制这些内容：
  * /src
  * /src-cordova
  * /src-capacitor
  * /src-electron
  * /src-pwa
  * /src-ssr (with small caveat; see next steps)
  * /src-bex (with small caveat; see next steps)

### 步骤 4: 在你所有的导入语句中明确指定文件扩展名

确保你所有的 Vue 组件文件（单文件组件，SFC）在导入时都明确指定了 `.vue` 扩展名。省略文件扩展名在使用 Webpack 的情况下（因为 Quasar CLI 为其配置了一系列尝试的扩展名列表）是可行的，但在使用 Vite 时却不行。

```js
// BAD! Will not work:
import MyComponent from './MyComponent'

// GOOD:
import MyComponent from './MyComponent.vue'
```

### 步骤 5: 检查新的 quasar.config 文件

在 [quasar.config file](/quasar-cli-vite/quasar-config-file) 页面查看下列属性的详情.

```diff
- eslint: {
-   // fix: true,
-   // include: [],
-   // exclude: [],
-   // cache: false,
-   // rawEsbuildEslintOptions: {},
-   // rawWebpackEslintPluginOptions: {},
-   warnings: true,
-   errors: true
- },

build: {
- esbuildTarget: {
+ target: {
    browser: [ 'es2022', 'firefox115', 'chrome115', 'safari14' ],
    node: 'node20'
  },

- webpackTranspile
- webpackTranspileDependencies
- webpackDevtool

- htmlFilename
- rtl
- showProgress
- gzip
- vueCompiler

- extendWebpack () {}
- chainWebpack () {}
+ extendViteConf (viteConf, { isServer, isClient }) {}

+ viteVuePluginOptions
+ vitePlugins

+ useFilenameHashes
+ polyfillModulePreload

- uglifyOptions
- scssLoaderOptions
- sassLoaderOptions
- stylusLoaderOptions
- lessLoaderOptions
- vueLoaderOptions
- tsLoaderOptions
},

devServer: {
- server: {
-  type: 'http'
- }
},

sourceFiles: {
- indexHtmlTemplate: 'index.html'
}
```

### 步骤 6: SSR 相关

```diff /src-ssr/server.js
export const renderPreloadTag = defineSsrRenderPreloadTag((file/* , { ssrContext } */) => {
  if (jsRE.test(file) === true) {
-   return `<script src="${file}" defer crossorigin></script>`;
+   return `<link rel="modulepreload" href="${file}" crossorigin>`;
  }
```

### 步骤 7: BEX 相关

```diff /src-bex/background.js
- declare module '@quasar/app-webpack' {
+ declare module '@quasar/app-vite' {
  interface BexEventMap {
    // ...
  }
}
```

```diff /src-bex/my-content-script.js
// for ALL content script files:

- declare module '@quasar/app-webpack' {
+ declare module '@quasar/app-vite' {
  interface BexEventMap {
    // ...
  }
}
```

### 步骤 8: 代码检查

如果你正在使用 ESLint，你可能需要[在此处（/quasar-cli-vite/linter）](/quasar-cli-vite/linter)查看其相关要求。

### 步骤 9: 这样我们就完成了。

```bash
$ quasar prepare
$ quasar dev
$ quasar build
```
