---
title: 布局页面
desc: 如何使用 QPageContainer 和 QPage 组件。它们定义了您的 Quasar 应用程序页面的内容。
keys: QPage
examples: QPage
related:
  - /layout/layout
---

我们将探讨如何将页面封装在 QLayout 中。如果您尚未阅读过，请先查阅 [QLayout](/layout/layout) 文档页面。

<DocApi file="QPageContainer" />

<DocApi file="QPage" />

## 布局构建器
点击下方按钮来构建您的布局（多个布局请分别点击）。

<q-btn icon-right="launch" label="Layout Builder" href="/layout-builder" target="_blank" />

## 用例

一个 QPage 对象必须被 QPageContainer 包含，而 QPageContainer 又必须是 QLayout 的子对象。

```html
<q-layout>
  ...
  <q-page-container>
    <q-page>
      <!-- page content -->
    </q-page>
  </q-page-container>
  ...
</q-layout>
```

通常情况下，QPageContainer 是布局模板的一部分（其中它仅包含一个 `<router-view />` 子组件），其内容会被放入位于 `/src/pages` 下的单独的 Vue 文件中。如果您尚未这样做，请阅读 [使用布局和页面进行路由](/layout/routing-with-layouts-and-pages) 。

```html
<!-- vue file for Layout: -->
<q-layout>
  ...
  <q-page-container>
    <router-view />
  </q-page-container>
  ...
</q-layout>

<!-- vue file for a Page: -->
<q-page padding>
  <!-- page content -->
</q-page>
```

### 例子
::: tip
由于 QPageContainer 和 QPage 默认需要一个布局，而 QLayout 会管理整个窗口，所以出于演示目的，我们将使用容器化的 QLayout。但请记住，这绝不是说您必须将容器化的 QLayout 用于 QPageContainer 和 QPage。
:::

<DocExample title="基础" file="Basic" />

### 风格
一个 QPage 需要一个 QLayout，因为 QLayout 能够控制页面的所有偏移量，根据其 `view` 属性配置来记录页眉/页脚/抽屉所占用的空间。默认情况下，您的 QPage 组件会在其上设置一个 `min-height` CSS 属性，以确保内容始终能够填满整个屏幕，即便内容只是几行文字也是如此。

如果您想要调整或甚至移除此属性，可以通过使用 `style-fn` 属性来实现：

```html
<template>
  <q-page :style-fn="myTweak">...</q-page>
</template>

<script>
export default {
  // ...
  methods: {
    myTweak (offset) {
      // "offset" is a Number (pixels) that refers to the total
      // height of header + footer that occupies on screen,
      // based on the QLayout "view" prop configuration

      // this is actually what the default style-fn does in Quasar
      return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' }
    }
  }
}
</script>
```
