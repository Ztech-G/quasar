---
title: CSS定位类
desc: Quasar 提供的用于简化 DOM 元素定位的 CSS 类列表。
related:
  - /style/typography-cn
  - /style/visibility-cn
  - /style/spacing-cn
---
Quasar 提供了一些 CSS 类，可帮助您轻松定位 DOM 元素：

| 类名 | 描述 |
| --- | --- |
| `fullscreen` | 固定位置覆盖整个窗口区域 |
| `fixed` | 设置 `position` 为 `fixed` 但未指定 `top`, `left`, `right` 或 `bottom` 属性 |
| `fixed-center` | 设置 `position` 为 `fixed` 但在屏幕中间|
| `absolute` | 设置 `position` 为 `absolute` 但未指定 `top`, `left`, `right` 或 `bottom` 属性 |
| `absolute-center` | 设置 `position` 为 `absolute` 但在容器的中间（容器需要有相对位置）. |
| `fixed-top` `absolute-top` | 固定或绝对位置至屏幕顶部 |
| `fixed-right` `absolute-right` | 固定或绝对位置至屏幕右边缘 |
| `fixed-bottom` `absolute-bottom` | 固定或绝对位置至屏幕底部 |
| `fixed-left` `absolute-left` | 固定或绝对位置至屏幕左边缘 |
| `fixed-top-left` `absolute-top-left` | 固定或绝对位置至屏幕左上角 |
| `fixed-top-right` `absolute-top-right` | 固定或绝对位置至屏幕右上角 |
| `fixed-bottom-left` `absolute-bottom-left` | 固定或绝对位置至屏幕左下角 |
| `fixed-bottom-right` `absolute-bottom-right` | 固定或绝对位置至屏幕右下角 |
| `fixed-full` `absolute-full` | 固定或绝对位置至屏幕所有边缘 |
| `relative-position` | 设置 `position` 为 `relative` |

## 对齐
| 类名 | 描述 |
| --- | --- |
| `float-left` | 浮动到左边 |
| `float-right` | 浮动到右边 |
| `on-left` | 在右侧设置一个小间距；通常用于与其他兄弟元素相邻的图标元素上 |
| `on-right` | 在左侧设置一个小间距；通常用于与其他兄弟元素相邻的图标元素上 |

::: tip
我们不建议您使用 `float-left` 或 `float-right` 这样的属性，而是建议您查阅 Quasar 网格系统的相关内容。
:::

垂直对齐：

| 类名 | 描述 |
| --- | --- |
| `vertical-top` | 将 CSS 的垂直对齐方式设置为 `top` |
| `vertical-middle` | 将 CSS 的垂直对齐方式设置为 `middle` |
| `vertical-bottom` | 将 CSS 的垂直对齐方式设置为 `bottom` |
