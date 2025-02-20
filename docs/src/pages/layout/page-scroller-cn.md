---
title: QPageScroller 的布局
desc: 如何使用 QPageScroller 组件。用于放置在用户滚动页面之后才会出现在屏幕上的组件。
keys: QPageScroller
examples: QPageScroller
related:
  - /layout/layout
  - /layout/page
---

QPageScroller 组件有助于将由其包裹的 DOM 元素/组件放置在您 QPage 内容区域的静态位置上，无论用户滚动到何处。

此组件的一大优势在于，由其包裹的元素绝不会与布局的头部、尾部或抽屉（如果未配置为固定状态）重叠。在后一种情况下，其位置会进行偏移，从而避免出现重叠现象。
例如，尝试使用非固定的尾部进行测试。当用户滚动到底部并看到尾部时，该组件会向上移动，从而不会与尾部重叠。

本质上，QPageScroller 与 QPageSticky 非常相似。与 QPageSticky 组件不同的是，QPageScroller 组件始终是不可见的，只有在达到 `scroll-offset`（属性）时才会出现。一旦出现，用户可以通过点击它并利用 `duration` 属性来快速回到页面顶部。

<DocApi file="QPageScroller" />

## 用例
::: tip
由于 QPageScroller 需要一个布局，而 QLayout 默认会管理整个窗口，所以出于演示目的，我们将使用容器化的 QLayout。但请记住，这绝不是说您必须将容器化的 QLayout 用于 QPageScroller。
:::

::: warning
* 要使 QPageScroller 正常工作，它必须置于一个 QLayout 组件内。
* QPageScroller 必须在其父组件中的最后一个子元素位置，这样它才能显示在其他内容之上。
:::

### 基础

<DocExample title="基础" file="Basic" />

### 扩展

<DocExample title="扩展" file="Expanded" />

### 反向

<DocExample title="反向" file="Reverse" />
