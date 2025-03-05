---
title: 懒加载 / 代码分割
desc: (@quasar/app-vite) How to create async chunks in a Quasar CLI with Vite app.
---
当你的网站或应用规模较小时，你可以将所有的布局、页面和组件都打包到初始的资源包中，并在应用启动时一次性加载所有内容。然而，当你的代码变得复杂，包含大量的布局、页面和组件时，这样做就不是最优选择了，因为这会极大地影响应用的加载时间。幸运的是，有办法解决这个问题。

我们将介绍如何对应用的部分内容进行懒加载和代码分割，从而使这些内容仅在需要时才被自动请求加载。这可以通过动态导入来实现。下面我们先来看一个示例，然后将其转换为使用懒加载的方式。在这个示例中，我们主要关注页面的加载，但同样的原理也适用于加载任何内容（如资源文件、JSON 数据等）。

## 懒加载路由页面
像下面这样使用 Vue Router 调用静态组件是很常见的做法。

::: warning
Quasar 文档假定你已经熟悉 Vue Router 了。下面仅介绍在 Quasar CLI 项目中如何使用它的基础知识。若想了解其完整的功能列表，请访问 Vue Router 文档。
:::

```js
import SomePage from 'pages/SomePage.vue'

const routes = [
  {
    path: '/some-page',
    component: SomePage
  }
]
```

现在，让我们对此进行修改，使用动态导入的方式，使页面仅在需要时才被加载：

```js
const routes = [
  {
    path: '/some-page',
    component: () => import('pages/SomePage.vue')
  }
]
```

很简单，对吧？这样做的效果是，它会为`/src/pages/SomePage.vue`创建一个单独的代码块，这个代码块只有在需要的时候才会被加载。在这种情况下，就是当用户访问`/some-page`路由的时候。

## 懒加载组件
通常情况下，你会先导入一个组件，然后将其注册到页面、布局或组件中。

```html
<script>
import SomeComponent from 'components/SomeComponent.vue'

export default {
  components: {
    SomeComponent,
  }
}
</script>
```

现在，让我们改变这种做法，使用动态导入的方式，让组件仅在需要时才被加载：
```html
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    SomeComponent: defineAsyncComponent(() => import('components/SomeComponent.vue')),
  }
}
</script>
```

## 即时懒加载

::: tip
“即时懒加载” 是一种按需加载资源的策略，意味着在需要某个资源（如组件、数据等）的瞬间才去加载它，而不是提前加载或者一次性加载所有资源。在前端开发里，常用于优化应用性能和提升用户体验，特别是在处理大型单页应用时，可避免初始加载过多不必要的代码，减少首屏加载时间。例如在 Vue 项目中，对于一些不常用的组件，可采用动态导入的方式实现即时懒加载。
:::

正如你在上面注意到的，我们使用的是动态导入（import('..资源路径..')），而不是常规导入（import 资源名 from './资源路径'）。动态导入本质上会返回一个 Promise，你可以对其进行如下使用：

```js
import('./categories.json')
  .then(categories => {
    // hey, we have lazy loaded the file
    // and we have its content in "categories"
  })
  .catch(() => {
    // oops, something went wrong...
    // couldn't load the resource
  })
```

与常规导入相比，使用动态导入的一个优点是导入路径可以在运行时确定。

```js
import('pages/' + pageName + '/' + idWithExtension)
```

## 使用 Vite 进行导入

### 动态导入语句

```js
const importList = import.meta.glob('./pages/*.vue')
const startIndex = '/pages/'.length

const routes = Object.keys(importList).map(key => {
  return {
    path: key.substring(startIndex, key.length - 4),
    component: importList[ key ]
  }
})
```

### 其他导入选项

有关使用 Vite 导入资产的更多信息，请查看 [此处](https://vitejs.dev/guide/assets.html)。
