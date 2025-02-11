---
title: CSS 阴影 (高度)
desc: Quasar提供的定义DOM元素的高度的CSS类。
examples: shadows
---

一种简单却有效的添加阴影的方法，用于营造深度/立体感效果。
这些阴影符合 Material Design 规范（共 24 个深度级别）。

## 用例

| CSS 类名 | 描述 |
| --- | --- |
| `no-shadow` | 移除阴影 |
| `inset-shadow` | 在顶部设置一个内阴影 |
| `inset-shadow-down` | 在底部设置一个内阴影效果 |
| `shadow-1` | 阴影深度为1 |
| `shadow-2` | 阴影深度为2 |
| `shadow-N` | N的值为1到24 |
| `shadow-transition` | 为阴影应用默认的 CSS 过渡效果 |

<DocExample title="Standard shadows" file="Standard" scrollable />

上方的阴影指向元素的底部。如果您希望它们指向元素的顶部，请在数字前加上“up”：

| CSS 类名 | 描述 |
| --- | --- |
| `shadow-up-1` | 阴影深度为1 |
| `shadow-up-2` | 阴影深度为2 |
| `shadow-up-N` | N的值为1到24 |

<DocExample title="Shadows pointing up" file="PointingUp" scrollable />

<DocExample title="Inset shadow" file="Inset" />
