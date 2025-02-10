---
title: Quasar的SEO
desc: 管理一个Quasar应用的搜索引擎优化。
---

The term SEO refers to Search Engine Optimization. And Quasar covers this aspect too through the [Quasar Meta Plugin](/quasar-plugins/meta).
SEO指的是搜索引擎优化。Quasar通过[Quasar Meta Plugin](/quasar-plugins/meta)插件提供这方面的支持.

## Quasar Meta插件

[Quasar Meta Plugin](/quasar-plugins/meta) 动态更改页面标题、管理`<meta>`标签，管理`<html>`和`<body>` DOM元素属性，在你的文档头部添加/移除/更改`<style>`和`<script>`标签（比如 CDN样式表或 json-ld markup）,或者管理`<noscript>`标签。

使用**Quasar CLI**可以充分利用这一特性，尤其是**对于SSR (Server-Side Rendering)构建**。注意，对于一个SPA，元标签在运行时添加，而不是由webserver（与SSR构建一样）直接提供。


::: tip
这个插件与Quasar紧密结合，所以它比其他类似的解决方案有着更好的性能。
:::
