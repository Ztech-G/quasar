---
title: 排版
desc: Quasar应用排版和一些CSS辅助类
related:
  - /style/visibility
  - /style/positioning
  - /style/spacing
---

我们将在这节内容里处理Quasar提供的排版
We'll handle the typography supplied by Quasar in the sections below.

## 标题

<script doc>
import TypographyHeadings from './TypographyHeadings.vue'
</script>

<TypographyHeadings />

## 字体权重

<script doc>
import TypographyWeights from './TypographyWeights.vue'
</script>

<TypographyWeights />

## CSS辅助类
| 类名 | 描述 |
| --- | --- |
| `text-right` | 文本向右对齐 |
| `text-left` | 文本向左对齐 |
| `text-center` | 文本剧中对齐 |
| `text-justify` | 行对齐？？？（需要测试效果） |
| `text-bold` | 文本加粗 |
| `text-italic` | 斜体 |
| `text-no-wrap` | Non wrappable text (applies `white-space: nowrap`) |
| `text-strike` | 应用 `text-decoration: line-through` （删除线） |
| `text-uppercase` | 文本大写 |
| `text-lowercase` | 文本小写|
| `text-capitalize` | 文本的第一个字母大写|

## 默认字体
默认的webfont字体是[Roboto](https://fonts.google.com/specimen/Roboto)。**但这不是必须的**。你可以使用任何你喜欢的字体。

Roboto提供了6中不同的字体权重： 100, 300, 400, 500, 700, 900.

默认已经添加了Roboto字体，你可以移除它：

```js /quasar.config file
extras: [
  'roboto-font'
]
```

## 添加自定义字体

在应用中可能需要其他字体。下面是添加方式:

1. 复制你的新字体`[customfont].woff` (也可以是其他扩展名; 推荐 `woff` 为了兼容所有浏览器)到一个目录中, 比如: `./src/css/fonts/[customfont.woff]`
2. 声明你的字体在这个文件中 `./src/css/app.{css|sass|scss|styl}` (或者在任何你认为合适的地方，但是正确地更新webfont文件的相对路径):

```css
@font-face {
  font-family: customfont;
  src: url(./fonts/customfont.woff);
}

// 定义一个类去使用它
.my-font {
  font-family: 'customfont';
}
```

3. 然后把这个类添加到你需要的地方。
