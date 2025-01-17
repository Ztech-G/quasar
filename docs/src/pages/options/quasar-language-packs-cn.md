---
title: Quasar语言包
desc: 在一个Quasar应用中如何配置语言包。
keys: Lang,lang
related:
  - /options/rtl-support
  - /options/app-internationalization-cn
---

Quasar语言包指的是Quasar自己的组件的国际化，这些组件包含标签。

<DocApi file="Lang" />

<DocInstallation title="Configuration" config="lang" />

::: warning
请注意，下面描述的仅是Quasar组件的国际化。如果你需要国际化自己的组件，请阅读[App Internationalization](/options/app-internationalization)文档。
:::

如上所述，一些Quasar组件有他们自己的标签。说到国际化，一个选项是通过每个Quasar组件（比如QTable）的实例的`label`属性配置标签。这样你可以根据选择的语言自定义文本。然而，这需要时间，而且对于你的app增加了不必要的复杂性。**作为替代**，你可以使用Quasar语言包名它翻译了需要标准标签定义，比如”取消“、”清空“、”选择“、”更新“。不需要再次翻译，开箱即用。

::: tip
完整的Quasar语言，请查看[Quasar Languages on GitHub](https://github.com/quasarframework/quasar/tree/dev/ui/lang).
<br><br>**如果你想要的语言不再列表中**，请随时提交PR以添加它。最多需要5到10分钟。我们欢迎任何语言。
:::

## 配置默认语言包

除非另有配置（见下文），默认情况下Quasar使用`en-US`语言包。

### 硬编码
如果默认的Quasar语言宝包不是动态确定的（比如不依赖cookies），你可以使用以下方式：

#### Quasar CLI
编辑 `/quasar.config` 文件:

```js /quasar.config file
framework: {
  lang: 'de'
}
```

#### Quasar Vite Plugin
编辑 `main.js`:

```js
// ...
import { Quasar } from 'quasar'
// ...
import langDe from 'quasar/lang/de'
// ...
app.use(Quasar, {
  // ...,
  lang: langDe
})
```

#### Vue CLI
编辑 `main.js`:

```js
// ...
import { Quasar } from 'quasar'
// ...
import langDe from 'quasar/lang/de'
// ...
app.use(Quasar, {
  // ...,
  lang: langDe
})
```

#### Quasar UMD
包括Quasar版本的月语言包JS标签，并且告诉Quasar使用它。比如：

```html
<!-- include this after Quasar JS tag -->
<script src="https://cdn.jsdelivr.net/npm/quasar@2/dist/lang/de.umd.prod.js"></script>
<script>
  Quasar.Lang.set(Quasar.Lang.de)
</script>
```

在[UMD / Standalone](/start/umd)页查看哪些标签你需要添加到你的HTML文件中。

### 动态 (非SSR)
Quasar CLI: 如果你想要语言包必须通过动态选择（比如基于cookie），你需要创建一个boot文件：`$ quasar new boot quasar-lang-pack [--format ts]`。这个命令将会创建`/src/boot/quasar-lang-pack.js`文件。然后编辑它：

```tabs
<<| js With @quasar/app-vite |>>
import { Lang } from 'quasar'

// node_modules/quasar/..的相对路径
// 改成你的路径
const langList = import.meta.glob('../../node_modules/quasar/lang/*.js')
// 也可以只选择一些语言，比如下面选择了DE和FR:
// import.meta.glob('../../node_modules/quasar/lang/(de|fr).js')

export default async () => {
  const langIso = 'de' // 通过一些逻辑确定它。 (比如使用Cookie插件)

  try {
    langList[ `../../node_modules/quasar/lang/${ langIso }.js` ]().then(lang => {
      Lang.set(lang.default)
    })
  }
  catch (err) {
    console.error(err)
    //请求的Quasar语言包不存在，但是我们不希望中断app，所以捕获这个错误
  }
}
<<| js With @quasar/app-webpack |>>
import { Lang } from 'quasar'

export default async () => {
  const langIso = 'de' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(de|en-US)\.js$/ */
      'quasar/lang/' + langIso
    ).then(lang => {
      Lang.set(lang.default)
    })
  }
  catch (err) {
    console.error(err)
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
```

然后要在`/quasar.config`文件中注册这个boot文件。

```js
boot: [
  'quasar-lang-pack'
]
```

::: warning 始终约束动态导入
注意[Webpack magic comment](https://webpack.js.org/api/module-methods/#magic-comments) - `webpackInclude`的使用. 
否则，所有的可用的包将会被捆绑，导致应用体积增大和编译时间增长. See [Caveat for dynamic imports](/quasar-cli-webpack/lazy-loading#caveat-for-dynamic-imports)
:::

### 动态 (SSR)
在处理SSR时，我们不能使用单例对象，因为会污染会话。因此与上面相反，你必须从boot文件中指定`ssrContext`:

```tabs
<<| js With @quasar/app-vite |>>
import { Lang } from 'quasar'

// node_modules/quasar/..的相对路径
// 改成你的路径
const langList = import.meta.glob('../../node_modules/quasar/lang/*.js')
// 也可以只选择一些语言，比如下面选择了DE和FR:
// import.meta.glob('../../node_modules/quasar/lang/(de|fr).js')

// ! NOTICE ssrContext param:
export default async ({ ssrContext }) => {
  const langIso = 'de' //通过一些逻辑确定它。 (比如使用Cookie插件)

  try {
    langList[ `../../node_modules/quasar/lang/${ langIso }.js` ]().then(lang => {
      Lang.set(lang.default, ssrContext)
    })
  }
  catch (err) {
    console.error(err)
    //请求的Quasar语言包不存在，但是我们不希望中断app，所以捕获这个错误
  }
}
<<| js With @quasar/app-webpack |>>
import { Lang } from 'quasar'

// ! NOTICE ssrContext param:
export default async ({ ssrContext }) => {
  const langIso = 'de' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(de|en-US)\.js$/ */
      'quasar/lang/' + langIso
    ).then(lang => {
      Lang.set(lang.default, ssrContext)
    })
  }
  catch (err) {
    console.error(err)
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
```

## 在运行时更改语言包

### 更改语言包

下面的例子是使用QSelect动态更改Quasar组件的语言：

```tabs
<<| html With @quasar/app-vite |>>
<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    label="Quasar Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
  <div>{{ $q.lang.label.close }}</div>
</template>

<script>
import { useQuasar } from 'quasar'
import languages from 'quasar/lang/index.json'
import { ref, watch } from 'vue'

const modules = import.meta.glob('../../node_modules/quasar/lang/(de|en-US|es).js')

const appLanguages = languages.filter(lang =>
  ['de', 'en-US', 'es'].includes(lang.isoName)
)

const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName, value: lang.isoName
}))

export default {
  setup () {
    const $q = useQuasar()
    const lang = ref($q.lang.isoName)

    watch(lang, val => {
      modules[`../../node_modules/quasar/lang/${val}.js`]().then(lang => {
        $q.lang.set(lang.default)
      })
    })

    return {
      lang,
      langOptions
    }
  }
}
</script>
<<| html With @quasar/app-webpack |>>
<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    label="Quasar Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template>

<script>
import { useQuasar } from 'quasar'
import languages from 'quasar/lang/index.json'
import { ref, watch } from 'vue'

const appLanguages = languages.filter(lang =>
  [ 'de', 'en-US' ].includes(lang.isoName)
)

const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName, value: lang.isoName
}))

export default {
  setup () {
    const $q = useQuasar()
    const lang = ref($q.lang.isoName)

    watch(lang, val => {
      // dynamic import, so loading on demand only
      import(
        /* webpackInclude: /(de|en-US)\.js$/ */
        'quasar/lang/' + val
        ).then(lang => {
          $q.lang.set(lang.default)
        })
    })

    return {
      lang,
      langOptions
    }
  }
}
</script>
```

### 运行时更改一个特定的标签
如果您想将一个特定的标签更改为另一个标签，您可以这样做。下面是一个例子：

```tabs
<<| js Composition API |>>
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()

  function changeLabel () {
    $q.lang.table.noData = 'Hey... there is no data...'
  }

  return { changeLabel }
}
<<| js Options API |>>
methods: {
  changeLabel () {
    this.$q.lang.table.noData = 'Hey... there is no data...'
  }
}
```

If you want to do this outside of a .vue file (and you are NOT on SSR mode) then you can
如果想在非Vue文件中（并且不是SSR模式），你可以使用下面的方式：

```js /src/boot/some-boot-file.js
import { Lang } from 'quasar'

export default () {
  Lang.props.table.noData = 'Hey... there is no data...'
}
```

## 在App内使用Quasar语言包
虽然Quasar语言包**被设计为Quasar组件内部使用**，你仍然可以在你自己的组件中使用他们的标签。

```html
"Close" label in current Quasar Language Pack is:
{{ $q.lang.label.close }}
```

在[GitHub](https://github.com/quasarframework/quasar/tree/dev/ui/lang)中查看Quasar语言包查看`$q.lang`的结构。

## 识别本地配置

这里有一个由Quasar提供的开箱即用的方法用于确定用户的本地配置：

```js
// Vue文件的外部
import { Lang } from 'quasar'
Lang.getLocale() // 返回一个字符串

// Vue文件的内部
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()
  $q.lang.getLocale() // 返回一个字符串
}
```
