---
title: The $q object
desc: The $q object in Quasar. Why and how to use it.
related:
  - /vue-composables/use-quasar
---

Quasar 提供了一个`$q`对象。可以将其用于各种目的。在整个文档中都可以看到它的用法。

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| `$q.version` | String | Quasar版本. |
| `$q.platform` | Object | 与从Quasar中导入的[Platform](/options/platform-detection)是同一个对象. |
| `$q.screen` | Object | 通过屏幕插件[Screen Plugin](/options/screen-plugin)提供的对象. |
| `$q.lang` | Object | Quasar语言包管理器， [lang files](https://github.com/quasarframework/quasar/tree/dev/ui/lang). 被设计成一个Quasar组件，你也可以在你的App组件中使用它。更多信息请看: [Quasar Language Packs](/options/quasar-language-packs). |
| `$q.iconSet` | Object | Quasar图标管理器，[icon set files](https://github.com/quasarframework/quasar/tree/dev/ui/icon-set)。被设计成一个Quasar组件，你也可以在你的App组件中使用它。更多信息请看: [Quasar Icon Sets](/options/quasar-icon-sets). |
| `$q.cordova` | Object | Cordova全局对象的引用。只有运行在一个Cordova App下才可用。|
| `$q.capacitor` | Object | Capactior全局对象的引用。只有运行在一个Capacitor App下才可用。 |

## 用法

下面的内容将会告诉你如何在vue文件(包括组合式API和选项式API)使用和如何在外部文件（比如普通js文件）中使用。

### 使用"script setup"的组合式API

下面是一个.vue文件:

```html
<template>
  <div>
    <div v-if="$q.platform.is.ios">
      只有在iOS平台上才会被渲染.
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

console.log($q.platform.is.ios)

// 一个展示方法的例子，但是可以在Vue脚本的任何部分。
function show () {
  // 打印出Quasar的版本
  console.log($q.version)
}
</script>
```

### 没有"script setup"的组合式API

下面是一个.vue文件:

```html
<template>
  <div>
    <div v-if="$q.platform.is.ios">
      只有在iOS平台上才会被渲染.
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()

    console.log($q.platform.is.ios)

    // 一个展示方法的例子，但是可以在Vue脚本的任何部分。
    function show () {
      // 打印出Quasar的版本
      console.log($q.version)
    }

    return {
      show
    }
  }
}
</script>
```

### 选项式API

下面是一个.vue文件:

```html
<template>
  <div>
    <div v-if="$q.platform.is.ios">
      只有在iOS平台上才会被渲染.
    </div>
  </div>
</template>

<script>
//在export外部是不可见的

export default {
  // 在一个Vue组件脚本中
  ...,

  // 一个展示方法的例子，但是可以在Vue脚本的任何部分。
  methods: {
    show () {
      // 打印出Quasar的版本
      // 选项式API中直接使用this.$q。
      console.log(this.$q.version)
    }
  }
}
</script>
```

### 在.vue文件外部

```js
import { Quasar, Platform } from 'quasar'

console.log(Quasar.version)
console.log(Platform.is.ios)
```
