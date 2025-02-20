---
title: 布局抽屉
desc: 如何使用 QDrawer 组件。这是 Quasar 应用程序中的侧边栏。
keys: QDrawer
examples: QDrawer
related:
  - /layout/layout
  - /vue-components/list-and-list-items
---

QLayout 允许您将视图配置为一个 3x3 的矩阵形式，其中包含可选的左侧和/或右侧抽屉。如果您尚未阅读，请首先阅读 [QLayout](/layout/layout) 文档页面。

QDrawer 是您的 QLayout 的侧边栏部分。

<DocApi file="QDrawer" />

## 布局构建器
点击下方按钮来构建您的布局（多个布局请分别点击）。

<q-btn icon-right="launch" label="Layout Builder" href="/layout-builder" target="_blank" />

## 用例
::: tip
* 由于 QDrawer 需要布局，而 QLayout 默认会管理整个窗口，所以出于演示目的，我们将使用容器化的 QLayout。但请记住，您并非必须为 QDrawer 使用容器化的 QLayout。
* 如果 QDrawer 内容中还有图片，并且您想使用触摸操作来关闭它，您可能需要为其添加 `draggable="false"` 属性，否则浏览器的原生行为可能会产生负面影响。
:::

::: danger
默认情况下，QDrawer 已附带触摸操作。如果这妨碍了您的抽屉内容组件的使用，请通过指定布尔值 `no-swipe-close` 属性来禁用它。
:::

::: warning
当 QDrawer 被设置为覆盖模式时，**它会强制其进入固定位置**，无论 QLayout 的“view”属性是否配置为“l/r”或“L/R”。此外，**如果在 iOS 平台上且 QLayout 已被容器化**，由于平台限制无法克服，固定位置也会强制应用于 QDrawer。
:::

### 基础

<DocExample title="基础" file="Basic" />

考虑使用带有路由属性（例如 `to`）的 QItems。出于演示目的，这些属性尚未添加进来，因为这样做会破坏 UMD 版本。

<DocExample title="带有导航菜单" file="Menu" />

<DocExample title="无缝菜单" file="MenuSeamless" />

<DocExample title="封面图片" file="HeaderPicture" />

### 迷你模式

Drawer 可以在两种模式下运行：“正常”模式和“迷你”模式，您可以通过在 QLayoutDrawer 上使用布尔型 `mini` 属性来在两者之间进行切换。

::: warning
请注意，在 **移动设备** 模式下，**`迷你`模式** 不起作用。
:::

有一些 CSS 类可以帮助您在处理“迷你”模式时自定义抽屉。这些类非常有用，尤其是在使用“点击”触发器时：

| CSS类 | 描述 |
| --- | --- |
| `q-mini-drawer-hide` | 当抽屉处于“迷你”模式或“移动”模式时隐藏它。 |
| `q-mini-drawer-only` | 仅在抽屉处于“迷你”模式时显示。 |

您还可以根据 QLayoutDrawer 在“正常”模式下具有 `q-drawer--standard` CSS 类以及在“迷你”模式下具有 `q-drawer--mini` CSS 类这一事实来编写您自己的 CSS 类。此外，当抽屉处于“移动”行为模式时，它会获得 `q-drawer--mobile` CSS 类。

#### 鼠标悬停/鼠标移出触发器

考虑使用带有路由属性（例如 `to`）的 QItems。出于演示目的，这些属性尚未添加进来，因为这样做会破坏 UMD 版本。

<DocExample title="鼠标悬停/移出触发的迷你模式" file="MiniMouseEvents" />

#### 迷你模式下的覆盖

`mini-to-overlay` 这个布尔属性会始终将您的抽屉设置为固定位置，无论您通过 `view` 属性进行了何种配置，但它只会占用布局中与处于迷你模式时相同的宽度的空间。

<DocExample title="迷你模式下的覆盖" file="MiniToOverlay" />

#### 点击触发器
在下面的示例中，当处于“迷你”模式时，如果用户点击“抽屉”，那么我们就切换到正常模式。

考虑使用带有路由属性（例如 `to`）的 QItems。出于演示目的，这些属性尚未添加进来，因为这样做会破坏 UMD 版本。

<DocExample title="点击触发的迷你模式" file="MiniClickEvent" />

#### 插槽
默认情况下，在“迷你”模式下，Quasar CSS 会隐藏一些 DOM 元素以提供一个整洁的窄型抽屉。但在某些情况下，您可能确实需要进行深度调整。您可以使用 QLayoutDrawer 的“迷你” Vue 插槽来实现这一点。当处于“迷你”模式时，此插槽的内容将替换抽屉的默认内容。

<DocExample title="Mini-mode中使用插槽" file="MiniSlot" />

### 覆盖模式
覆盖模式会阻止抽屉占据布局中的空间，而是使其悬停在页面上。无论您在 `view` 属性中如何配置，这都将始终将您的抽屉设置为固定位置。

在下面的示例中，点击菜单图标即可查看抽屉的使用效果。最好在窗口宽度至少为 500 像素的桌面环境中查看（这是此演示设置的断点值）。

<DocExample title="覆盖模式" file="OverlayMode" />
