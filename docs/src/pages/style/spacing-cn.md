---
title: CSS间距类
desc: Quasar 提供的用于简化响应式内边距和外边距规格化的 CSS 类列表。
related:
  - /style/typography-cn
  - /style/positioning-cn
  - /style/visibility-cn
  - /style/breakpoints-cn
---

这里有Quasar提供的CSS类帮助你设置DOM元素或组件的空间。所有的旋前都有前缀`q-`并且拆解成类型（T），方向（D）和大小（S）。下表是所有的可能性。

## 语法
```
q-[p|m][t|r|b|l|a|x|y]-[none|auto|xs|sm|md|lg|xl]
    T       D                   S

T - type 类型
  - values 值: p (padding 内边距), m (margin 外边距)

D - direction 方向
  - values 值:
      t (top 上), r (right 右), b (bottom 下), l (left 左),
      a (all 全部), x (both left & right 左和右), y (both top & bottom 上和下)

S - size 大小
  - values 值:
      none 无,
      auto 自动(仅适用特定范围（外边距、左或右或左和右） q-ml-*, q-mr-*, q-mx-*),
      xs (extra small 最小),
      sm (small 小),
      md (medium 中),
      lg (large 大),
      xl (extra large 最大)
```

## 例子

```html
<!-- 所有方向上应用小号内边距 -->
<div class="q-pa-sm">...</div>

<!-- 上边距使用中等间距，右边距使用小间距 -->
<q-card class="q-mt-md q-mr-sm">...</q-card>
```

## Flex附加内容

当开启时（通过`quasar.config file > framework > cssAddon: true`）它为所有与间距相关的 CSS 类提供了带有断点感知功能的版本。

> 请注意，启用 CSS 功能时，其占用的空间会有明显的增加。因此，只有在确实需要的情况下才启用它。

```
.q-(p|m)(t|r|b|l|a|x|y)-<bp>-(none|auto|xs|sm|md|lg|xl)
```

例子: `q-pa-xs-md q-pa-sm-sm q-px-md-lg q-py-md-md`

## 排列表

| 前缀 | 类型 | 方向 | 大小 | 例子 |
|--------|------|-----------|------|---------
| `q-` | `p` (padding) | `t` (top) | `none` | `q-pt-none` |
| `q-` | `p` (padding) | `t` (top) | `xs` (extra small) | `q-pt-xs` |
| `q-` | `p` (padding) | `t` (top) | `sm` (small) | `q-pt-sm` |
| `q-` | `p` (padding) | `t` (top) | `md` (medium) | `q-pt-md` |
| `q-` | `p` (padding) | `t` (top) | `lg` (large) | `q-pt-lg` |
| `q-` | `p` (padding) | `t` (top) | `xl` (extra large) | `q-pt-xl` |
| `q-` | `p` (padding) | `r` (right) | `none` | `q-pr-none` |
| `q-` | `p` (padding) | `r` (right) | `xs` (extra small) | `q-pr-xs` |
| `q-` | `p` (padding) | `r` (right) | `sm` (small) | `q-pr-sm` |
| `q-` | `p` (padding) | `r` (right) | `md` (medium) | `q-pr-md` |
| `q-` | `p` (padding) | `r` (right) | `lg` (large) | `q-pr-lg` |
| `q-` | `p` (padding) | `r` (right) | `xl` (extra large) | `q-pr-xl` |
| `q-` | `p` (padding) | `b` (bottom) | `none` | `q-pb-none` |
| `q-` | `p` (padding) | `b` (bottom) | `xs` (extra small) | `q-pb-xs` |
| `q-` | `p` (padding) | `b` (bottom) | `sm` (small) | `q-pb-sm` |
| `q-` | `p` (padding) | `b` (bottom) | `md` (medium) | `q-pb-md` |
| `q-` | `p` (padding) | `b` (bottom) | `lg` (large) | `q-pb-lg` |
| `q-` | `p` (padding) | `b` (bottom) | `xl` (extra large) | `q-pb-xl` |
| `q-` | `p` (padding) | `l` (left) | `none` | `q-pl-none` |
| `q-` | `p` (padding) | `l` (left) | `xs` (extra small) | `q-pl-xs` |
| `q-` | `p` (padding) | `l` (left) | `sm` (small) | `q-pl-sm` |
| `q-` | `p` (padding) | `l` (left) | `md` (medium) | `q-pl-md` |
| `q-` | `p` (padding) | `l` (left) | `lg` (large) | `q-pl-lg` |
| `q-` | `p` (padding) | `l` (left) | `xl` (extra large) | `q-pl-xl` |
| `q-` | `p` (padding) | `a` (all) | `none` | `q-pa-none` |
| `q-` | `p` (padding) | `a` (all) | `xs` (extra small) | `q-pa-xs` |
| `q-` | `p` (padding) | `a` (all) | `sm` (small) | `q-pa-sm` |
| `q-` | `p` (padding) | `a` (all) | `md` (medium) | `q-pa-md` |
| `q-` | `p` (padding) | `a` (all) | `lg` (large) | `q-pa-lg` |
| `q-` | `p` (padding) | `a` (all) | `xl` (extra large) | `q-pa-xl` |
| `q-` | `p` (padding) | `x` (left & right) | `none` | `q-px-none` |
| `q-` | `p` (padding) | `x` (left & right) | `xs` (extra small) | `q-px-xs` |
| `q-` | `p` (padding) | `x` (left & right) | `sm` (small) | `q-px-sm` |
| `q-` | `p` (padding) | `x` (left & right) | `md` (medium) | `q-px-md` |
| `q-` | `p` (padding) | `x` (left & right) | `lg` (large) | `q-px-lg` |
| `q-` | `p` (padding) | `x` (left & right) | `xl` (extra large) | `q-px-xl` |
| `q-` | `p` (padding) | `y` (top & bottom) | `none` | `q-py-none` |
| `q-` | `p` (padding) | `y` (top & bottom) | `xs` (extra small) | `q-py-xs` |
| `q-` | `p` (padding) | `y` (top & bottom) | `sm` (small) | `q-py-sm` |
| `q-` | `p` (padding) | `y` (top & bottom) | `md` (medium) | `q-py-md` |
| `q-` | `p` (padding) | `y` (top & bottom) | `lg` (large) | `q-py-lg` |
| `q-` | `p` (padding) | `y` (top & bottom) | `xl` (extra large) | `q-py-xl` |
| `q-` | `m` (margin) | `t` (top) | `none` | `q-mt-none` |
| `q-` | `m` (margin) | `t` (top) | `xs` (extra small) | `q-mt-xs` |
| `q-` | `m` (margin) | `t` (top) | `sm` (small) | `q-mt-sm` |
| `q-` | `m` (margin) | `t` (top) | `md` (medium) | `q-mt-md` |
| `q-` | `m` (margin) | `t` (top) | `lg` (large) | `q-mt-lg` |
| `q-` | `m` (margin) | `t` (top) | `xl` (extra large) | `q-mt-xl` |
| `q-` | `m` (margin) | `t` (top) | `auto` | `q-mt-auto` |
| `q-` | `m` (margin) | `r` (right) | `none` | `q-mr-none` |
| `q-` | `m` (margin) | `r` (right) | `xs` (extra small) | `q-mr-xs` |
| `q-` | `m` (margin) | `r` (right) | `sm` (small) | `q-mr-sm` |
| `q-` | `m` (margin) | `r` (right) | `md` (medium) | `q-mr-md` |
| `q-` | `m` (margin) | `r` (right) | `lg` (large) | `q-mr-lg` |
| `q-` | `m` (margin) | `r` (right) | `xl` (extra large) | `q-mr-xl` |
| `q-` | `m` (margin) | `r` (right) | `auto` | `q-mr-auto` |
| `q-` | `m` (margin) | `b` (bottom) | `none` | `q-mb-none` |
| `q-` | `m` (margin) | `b` (bottom) | `xs` (extra small) | `q-mb-xs` |
| `q-` | `m` (margin) | `b` (bottom) | `sm` (small) | `q-mb-sm` |
| `q-` | `m` (margin) | `b` (bottom) | `md` (medium) | `q-mb-md` |
| `q-` | `m` (margin) | `b` (bottom) | `lg` (large) | `q-mb-lg` |
| `q-` | `m` (margin) | `b` (bottom) | `xl` (extra large) | `q-mb-xl` |
| `q-` | `m` (margin) | `b` (bottom) | `auto` | `q-mb-auto` |
| `q-` | `m` (margin) | `l` (left) | `none` | `q-ml-none` |
| `q-` | `m` (margin) | `l` (left) | `xs` (extra small) | `q-ml-xs` |
| `q-` | `m` (margin) | `l` (left) | `sm` (small) | `q-ml-sm` |
| `q-` | `m` (margin) | `l` (left) | `md` (medium) | `q-ml-md` |
| `q-` | `m` (margin) | `l` (left) | `lg` (large) | `q-ml-lg` |
| `q-` | `m` (margin) | `l` (left) | `xl` (extra large) | `q-ml-xl` |
| `q-` | `m` (margin) | `l` (left) | `auto` | `q-ml-auto` |
| `q-` | `m` (margin) | `a` (all) | `none` | `q-ma-none` |
| `q-` | `m` (margin) | `a` (all) | `xs` (extra small) | `q-ma-xs` |
| `q-` | `m` (margin) | `a` (all) | `sm` (small) | `q-ma-sm` |
| `q-` | `m` (margin) | `a` (all) | `md` (medium) | `q-ma-md` |
| `q-` | `m` (margin) | `a` (all) | `lg` (large) | `q-ma-lg` |
| `q-` | `m` (margin) | `a` (all) | `xl` (extra large) | `q-ma-xl` |
| `q-` | `m` (margin) | `x` (left & right) | `none` | `q-mx-none` |
| `q-` | `m` (margin) | `x` (left & right) | `xs` (extra small) | `q-mx-xs` |
| `q-` | `m` (margin) | `x` (left & right) | `sm` (small) | `q-mx-sm` |
| `q-` | `m` (margin) | `x` (left & right) | `md` (medium) | `q-mx-md` |
| `q-` | `m` (margin) | `x` (left & right) | `lg` (large) | `q-mx-lg` |
| `q-` | `m` (margin) | `x` (left & right) | `xl` (extra large) | `q-mx-xl` |
| `q-` | `m` (margin) | `x` (left & right) | `auto` | `q-mx-auto` |
| `q-` | `m` (margin) | `y` (top & bottom) | `none` | `q-my-none` |
| `q-` | `m` (margin) | `y` (top & bottom) | `xs` (extra small) | `q-my-xs` |
| `q-` | `m` (margin) | `y` (top & bottom) | `sm` (small) | `q-my-sm` |
| `q-` | `m` (margin) | `y` (top & bottom) | `md` (medium) | `q-my-md` |
| `q-` | `m` (margin) | `y` (top & bottom) | `lg` (large) | `q-my-lg` |
| `q-` | `m` (margin) | `y` (top & bottom) | `xl` (extra large) | `q-my-xl` |
| `q-` | `m` (margin) | `y` (top & bottom) | `auto` | `q-my-auto` |

::: tip
更多内容查看[Flex Addons](/layout/grid/introduction-to-flexbox#flex-addons).
:::

## 其他相关事项
| 类名 | 描述 |
| --- | --- |
| `no-margin` | 移除所有已应用的外边距 |
| `no-padding` | 移除所有已应用的内边距 |
