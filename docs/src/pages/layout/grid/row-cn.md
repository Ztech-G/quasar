---
title: 网格行
desc: 如何使用 Quasar 框架中的行网格布局。
examples: grid
related:
  - /layout/grid/introduction-to-flexbox
  - /layout/grid/column
  - /layout/grid/gutter
  - /layout/grid/flex-playground
---

希望您之前已经阅读过 [Flexbox 基础教程](/layout/grid/introduction-to-flexbox-cn) 中的相关理论内容，那么现在让我们进一步探讨“行”（Rows）这一概念。

针对特定的断点使用列类来实现等宽布局。为每个所需的断点添加任意数量的无单位类，这样每一列的宽度都将保持一致。

## 等宽

例如，以下是适用于从超小屏设备（xs）到超大屏设备（xl）的所有视口的两种网格布局样式。

<DocExample title="例子：等宽" file="RowEqualWidth" />

## 设置一列的宽度
对于 flexbox 网格列的自动布局意味着您可以设置一个列的宽度，而其他列会自动围绕它进行调整大小。您可以使用预定义的网格类（如下所示）或内联宽度。请注意，无论中心列的宽度如何，其他列都会进行调整大小。

<DocExample title="设置一列的宽度" file="RowColumnWidth" />

## 可变宽度内容
使用 `col-{breakpoint}-auto` 类，列可以根据其内容的自然宽度自动调整大小。这对于像输入框、数字等单行内容来说非常方便（请参见本页上的最后一个示例）。再加上水平对齐类，这对于在视口宽度变化时具有不等列宽的布局进行居中定位非常有用。

<DocExample title="可变宽度内容" file="RowVariableWidth" />

## 响应式类（样式）

该网格包含五个预定义的层级类，用于构建复杂的响应式布局。您可以根据个人喜好在超小尺寸、小尺寸、中尺寸、大尺寸或超大尺寸设备上自定义列的大小。

### 所有断点
对于从最小尺寸设备到最大尺寸设备都保持一致的网格布局，使用 `.col` 和 `.col-*` 类。当您需要特定大小的列时，请指定一个编号类；否则，可以随意使用 `.col` 类。

<DocExample title="所有断点" file="RowAllBreakpoints" />

### 堆叠成水平状
通过结合使用 `.col-12` 和 `.col-md-*` 这两个类，您可以创建一个基本的网格系统。该系统在小尺寸设备上呈堆叠式布局，而在中型尺寸设备（如桌面端）上则变为水平布局。

<DocExample title="堆叠成水平状" file="RowStackedToHorizontal" />

### 混搭
不想让您的列只是简单地堆叠在某些网格层级中吗？根据需要为每个层级使用不同的类组合即可。下面的示例将帮助您更好地理解其运作方式。

<DocExample title="混搭" file="RowMixAndMatch" />

### 对齐
使用 flexbox 均匀对齐工具来实现列的垂直和水平对齐。

<DocExample title="垂直对齐" file="RowVerticalAlignment" />

<DocExample title="水平对齐" file="RowHorizontalAlignment" />

::: tip
此外还有名为“flex-center”的便捷 CSS 类，它相当于“items-center”（垂直居中对齐）与“justify-center”（水平居中对齐）的组合。将其与“flex”、“row”或“column”一起使用即可。
:::

### 列换行
如果在一个单元格内放置的列数超过 12 列，则超出列数的那一组列将作为一个整体换行显示到新的一行上。

<DocExample title="列换行" file="RowColumnWrapping" />

### 重新排序

<DocExample title="反向" file="RowReverse" />

<DocExample title="Flex 排序" file="RowFlexOrder" />

### 列偏移
使用 `.offset-md-*` 类将列向右移动。这些类会将某一列的左侧边距增加 * 倍的列宽。例如，`.offset-md-4` 将 `.col-md-4` 向右移动四个列宽。

<DocExample title="列偏移" file="RowOffsettingColumns" />

### 嵌套
若要将内容嵌套在默认网格中，请在现有 `.col-sm-*` 栏内添加一个新的 `.row` 和一组 `.col-sm-*` 栏。嵌套的行应包含总计不超过 12 个的 `.col-sm-*` 栏（并非必须使用所有可用的 12 个栏位）。

<DocExample title="嵌套" file="RowNesting" />

## Flex Playground
要见识 Flex 的实际效果，您可以使用 Flex 实践平台进行互动式学习以获取更多信息。

<q-btn icon-right="launch" label="Flex Playground" to="/layout/grid/flex-playground" />
