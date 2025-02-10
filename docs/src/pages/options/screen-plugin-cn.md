---
title: 屏幕插件
desc: Quasar插件基于JS代码辅助编写动态且响应式UI。
---

Quasar屏幕插件允许在处理JS代码时拥有动态和响应式UI。基于性能考虑推荐使用[响应式CSS类](/style/visibility#window-width-related) 。

<DocApi file="Screen" />

## 用例

注意下面的`$q.screen`。这是一个简单的用例。

```html
<q-list :dense="$q.screen.lt.md">
  <q-item>
    <q-item-section>John Doe</q-item-section>
  </q-item>

  <q-item>
    <q-item-section>Jane Doe</q-item-section>
  </q-item>
</q-list>
```

```js
// 一个Vue组件的一部分
import { useQuasar } from 'quasar'
import { computed } from 'vue'

export default {
  setup () {
    const $q = useQuasar()
    const buttonColor = computed(() => {
      return $q.screen.lt.md
        ? 'primary'
        : 'secondary'
    })

    return { buttonColor }
  }
}
```

我们也可以在一个组件外面使用屏幕插件：

```js
import { Screen } from 'quasar'

// Screen.gt.md
// Screen.md
// Screen.name ('xs', 'sm', ...)
```

## Body类

**如果你想要开启它（在下面的例子中可以看到）**, 你也可以通过一组特定的document.body的类来修改你的内容样式：`screen--xs`, `screen--sm`, ..., `screen-xl`.

```css
body.screen--xs {
  .my-div {
    color: #000;
  }
}

body.screen--sm {
  .my-div {
    color: #fff;
  }
}
```

或者在Sass中使用：

```sass
.my-div
  body.screen--xs &
    color: #000
  body.screen--sm &
    color: #fff
```

### 如何开启body类

为了实现上述行为，需要像下面一样编辑/quasar.config文件。请注意由于First Meaningful Paint会增加一点时间。

```js /quasar.config file
framework: {
  config: {
    screen: {
      bodyClasses: true // <<< add this
    }
  }
}
```

## 配置
有一些方法可以用来调整屏幕插件的工作方式：

| 方法 | 描述 | 例子 |
| --- | --- | --- |
| setSizes(Object) | 改变屏幕断点; 是否也改变CSS断点？？？. | setSizes({ lg: 1024, xl: 2000 }) |
| setDebounce(Number) | 改变默认值100ms为其他值。 | setDebounce(500) // 500ms |

例子:

```js 在一个Vue组件中
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()

  $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })
}
```

```js 在一个Vue组件外部
import { Screen } from 'quasar'
Screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })
```
