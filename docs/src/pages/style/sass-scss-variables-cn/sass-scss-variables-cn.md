---
title: Sass/SCSS变量
desc: 如何使用Quasar定义的 Sass/SCSS 变量。
---

Quasar 中内置了 Sass/SCSS 变量，如果您愿意的话，可以在开发环境中对其进行更改或使用。

::: warning
这仅适用于由 Quasar CLI 管理的应用程序。
:::

## 用例
在应用的 `*.vue` 文件或在 .sass/.scss 文件中你可以使用任意 Quasar Sass/SCSS 变量(比如: `$primary`, `$red-1`), 还有您在使用 Quasar CLI 时在其 `/src/css/quasar.variables.sass`（或者完全等效的 `/src/css/quasar.variables.scss`，具体取决于您偏爱的 Sass 版本）中声明的任何其他 Sass/SCSS 变量。

```html
<!-- Notice lang="sass" -->
<style lang="sass">
div
  color: $red-1
  background-color: $grey-5
</style>

<!-- Notice lang="scss" -->
<style lang="scss">
div {
  color: $red-1;
  background-color: $grey-5;
}
</style>
```

::: tip
如果您不想访问 Quasar 的 Sass/SCSS 变量，那么您不一定需要有 `src/css/quasar.variables.sass` 或 `src/css/quasar.variables.scss` 这两个文件。只有当您想要自定义这些变量时，才创建其中一个文件即可。
:::

::: danger
在创建或删除任何名为 `src/css/quasar.variables.*` 的文件时，您都需要重启开发服务器才能使其生效。不过，当您更改这些文件的内容时，无需同时重启服务器。
:::

## 注意

Quasar CLI 会检测文件中是否至少包含一个“$”字符，如果有，则会自动导入 Quasar 的 Sass/SCSS 变量。

然而，倘若您有嵌套的导入语句，并且您要导入的文件中不包含任何“$”字符，那么这种方法将不起作用。在这种情况下，您需要添加一个简单的注释（`// $`），以便 Quasar 至少能检测到一个“$”字符：

```html
<style lang="sass">
// $

@import 'some-file.sass'
// 现在，由于上述注释，文件 some-file.sass 也能受益于 Quasar Sass 变量了
</style>
```

对于从 quasar.config 文件中的 css 部分引入的 .sass/.scss 文件，也需要设置此项。

## 个性化设置
如果您想要自定义变量（或者添加您自己的变量），并且您的项目尚未存在名为 `src/css/quasar.variables.sass`（或者 `src/css/quasar.variables.scss`）的文件，那么请自行创建一个这样的文件。至于您选择将该文件的扩展名设为 `.sass` 还是 `.scss` 并不重要。**拥有其中一个文件将会为您的所有 `.sass` 和 `.scss` 项目文件（包括 `.vue` 文件内部的）提供变量。**

在这些文件中，您可以自由地覆盖 Quasar 的任何变量（请参阅下一节）。为了方便起见，如果您在创建 Quasar 项目文件夹时选择了 Sass 或 SCSS，那么这些文件最初只包含与品牌颜色相关的变量。

如果您不只是想覆盖 Quasar Sass 变量的值，而是想要对其进行扩展，那么您可以采用以下方式来实现：

```scss
@use "quasar/src/css/variables" as q;
@use "sass:map";

$space-xxl: (x: 64px, y: 64px);

$new-spaces: (
  xxl: $space-xxl,
);

$spaces: map.merge(q.$spaces, $new-spaces);
```

::: tip
Quasar 的定制非常简便，无需对 Sass/SCSS 变量进行修改即可实现，所以请务必确认自己确实需要这样做。缺少其中任何一个文件实际上会加快构建速度，而默认变量仍会提供给 .sass/.scss/.vue 文件。
:::

## Quasar的CSS
Quasar 自身的 CSS 是通过变量文件（如果存在的话）进行编译的，但存在多种形式（Sass、SCSS）。因此，Quasar CLI 必须有一个优先级列表：
（如果不存在变量文件，则）使用 Sass 编译 CSS。如果不存在 Sass，则使用 SCSS 编译 CSS。

* `src/css/quasar.variables.scss` 文件是否存在？如果存在，就使用它。
* 如果不存在，那么再看 `src/css/quasar.variables.sass` 文件是否存在。如果存在，就使用它。
* 如果上述两个文件都不存在，那就使用预编译的 Quasar CSS 文件。

## 变量列表

<script doc>
import SassVariables from './SassVariables.vue'
</script>

<SassVariables />
