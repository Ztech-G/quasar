---
title: 网格间距
desc: 如何使用 Quasar 框架来设置侧边栏间距。
examples: grid
related:
  - /layout/grid/introduction-to-flexbox
  - /layout/grid/row
  - /layout/grid/column
  - /layout/grid/flex-playground
---

希望您之前已经阅读过 [Flexbox 布局基础理论](/layout/grid/introduction-to-flexbox-cn) 这篇内容，那么接下来让我们深入探讨一下内边距（gutters）的相关知识。

Gutter Quasar CSS 类提供了一种简便的方法，可将元素彼此间隔一定距离（尤其是在 [网格行](/layout/grid/row-cn) 中）保持相等间距。

## 类型
根据您的使用场景，栅格系统（q-gutter-{size} 和 q-col-gutter-{size}）有两种主要类型。前者适用于那些您希望彼此保持一定间距的元素未使用 `col-*` 或 `offset-*` 类（这些类会指定宽度）的情况；后者则适用于那些元素确实使用了 `col-*` 或 `offset-*` 类来指定宽度的情况。

::: tip
后缀（“-none”、“-xs”、“-sm”、“-md”、“-lg”、“-xl”）并非指代设备屏幕尺寸，而是指代元素之间边框的宽度大小。
:::

##  "q-gutter-{size}" 类

::: warning
`q-gutter-*` 类会为父元素添加 **负值的顶部和左侧内边距** ，同时为子元素添加 **正值的顶部和左侧内边距** 。在使用其他 [间距类](/style/spacing-cn) 时请考虑到这一点，以免破坏间距的 CSS 样式。
:::

当直接子元素没有使用 `col-*` 或 `offset-*` 类来指定宽度时，应使用这些类。

<DocExample title="q-gutter的尺寸" file="GutterSize" />

此外还有 `q-gutter-none` 类（相当于：未应用边距），它在上述示例中并未被包含进来。

<DocExample title="q-gutter 水平方向" file="GutterHorizontal" />

<DocExample title="q-gutter 垂直方向" file="GutterVertical" />

<DocExample title="q-gutter 垂直和水平方向" file="GutterMixed" />

## "q-col-gutter-{size}" 类

::: warning
`q-col-gutter-*` 类会为父元素添加 **负的顶部和左侧内边距** ，同时为子元素添加 **正的顶部和左侧外边距** 。在使用其他 [间距类](/style/spacing) 时请考虑到这一点，以免破坏内边距的 CSS 样式。
:::

当直接子元素带有`col-*`或`offset-*`类（这些类用于指定宽度）时，应使用这些样式类。

<DocExample title="q-col-gutter的尺寸" file="ColGutterSize" />

<DocExample title="q-col-gutter 水平方向" file="ColGutterHorizontal" />

<DocExample title="q-col-gutter 垂直方向" file="ColGutterVertical" />

<DocExample title="q-col-gutter 垂直和水平方向" file="ColGutterMixed" />

## 优点、缺点以及如何解决难题的方法 - "q-gutter-{size}" vs. "q-col-gutter-{size}"

这两组类都有其优点和缺点

::: warning
因为 `q-gutter-*` 和 `q-col-gutter-*` 这两个类都会给父元素添加 **负的顶部和左侧外边距** ，所以您不应针对父元素应用与背景、边距或边框相关属性有关的样式。

相反，您需要将它们包裹在一个容器中，对容器应用样式，并在容器上添加 `overflow-auto` 或 `row` 类（注意：这里的“row”应理解为“行”）
:::

<DocExample title="Parent styling" file="ParentStyling" />

::: tip
`q-gutter-*` 类 **不会改变** 子元素的内部尺寸，因此您可以直接在子元素上使用 `background` 或 `border` 属性。
:::

::: warning
`q-col-gutter-*` 类确实会改变子元素的外部尺寸，因此您不能再使用 `col-*` 或 `offset-*` 类来为子元素指定宽度了。
:::

<DocExample title="Children size compare" file="ChildrenSizeCompare" />

::: warning
因为 `q-col-gutter-*` 类会为子元素应用 **负向的顶部和左侧内边距** ，所以您不应针对子元素的背景、内边距或边框相关属性进行样式设置。相反，您需要将样式化元素放置在子元素内部，并在该元素上应用样式。
:::

<DocExample title="Children styling" file="ChildrenStyling" />

## Flex Grid Playground
要见识 Flex 的实际效果，您可以使用 Flex 实践平台进行互动式学习以获取更多信息。

<q-btn icon-right="launch" label="Flex Playground" to="/layout/grid/flex-playground" />
