---
title: Flexbox模式
desc: 有关使用 Flexbox CSS 的常见操作方法以及如何将其应用于 Quasar 应用程序的相关内容。
examples: grid
related:
  - /layout/grid/introduction-to-flexbox
  - /layout/grid/row
  - /layout/grid/column
  - /layout/grid/gutter
  - /layout/grid/flex-playground
---

以下是使用 [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 的一些常见模式。更多相关信息可参考 [Tobias Ahlin 博客](https://tobiasahlin.com/blog/) 。

## 行/列换行
您可以定义一个 CSS 类，该类能够强制应用该类的元素在弹性布局中创建行/列分隔符。

```sass
.flex-break
  flex: 1 0 100% !important
.row
  .flex-break
    height: 0 !important
.column
  .flex-break
    width: 0 !important
```
在定义弹性容器时，请务必避免使用 `no-wrap` 属性，并在需要的地方插入一个带有类名 `flex-break` 的 `<div>` 元素。

::: tip
您可以在行对齐元素上使用 `q-py-##` 或在列对齐元素上使用 `q-px-##` 来增加间距。
:::

```html
<div class="row">
  <div>Col 1 / Row 1</div>
  <div>Col 2 / Row 1</div>
  <div class="flex-break"></div>
  <div>Col 1 / Row 2</div>
  <div class="flex-break q-py-md"></div>
  <div>Col 1 / Row 3</div>
  <div>Col 2 / Row 3</div>
  <div>Col 3 / Row 3</div>
</div>
```

<DocExample title="Row break" file="BreakRow" />

::: warning
当使用 `column` 类型的弹性布局时，您必须为容器定义一个高度。该高度必须足够大，以容纳最长的列。
:::

<DocExample title="Column break" file="BreakColumn" />

## 类似砌石结构的布局
当使用带有多个列的“列”类型弹性布局时，元素的视觉排列顺序将会是垂直列的形式。有时您希望元素的排列顺序遵循布局中的行顺序，为了实现这一点，您可以使用组合或自定义顺序的 CSS 样式以及列断开元素。

::: warning
您必须明确知道您打算在布局中使用多少列。另外，为了达到最佳的视觉效果，布局中的各个元素的高度应当彼此相近。
:::

对于包含 `$x` 列数的通用 CSS 公式表述为：

```scss
$x: 3;

@for $i from 1 through ($x - 1) {
  .item:nth-child(#{$x}n + #{$i}) {
    order: #{$i};
  }
}

.item:nth-child(#{$x}n) {
  order: #{$x};
}
```

Example, supposing you want a 4 column layout:

```sass
.item:nth-child(4n+1)
  order: 1
.item:nth-child(4n+2)
  order: 2
.item:nth-child(4n+3)
  order: 3
.item:nth-child(4n)
  order: 4
```

对于 HTML 来说，有一些需要遵循的要求：
- 拥有弹性列容器的元素必须定义高度
- 列的拆分元素必须置于开头
- 列的拆分元素的数量必须与列的数量相同
- 第一列拆分元素必须隐藏（使用类名 `hidden` 或设置样式 `display： none`）

例如，假设您想要一个 4 列布局：

```html
<div class="column">
  <div class="flex-break hidden"></div>
  <div class="flex-break"></div>
  <div class="flex-break"></div>
  <div class="flex-break"></div>

  <div>Cell 1</div>
  <div>Cell 2</div>
  ...
  <div>Cell last</div>
</div>
```

<DocExample title="Masonry" file="Masonry" />

## 使用伪选择器实现行列拆分的 Masonry 效果
当插入行/列分隔符的元素操作不太容易或者根本无法实现，而您需要插入两行或三行时，您可以使用伪选择器。

```sass
.container-class
  &--2-rows
    :before
      flex: 1 0 100% !important
      height: 0 !important
      order: 1
  &--2-columns
    :before
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3-rows
    :before,
    :after
      flex: 1 0 100% !important
      height: 0 !important
      order: 2
  &--3-columns
    :before,
    :after
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
```

<DocExample title="Masonry like table grid" file="MasonryTableGrid" />
