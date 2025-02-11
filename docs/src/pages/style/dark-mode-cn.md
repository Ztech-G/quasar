---
title: 暗黑模式
desc: Quasar处理暗黑模式
related:
  - /quasar-plugins/dark
  - /style/theme-builder-cn
---

暗黑模式是一种辅助模式，可用于在UI上显示大部分深色表面。该设计减少了设备屏幕发出的光，同时保持了可读性所需的最小颜色对比度。

暗黑模式的优点在于：

* 它通过减少眼睛疲劳来提升视觉舒适度。
* 对于保护视力也很重要。
* 在夜间或黑暗环境中也能提供使用时的舒适感。
* 如果设备屏幕采用 OLED 或 AMOLED 技术，它还能有效节省电池电量，从而实现无需充电即可长时间使用设备的效果。

## 它做了什么

1. 它为页面设置了一个默认的暗黑背景(可以通过使用`body.body--dark`选择器复写样式)
2. 所有的Quasar组件都有一个`dark`属性，这个属性会自动被设置为`true`。

这种自动检测是通过查看 `prefers-color-scheme: dark` 媒体查询来实现的，并且是动态的。当你的应用在运行时，如果客户端/平台切换了暗黑模式，这也将更行Quasar的暗黑模式（前提是暗黑模式设置的是`auto`）。

## 如何使用它

通过[Dark Plugin](/quasar-plugins/dark)插件可以轻松的在暗黑模式和明亮模式之间切换。

## 如何设计您的应用程序样式

由于你的应用可以在暗黑模式或者不是，你可以利用附加到`body`标签上的CSS类`body--light`或`body--dark`轻松地对其进行样式设置。
Since your app can be in Dark mode or not, you can easily style it by taking advantage of the `body` tag attached CSS class: `body--light` or `body--dark`. **也就是说，如果您想同时支持这两种模式的话。**

```css
.body--light {
  /* ... */
}

.body--dark {
  /* ... */
}
```

如果您希望更改默认的暗模式页面背景颜色：

```css
body.body--dark {
  background: #000
}
```
