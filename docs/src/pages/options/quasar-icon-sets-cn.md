---
title: Quasar图标集
desc: 如何为 Quasar 组件配置图标集
keys: IconSet,iconSet
related:
  - /options/installing-icon-libraries-cn
  - /vue-components/icon
---

Quasar组件有它们自己的图标。而不是强制你使用一个特定的图标库（为了让他们可以正确显示），Quasar让你选择它应该为其组件使用哪些图标。这叫做`Quasar图标集`。

你可以安装多个图标库，但是你只能选择一个用于Quasar的组件。

Quasar目前支持: [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons), [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols), [Font Awesome](https://fontawesome.com/icons), [Ionicons](http://ionicons.com/), [MDI](https://materialdesignicons.com/), [Eva Icons](https://akveo.github.io/eva-icons), [Themify Icons](https://themify.me/themify-icons), [Line Awesome](https://icons8.com/line-awesome) and [Bootstrap Icons](https://icons.getbootstrap.com/).

Quasar组件可以使用你提供的图标文件（SVG或任何图像格式），查看[QIcon | Image icons](/vue-components/icon#image-icons)获取详细内容。

你还可以提供一个图标映射功能，以添加支持其他图标库或者重新映射你喜欢的图标，查看[QIcon | Custom mapping](/vue-components/icon#custom-mapping) 获取详情。比如使用图像图标，你可以使用这个把长文件路径映射成简短易于理解的名字。

::: tip
相关页面: [安装图标库](/options/installing-icon-libraries-cn) and [QIcon组件](/vue-components/icon).
:::

<DocApi file="IconSet" />

## 配置默认的图标集
**Quasar有两种类型的图标集: 基于webfont和基于svg。**

除非另有配置， Quasar使用Material Icons webfont作为它的组件的图标集. 你也可以告诉Quasar使用其他的图标集，但是如果要使用基于webfont的图标集，一定要在你的应用中包含它(查看[安装图标库](/options/installing-icon-libraries-cn)).

### 硬编码
If the default Quasar Icon Set is not dynamically determined (does not depends on cookies for example), then you can:
如果默认的Quasar图标集不能动态指定（比如不依赖cookies），你可以：

#### Quasar CLI 的方式
再次编辑`/quasar.config`文件:

```js
framework: {
  // 基于webfont的例子
  iconSet: 'mdi-v7'
}
```

```js
framework: {
  // 基于svg的例子
  iconSet: 'svg-mdi-v7'
}
```

要查看所有配置项，请查看 [GitHub](https://github.com/quasarframework/quasar/tree/dev/ui/icon-set) 仓库.

下面是包含 MDI & Fontawesome 的完整例子并且告诉Quasar使用Fontawesome作为其组件的图标集。

```js
extras: [
  'mdi-v7',
  'fontawesome-v6'
],
framework: {
  iconSet: 'fontawesome-v6'
}
```

这将在你的应用中同时使用MDI和Fontawesome，并且所有的Quasar组件将使用Fontawesome图标。

#### UMD方式
包含基于你的Quasar版本的Quasar图标集标签，并告诉Quasar使用它：

```html
<!-- 在Quasar JS标签之后添加它-->
<script src="https://cdn.jsdelivr.net/npm/quasar@v2/dist/icon-set/fontawesome-v6.umd.prod.js"></script>
<script>
  Quasar.IconSet.set(Quasar.IconSet.fontawesomeV6)
</script>
```

在[UMD / Standalone](/start/umd)这个页面查看哪些标签你需要添加到你的HTML文件中。

#### Quasar Vite 插件方式
编辑`main.js`:

```js /main.js
// ...
import { Quasar } from 'quasar'
// ...
import iconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
// ...
app.use(Quasar, {
  // ...,
  iconSet: iconSet
})
```

#### Vue CLI 方式
编辑`main.js`:

```js /main.js
import iconSet from 'quasar/icon-set/fontawesome-v6'
// ...
import { Quasar } from 'quasar'
// ...
app.use(Quasar, {
  // ...,
  iconSet: iconSet
})
```

### 动态 (非SSR)
Quasar CLI: 如果你期望Quasar图标集必须动态选择 (比如：基于cookie), 你需要创建一个boot文件: `$ quasar new boot quasar-icon-set [--format ts]`. 这个指令会创建`/src/boot/quasar-icon-set.js`文件。编辑它:

```tabs /src/boot/quasar-icon-set.js
<<| js With @quasar/app-vite |>>
import { IconSet } from 'quasar'

// node_modules/quasar/..的相对路径
// 改成你的路径
const iconSetList = import.meta.glob('../../node_modules/quasar/icon-set/*.js')
// 也可以选择一些(比如下面之选择了 mdi-v7和fontawesome-v6):
// import.meta.glob('../../node_modules/quasar/icon-set/(mdi-v7|fontawesome-v6).js')

export default async () => {
  const iconSetName = 'mdi-v7' // 通过一些逻辑确定它。 (比如使用Cookie插件)

  try {
    iconSetList[ `../../node_modules/quasar/icon-set/${ iconSetName }.js` ]().then(lang => {
      IconSet.set(setDefinition.default)
    })
  }
  catch (err) {
    console.error(err)
    //请求的Quasar图标集不存在，但是我们不希望中断app，所以捕获这个错误
  }
}
<<| js With @quasar/app-webpack |>>
import { IconSet } from 'quasar'

export default async () => {
  const iconSetName = 'mdi-v7' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(mdi-v7|fontawesome-v6)\.js$/ */
      'quasar/icon-set/' + iconSetName
    ).then(setDefinition => {
      IconSet.set(setDefinition.default)
    })
  }
  catch (err) {
    // Requested Quasar Icon Set does not exist,
    // let's not break the app, so catching error
  }
}
```

在 `/quasar.config` 文件中注册这个boot文件:

```js
boot: [
  'quasar-icon-set'
]
```

::: warning 始终约束动态导入
注意[Webpack magic comment](https://webpack.js.org/api/module-methods/#magic-comments) - `webpackInclude`的使用. 
否则，所有的可用的包将会被捆绑，导致应用体积增大和编译时间增长. See [Caveat for dynamic imports](/quasar-cli-webpack/lazy-loading#caveat-for-dynamic-imports)
:::

### 动态 (SSR)
在处理SSR时，我们不能使用单例对象，因为会污染会话。因此与上面相反，你必须从boot文件中指定`ssrContext`:

```tabs /src/boot/quasar-icon-set.js
<<| js With @quasar/app-vite |>>
import { IconSet } from 'quasar'

// node_modules/quasar/..的相对路径
// 改成你的路径
const iconSetList = import.meta.glob('../../node_modules/quasar/icon-set/*.js')
// 也可以选择一些(比如下面之选择了 mdi-v7和fontawesome-v6):
// import.meta.glob('../../node_modules/quasar/icon-set/(mdi-v7|fontawesome-v6).js')

// ! 注意 ssrContext 参数:
export default async ({ ssrContext }) => {
  const iconSetName = 'mdi-v7' // 通过一些逻辑确定它。 (比如使用Cookie插件)

  try {
    iconSetList[ `../../node_modules/quasar/icon-set/${ iconSetName }.js` ]().then(lang => {
      IconSet.set(setDefinition.default, ssrContext)
    })
  }
  catch (err) {
    console.error(err)
    //请求的Quasar图标集不存在，但是我们不希望中断app，所以捕获这个错误
  }
}
<<| js With @quasar/app-webpack |>>
import { IconSet } from 'quasar'

// ! NOTICE ssrContext param:
export default async ({ ssrContext }) => {
  const iconSetName = 'mdi-v7' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(mdi-v7|fontawesome-v6)\.js$/ */
      'quasar/icon-set/' + iconSetName
    ).then(setDefinition => {
      IconSet.set(setDefinition.default, ssrContext)
    })
  }
  catch (err) {
    console.error(err)
    // Requested Quasar Icon Set does not exist,
    // let's not break the app, so catching error
  }
}
```

## 运行时更改Quasar图标集

### 更改图标集

Quasar图标集是响应性的，因此所有组件将会在你更改`$q.iconSet`对象时同时更新。举个例子：

```tabs
<<| js 组合式 API |>>
import { useQuasar } from 'quasar'
//导入MDI图标集
import mdiIconSet from 'quasar/icon-set/mdi-v7.js'

setup () {
  const $q = useQuasar()

  function changeIconSetToMdiIconSet () {
    //设置为MDI图标集
    $q.iconSet.set(mdiIconSet)
  }

  return {
    changeIconSetToMdiIconSet
  }
}
<<| js 选项式 API |>>
import mdiIconSet from 'quasar/icon-set/mdi-v7.js'

methods: {
  changeIconSetToMdiIconSet () {
    this.$q.iconSet.set(mdiIconSet)
  }
}
```

如果你想在非vue文件中更改图标集 (并且不是SSR模式)，你可以

```js /src/boot/some-boot-file.js
import { IconSet } from 'quasar'
import mdiIconSet from 'quasar/icon-set/mdi-v7.js'

export default () {
  IconSet.set(mdiIconSet)
}
```

### 更改一个特定的图标

如果你想把一个图标改成另一个，你可以：

```tabs
<<| js 组合式 API |>>
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()

  function changeQEditorHeaderIcon () {
    $q.iconSet.editor.header1 = 'fas fa-font'
  }

  return { changeQEditorHeaderIcon }
}
<<| js 选项式 API |>>
methods: {
  changeQEditorHeaderIcon () {
    this.$q.iconSet.editor.header1 = 'fas fa-font'
  }
}
```

如果你想在非vue文件更改图标集(并且不是SSR模式)你可以

```js /src/boot/some-boot-file.js
import { IconSet } from 'quasar'

export default () {
  IconSet.props.editor.header1 = 'fas fa-font'
}
```
