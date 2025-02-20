---
title: 布局
desc: 如何使用 QLayout 组件。管理您的 Quasar 应用程序的整个窗口。
keys: QLayout
examples: QLayout
related:
  - /layout/header-and-footer
  - /layout/drawer
  - /layout/page
  - /layout/page-sticky
  - /layout/page-scroller
  - /vue-components/floating-action-button
---
QLayout 是一种用于管理整个窗口并用诸如导航栏或抽屉之类的元素来包裹页面内容的组件。多个页面可以共享同一个 QLayout，因此该代码具有可复用性，这是其关键特点之一。

**QLayout 不是必需的**，但它确实有助于您更好地构建您的网站/应用程序的架构。它具备一系列功能，这些功能在您初次使用时就能为您提供简化网站/应用程序布局设计的巨大优势。

<DocApi file="QLayout" />

## 布局构建器
点击下方按钮来构建您的布局（多个布局请分别点击）。

::: tip
留意您的开发者控制台，那里会显示一些有用的提示信息，告知您哪些组件是在您的 quasar.config 文件中未被声明的情况下被使用的。
:::

<q-btn icon-right="launch" label="Layout Builder" href="/layout-builder" target="_blank" />

## 用例

::: warning 使用 margin CSS 会使布局失效
QLayout 依赖于占据整个屏幕空间，因此 QPageContainer、QHeader、QFooter 和 QLayoutDrawer 的位置由它管理（通过 `view` 属性）。您 **不能** 将 CSS 边距用作 QLayout 本身的样式，也不能将其用于上述提到的任何 QLayout 组件的样式。不过，您可以放心地使用 CSS 内边距。
:::

::: tip
如果您的布局使用了 Vue Router 的子路由（推荐使用），那么使用 Vue 的 `<router-view />` 组件是合理的，该组件只是一个注入子路由的占位符。如需更多信息，请阅读 [使用布局和页面进行路由](/layout/routing-with-layouts-and-pages) 。
:::

### 理解“view”属性（prop）
Quasar 引入了一种独特且出色的布局概念，它允许您通过简单地更改一个简短的字符串表示法来轻松地构建布局，并使其以特定的方式工作。

为了说明这一机制是如何运作的，请想象您的布局是一个由容器组成的 3x3 矩阵（如下图中蓝色部分所示）。第一行的容器将是页眉，最后一行将是页脚。第一列的容器将是“左侧”，最后一列将是“右侧”。矩阵下方页眉之上、页脚之下的部分将是页面或主要内容容器。

这种容器矩阵或“QLayout 视图”可以通过您需向 QLayout 的 `view` 属性提供的字符串来表示。该字符串必须恰好包含 11 个字符：

- 3 定义表头行
- 接着是一个空格
- 3 定义中间行
- 再加上一个空格
- 然后是 3 定义表脚行

<script doc>
import ViewProp from './ViewProp.vue'
</script>

<ViewProp />

上面展示的这些字母也是区分大小写的。例如，使用至少一个“L”（大写字母而非小写字母）会使您的布局左侧（抽屉）固定在某个位置。同样的规则也适用于“H”（页眉）、“F”（页脚）以及最后的“R”（右侧/抽屉）。

<script doc>
import ViewPlay from './ViewPlay.vue'
</script>

<ViewPlay />

例如，如果您希望布局的右侧/抽屉位于页眉、页面和页脚的右侧，您需要使用 `hhr lpr ffr` 这个组合。如果您还想让其固定不动，只需将其中一个 `r` 字母转换为大写即可，比如这样：`hhr lpR ffr`、`hhR lpr ffr` 或 `hhr lpr ffR`。

<q-btn icon-right="launch" label="Layout Builder" href="/layout-builder" target="_blank" />

::: warning
* 重要的是，您必须为 QLayout 的所有区域指定内容，即便您不会使用这些区域。例如，即便您不使用页脚或右侧抽屉，也应在 QLayout 的 `view` 属性中对其进行指定。
* 当 QDrawer 被设置为覆盖模式时，**它会强制其定位在固定位置**，无论 QLayout 的“view”属性是否配置为“l/r”或“L/R”。此外，**如果在 iOS 平台上且 QLayout 是容器化的**，由于平台限制无法克服，固定位置也会强制应用于 QDrawer。
:::

### 容器化的 QLayout
默认情况下，QLayout 会管理整个窗口。不过，您也可以将 QLayout 视为一个容器（具有特定的高度和宽度），将其置于页面中的某个位置以实现隔离。

::: warning
请注意，它**需要明确设置 CSS 的高度（或最小高度）**，否则无法实现且无法正常运行。
:::

在下面的示例中，有一个容器化的 QLayout（布局容器），其两侧各有一个抽屉（左侧抽屉的断点为 700 像素，右侧抽屉的断点为 500 像素）。这里的断点并非指窗口的宽度，而是指布局容器的实际宽度。

<DocExample title="容器化的 QLayout" file="Container" />

<DocExample title="QLayout在QDialog中" file="ContainerDialog" />
