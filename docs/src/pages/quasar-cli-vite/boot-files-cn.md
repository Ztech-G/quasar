---
title: Boot文件
desc: (@quasar/app-vite) 在一个基于Quasar框架的应用中管理你的启动代码。
related:
  - /quasar-cli-vite/quasar-config-file
---

对于Quasar应用程序而言，一个常见的用例是“在根Vue应用实例被实例化之前运行代码”，比如注入并初始化你自己的依赖项（例如：Vue组件、库等），或者仅仅是配置应用的一些启动代码。

由于你无法直接访问任何 `/main.js` 文件（这样Quasar CLI才能为单页面应用（SPA）、渐进式Web应用（PWA）、服务器端渲染（SSR）、Cordova应用、Electron应用无缝地初始化并构建同一代码库），Quasar通过允许用户定义所谓的启动文件，为这个问题提供了一个优雅的解决方案。

在早期的Quasar版本中，若要在根Vue实例被实例化之前运行代码，你可以修改 `/src/main.js` 文件并添加任何你需要执行的代码。

这种方法存在一个重大问题：随着项目的不断发展，你的 `main.js` 文件很可能会变得杂乱无章且难以维护，这与Quasar鼓励开发者编写可维护且优雅的跨平台应用程序的理念相悖。

有了启动文件，就可以将每个依赖项拆分成独立且易于维护的文件。通过 `quasar.config` 文件配置，还能轻松禁用任何一个启动文件，甚至能根据上下文确定哪些启动文件会被纳入构建。

## 启动文件剖析

启动文件是一个简单的 JavaScript 文件，它可以选择导出一个函数。当 Quasar 启动应用程序时，会调用这个导出的函数，并且还会向该函数传递一个具有以下属性的 **对象**：

| 属性名称 | 描述 |
| --- | --- |
| `app` | Vue app 示例 |
| `router` |  Vue Router实例 from 'src/router/index.js' |
| `store` | Pinia实例 - **store only will be passed if your project uses Pinia (you have src/stores)** |
| `ssrContext` | 仅在服务器端可用（如果是为服务器端渲染（SSR）进行构建的话）。[了解更多信息](/quasar-cli-vite/developing-ssr/ssr-context)  |
| `urlPath` | URL 中的路径名（路径 + 搜索）部分。它还包含客户端端的哈希值。 |
| `publicPath` | 配置的公共路径 |
| `redirect` | 函数调用以重定向到另一个URL。接受字符串（完整URL）或Vue路由器位置字符串或对象。 |

```js
import { defineBoot } from '#q-app/wrappers'
export default defineBoot(({ app, router, store }) => {
  // something to do
})
```

Boot文件也可以是异步的:

```js
import { defineBoot } from '#q-app/wrappers'
export default defineBoot(async ({ app, router, store }) => {
  // something to do
  await something()
})
```

注意`defineBoot`导入。这本质上是一个无操作函数，但它的目的是帮助更好的IDE自动完成体验：

```js
import { defineBoot } from '#q-app/wrappers'

export default defineBoot(async ({ app, router, store }) => {
  // something to do
  await something()
})
```

注意，我们使用的是[ES6解构赋值](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。只分配你真正需要/使用的东西。

您可能会问自己，为什么我们需要导出函数。这实际上是可选的，但在您决定删除默认导出之前，您需要了解何时需要它：

```js
// Outside of default export:
//  - Code here gets executed immediately,
//  - Good place for import statements,
//  - No access to router, Pinia instance, ...

export default defineBoot(async ({ app, router, store }) => {
  // Code here has access to the Object param above, connecting
  // with other parts of your app;

  // Code here can be async (use async/await or directly return a Promise);

  // Code here gets executed by Quasar CLI at the correct time in app's lifecycle:
  //  - we have a Router instantiated,
  //  - we have the optional Pinia instance,
  //  - we have the root app's component ["app" prop in Object param] Object with
  //      which Quasar will instantiate the Vue app
  //      ("new Vue(app)" -- do NOT call this by yourself),
  //  - ...
})
```

## 何时使用Boot文件
::: warning
请确保您了解引导文件解决的问题以及何时使用它们是合适的，以避免在不需要它们的情况下应用它们。
:::

启动文件有一个特殊的目的：它们在应用程序的Vue根组件实例化之前运行代码，同时让你访问某些变量，如果你需要初始化一个库，干扰Vue路由器，注入Vue原型或注入Vue应用程序的根实例，这是必需的。

### 正确使用引导文件的例子

* 你的 Vue 插件有安装说明，比如需要在它上面调用 `app.use()` 方法。
* 你的 Vue 插件需要实例化添加到根实例的数据 —— 一个例子是 [vue-i18n](https://github.com/kazupon/vue-i18n/)。
* 你想使用 `app.mixin()` 添加一个全局混入。
* 你想向 Vue 应用的 `globalProperties` 添加一些内容以便于访问 —— 一个例子是在你的 Vue 文件中（对于选项式 API）方便地使用 `this.$axios`，而无需在每个这样的文件中都导入 Axios。
* 你想对路由器进行干预 —— 一个例子是使用 `router.beforeEach` 进行身份验证。
* 你想对 Pinia 进行干预。
* 配置库的相关方面 —— 一个例子是创建一个带有基础 URL 的 Axios 实例；然后你可以将其注入到 Vue 原型中，并且 / 或者将其导出（这样你就可以从应用程序的其他任何地方导入该实例）。

### 不必要使用启动文件的示例
* 对于像 Lodash 这样的纯 JavaScript 库而言，在使用它们之前并不需要任何初始化操作。例如，只有当你想要将 Lodash 注入到 Vue 原型中，以便能够在 Vue 文件中使用 `this.$_` 时，把它放在启动文件里才是有意义的，否则这样做就没有必要。

## boot启动文件用例
第一步始终是使用 Quasar 命令行界面（Quasar CLI）生成一个新的启动文件：

```bash
$ quasar new boot <name> [--format ts]
```

在这里，`<name>` 应该替换为适合你启动文件的一个合适名称。

这条命令会创建一个新文件：`/src/boot/<name>.js`，其内容如下：

```js
// import something here

// "async" is optional!
// remove it if you don't need it
export default async defineBoot(({ /* app, router, store */ }) => {
  // something to do
})
```

也可以返回一个Promise:

```js
// import something here

export default defineBoot(({ /* app, router, store */ }) => {
  return new Promise((resolve, reject) => {
    // do something
  })
})
```

::: tip
如果你不需要的话，默认导出部分可以从启动文件中省略。在那些你无需访问 “应用（app）”、“路由器（router）”、“存储（store）” 等等的情况下，就会是这种情形。
:::

现在你可以根据启动文件的预期用途，往该文件里添加内容。

> 别忘了，默认导出必须是一个函数。
> 不过，如果启动文件要对外暴露一些内容供后续使用，你可以有任意数量的具名导出。这种情况下，你可以在应用的任何地方导入这些具名导出。

最后一步是告知 Quasar 使用你新创建的启动文件。为此，你需要在 `/quasar.config` 文件中添加这个启动文件的相关配置。

```js
boot: [
  // references /src/boot/<name>.js
  '<name>'
]
```

在构建服务器端渲染（SSR）应用时，你可能希望某些启动文件仅在服务器端运行或仅在客户端运行，在这种情况下，你可以按以下方式操作：

```js
boot: [
  {
    server: false, // run on client-side only!
    path: '<name>' // references /src/boot/<name>.js
  },
  {
    client: false, // run on server-side only!
    path: '<name>' // references /src/boot/<name>.js
  }
]
```

如果你想指定 `node_modules` 中的启动文件，你可以在路径前加上 `~`（波浪号）字符来实现。

```js
boot: [
  // boot file from an npm package
  '~my-npm-package/some/file'
]
```

如果你希望某个启动文件仅在特定的构建类型下被注入到你的应用中：

```js
boot: [
  ctx.mode.electron ? 'some-file' : ''
]
```

### 重定向到另一个页面

::: warning
在进行重定向时请务必小心，因为你可能会将应用配置成进入无限重定向循环的状态。
:::

```js
export default defineBoot(({ urlPath, redirect }) => {
  // ...
  const isAuthorized = // ...
  if (!isAuthorized && !urlPath.startsWith('/login')) {
    redirect({ path: '/login' })
    return
  }
  // ...
})
```

`redirect()` 方法接受一个字符串（完整的 URL），或者一个 Vue Router 中的路由位置字符串或对象。在服务器端渲染（SSR）的情况下，它可以接受第二个参数，该参数应该是一个数字，对应于任何会使浏览器进行重定向的 HTTP 状态码（即 3xx 系列的状态码）。

```js
// Examples for redirect() with a Vue Router location:
redirect('/1') // Vue Router location as String
redirect({ path: '/1' }) // Vue Router location as Object

// Example for redirect() with a URL:
redirect('https://quasar.dev')
```

::: warning IMPORTANT!
Vue Router 位置（以字符串或对象形式）并非指的是 URL 路径（以及哈希值），而是指你所定义的实际 Vue Router 路由。
因此，**不要给它添加公共路径**，并且如果你使用的是 Vue Router 的哈希模式，也不要给它添加哈希值。

<br>假设我们定义了如下这样的 Vue Router 路由： <br><br>

```js
{
  path: '/one',
  component: PageOne
}
```

<br>那么，**无论我们的公共路径（`publicPath`）是什么**，我们都可以像这样调用 `redirect()` 方法：<br><br>

```js
// publicPath: /wiki; vueRouterMode: history
redirect('/one') // good way
redirect({ path: '/one' }) // good way
redirect('/wiki/one') // WRONG!

// publicPath: /wiki; vueRouterMode: hash
redirect('/one') // good way
redirect({ path: '/one' }) // good way
redirect('/wiki/#/one') // WRONG!

// no publicPath; vueRouterMode: hash
redirect('/one') // good way
redirect({ path: '/one' }) // good way
redirect('/#/one') // WRONG!
```
:::

正如前面章节所提到的，启动文件的默认导出可以返回一个 Promise。如果这个 Promise 被一个包含 “url” 属性的对象拒绝（rejected），那么 Quasar CLI 会将用户重定向到该 URL。

```js
export default defineBoot(({ urlPath }) => {
  return new Promise((resolve, reject) => {
    // ...
    const isAuthorized = // ...
    if (!isAuthorized && !urlPath.startsWith('/login')) {
      // the "url" param here is of the same type
      // as for "redirect" above
      reject({ url: '/login' })
      return
    }
    // ...
  })
})
```

或者一个更简单的等效方法：

```js
export default defineBoot(() => {
  // ...
  const isAuthorized = // ...
  if (!isAuthorized && !urlPath.startsWith('/login')) {
    return Promise.reject({ url: '/login' })
  }
  // ...
})
```

### Quasar 应用流程
为了能更好地理解启动文件的工作原理及其作用，你需要了解你的网站/应用是如何启动的：

1. 初始化 Quasar（组件、指令、插件、Quasar 的国际化设置、Quasar 图标集）
2. 导入 Quasar 的额外资源（Roboto 字体——如果使用了的话、图标、动画等等）
3. 导入 Quasar 的 CSS 样式以及你应用的全局 CSS 样式
4. 加载 `App.vue` 文件（此时尚未使用）
5. 将 Pinia（如果有使用的话）注入到 Vue 应用实例中
6. 导入路由器（在 `src/router` 目录中）
7. 导入启动文件
8. 执行路由器的默认导出函数
9. 执行启动文件的默认导出函数
10. （如果是在 Electron 模式下）导入 Electron 并将其注入到 Vue 原型中
11. （如果是在 Cordova 模式下）监听 “deviceready” 事件，只有在该事件触发后才继续执行后续步骤
12. 使用根组件实例化 Vue 并将其挂载到 DOM 上

## boot文件的例子

### Axios

```js
import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

const api = axios.create({ baseURL: 'https://api.example.com' })

export default defineBoot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }
```

### vue-i18n

```js
import { defineBoot } from '#q-app/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default defineBoot(({ app }) => {
  // Create I18n instance
  const i18n = createI18n({
    locale: 'en-US',
    messages
  })

  // Tell app to use the I18n instance
  app.use(i18n)
})
```

### Router authentication
Some boot files might need to interfere with Vue Router configuration:

```js
import { defineBoot } from '#q-app/wrappers'

export default defineBoot(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    // Now you need to add your authentication logic here, like calling an API endpoint
  })
})
```

## 从启动文件中访问数据
有时候，你希望在无法访问根 Vue 实例的文件中，使用你在启动文件里配置的数据。

幸运的是，由于启动文件只是普通的 JavaScript 文件，你可以在启动文件中添加任意数量的具名导出。

以 Axios 为例。有时候你想在 JavaScript 文件中使用 Axios 实例，但却无法访问根 Vue 实例。为了解决这个问题，你可以在启动文件中导出 Axios 实例，然后在其他地方导入它。

考虑以下用于配置 Axios 的启动文件：

```js axios boot file (src/boot/axios.js)
import { defineBoot } from '#q-app/wrapper'
import axios from 'axios'

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const api = axios.create({
  baseURL: 'https://api.example.com'
})

// for use inside Vue files through this.$axios and this.$api
// (only in Vue Options API form)
export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

// Here we define a named export
// that we can later use inside .js files:
export { axios, api }
```

在任何 JavaScript 文件中，你都可以像下面这样导入 Axios 实例。

```js
// we import one of the named exports from src/boot/axios.js
import { api } from 'boot/axios'
```

更多的语法阅读资料： [ES6 import](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import), [ES6 export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export).
