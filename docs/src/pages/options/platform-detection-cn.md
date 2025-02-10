---
title: 平台检测
desc: 如何检测Quasar应用运行时的平台。
examples: Platform
---

Quasar内置了帮助类用于在代码运行的上下文中检测平台（及其功能）。

::: tip
Based on your needs, you might also want to check the [Style & Identity &gt; Visibility](/style/visibility) page to see how you can achieve the same effect using CSS alone. This latter method will render your DOM elements or components regardless of platform though, so choose wisely on how you want to handle the performance of your app.

基于你的需要，你可能需要查看[Style & Identity &gt; Visibility](/style/visibility)页面来指导如果通过CSS达到相同的效果。后一种方法将渲染你的DOM组件或元素而不考虑平台，所以要选择好如何处理你的应用的性能。
:::

<DocApi file="Platform" />

## 用例
在基于JS的Vue组件中的用例:

```js
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()

  $q.platform.is.mobile
}
```

在基于模板的Vue组件的用例:

```js
$q.platform.is.cordova
```

在Vue组件外部使用时你必须导入它后才能使用：

```js
import { Platform } from 'quasar'
```

`Platform.is` 本身返回了一个包含当前平台信息的对象，比如如果当前运行在MacOS桌面设备上的Chrome中，`Platform.is`将会返回类似于下面的内容：

```js
{
  chrome: true,
  desktop: true,
  mac: true,
  name: "chrome",
  platform: "mac",
  version: "70.0.3538.110",
  versionNumber: 70,
  webkit: true
}
```

现在，假设我们希望根据代码运行的平台呈现不同的组件或DOM元素。我们想在台式机上展示一些东西，在移动设备上展示另一些东西。我们将这样进行：


```html
<div v-if="$q.platform.is.desktop">
  我只在桌面端渲染！
</div>

<div v-if="$q.platform.is.mobile">
  我只在移动端渲染！
</div>

<div v-if="$q.platform.is.electron">
  我只在Electron中渲染！
</div>
```

<DocExample title="Your device" file="Basic" />

## 属性

下面列出的时Platform对象中的属性。这不是一个详细的列表，更多内容请看API那一部分。


| 属性               | 类型    | 说明                                                  |
| ---                    | ---     | ---                                                      |
| `Platform.is.mobile`     | Boolean | 代码是否运行在一个移动设备上?                |
| `Platform.is.cordova`    | Boolean | 代码是否运行在Cordova中?                    |
| `Platform.is.capacitor`  | Boolean | 代码是否运行在Capacitor中? |
| `Platform.is.nativeMobile`| Boolean | 代码是否运行在原生移动端包装器中(_Cordova/Capacitor_)? |
| `Platform.is.nativeMobileWrapper`| String | 原生移动端包装器的名字(_`'cordova'`, `'capacitor'`, or `undefined`_) |
| `Platform.is.electron`   | Boolean | 代码是否运行在Electron中?                   |
| `Platform.is.desktop`    | Boolean | 代码是否运行在桌面浏览器中?              |
| `Platform.is.bex`        | Boolean | 代码是否运行在浏览器扩展中? |
| `Platform.is.android`    | Boolean | 应用是否运行在一个安卓设备中?               |
| `Platform.is.blackberry` | Boolean | 应用是否运行在一个黑莓设备中? |
| `Platform.is.cros`       | Boolean | 应用是否运行在使用Chrome OS操作系统中? |
| `Platform.is.ios`        | Boolean | 应用是否运行在一个iOS设备中? |
| `Platform.is.ipad`       | Boolean | 应用是否运行在一个iPad中? |
| `Platform.is.iphone`     | Boolean | 应用是否运行在一个iPhone中? |
| `Platform.is.ipod`       | Boolean | 应用是否运行在一个iPod中? |
| `Platform.is.kindle`     | Boolean | 应用是否运行在一个Kindle设备中? |
| `Platform.is.linux`      | Boolean | 代码是否运行在一个使用Linux操作系统的设备中? |
| `Platform.is.mac`        | Boolean | 代码是否运行在一个使用MacOS操作系统的设备中? |
| `Platform.is.win`        | Boolean | 代码是否运行在一个使用Windows操作系统的设备中? |
| `Platform.is.winphone`   | Boolean | 代码是否运行在一个Windows Phone设备中? |
| `Platform.is.playbook`   | Boolean | 代码是否运行在一个 Blackberry Playbook设备中? |
| `Platform.is.silk`       | Boolean | 代码是否运行在一个Kindle Silk浏览器中? |
| `Platform.is.chrome`     | Boolean | 代码是否运行在一个Google Chrome浏览器中? |
| `Platform.is.firefox`     | Boolean | 代码是否运行在一个Firefox浏览器中? |
| `Platform.is.opera`      | Boolean | 代码是否运行在一个Opera浏览器中? |
| `Platform.is.safari`     | Boolean | 代码是否运行在一个Apple Safari浏览器中? |
| `Platform.is.vivaldi`     | Boolean | 代码是否运行在一个Vivaldi浏览器中? |
| `Platform.is.edge`       | Boolean | 代码是否运行在一个Microsoft Edge浏览器中? |
| `Platform.is.ie`         | Boolean | 代码是否运行在一个Microsoft Internet Explorer浏览器中? |
| `Platform.is.webkit`     | Boolean | 代码是否运行在一个Webkit或者基于webkit的内核中? |
| `Platform.has.touch`     | Boolean | 代码是否运行在一个触摸屏?         |
| `Platform.within.iframe` | Boolean | 应用是否运行在一个 IFRAME?                   |

::: tip
运行在mobile意味着代码运行在移动设备的浏览器上，而不是在一个Cordova包装器中。
:::

## 关于SSR的说明
当构建SSR时，只能使用`$q.platform`的形式。下面是一个在服务端使用的例子：

```js
import { Platform } from 'quasar'

// 你需要访问`ssrContext`
function (ssrContext) {
  const platform = process.env.SERVER
    ? Platform.parseSSR(ssrContext)
    : Platform //否则我们就是客户端

  // platform等同于非ssr构建中的全局导入
```

`ssrContext`可以在[@quasar/app-vite Boot File](/quasar-cli-vite/boot-files) or [@quasar/app-webpack Boot File](/quasar-cli-webpack/boot-files)中查看. 另外在[@quasar/app-vite preFetch](/quasar-cli-vite/prefetch-feature) or [@quasar/app-webpack preFetch](/quasar-cli-webpack/prefetch-feature)功能中, 它作为参数提供。

这样做的原因是，在仅客户端应用程序中，每个用户都将在浏览器中使用该应用程序的一个新实例。对于服务器端渲染，我们想要的是相同的：每个请求都应该有一个新的、隔离的应用实例，这样就不会有跨请求状态污染。所以平台需要分别绑定到每个请求。
