---
title: CSS可见性
desc: Quasar提供的CSS类用于管理组件和DOM元素的响应性和可见性。
related:
  - /style/typography-cn
  - /style/positioning-cn
  - /style/spacing-cn
---
有一些 CSS 类是您可以直接使用以实现常见功能的。

| 类名 | 描述 |
| --- | --- |
| `disabled` | 光标被更改以发出“禁用”的通知，并且透明度被设置为较低的值。 |
| `hidden` | 设置 `display` 为 `none`. 与下面内容相比 - `hidden`类意味着元素不可见 _并且_不会占用布局空间。 |
| `invisible` | 设置 `visibility` 为 `hidden`. 与上面内容相比 - `invisible`类意味着元素不可见，但是会占据布局空间。 |
| `transparent` | 背景颜色是透明的。 |
| `dimmed` | 在您的元素之上应用深色透明覆盖层。请勿将其应用于已具有 **:after** 伪元素的元素上。|
| `light-dimmed` | 在您的元素之上应用白色透明覆盖层。请勿将其应用于已具有 **:after** 伪元素的元素上。 |
| `ellipsis` | 当可用空间不足时，会截断文本并显示省略号。 |
| `ellipsis-2-lines` | 当两行空间不足时，会截断文本并显示省略号（仅在 Webkit 浏览器中有效）。 |
| `ellipsis-3-lines` | 当三行空间不足时，会截断文本并显示省略号（仅在 Webkit 浏览器中有效）。 |
| `z-top` | 将您的元素置于任何其他组件之上，但位于弹出框、提示框和通知之后。 |
| `z-max` | 将您的元素置于任何其他组件（包括抽屉、模态框、通知、布局头部/尾部等）之上。 |

## 窗口宽度相关
首先，让我们来明确一下什么是断点：

| 窗口大小 | 名称 | 最小宽度阙值（像素） | 最大宽度阙值（像素） |
| --- | --- | --- | --- |
| Extra Small | `xs` | 0px | 599.99px |
| Small | `sm` | 600px | 1023.99px |
| Medium | `md` | 1024px | 1439.99px |
| Large | `lg` | 1440px | 1919.99px |
| Extra Large | `xl` | 1920px | Infinity |

接下来谈谈与窗口宽度相关的 CSS 类。

| 类名 | 描述 |
| --- | --- |
| `xs` | Display only on extra small windows |
| `sm` | Display only on small windows |
| `md` | Display only on medium-sized windows |
| `lg` | Display only on large windows |
| `xl` | Display only on extra large windows |

还可以显示一些 DOM 元素或组件，前提是其尺寸小于其中一个指定的尺寸范围。对于大于其中一个指定尺寸范围的情况也是如此。只需添加“lt-”或“gt-”前缀即可，这两个前缀分别源自“小于”和“大于”。例如：`lt-md`（仅在 xs 和 sm 窗口中显示），`lt-xl`（仅在 xs、sm、md 和 lg 窗口中显示），`gt-md`（在大于中型尺寸的窗口中显示：lg 和 xl）。

::: tip
您可以将可见性类与 `inline` 类结合使用，用于实现内联块元素（inline-blocks）

比如: `<span class="gt-sm inline">...</span>`
:::

::: tip
如果您想要例如基于 JavaScript 属性来显示/隐藏内容，您可以使用 [屏幕插件](/options/screen-plugin-cn).
:::

## 平台相关
仅在以下位置可见：

| 类名 | 描述 |
| --- | --- |
| `desktop-only` | 只在桌面端可见 |
| `mobile-only` | 只在移动端可见 |
| `native-mobile-only` | 只在使用 Cordova/Capacitor 开发的应用中可见 |
| `cordova-only` | 只在使用 Cordova 包裹开发的应用中可见 |
| `capacitor-only` | 只在使用 Capacitor 包裹开发的应用中可见 |
| `electron-only` | 只在使用 Electron 包裹开发的应用中可见 |
| `touch-only` | 只在支持触摸功能的平台上可见 |
| `platform-ios-only` | 只在 iOS 平台上可见 |
| `platform-android-only` | 只在 Android 平台上可见 |
| `within-iframe-only` | 只在整个网站处于 IFRAME 标签内时可见 |

隐藏于：

| 类名 | 描述 |
| --- | --- |
| `desktop-hide` | 在桌面端隐藏 |
| `mobile-hide` | 在移动端隐藏 |
| `native-mobile-hide` | 在使用 Cordova/Capacitor 开发的应用中隐藏 |
| `cordova-hide` | 在使用 Cordova 包装的应用中隐藏 |
| `capacitor-hide` | 在使用 Capacitor 包装的应用中隐藏 |
| `electron-hide` | 在使用 Electron 包装的应用中隐藏 |
| `touch-hide` | 在支持触摸操作的平台上隐藏 |
| `platform-ios-hide` | 在 iOS 平台上隐藏 |
| `platform-android-hide` | 在 Android 平台上隐藏 |
| `within-iframe-hide` | 只有当整个网站处于 IFRAME 标签之下时才会隐藏 |

::: tip
根据您的需求，您或许还想查看一下 [平台检测](/options/platform-detection-cn) 页面，以了解如何通过 JavaScript 实现相同的效果。这种方法允许您甚至无需渲染 DOM 元素或组件。当渲染过程耗时较长时，这种方法很有用。
:::

## 方向相关
| 类名 | 描述 |
| --- | --- |
| `orientation-portrait` | 只有在屏幕方向为“竖屏”时才能看到（显示） |
| `orientation-landscape` | 只有在屏幕方向为“横向”时才能看到（显示） |

## 打印相关
| 类名 | 描述 |
| --- | --- |
| `print-only` | 仅能在印刷媒体上显现——却隐藏在屏幕媒体之中 |
| `print-hide` | 在屏幕媒体上可见——在印刷媒体上不可见 |

::: tip
在 CSS 中，`print media` 即打印媒体类型，它允许开发者为文档的打印输出指定特定的样式。通过使用打印媒体类型，你可以控制网页在打印时的外观，确保打印出来的内容格式清晰、易读，并且符合预期的布局要求。
:::
