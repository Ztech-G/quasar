---
title: QPageSticky 的布局设置
desc: 如何使用 QPageSticky 组件。在布局中静态放置组件，避免与页眉/页脚/侧边栏重叠。
keys: QPageSticky
examples: QPageSticky
related:
  - /layout/layout
  - /layout/page
---

QPageSticky 组件有助于将由其包裹的 DOM 元素/组件放置在您 QPage 内容区域的静态位置，无论用户滚动到何处都能如此。

此组件的一大优势在于，由其包裹的元素绝不会与布局的头部、尾部或抽屉（如果未配置为固定状态）重叠。在后一种情况下，其位置会进行偏移，从而避免出现重叠现象。
例如，尝试使用一个非固定的尾部布局。当用户滚动到底部并看到尾部时，该组件会向上移动，从而不会与尾部重叠。

<DocApi file="QPageSticky" />

## 用例
::: tip
由于 QPageSticky 需要一个布局，而 QLayout 默认会管理整个窗口，所以出于演示目的，我们将使用容器化的 QLayout。但请记住，这绝不是说您必须将 QPageSticky 与容器化的 QLayout 结合使用。
:::

::: warning
* 要使 QPageSticky 能够正常工作，它必须置于一个 QLayout 组件内部。
* QPageSticky 必须在其父组件中的最后一个子元素位置，这样它才能显示在其他内容之上。
:::

### 基础
在下面的示例中，点击菜单按钮以显示/隐藏抽屉，滚动页面内部内容，并调整浏览器窗口大小，使包含 QLayout 的区域恰好达到抽屉的 700px 和 500px 界限值。

<DocExample title="基础" file="Basic" />

### 扩展
在下面的示例中，点击菜单按钮以显示/隐藏抽屉，滚动页面内部内容，并调整浏览器窗口大小，使包含 QLayout 的区域恰好达到抽屉的 700px 和 500px 界限值。


通过使用扩展版的 QPageSticky，例如，您可以拥有如下所示的特定页面使用的 QToolbar。

<DocExample title="扩展" file="Expanded" />
