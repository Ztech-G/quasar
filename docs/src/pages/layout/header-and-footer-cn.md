---
title: 页面页眉和页脚设置
desc: 如何使用 QHeader 和 QFooter 组件。这是您在 Quasar 应用程序中使用的顶部和底部栏。
keys: QHeader,QFooter
examples: QHeader
related:
  - /layout/layout
  - /layout/page
  - /vue-components/toolbar
  - /vue-components/breadcrumbs
  - /vue-components/tabs
  - /vue-components/bar
---

QLayout 允许您将视图配置为一个 3x3 的矩阵形式，其中包含一个可选的页眉和/或页脚（主要用于导航栏，但也可以用于任何内容）。如果您尚未阅读，请首先阅读 [QLayout](/layout/layout) 文档页面。

<DocApi file="QHeader" />

<DocApi file="QFooter" />

## 布局构建器
点击下方按钮来构建您的布局（多个布局请分别点击）。

<q-btn icon-right="launch" label="Layout Builder" href="/layout-builder" target="_blank" />

## 用例
::: tip
由于页眉和页脚需要布局，而 QLayout 默认会管理整个窗口，所以出于演示目的，我们将使用容器化的 QLayout。但请记住，对于 QHeader 或 QFooter 来说，您绝不是必须使用容器化的 QLayout。
:::

<DocExample title="基础" file="Basic" />

您可以在页眉和页脚中的工具栏上使用`glossy`类。

<DocExample title="有光泽的" file="Glossy" />

### 各种内容

<DocExample title="使用 QToolbar 进行操作" file="Extended" />

<DocExample title="使用 QBreadcrumb 进行操作" file="Breadcrumbs" />

<DocExample title="使用 QTabs 进行操作" file="Tabs" />

### 显露属性

在下面的示例中，滚动页面即可查看 QHeader 和 QFooter 的表现情况。

<DocExample title="显露" file="Reveal" />

### iOS 设计风格和界面风格
在下面的示例中，您可以使用 Ionicons 图标（v4 版本）并以 `ion-ios-` 作为前缀来搭配 QTabs，这样就能完美契合 iOS 的视觉风格和设计感。
<DocExample title="iOS风格" file="LookingIOS" />

### 桌面应用程序设计风格和界面风格
下面这个示例尤其适用于您构建 Electron 应用程序的情况，前提是您隐藏了默认的应用程序框架。

<DocExample title="桌面应用风格" file="AppLike" />
