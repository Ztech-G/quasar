---
title: 安装图标库
desc: Quasar应用中如何使用图标库
related:
  - /options/quasar-icon-sets
  - /vue-components/icon
---

::: tip
**这个页面讲的只是[webfont icons](/vue-components/icon#webfont-icons)。** [Svg icons](/vue-components/icon#svg-icons) 不需要任何安装步骤。
:::

你很可能想在你的网页或应用中使用图标，Quasar对下列图标库提供了一个开箱即用的方法：[Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons), [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols), [Font Awesome](https://fontawesome.com/icons), [Ionicons](http://ionicons.com/), [MDI](https://materialdesignicons.com/), [Eva Icons](https://akveo.github.io/eva-icons), [Themify Icons](https://themify.me/themify-icons), [Line Awesome](https://icons8.com/line-awesome) and [Bootstrap Icons](https://icons.getbootstrap.com/). 但是你也可以添加其他图标库 [添加方式](/vue-components/icon#custom-mapping) 。

::: tip
关于webfont图标，你可以安装一个或多个图标库。
:::

## 安装 Webfonts

如果你只构建网页端，可以使用CDN这一方式。然而，当构建一个移动端或Electron应用，你可能不想要依赖网络连接，关于这个问题Quasar提供了一个解决方案：

编辑`/quasar.config`文件:

```js
extras: [
  'material-icons'
]
```

Webfont图标通过[@quasar/extras](https://github.com/quasarframework/quasar/tree/dev/extras) 包引入. 你不需要导入到你的应用中, 只需要像上面那样配置`/quasar.config`文件。

添加一个或多个图标集:
```js
extras: [
  'material-icons',
  'mdi-v7',
  'ionicons-v4', // 最新的可用的版本 v4.6.3
  'eva-icons',
  'fontawesome-v6',
  'themify',
  'line-awesome',
  'bootstrap-icons'
]
```

关于所有的配置项，请查看[GitHub](https://github.com/quasarframework/quasar/tree/dev/extras#webfonts) 仓库.

现在可以使用[QIcon](/vue-components/icon)组件.

## 使用 CDN 作为替代
如果你想使用 CDN (Content Delivery Network), 你所需要做的就是在/index.html或/src/index.template.html文件中添加包含指向CDN URL的样式标签。

如果你想要使用CND这种方式，则不需要在`/quasar.config file > extras`添加你想要的图标集。
In case you follow this path, do not also add the icon sets that you want in `/quasar.config file > extras`. 使用[UMD 安装指南](/start/umd#installation) 并编辑 /index.html 或 /src/index.template.html。

## 使用 Fontawesome-Pro（未完成翻译）
如果你有Fontawesome v6 Pro 许可证并且用它替换Fontawesome免费版本,遵循以下说明:

1. Open the [Linked Accounts section](https://fontawesome.com/account) in Fontawesome's user account page to grab the npm TOKENID (login if necessary).
2. Create or append TOKENID into the `.npmrc` file (file path same as package.json):
  ```
  @fortawesome:registry=https://npm.fontawesome.com/
  //npm.fontawesome.com/:_authToken=TOKENID
  ```
3. Install Fontawesome webfonts:
  ```tabs
  <<| bash Yarn |>>
  $ yarn add @fortawesome/fontawesome-pro
  <<| bash NPM |>>
  $ npm install --save @fortawesome/fontawesome-pro
  <<| bash PNPM |>>
  $ pnpm add @fortawesome/fontawesome-pro
  <<| bash Bun |>>
  $ bun add @fortawesome/fontawesome-pro
  ```
4. Create new boot file:
  ```bash
  $ quasar new boot fontawesome-pro [--format ts]
  ```
5. Edit the `/quasar.config` file:
  ```js
  boot: [
    ...
    'fontawesome-pro' // Add boot file
  ],
  extras: [
    // 'fontawesome-v6' // Disable free version!
  ],
  framework: {
    // if you want Quasar to use Fontawesome for its icons
    iconSet: 'fontawesome-v6-pro'
  }
  ```
6. Edit `/src/boot/fontawesome-pro.js`:
  ```js
  // required
  import '@fortawesome/fontawesome-pro/css/fontawesome.css'
  import '@fortawesome/fontawesome-pro/css/light.css'
  // do you want these too?
  // import '@fortawesome/fontawesome-pro/css/thin.css'
  // import '@fortawesome/fontawesome-pro/css/duotone.css'
  // import '@fortawesome/fontawesome-pro/css/brands.css'
  // import '@fortawesome/fontawesome-pro/css/solid.css'
  // import '@fortawesome/fontawesome-pro/css/regular.css'
  ```
7. (Optional) Override default icons:

Since the default `font-weight` for fontawesome-pro is `light` or `fal`, some icons used by the framework components may not be desirable. The best way to handle this is to override it in the boot file that you created.

For instance, to override the `fal` version of the close icon for chips, do this:

_First_, find the icon used for chip close in Quasar Fontawesome v6 Pro [icon-set source](https://github.com/quasarframework/quasar/blob/dev/ui/icon-set/fontawesome-v6-pro.js).

(Alternatively, you can check inside the render function of the component you are overriding.)

```js Example
chip: {
  remove: 'fal fa-times-circle'
```

_Then_, override it in your `/src/boot/fontawesome-pro.js`

```js
import '@fortawesome/fontawesome-pro/css/fontawesome.min.css'
import '@fortawesome/fontawesome-pro/css/solid.min.css'
import '@fortawesome/fontawesome-pro/css/light.min.css'

// example
export default ({ app }) => {
  app.config.globalProperties.$q.iconSet.chip.remove = 'fas fa-times-circle'
}
```
