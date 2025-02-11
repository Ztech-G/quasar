---
title: 断点
desc: Quasar的CSS断点列表
related:
  - /style/spacing-cn
---

Quasar使用下列CSS断点：

| 窗口大小 | 名称 | 最小宽度阙值（像素） | 最大宽度阙值（像素） |
| --- | --- | --- | --- |
| Extra Small | `xs` | 0px | 599.99px |
| Small | `sm` | 600px | 1023.99px |
| Medium | `md` | 1024px | 1439.99px |
| Large | `lg` | 1440px | 1919.99px |
| Extra Large | `xl` | 1920px | Infinity |

要学习如何使用它们，请查看[Visibility](/style/visibility)页面。

你或许还想查看一下“响应式设计”部分中的 [Flexbox 入门](/layout/grid/introduction-to-flexbox#responsive-design)。

### Sass

您还可以在 Sass 中使用断点功能。:

```sass
@media (max-width: $breakpoint-xs-max)
  font-size: 10px
```

这些变量的语法如下所示，其中 `<breakpoint>` 应替换为“xs”、“sm”、“md”、“lg” 或 “xl”：

```
$breakpoint-<breakpoint>-min
$breakpoint-<breakpoint>-max
```

另外:

```
$sizes.<breakpoint>
// replace <breakpoint> with xs, sm, md, lg or xl
```

[如果开启body class](/options/screen-plugin-cn#如何开启body类), 您还可以根据应用到 document.body 的一组特定 CSS 类来样式化您的内容： `screen--xs`, `screen--sm`, ..., `screen--xl`.

```sass
.my-div
  body.screen--xs &
    color: #000
  body.screen--sm &
    color: #fff
```
