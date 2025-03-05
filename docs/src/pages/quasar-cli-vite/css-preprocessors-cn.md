---
title: CSS 预处理器
desc: (@quasar/app-vite) Sass/SCSS are the out of the box supported css preprocessors in Quasar
related:
  - /style/sass-scss-variables
---

如果你想要使用 CSS 预处理器的话，通过 Quasar 命令行界面（CLI），**Sass** 或 **SCSS** （推荐这两种风格中的任意一种）是开箱即用就支持的 CSS 预处理器。

## 配置

你可以通过 `/postcss.config.js` 文件以及扩展 Vite 配置来设置 CSS 的处理方式：

```js /quasar.config file
build: {
  extendViteConf (viteConf, { isClient, isServer }) {
    viteConf.css.modules = ...
    viteConf.css.postcss = ...
    viteConf.css.preprocessorOptions
  }
}
```

更多信息请参考：[css.modules](https://vitejs.dev/config/#css-modules)、[css.postcss](https://vitejs.dev/config/#css-postcss)、[css.preprocessorOptions](https://vitejs.dev/config/#css-preprocessoroptions) 。

## 用例
你的 Vue 文件可以通过 `<style>` 标签来包含 Sass/SCSS 代码。

```html
<!-- Notice lang="sass" -->
<style lang="sass">
div
  color: #444
  background-color: #dadada
</style>
```

```html
<!-- Notice lang="scss" -->
<style lang="scss">
div {
  color: #444;
  background-color: #dadada;
}
</style>
```

当然，标准的 CSS 也同样是被支持的：

```html
<style>
div {
  color: #444;
  background-color: #dadada;
}
</style>
```

## 变量
Quasar 还提供了一些变量（如 `$primary`、`$grey - 3` 等等），你可以直接使用这些变量。更多关于 [Sass/SCSS 变量](/style/sass-scss-variables) 的信息请阅读相关文档。
