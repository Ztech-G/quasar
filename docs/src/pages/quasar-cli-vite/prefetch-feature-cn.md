---
title: 预加载特性
desc: (@quasar/app-vite) 在 Quasar 应用中，如何预取数据并初始化 Pinia，验证路由并重定向到另一个页面。
related:
  - /quasar-cli-vite/quasar-config-file
---

预取（PreFetch）是一项特性（**仅在使用 Quasar CLI 时可用**），它允许 Vue Router 捕获的组件（在 `/src/router/routes.js` 中定义）执行以下操作：

* 预取数据
* 验证路由
* 当某些条件不满足时（例如用户未登录），重定向到另一条路由
* 有助于初始化 Store 状态

上述所有操作都将在实际的路由组件渲染之前运行。

**它被设计为可在所有的 Quasar 模式下（单页应用程序（SPA）、渐进式 Web 应用程序（PWA）、服务器端渲染（SSR）、科尔多瓦（Cordova）、电子（Electron））工作**，不过它对于服务器端渲染（SSR）构建尤其有用。

## 安装

```js /quasar.config file
return {
  preFetch: true
}
```

::: warning
当你使用该功能预取数据时，可能会想要使用 Pinia。因此，在创建项目时，要确保项目文件夹中有 `/src/stores`（用于存放 Pinia 相关内容）文件夹。否则，你可以创建一个新项目，然后将新项目中 `store` 文件夹的内容复制到当前项目里，或者使用 `quasar new store` 命令来创建。
:::

## 预取如何助力服务器端渲染模式

这项功能对于服务器端渲染（SSR）模式尤为有用（但并不局限于此）。在服务器端渲染过程中，我们实际上是在渲染应用程序的一个“快照”，所以如果应用程序依赖于某些异步数据，**那么在开始渲染过程之前，就需要预取并解析这些数据**。

另一个需要关注的问题是，在客户端，我们在挂载客户端应用程序之前也需要有相同的数据可用——否则客户端应用程序将会使用不同的状态进行渲染，进而导致水化过程失败。

为了解决这个问题，获取到的数据需要存在于视图组件之外，存放在一个专门的数据存储区，或者说是一个“状态容器”中。在服务器端，我们可以在渲染之前预取数据并将其填充到存储区中。在我们挂载应用程序之前，客户端的存储区会直接获取服务器端的状态。

## 预取何时被激活

`preFetch` 钩子函数（将在下一部分介绍）由所访问的路由决定，而路由又决定了要渲染哪些组件。实际上，对于某一特定路由所需的数据，也是在该路由上渲染的组件所需要的数据。**因此，很自然（并且也是必要的）将钩子函数逻辑仅放置在路由组件内部**。这包括 `/src/App.vue`，在这种情况下，它只会在应用启动时运行一次。

为了理解这个钩子函数何时被调用，我们举个例子。假设我们有以下这些路由，并且我们为所有这些组件都编写了 `preFetch` 钩子函数：

```js Routes
[
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/shop',
    component: ShopLayout,
    children: [
      {
        path: 'all',
        component: ShopAll
      },
      {
        path: 'new',
        component: ShopNew
      },
      {
        path: 'product/:name',
        component: ShopProduct,
        children: [{
          path: 'overview',
          component: ShopProductOverview
        }]
      }
    ]
  }
]
```

现在，让我们来看看当用户按照下面指定的顺序依次访问这些路由时，钩子函数是如何被调用的。

| 正在访问的路由 | 被调用钩子函数的组件 | 备注 |
| --- | --- | --- |
| `/` | 先 `App.vue`，再 `LandingPage` | 由于应用启动，`App.vue` 的钩子函数会被调用。 |
| `/shop/all` | 先 `ShopLayout`，再 `ShopAll` | - |
| `/shop/new` | `ShopNew` | `ShopNew` 是 `ShopLayout` 的子组件，且 `ShopLayout` 已经渲染，所以 `ShopLayout` 不会再次调用。 |
| `/shop/product/pyjamas` | `ShopProduct` | - |
| `/shop/product/shoes` | `ShopProduct` | Quasar 注意到相同的组件已经渲染，但路由已更新且带有路由参数，所以会再次调用钩子函数。 |
| `/shop/product/shoes/overview` | 先 `ShopProduct`，再 `ShopProductOverview` | `ShopProduct` 带有路由参数，所以即使它已经渲染过，仍会被调用。 |
| `/` | `LandingPage` | - |

## 用例
该钩子被定义为路由组件上一个名为 `preFetch` 的自定义静态函数。请注意，由于这个函数会在组件实例化之前被调用，所以它无法访问 `this`。

以下是使用 Pinia 时的示例：

```html Some .vue component used as route
<template>
  <div>{{ item.title }}</div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useMyStore } from 'stores/myStore.js'

export default {
  // our hook here
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    // fetch data, validate route and optionally redirect to some other route...

    // ssrContext is available only server-side in SSR mode

    // No access to "this" here

    // Return a Promise if you are running an async job
    // Example:
    const myStore = useMyStore() // useMyStore(store) for SSR
    return myStore.fetchItem(currentRoute.params.id) // assumes it is async
  },

  setup () {
    const myStore = useMyStore()
    const $route = useRoute()

    // display the item from store state.
    const item = computed(() => myStore.items[$route.params.id])

    return { item }
  }
}
</script>
```

如果使用 `<script setup>` (and Vue 3.3+):

```html
<script setup>
/**
 * The defineOptions is a macro.
 * The options will be hoisted to module scope and cannot access local
 * variables in <script setup> that are not literal constants.
 */
defineOptions({
  preFetch () {
    console.log('running preFetch')
  }
})
</script>
```

::: tip
如果你正在开发一个服务器端渲染（SSR）应用程序，那么你可以查看在服务器端提供的 [ssrContext](/quasar-cli-vite/developing-ssr/ssr-context) 对象。
:::

```js
// related action for Promise example
// ...

actions: {
  fetchItem ({ commit }, id) {
    return axiosInstance.get(url, id).then(({ data }) => {
      this.items = data
    })
  }
}

// ...
```

### 重定向示例

以下是一个在某些情况下重定向用户的示例，比如当用户试图访问一个只有已认证用户才能查看的页面时。

```js
// We assume here we already wrote the authentication logic
// in one Pinia Store, so take as a high-level example only.
import { useMyStore } from 'stores/myStore'

preFetch ({ store, redirect }) {
  const myStore = useMyStore() // useMyStore(store) for SSR
  if (!myStore.isAuthenticated) {
    redirect({ path: '/login' })
  }
}
```


默认情况下，重定向会附带一个状态响应码 302，但我们在调用相关函数时，可以将这个状态码作为第二个可选参数传递，就像这样：

```js
redirect({ path: '/moved-permanently' }, 301)
```

如果调用 `redirect(false)`（仅在客户端支持！），它将中止当前的路由导航。请注意，如果你在 `src/App.vue` 中以这种方式使用它，将会阻止应用程序的启动，这是不可取的。

`redirect()` 方法需要一个 Vue Router 的位置对象。

### 使用预取功能初始化 Pinia

`preFetch` 钩子仅在应用启动时运行一次，因此你可以借此机会在此处初始化 Pinia 存储。

```tabs
<<| js Pinia on Non SSR |>>
// App.vue - handling Pinia stores
// example with a store named "myStore"
// placed in /src/stores/myStore.js|ts

import { useMyStore } from 'stores/myStore.js'

export default {
  // ...
  preFetch () {
    const myStore = useMyStore()
    // do something with myStore
  }
}
<<| js Pinia on SSR |>>
// App.vue - handling Pinia stores
// example with a store named "myStore"
// placed in /src/stores/myStore.js|ts

import { useMyStore } from 'stores/myStore.js'

export default {
  // ...
  preFetch ({ store }) {
    const myStore = useMyStore(store)
    // do something with myStore
  }
}
```

## 加载状态

良好的用户体验包括在用户等待页面加载完成时，通知他们后台正在进行某些操作。Quasar CLI 为此提供了两种现成的选项。

### 加载进度条

当你将 Quasar 的[加载进度条插件（LoadingBar）](/quasar-plugins/loading-bar)添加到你的应用程序中时，Quasar CLI 在运行 `preFetch` 钩子函数时，默认情况下将会使用这个插件。

### 加载提示

你也可以使用 Quasar 的[加载提示插件（Loading）](/quasar-plugins/loading)。以下是一个示例：

```js A route .vue component
import { Loading } from 'quasar'

export default {
  // ...
  preFetch ({ /* ... */ }) {
    Loading.show()

    return new Promise(resolve => {
      // do something async here
      // then call "resolve()"
    }).then(() => {
      Loading.hide()
    })
  }
}
```
