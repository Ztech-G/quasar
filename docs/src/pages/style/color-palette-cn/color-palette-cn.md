---
title: 调色板
desc: 如何使用和自定义Quasar调色板
related:
  - quasar-utils/color-utils
---
Quasar框架提供一个开箱即用的广泛的颜色选择。你可以在CSS代码中通过Sass/SCSS变量使用他们或者直接在HTML模板中使用CSS类。

<DocApi file="Brand" />

<DocInstallation title="Configuration" config="brand" />

## 品牌颜色

Quasar组件使用的大多数颜色都与这八种你可以改变的颜色密切相关。选择这些颜色是区分应用程序设计的第一步。你会立即注意到，在改变它们的默认值后，Quasar组件遵循这些颜色作为指导方针。

<script doc>
import BrandColors from './BrandColors.vue'
</script>

<BrandColors />

::: tip 提示
另外可以使用[主题构建器](/style/theme-builder)自定义你的应用或网页的品牌颜色。
:::

## 颜色集合


这里提供了一些现成的颜色集合。在应用的`*.vue`文件中可以通过CSS类使用他们或者在`<style lang="...">`标签中通过[Sass/SCSS变量](/style/sass-scss-variables)变量使用它们。

<script doc>
import ColorList from './ColorList.vue'
</script>

<ColorList />

## 作为CSS类使用

使用带`text-` 或 `bg-`前缀的类名改变文本颜色或背景颜色。 

```html
<!-- 改变文本颜色 -->
<p class="text-primary">....</p>

<!-- 改变背景颜色 -->
<p class="bg-positive">...</p>
```

## 使用Sass/SCSS变量

在应用的`*.vue`文件中你可以使用如 `$primary`, `$red-1`等变量。

```html
<!-- Notice lang="sass" -->
<style lang="sass">
div
  color: $red-1
  background-color: $grey-5
</style>
```

```html
<!-- Notice lang="scss" -->
<style lang="scss">
div {
  color: $red-1;
  background-color: $grey-5;
}
</style>
```

## 添加你自己的颜色

如果你想在你的组件中使用自己的颜色（比如下面我们添加一个叫“brand”的颜色），你需要在应用中添加下面的CSS。

```css
.text-brand {
  color: #a2aa33 !important;
}
.bg-brand {
  background: #a2aa33 !important;
}
```

现在我们可以为Quasar组件使用这个颜色:
```html
<q-btn color="brand" ... />
```

你可以在JS上下文中通过[getPaletteColor](/quasar-utils/color-utils#helper-getpalettecolor)工具访问自定义颜色值(16进制字符串)。

## 动态改变品牌颜色（动态主题颜色）

### 它是如何工作的？

在运行期间你可以动态改变品牌颜色： `primary`, `secondary`, `accent`, `dark`, `positive`, `negative`, `info`, `warning`. 这意味着您可以使用默认颜色主题构建应用程序，但可以使用运行时选择的颜色主题显示它。

主颜色配置是通过使用CSS自定义属性操作的，存储在根元素(`:root`).每个属性有一个`--q-${name}`这样的名字（比如：`--q-primary`, `--q-secondary`）并且有一个合法的CSS颜色作为值。

CSS自定义属性使用与普通CSS相同的继承规则，所以你只能重新定义你想要的颜色，其余的将从父元素继承。

推荐的工作流程时在`html` (`document.documentElement`) 或 `body` (`document.body`) 元素上设置自定义颜色。这将允许您通过删除自定义颜色恢复到默认颜色。

更多的CSS自定义属性（变量） [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

### Util: setCssVar

Quasar提供一个辅助函数用于设置Quasar CSS变量，这些变量可以用于设置品牌颜色： `setCssVar(colorName, colorValue[, element])`

| 参数 | 类型 | 必需 | 描述 |
| --- | --- | --- | --- |
| `colorName` | String | *Yes* | `primary`, `secondary`, `accent`, `dark`, `positive`, `negative`, `info`, `warning`之一。 |
| `colorValue` | String | *Yes* | 合法的CSS颜色值 |
| `element` | Element | - | (默认`document.body`) 自定义属性将要被设置到的元素。 |

例子:

```js
import { setCssVar } from 'quasar'

setCssVar('light', '#DDD')
setCssVar('primary', '#33F')
setCssVar('primary', '#F33', document.getElementById('rebranded-section-id'))
```

使用JavaScript设置品牌颜色的例子：

```js
// equivalent of setCssVar('primary') in raw JavaScript:
document.body.style.setProperty('--q-primary', '#0273d4')
```

### Util: getCssVar

Quasar提供一个辅助函数用于获取Quasar CSS变量，这些变量可以用于设置品牌颜色： `getCssVar(colorName[, element])`

| 参数 | 类型 | 必需 | 描述 |
| --- | --- | --- | --- |
| `colorName` | String | *Yes* | `primary`, `secondary`, `accent`, `dark`, `positive`, `negative`, `info`, `warning`之一。 |
| `element` | Element | - | (默认：`document.body`) 自定义属性从哪个元素上读。 |

例子：

```js
import { getCssVar } from 'quasar'

getCssVar('primary') // '#33F'
getCssVar('primary', document.getElementById('rebranded-section-id'))
```

这个辅助方法对原始的JS方法 `getPropertyValue()`做了包装方便使用。下面是一个等小的JavaScript例子：

```js
// equivalent of getCssVar('primary') in raw JavaScript:
getComputedStyle(document.documentElement)
  .getPropertyValue('--q-primary') // #0273d4
```

### 更多颜色工具类

除了上面的utils，我们在文档中还有一个专门的部分来处理你可能感兴趣的颜色： [Color utils](/quasar-utils/color-utils).

```js
import { colors, setCssVar } from 'quasar'

const { lighten } = colors

const newPrimaryColor = '#933'
setCssVar('primary', newPrimaryColor)
setCssVar('primary-darkened', lighten(newPrimaryColor, -10))
```

## 设置默认值

您可以设置一些品牌颜色，而无需篡改Sass/SCSS变量。

查看[Configuration](/style/color-palette-cn#configuration)一节，在配置初始化时： Quasar CLI, Vite plugin/Vue CLI, and UMD projects.

如果使用Quasar CLI, 也可以使用 [@quasar/app-vite Boot File](/quasar-cli-vite/boot-files) 或 [@quasar/app-webpack Boot File](/quasar-cli-webpack/boot-files).

如果您希望在初始加载时动态更改颜色（可能是在从API获取颜色之后），这一点尤其有用。

```js /src/boot/brand-colors.js - or any other name
import { setCssVar } from 'quasar'
import { defineBoot } from '#q-app/wrappers'

export default defineBoot(() => {
  setCssVar('primary', '#ff0000')
})
```

如果使用SSR模式，在服务器端运行时禁用此引导文件：

```js /quasar.config file
boot: [
  { server: false, path: 'brand-colors' }, // or the name you gave it
  // ...
],
```
