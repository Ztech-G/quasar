---
title: 应用程序处理资源
desc: (@quasar/app-vite) How to use regular app assets and static assets in a Quasar app.
---
你会注意到，在项目结构中有两个用于存放资源的目录：`/public/` 和 `/src/assets/`。它们之间有什么区别呢？其中一些是静态资源，而另一些则会由构建系统进行处理并嵌入到应用中。

那么，让我们试着回答上述问题。我们先讨论一下常规资源的使用，然后再看看静态资源与之有何不同。

## 常规资源 - /src/assets
在 `*.vue` 组件中，Vite 会解析所有的模板和 CSS 以查找资源 URL。例如，在 `<img src="./logo.png">` 和 `background: url(./logo.png)` 中，`"./logo.png"` 是一个相对资源路径，Vite 会将其作为模块依赖进行解析。

由于这些资源在构建过程中可能会被内联、复制或重命名，因此它们本质上是你源代码的一部分。这就是为什么建议将由 Vite 处理的资源放在 `/src/assets` 目录下，与其他源文件放在一起。实际上，你甚至不必把它们都放在 `/src/assets` 目录中：你可以根据使用这些资源的模块或组件来组织它们。例如，你可以将每个组件放在其各自的目录中，并将其静态资源放在该组件旁边。

### 资源解析规则

相对 URL，例如 `./assets/logo.png` 会被解释为一个模块依赖项。它们将根据你的 Vite 输出配置被替换为一个自动生成的 URL。

以 `~` 为前缀的 URL 会被当作一个模块请求来处理，这类似于 `import 'some-module/image.png'` 这种形式。如果你想利用 Vite 的模块解析配置，就需要使用这个前缀。Quasar 开箱即用地提供了 `assets` 别名，所以建议你像这样使用它：`<img src="~assets/logo.png">`。注意，`assets` 前面的 `~` 符号。

## 静态资源 - /public
根相对 URL（例如 `/logo.png` —— 这里的 “/” 是你的 `publicPath`） 或者 `logo.png` 根本不会被处理。这类资源应该放置在 `public/` 文件夹中。它们完全不会被处理。`public` 文件夹中的内容会按原样直接复制到可分发的文件夹中。

::: tip 资源与静态文件
“资源（assets）” 文件夹中的文件，只有在你的某个 Vue 文件中有明确引用它们时，才会被包含在构建结果中。
而 “公共（public）” 文件夹中的每个文件和文件夹，无论如何都会按原样被复制到生产环境的构建结果中。
:::

::: danger
当你构建的不是单页应用（SPA）、渐进式 Web 应用（PWA）或服务器端渲染应用（SSR）时，`/public/icons/*` 和 `/public/favicon.ico` 不会被嵌入到你的应用中，因为它们在这类应用中没有实际用途。例如，Electron 或 Cordova 应用就不需要这些文件。
:::

## 有关 Vite 的更多信息

请阅读 Vite 的指南，[链接在此处](https://vitejs.dev/guide/assets.html) 。
