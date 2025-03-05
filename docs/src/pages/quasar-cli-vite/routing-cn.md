---
title: App 路由
desc: (@quasar/app-vite) How to use the Vue Router in a Quasar app.
---

你会注意到你的 Quasar 项目包含一个 `/src/router` 文件夹。这个文件夹存放着你的网站/应用的路由配置：

* “/src/router/index.js” 包含 Vue Router 的初始化代码。
* “/src/router/routes.js” 包含你的网站/应用的路由信息。

::: warning
Quasar 文档假定你已经熟悉 [Vue Router](https://github.com/vuejs/vue-router) 了。下面仅介绍在 Quasar CLI 项目中如何使用它的基础知识。关于其完整功能列表，请访问 [Vue Router 文档](https://router.vuejs.org/)。
:::

`/src/router/routes.js` 文件需要导入你网站或应用的页面（Pages）和布局（Layouts）组件。更多相关信息请阅读[使用布局和页面进行路由](/layout/routing-with-layouts-and-pages)文档页面。

当使用 Pinia 时，不能直接从其他脚本中导入存储（store），但它会被传递给 `/src/router/index.js` 导出的函数，因此可以从该文件中访问它。例如，你可以使用 `Router.beforeEach` 方法在路由中检查身份验证：

```js /src/router.js
import { defineRouter } from '#q-app/wrappers'

export default defineRouter(({ store /*, ssrContext */ }) => {
  // ...
  const userStore = useUserStore(store);

  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !userStore.isSignedIn) {
      next({ name: 'account-signin', query: { next: to.fullPath } })
    } else {
      next()
    }
  })
  // ...
})
```

::: tip
如果你正在开发一个服务器端渲染（SSR）应用，那么你可以查看在服务器端提供的 [ssrContext](/quasar-cli-vite/developing-ssr/ssr-context) 对象。
:::
