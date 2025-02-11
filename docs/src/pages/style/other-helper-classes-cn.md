---
title: 其他CSS辅助类
desc: Quasar 提供的鼠标、尺寸、方向和边框相关的 CSS 辅助类列表。
---
在编写 Vue 模板时，您可以使用许多 CSS 类。这非常方便，有助于简化 Vue 模型和模板的复杂性。

下面的列表并不完整。此外，您还可以查看其他 CSS 文档页面，例如《排版》、《可见性》、《阴影》、《定位》等。

## 鼠标相关

| 类名 | 描述 |
| --- | --- |
| `non-selectable` | 用户无法同时选中 DOM 节点及其文本 |
| `no-pointer-events` | DOM 元素不会成为鼠标事件（如点击、悬停等）的目标 |
| `all-pointer-events` | 与 `no-pointer-events`相反 |
| `cursor-pointer` | 将 DOM 元素上的鼠标指针变色，使其看起来像是一个可点击的链接 |
| `cursor-not-allowed` | v |
| `cursor-inherit` | 将 DOM 元素上的鼠标指针变色，使其看起来与父选项相同 |
| `cursor-none` | 不显示鼠标指针 |

## 滚动相关

| 类名 | 描述 |
| --- | --- |
| `scroll` | 对 CSS 进行调整，以使滚动功能在所有平台上都能发挥最佳效果 |
| `no-scroll` | 在 DOM 节点上隐藏滚动条 |
| `overflow-auto` | 将溢出设置为自动 |
| `overflow-hidden` | 将溢出设置为隐藏 |
| `overflow-hidden-y` | 在 y 轴上将溢出设置为隐藏 |
| `hide-scrollbar` | 移除滚动条 |

## 大小相关
| 类名 | 描述 |
| --- | --- |
| `fit` | 宽度和高度均设置为 100% |
| `full-height` | 高度设置为 100% |
| `full-width` | 宽度设置为 100%，同时左右边距设为 0 |
| `window-height` | 高度设置为 100vh，上下边距设为 0 |
| `window-width` | 宽度设置为 100vw，左右边距设为 0 |
| `block` | 将 `display` 属性设置为 `block` |

## 方向相关
| 类名 | 描述 |
| --- | --- |
| `rotate-45` | 旋转 45 度 |
| `rotate-90` | 旋转 90 度 |
| `rotate-135` | 旋转 135 度 |
| `rotate-180` | 旋转 180 度 |
| `rotate-225` | 旋转 225 度 |
| `rotate-270` | 旋转 270 度 |
| `rotate-315` | 旋转 315 度 |
| `flip-horizontal` | 水平翻转 DOM 元素 |
| `flip-vertical` | 垂直翻转 DOM 元素 |

## 边框相关
| 类名 | 描述 |
| --- | --- |
| `no-border` | 移除任何边框 |
| `no-border-radius` | 移除边框可能具有的任何圆角 |
| `no-box-shadow` | 移除已应用的阴影效果 |
| `no-outline` | 移除边框上应用的轮廓 |
| `rounded-borders` | 应用通用的边框圆角样式 |
| `border-radius-inherit` | 从父元素继承边框圆角样式 |
