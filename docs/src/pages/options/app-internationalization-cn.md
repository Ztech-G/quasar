---
title: App国际化 (i18n)
desc: 在Quasar应用中如何使用vue-i18n.
related:
  - /options/rtl-support
  - /options/quasar-language-packs-cn
---


国际化是一个设计过程，它确保产品（网站或应用程序）可以适应各种语言和地区，而不需要对源代码进行工程更改。可以把国际化看作是为本地化做好准备。

::: tip
处理网页和应用推荐使用[vue-i18n](https://github.com/intlify/vue-i18n-next). 这个包应该通过 [@quasar/app-vite Boot File](/quasar-cli-vite/boot-files) 或 [@quasar/app-webpack Boot File](/quasar-cli-webpack/boot-files)添加. 在Boot文件文档中你可以看到添加vue-i18n的例子。
:::

::: warning
本文档假定您已熟知[vue-i18n](https://github.com/intlify/vue-i18n-next). 下面的内容只简单的介绍如何在一个Quasar CLI项目中如何使用vue-i18n一些基础内容。关于vue-i18n的完整内容请查看它的文档 [Vue I18n documentation](https://vue-i18n.intlify.dev).
:::

## 手动设置

如果你在`yarn create quasar` (或者 `npm init quasar@latest` 或者 pnpm 或者Bun)错过添加i18n，你可以通过下面的方式手动添加：

1. 在应用中安装`vue-i18n`依赖。

```tabs
<<| bash Yarn |>>
$ yarn add vue-i18n@next
<<| bash NPM |>>
$ npm install --save vue-i18n@next
<<| bash PNPM |>>
$ pnpm add vue-i18n@next
<<| bash Bun |>>
$ bun add vue-i18n@next
```

2. 创建`src/boot/i18n.js`文件并编写下面内容:

```js
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default ({ app }) => {
  // 创建I18n实例
  const i18n = createI18n({
    locale: 'en-US',
    legacy: false, // 如果不使用组合式API请注释它
    messages
  })

  // 给app传I18n的实例
  app.use(i18n)
}
```

3. 在你的应用中创建一个目录(/src/i18n/)用来定义你想要支持的各种语言。比如: [src/i18n](https://github.com/quasarframework/quasar-starter-kit/tree/master/template/src/i18n). 注意第二步中的"import messages from 'src/i18n'" 。 这是编写要导入的内容的步骤。

4. 现在在 `quasar.config`的 `boot` 部分引用这个文件:

```js /quasar.config file
return {
  boot: [
    // ...
    'i18n'
  ],

  // ...
}
```

现在你可以在你的页面中使用它了。

## 在SFC中设置翻译块

如果我们想要在Quasar CLI项目的一个SFC中支持使用`<i18n>`标签，我们需要修改一下存在的配置。

首先安装`@intlify/vue-i18n-loader`：

```tabs
<<| bash Yarn |>>
$ yarn add --dev @intlify/vue-i18n-loader
<<| bash NPM |>>
$ npm install --save-dev @intlify/vue-i18n-loader
<<| bash PNPM |>>
$ pnpm add -D @intlify/vue-i18n-loader
<<| bash Bun |>>
$ bun add --dev @intlify/vue-i18n-loader
```

然后编辑位于项目根目录中的`quasar.config`文件。我们必须包含以下内容：

```js /quasar.config file
import { fileURLToPath } from 'node:url'

build: {
  chainWebpack: chain => {
    chain.module
      .rule('i18n-resource')
        .test(/\.(json5?|ya?ml)$/)
          .include.add(
            fileURLToPath(
              new URL('./src/i18n', import.meta.url)
            )
          )
          .end()
        .type('javascript/auto')
        .use('i18n-resource')
          .loader('@intlify/vue-i18n-loader')

    chain.module
      .rule('i18n')
        .resourceQuery(/blockType=i18n/)
        .type('javascript/auto')
        .use('i18n')
          .loader('@intlify/vue-i18n-loader')
  }
}
```

## 如何使用

下面的这个例子显示了主要的用法：

```html
<template>
  <q-page>
    <!-- 文本插值, reactive -->
    {{ $t('hello') }}

    <!-- 属性绑定, reactive -->
    <q-btn :label="$t('hello')" />

    <!-- v-html 指令使用 -->
    <span v-html="content"></span>
  </q-page>
</template>

<script setup>
// 组合式API
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 绑定一个静态变量，非响应式的
// const staticContent = t('hello')
// 绑定到一个响应性变量，但是是一次性赋值，区域设置更改不会更新该值
// const reactiveStaticContent = ref(t('hello'))

// 绑定一个响应式变量，本地改变将反射该值
const content = computed(() => t('hello'))

function notify() {
  Notify.create({
    type: 'positive',
    message: t('hello')
  })
}
</script>
```

```html
<script>
// Options API variant
export default {
  data() {
    return {
      // bound to a reactive variable, but one-time assignment, locale changes will not update the value
      content: this.$t('hello')
    }
  }
}
</script>
```

## 添加新语言

比如你想添加德语。

1. 创建一个新文件`src/i18n/de/index.js`并且复制这个文件的内容`src/i18n/en-US/index.js` 然后改变语言字符串.
2. 然后更改`src/i18n/index.js` 并且添加 `de` 语言.

```js
import enUS from './en-US'
import de from './de'

export default {
  'en-US': enUS,
  'de': de
}
```

## 创建一个语言开关

```html Some Vue file
<template>
  <!-- ...... -->
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="Quasar语言"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
  <!-- ...... -->
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'de', label: 'German' }
      ]
    }
  }
}
</script>
```

## 大写字母（未全部翻译）
许多语言（如希腊语、德语和荷兰语）对于大写字母的显示都有非直观的规则，并且有一个您应该注意的边缘情况:

QBtn组件将会使用 CSS `text-transform: uppercase` 规则自动将标签转换为全大写. According to the [MDN webdocs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform), "The language is defined by the lang HTML attribute or the xml:lang XML attribute." Unfortunately, this has spotty implementation across browsers, and the 2017 ISO standard for the uppercase German eszett `ß` has not really entered the canon. At the moment you have two options:

1. use the prop `no-caps` in your label and write the string as it should appear
2. use the prop `no-caps` in your label and rewrite the string with [toLocaleUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase) by using the locale as detected by `$q.lang.getLocale()`

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

::: warning
如果你使用Quasar的set方法(`$q.lang.set()`)，这在Quasarr的getLocale上不会有所体现。因为`getLocale()`总是返回*users*的本地配置（基于浏览其设置）。`set()`只是改变Quasar内部的本地配置，用来确定哪个语言文件被使用。如果你想查看使用`set()`设置了哪些语言，你可以使用`$q.lang.isoName`。
:::
