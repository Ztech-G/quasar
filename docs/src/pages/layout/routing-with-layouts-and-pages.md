---
title: Routing with Layouts and Pages
desc: 如何将 Vue Router 与您的 Quasar 布局和页面进行连接。
scope:
  tree:
    l: src
    c:
    - l: layouts
      c:
      - l: User.vue
        e: our QLayout definition
    - l: pages
      c:
      - l: Posts.vue
        e: page for /user/feed route
      - l: Profile.vue
        e: page for /user/profile route
---
您可以借助 Vue Router 的功能特性，在使用 Quasar 布局结构路由时发挥其优势。以下信息仅为建议，并非必须遵循的规则。Quasar 允许您拥有完全的自由度。以下内容仅作为示例供您参考。

[QLayout](/layout/layout) 是用于封装页面的组件，这样多个页面就可以共享相同的页眉、侧边栏等元素。不过，您也可以为每个页面配置页眉/页脚/侧边栏等元素，但它们都必须是 QLayout 组件的子元素。要理解其工作原理，您需要对 [Vue Router 的嵌套路由](https://router.vuejs.org/guide/essentials/nested-routes.html) 进行一些阅读。

为了更清晰地说明这一点，我们举个例子。我们有一个布局（“用户”）和两个页面（“用户动态”和“用户资料页”）。我们希望将网站/应用程序的路由配置为这样的形式：`/user/feed` 和 `/user/profile`

## 创建文件

**Quasar 并不强制要求特定的文件夹结构**。以下内容仅作示例说明。您可以将布局和页面放在一个文件夹中，或者将页面放在您所选择的特定文件夹结构中，或者创建自己的布局和页面文件夹。对于 Quasar 来说，这并不重要。重要的是您在 `/src/router/routes.js` 中正确引用它们。

让我们来创建布局文件和页面文件。您可以使用 Quasar CLI 的辅助命令来完成，或者干脆自己创建它们。

```bash
$ quasar new layout User
 app:new Generated layout: src/layouts/User.vue +0ms
 app:new Make sure to reference it in src/router/routes.js +2ms

$ quasar new page Profile Posts
 app:new Generated page: src/pages/Profile.vue +0ms
 app:new Make sure to reference it in src/router/routes.js +2ms

 app:new Generated page: src/pages/Posts.vue +1ms
 app:new Make sure to reference it in src/router/routes.js +0ms
```

上述命令会创建如下所示的文件夹结构：

<DocTree :def="scope.tree" />

## 定义路由
您的页面（位于 `/src/pages` 目录下）和布局（位于 `/src/layouts` 目录下）是通过 Vue Router 在 `/src/router/routes.js` 文件中注入到您的网站/应用程序中的，并且也在那里进行管理。每个页面和布局都需要在那里进行引用。

`routes.js` 中使用懒加载的示例：

```js
// we define our routes in this file

const routes = [
  {
    path: '/',
    component: () => import('pages/Landing')
  }
]

export default routes
```

`routes.js` 中使用提前加载的示例：

```js
// we define our routes in this file

import LandingPage from 'pages/Landing'

const routes = [
  {
    path: '/',
    component: LandingPage
  }
]

export default routes
```

::: tip
对使用 [@quasar/app-vite](/quasar-cli-vite/lazy-loading) 或 [@quasar/app-webpack](/quasar-cli-webpack/lazy-loading) 进行的懒加载/代码分割进行更深入的分析。
:::

::: tip
配置使用布局和页面的路由基本上就是正确地嵌套路由，这一点我们将在下一节中看到。
:::

## 嵌套路由
真正的应用程序用户界面通常由嵌套层级很深的组件构成。而且，URL 的各个部分通常与某种嵌套组件的结构相对应，例如：

```
/user/profile                   /user/posts
+------------------+            +-----------------+
| User             |            | User            |
| +--------------+ |            | +-------------+ |
| | Profile      | |  +------>  | | Posts       | |
| |              | |            | |             | |
| +--------------+ |            | +-------------+ |
+------------------+            +-----------------+
```

借助 Vue Router，通过嵌套路由配置来表达这种关系非常简单。我们注意到一些情况：这两个页面都需要被一个 User 组件包裹起来。嘿，User 组件就成了一个 Layout（布局）！

由于用户布局会包裹内部页面，所以它们需要一个注入点。这个注入点由 `<router-view>` 组件提供：

```html /src/layouts/User.vue
<template>
  <q-layout>
    ...

    <!-- this is where the Pages are injected -->
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    ...
  </q-layout>
</template>
```

```html /src/pages/Profile.vue or Posts.vue
<template>
  <q-page>
    ...page content...
  </q-page>
</template>
````

我们的示例中指定了某些路由（/user/profile 和 /user/posts）。**那么现在我们该如何将所有内容整合起来呢？** 我们编辑路由文件。在那里我们将配置路由，指明哪些是布局组件，哪些是页面组件，并将它们引入到我们的应用中：

```js src/router/routes.js
import User from 'layouts/User'
import Profile from 'pages/Profile'
import Posts from 'pages/Posts'

const routes = [
  {
    path: '/user',

    // we use /src/layouts/User component which is imported above
    component: User,

    // hey, it has children routes and User has <router-view> in it;
    // It is really a Layout then!
    children: [
      // Profile page
      {
        path: 'profile', // here it is, route /user/profile
        component: Profile // we reference /src/pages/Profile.vue imported above
      },

      // Posts page
      {
        path: 'posts', // here it is, route /user/posts
        component: Posts // we reference /src/pages/Posts.vue imported above
      }
    ]
  }
]

export default routes
```

::: warning
请注意，以 `/` 开头的嵌套路径将被视为根路径。这使您能够利用组件嵌套而不必使用嵌套 URL。
:::

我们的路由配置（位于 `/src/router/routes.js` 文件中）应当是这样的：

```js
export default [
  {
    path: '/user',

    // We point it to our component
    // where we defined our QLayout
    component: () => import('layouts/user'),

    // Now we define the sub-routes.
    // These are getting injected into
    // layout (from above) automatically
    // by using <router-view> placeholder
    // (need to specify it in layout)
    children: [
      {
        path: 'feed',
        component: () => import('pages/user-feed')
      },
      {
        path: 'profile',
        component: () => import('pages/user-profile')
      }
    ]
  }
]
```

请注意以下几点：

* 我们正在使用布局和页面的懒加载机制（`() => import(<路径>)`）。如果您的网站/应用程序规模较小，那么您可以跳过懒加载带来的好处，因为其带来的额外开销可能并不值得：
  ```js
  import UserLayout from 'layouts/user'
  import UserFeed from 'pages/user-feed'
  import UserProfile from 'pages/user-profile'

  export default [
    path: '/user',
    component: UserLayout,
    children: [
      { path: 'feed', component: UserFeed },
      { path: 'profile', component: UserProfile }
    ]
  ]
  ```
* Quasar 提供了一些预设的 Webpack 映射别名（“layouts”指向“/src/layouts”，“pages”指向“/src/pages”），这些映射别名在上述示例中得到了应用。
* 在 Vue Router 配置中，布局的页面被声明为其子项，以便 `<router-view/>` 能够知道要注入哪个页面组件。请记住，每当您的布局附带页面时，都要始终使用此 Vue 组件。

  ```html
  <q-layout>
    ...
    <q-page-container>
      <!--
        This is where your pages will get
        injected into your Layout
      -->
      <router-view />
    </q-page-container>
    ...
  </q-layout>
  ```

<q-separator class="q-mt-xl" />

::: tip
请查阅 [Vue Router](https://router.vuejs.org/) 的文档，以便全面理解上述示例以及如何为您的应用配置路由和路由规则。
:::
