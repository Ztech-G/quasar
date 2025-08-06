---
title: 使用布局和页面进行路由管理
desc: 如何将 Vue Router 与 Quasar 布局和页面连接起来
scope:
  tree:
    l: src
    c:
    - l: layouts
      c:
      - l: User.vue
        e: 我们的 QLayout 定义
    - l: pages
      c:
      - l: Posts.vue
        e: /user/feed 路由的页面
      - l: Profile.vue
        e: /user/profile 路由的页面
---

你可以在使用 Quasar 布局构建路由时充分利用 Vue Router 的功能。以下信息仅作为建议，不是强制要求。Quasar 给予你完全的自由。请将以下内容仅作为示例参考。

[QLayout](/layout/layout) 是用于封装页面的组件，使多个页面可以共享相同的页眉、抽屉等。不过，你也可以为每个页面配置独立的页眉/页脚/抽屉，但它们都必须是 QLayout 组件的子组件。要理解这是如何工作的，你需要阅读一下 [Vue Router 嵌套路由](https://router.vuejs.org/guide/essentials/nested-routes.html)。

为了更清楚地说明，让我们举个例子。我们有一个布局（'user'）和两个页面（'user-feed' 和 'user-profile'）。我们想要将网站/应用的路由配置成这样：`/user/feed` 和 `/user/profile`。

## 创建文件

**Quasar 不强制要求特定的文件夹结构**。以下仅是一个示例。你可以将布局和页面放在同一个文件夹中，或者将页面放在你选择的特定文件夹结构中，或者创建自己的布局和页面文件夹。这对 Quasar 来说并不重要。重要的是你在 `/src/router/routes.js` 中正确引用它们。

让我们创建布局和页面文件。你可以使用 Quasar CLI 的辅助命令或者直接创建它们。

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

The commands above create the following folder structure:

<DocTree :def="scope.tree" />

## Defining Routes
Your Pages (`/src/pages`) and Layouts (`/src/layouts`) are injected into your website/app (and also managed) through Vue Router in `/src/router/routes.js`. Each Page and Layout needs to be referenced there.

Example of `routes.js` using lazy-loading:

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

Example of `routes.js` using eager loading:

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
More in-depth analysis of Lazy loading / code-splitting with [@quasar/app-vite](/quasar-cli-vite/lazy-loading) or [@quasar/app-webpack](/quasar-cli-webpack/lazy-loading).
:::

::: tip
Configuring routes to use Layouts and Pages basically consists of correctly nesting routes, as we'll see in the next section.
:::

## Nested Routes
Real app UIs are usually composed of components that are nested multiple levels deep. It is also very common that the segments of a URL corresponds to a certain structure of nested components, for example:

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

With Vue Router, it is very simple to express this relationship using nested route configurations. We notice some things: both pages need to be wrapped by a User component. Hey, User component is then a Layout!

Since User layout wraps inner pages, they need an injection point. This is supplied by the `<router-view>` component:

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

Our example has some routes specified (/user/profile and /user/posts). **So how can we put everything together now?** We edit the routes file. That's where we will configure routes, tell which components are Layouts and which are Pages and also reference/import them into our app:

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
Note that nested paths that start with `/` will be treated as a root path. This allows you to leverage component nesting without having to use a nested URL.
:::

Our routes configuration (`/src/router/routes.js`) should look like this:

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

Please notice a few things:

* We are using lazy loading of layouts and pages (`() => import(<path>)`). If your website/app is small, then you can skip the lazy loading benefits as they could add more overhead than what it's worth:
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
* Quasar provides some out of the box Webpack aliases ('layouts' which points to '/src/layouts' and 'pages' which points to '/src/pages'), which are used in the above examples.
* Pages of a Layout are declared as children of it in the Vue Router configuration so that `<router-view/>` will know what page component to inject. Remember to always use this Vue component whenever your Layout has pages attached to it.

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
Please check [Vue Router](https://router.vuejs.org/) documentation to fully understand the examples above and how to configure the router and its routes for your app.
:::
