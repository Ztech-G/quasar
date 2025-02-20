---
title: Flexbox简介
desc: What the flexbox CSS is and how it can be used in a Quasar App.
related:
  - /style/spacing-cn
  - /style/visibility-cn
  - /layout/grid/column-cn
  - /layout/grid/gutter-cn
  - /layout/grid/flex-playground-cn
---

Quasar提供了大量的CSS类借助[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)帮助你更容易构建UI界面。把它想象成是在带有众多选项的行与列的基础上进行操作。

Flexbox（Quasar Flex CSS 类所基于的基础模块）旨在提供一种更高效的方式来在容器内的各项元素之间进行布局、对齐以及分配空间，即便这些元素的大小是未知的或动态变化的（因此有“弹性”这个词）。

::: tip
本页介绍了 Quasar Flex CSS 类的基本理论，并为您后续阅读有关  [Grid Row](/layout/grid/row), [Grid Column](/layout/grid/column) 和 [Grid Gutter](/layout/grid/gutter)的深入内容做好了铺垫。.
:::

## 关键概念
Quasar Flex（弹性布局）CSS 类适用于容器（父元素）或容器中的各项（子元素）。
![Flexbox Container](https://cdn.quasar.dev/img/flexbox-container.svg)
![Flexbox Items](https://cdn.quasar.dev/img/flexbox-items.svg)

## 管理父元素

### 设置方向
以下 CSS 类中的一个对于父元素来说是必须的，这样子元素（将在接下来的章节中进行描述）上的样式才会生效。
![Flexbox Direction](https://cdn.quasar.dev/img/flexbox-direction.svg)

| 类名 | 描述 |
| --- | --- |
| `row` | 弹性行 |
| `row inline` | 内联弹性行 |
| `column` | 弹性列 |
| `column inline` | 内联弹性列 |
| `row reverse` | `flex-direction` 设置为 `row-reverse`的弹性行 |
| `column reverse` | `flex-direction` 设置为 `column-reverse`的弹性列 |

例子:
```html
<div class="row">
  <div>第一列</div>
  <div>第二列</div>
  <div>第三列</div>
</div>
```

### 默认情况下进行包裹处理
默认情况下，所有行和列都会自动换行显示其内容。

![Flexbox Direction](https://cdn.quasar.dev/img/flexbox-wrap.svg)

然而，如果您明确表示不想换行，并且这样做是为了将所有内容都挤入一行显示，那么请添加 `no-wrap` CSS 辅助类。

另外，如果您想要以相反的顺序进行包裹处理，那么 `reverse-wrap` 就是可用的选项。

| 类名 | 描述 |
| --- | --- |
| `wrap` | 如有必要请进行包裹（默认情况下为“包裹”，无需特别指明） |
| `no-wrap` | 即使有必要也不要进行包裹处理 |
| `reverse-wrap` | 如有必要，请反向缠绕。 |

### 对齐

**对于沿主轴的对齐方式**，请使用以下类。它有助于在一行中的所有弹性项目要么都不具备弹性，要么具备弹性但已达到最大尺寸时分配剩余的可用空间。它还能对超出一行范围的项目进行对齐时的布局起到一定的控制作用

![Flexbox Justify Content](https://cdn.quasar.dev/img/flexbox-main-axis-align---2.svg)

**对于垂直于主轴的对齐方式**，请使用以下类。这定义了当前行中弹性项目沿交叉轴布局的默认行为。可以将其视为交叉轴（垂直于主轴）上的水平对齐方式版本。

![Flexbox Items Align](https://cdn.quasar.dev/img/flexbox-cross-axis-align.svg)

::: tip
还有一个方便的 `flex-center` CSS 类，它相当于 `items-center` 加上 `justify-center`。请与 `flex`、`row` 或 `column` 一起使用。
:::

接下来的这些类在交叉轴方向上存在多余空间时，用于**对齐弹性容器内的行**，这与 horizontal-* 类在主轴方向上对齐单个项目的方式类似。

![Flexbox Content Align](https://cdn.quasar.dev/img/flexbox-content-align.svg)

## 管理子元素

### 尺寸分布
Quasar 使用了一个 12 点的列系统来分配子行的大小。以下是几个可用的 CSS 辅助类示例：


```html
<div class="row">
  <div class="col-8">two thirds</div>
  <div class="col-2">one sixth</div>
  <div class="col-auto">auto size based on content and available space</div>
  <div class="col">fills remaining available space</div>
</div>
```

在上述示例中，`col-8` 占用了行宽的三分之二（2/3），因为 8/12 = 2/3 = 66%，而 `col-2` 占用了六分之一（2/12 = 1/6 ≈ 16.67%）。

CSS 辅助类 `col-auto` 会使单元格仅填充其实际需要呈现的空间。另一方面，`col` 则会尽量填充所有可用空间，同时在必要时也会收缩。

CSS 辅助类 `col-grow` 能让单元格至少占据其需要呈现内容的空间，而且在有更多可用空间时还有可能进一步扩展。

CSS 辅助类 `col-shrink` 可使单元格尽可能地填充其所需的渲染空间，同时在可用空间不足时也有可能缩小尺寸。

还有一个例子，下面配有直观的图示：
```html
<div class="row">
  <div class="col">1</div>
  <div class="col">1</div>
  <div class="col">1</div>
  <!--
     we have 3 children, so equivalent
     to above would be to use `col-4`
     on each of the children
  -->
</div>

<div class="row">
  <div class="col-3">1</div>
  <div class="col-6">2</div>
  <div class="col-3">1</div>
</div>
```
![Flexbox Grow](https://cdn.quasar.dev/img/flexbox-grow.svg)

还可以对单元格进行偏移。例如：`offset-4` 表示偏移四分之一的空间（4/12 = 1/3 = 33%）。

### 包裹
包装是理解 Flex CSS 类型的关键特性之一。您不必严格按照每行 12 个点的规则来使用。您可以使用更少的点数，甚至可以使用更多的点数。

这能让您实现多种功能，比如在较小屏幕上动态地将行垂直堆叠排列，在较大屏幕上则将它们排成一行显示。请阅读“响应式设计”部分。

```html
<div class="row">
  <div class="col-2">...</div>

  <!-- 2 + 6 < 12, so next element is placed on same line -->
  <div class="col-6">...</div>

  <!-- 2 + 6 + 10 > 12, so next element wraps to next line -->
  <div class="col-10">...</div>

  <!--
    10 + 3 > 12, so next element wraps to next line.
    Note that we take into consideration the current line only
    (with col-10 only, since it was wrapped to its own line).
  -->
  <div class="col-3">...</div>
</div>
```

> 请注意，默认情况下行是可换行的。如果您希望禁用此功能，请使用 `no-wrap` CSS 辅助类。

### 自对准
一个项目可以覆盖父级所指定的对齐方式。这使得可以针对单个弹性项目来覆盖对齐方式。请参阅“管理父级”中的“对齐”解释，以了解可用的值（`self-start`、`self-center`、`self-baseline`、`self-end`、`self-stretch`）。

![Flexbox Self](https://cdn.quasar.dev/img/flexbox-self.svg)

### 顺序
您可以使用 `order-first` 和 `order-last` 这两个 CSS 辅助类来设置子元素的顺序。

默认情况下，弹性项目是按照源顺序排列的。然而，order 属性控制它们在弹性容器中的显示顺序。如果您需要更高的粒度控制，可以使用 CSS 的 order 属性并为其指定所需的值。

例子:
```html
<div class="row">
  <div style="order: 2">Second column</div>
  <div class="order-last">Third column</div>
  <div class="order-first">First column</div>
</div>
```

以下是 CSS 的`order`属性的工作原理。:

![Flexbox Order](https://cdn.quasar.dev/img/flexbox-order.svg)

## 响应式设计
Quasar Flex CSS 类可以根据屏幕宽度进行应用，这有助于您打造响应式用户界面。12 点网格布局借鉴了 Bootstrap 的设计，因此两者有很多相似之处。

断点标识符采用的是移动优先的策略，即较大的断点定义会覆盖较小的断点定义。

到目前为止我们所了解到的情况是，例如，我们可以不受窗口宽度影响地设置列宽。如果我们要创建一个响应式用户界面，就需要在考虑窗口宽度的情况下动态地改变尺寸。首先，让我们了解一下可以在 `col-*`、`offset-*` 和 `col-auto` 辅助类中间注入的一些令牌（请查看下面的表格以了解这些令牌）。

| Token | Min window width | Description / When it applies if not overridden by another larger breakpoint |
| --- | --- | --- |
| `xs` | 0px | All window sizes (same as no breakpoint specifier) |
| `sm` | 600px | Larger than extra small sized window |
| `md` | 1024px | Larger than small window |
| `lg` | 1440px | Larger than medium-sized sized window |
| `xl` | 1920px | Larger than large sized window |

Example: `col-md-7`, `offset-lg-3`, `col-xs-auto`.

一个完整的示例：假设我们有一行包含三个子元素。在超小窗口中，我们需要将这些子元素垂直排列；在小窗口中，我们需要将它们并排显示（每个子元素具有相同的宽度）；从中等窗口开始，我们应该将它们全部显示在同一行上：

```html
<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
</div>
```

请注意上述示例中我们使用了 `col-xs-12`（12/12 = 100% 的行宽，因此每个子元素都会占据容器的全部宽度，从而使所有子元素垂直堆叠，因为默认情况下行会包裹内容）、`col-sm-6`（6/12 = 50% 的行宽）和 `col-md-4`（4/12 = 33% 的行宽）。

正如之前所述，行默认会自动换行处理内容，因此当一行使用 12（或更多）个网格点时，内容会换行到下一行。如果我们有两个 `<div>` 元素，并且在它们上都使用了 `col-8` 类，它们也会堆叠在一起，因为 8 + 8 = 16，而我们只能在一行上显示 12 个点。

```html
<div class="row">
  <!--
    more than 12 grid points together,
    so second <div> will wrap on next line
  -->
  <div class="col-8">col</div>
  <div class="col-8">col</div>
</div>
```

另外，请查看 [可见性](/style/visibility-cn#窗口宽度相关) 样式页面，以了解窗口宽度相关的阈值以及这些自定义的标记（xs、sm、md、lg、xl），它们单独使用时可用来隐藏或显示 DOM 元素。

## Flex 插件

当启用时 (通过 `quasar.config file > framework > cssAddon: true`) ，它会为所有与 flex（以及 display）相关的 CSS 类提供基于断点的版本。

::: warning
请注意，启用 CSS 功能时，其占用的空间会有明显的增加。因此，只有在确实需要的情况下才启用它。
:::

```
.flex-<bp>-(block|inline)
.(row|column|flex)-<bp>(|-inline-<bp>)
.reverse-<bp>
.(wrap|no-wrap|reverse-wrap)-<bp>
.order-<bp>-(first|last|none)
.justify-<bp>-(start|end|center|between|around|evenly)
.items-<bp>-(start|end|center|baseline|stretch)
.content-<bp>-(start|end|center|between|around)
.self-<bp>-(start|end|center|baseline|stretch)
.flex-<bp>-center
.q-gutter-<bp>(|-x|-y)-(xs|sm|md|lg|xl)
.(col|offset)-<bp>-(|0..12)
```

此外，还有用于间距的响应式类，包括用于内边距和外边距的两类：

```
.q-(p|m)(t|r|b|l|a|x|y)-<bp>-(none|auto|xs|sm|md|lg|xl)
```

Examples: `row-md`, `items-lg-end`, `q-pa-xs q-pa-sm-sm q-px-md-lg q-py-md-md`

## Flex Playground
要见识 Flex 的实际效果，您可以使用 Flex 实践平台进行互动式学习以获取更多信息。

<q-btn icon-right="launch" label="Flex Playground" to="/layout/grid/flex-playground" />
