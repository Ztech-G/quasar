---
title: 暗黑模式
desc: Quasar处理暗黑模式
related:
  - /quasar-plugins/dark
  - /style/theme-builder-cn
---

暗黑模式是一种辅助模式，可用于在UI上显示大部分深色表面。该设计减少了设备屏幕发出的光，同时保持了可读性所需的最小颜色对比度。

The advantages of Dark Mode are that:

* It enhances visual ergonomics by reducing eye strain.
* It is important for eye protection also.
* Provides comfort of use at night or in dark environments.
* It conserves battery power mainly if the device screen is OLED or AMOLED, thereby enabling device usage for longer periods without charging.

## What it does

1. It sets a default dark background for the pages (that you can easily override through CSS with the `body.body--dark` selector)
2. All Quasar components with a `dark` property will have it automatically set to `true`. No need to do it manually.

The auto-detection works by looking at `prefers-color-scheme: dark` media query and is dynamic. If the client browser/platform switches to/from Dark mode while your app is running, it will also update Quasar's Dark mode (if Dark mode is set to `auto`).

## How to use it

You can easily switch between Dark mode and light mode (which is default) through the [Dark Plugin](/quasar-plugins/dark).

## How to style your app

Since your app can be in Dark mode or not, you can easily style it by taking advantage of the `body` tag attached CSS class: `body--light` or `body--dark`. **That is if you want to support both modes.**

```css
.body--light {
  /* ... */
}

.body--dark {
  /* ... */
}
```

Should you wish to override the default Dark mode page background color:

```css
body.body--dark {
  background: #000
}
```
