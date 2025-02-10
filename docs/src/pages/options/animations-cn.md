---
title: 动画
desc: 由Animate.css为Quasar应用提供的CSS动画辅助类。
---

CSS转换可以通过[Vue Transition组件](https://vuejs.org/api/built-in-components.html)。转换动画用于进入（显示）或退出（隐藏）动画。

然而，Quasar提供了已准备好的CSS动画的大集合。这个动画效果是由[Animate.css](https://animate.style/)提供的。有80+开箱即用的动画类型。可以在Animate.css官网或当前页面的例子中查看动画集合。

> 请打开 [Vue](https://vuejs.org/api/built-in-components.html#transition) 文档来学习如何使用Vue提供的 `<transition>` 组件。

## 安装

编辑 `/quasar.config` 文件:

```js /quasar.config 文件
// 嵌入所有动画
animations: 'all'

// 或者嵌入指定的动画
animations: [
  'bounceInLeft',
  'bounceOutRight'
]
```

如果你构建网页，你可以跳过配置quasar.config文件，并且使用CDN链接Animate.css（就像下面的例子）。请记住这将需要你的用户请求网络连接，而不是使用从quasar.config文件的捆绑。

```html
<!-- @quasar/app-vite: /index.html -->
<!-- @quasar/app-webpack: src/index.template.html -->
<head>
  ...

  <!-- CDN 例子： Animate.css -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  >
</head>
```

::: warning
请注意，当使用`<link>`标签导入Animate.css，所有的CSS动画类都需要加前缀`animate__`。这个破坏性变更在Animate.css从v3到v4。如果你不想使用前缀，你可以导入[兼容版本](https://animate.style/#migration)。
<br><br>
然而，如果你使用**Quasar CLI**，不需要做额外的更改。
:::

::: warning
**Windows开发者**
如果你是在Windows上开发，而动画却不能正常工作，那么很可能是操作系统级别的设置出了问题。

尝试改变**视觉效果** 为 **调整为最佳外观**.
1. 右键 `我的电脑` 并且选择 `属性`
2. 点击 `高级系统设置`
3. 点击`性能`下面的 `设置`
4. 在`视觉效果`标签页,改变选项为: `调整为最佳外观`
:::

## 用例

::: warning
注意字符串`animated`在实际的动画类名前面。
:::

```html 只包含一个DOM元素或组件的例子
<transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- 只包含一个DOM组件，Qbtn -->
  <q-btn
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition>
```
### 内建动画类

Quasar也提供了一些内建动画类，用于进入和离开的动画转换。动画分为三组：

::: details General classes
```
bounce
flash
flip
headShake
heartBeat
hinge
jello
pulse
rubberBand
shake
shakeX
shakeY
swing
tada
wobble
```
:::


::: details "In" classes
```
backInDown
backInLeft
backInRight
backInUp
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp
fadeIn
fadeInBottomLeft
fadeInBottomRight
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInTopLeft
fadeInTopRight
fadeInUp
fadeInUpBig
flipInX
flipInY
jackInTheBox
lightSpeedInLeft
lightSpeedInRight
rollIn
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
slideInDown
slideInLeft
slideInRight
slideInUp
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp
```
:::

::: details "Out" classes
```
backOutDown
backOutLeft
backOutRight
backOutUp
bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp
fadeOut
fadeOutBottomLeft
fadeOutBottomRight
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutTopLeft
fadeOutTopRight
fadeOutUp
fadeOutUpBig
flipOutX
flipOutY
lightSpeedOutLeft
lightSpeedOutRight
rollOut
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
slideOutDown
slideOutLeft
slideOutRight
slideOutUp
zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp
```
:::

你可以打开[Vue官方文档](https://vuejs.org/guide/built-ins/transition.html#custom-transition-classes)查看更多信息。


### 改变类
还有一些类可以延迟、重复或改变动画的速度：

::: details Modifier classes
```js
repeat
repeat-1
repeat-2
delay-1s
delay-5s
slower
slow
fast
faster
```
:::

例子:

```html
<transition
  appear
  enter-active-class="animated fadeIn slower delay-5s repeat-2"
  leave-active-class="animated fadeOut"
>
  <!-- 只包裹一个DOM元素，QBtn -->
  <q-btn
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition>
```

### 包含多个元素

您还可以对转换中的组件或DOM元素进行分组，以便同时对所有组件或DOM元素应用相同的效果。

```html 这个例子包含多个DOM元素或组件
<transition-group
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- 包含一个"p" 标签和一个 QBtn -->
  <p key="text">
     Lorem Ipsum
  </p>
  <q-btn
    key="email-button"
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition-group>
```

请注意上述例子中的一些事项：

1. 注意使用 `<transition-group>` 替换 `<transition>`.
2. 组件和DOM必须有key，比如上面的例子中的 `key="text"` or `key="email-button"` 。
3. 上面的两个例子都指定了布尔属性“appear”，这使得进入动画在组件渲染完成后立即启动。此属性是可选的。
