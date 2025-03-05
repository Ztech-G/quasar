---
title: Quasar CLI 的 Vite升级指南
desc: (@quasar/app-vite) 如何把 Quasar CLI 与 Vite 从旧版本升级到最新的版本。
---

## @quasar/app-vite v2

### 给App扩展的开发者的提示

You might want to release new versions of your Quasar App Extensions with support for the new @quasar/app-vite. If you are not touching the quasar.config configuration, then it will be as easy as just changing the following:

你可能想要发布你的新的支持新版本的@quasar/app-vit的Quasar App扩展。如果你不涉及quasar.config的配置，那么你只需要简单的修改以下内容就行：

```diff
api.compatibleWith(
  '@quasar/app-vite',
- '^1.0.0'
+ '^1.0.0 || ^2.0.0'
)
```

### 值得注意的重大变更

* Node.js现在的最低版本是18（主要是因为Vite 6）
* 我们已将整个 Quasar 项目文件夹转向使用 ESM（ES 模块）风格，因此现在许多项目默认文件需要使用 ESM 代码（尽管支持为这些文件使用 .cjs 作为扩展名，但如果你不想做任何更改，很可能需要重命名扩展名）。例如，/quasar.config.js 文件现在也默认采用 ESM 格式（所以如果你仍希望使用 CommonJS 文件，需要将扩展名从 .js 更改为 .cjs）。
* 由于 @quasar/testing-* 系列包的最新更新，“test” 命令已被移除。[请查看](https://testing.quasar.dev/packages/testing/)
* “clean” 命令已重新设计。在你升级后的 Quasar 项目文件夹中输入 “quasar clean -h” 以获取更多信息。
* TypeScript 检测是基于 quasar.config 文件采用 TypeScript 格式（即 quasar.config.ts）以及 tsconfig.json 文件的存在情况来进行的。
* TypeScript 的 tsconfig.json 预设已被自动生成的 .quasar/tsconfig.json 文件所取代。这一方式更加灵活，并且具备了新特性，下面会详细介绍。
* 功能增强 + 代码重构（app - Vite）：支持同时运行多种模式以及同时进行开发和构建操作（这可是一项巨大的工作！）
* 服务器端渲染（SSR）和 Electron 模式现在以 ES 模块（ESM）格式进行构建。
* 全新的浏览器扩展（BEX）模式，具备显著的新功能且易于使用（现在还支持 Chrome 的热更新（HMR）功能！）
* 不再支持我们内部的代码检查系统（quasar.config 文件中的 eslint 相关配置）。建议使用 vite - plugin - checker 来替代
* 不再支持 Vuex。一段时间以来，Pinia 一直是 Vue 3 的官方状态管理库。在 app-vite v1 版本中，Vuex 就已被弃用，并且它与新的项目结构存在兼容性问题，因此现在已将其移除。
你仍然可以像使用其他 Vue 插件一样使用 Vuex，但你需要自己处理所有相关事宜（例如安装状态管理库、数据注水、在启动文件中没有 store 参数等），并且 Quasar CLI 不会提供任何支持。为了让 Vuex 能与 TypeScript 配合使用，你可能还需要对 Vuex 进行补丁修复。我们建议迁移到 Pinia。
* **我们将在下面详细介绍Quasar每个模式的更多重大变化**.

### 最新亮点

以下的部分工作已被反向移植到旧版的 @quasar/app-vite v1 中，但在此发布是为了让读者知悉这一情况。

* feat(app-vite): upgrade to Vite 6
* feat(app-vite): ability to run multiple quasar dev/build commands simultaneously (example: can run "quasar dev -m capacitor" and "quasar dev -m ssr" and "quasar dev -m capacitor -T ios" simultaneously)
* feat(app-vite): Better TS typings overall
* refactor(app-vite): port CLI to ESM format (major effort! especially to support Vite 6 and SSR)
* feat(app-vite): support for quasar.config file in multiple formats (.js, .mjs, .ts, .cjs)
* feat(app-vite): Improve quasarConfOptions, generate types for it, improve docs (fix: #14069) (#15945)
* feat(app-vite): reload app if one of the imports from quasar.config file changes
* feat(app-vite): TS detection should keep account of quasar.config file format too (quasar.config.ts)
* feat(app-vite): The shorthand CLI command "quasar dev/build -m ios/android" is now targeting Capacitor mode instead of Cordova (2.0.0-beta.12+)
* feat(app-vite): support for SSR development with HTTPS
* feat(app-vite): env dotfiles support #15303
* feat(app-vite): New quasar.config file props: build > envFolder (string) and envFiles (string[])
* feat(app-vite): reopen browser (if configured so) when changing app url through quasar.config file
* feat&perf(app-vite): faster & more accurate algorithm for determining node package manager to use
* feat(app-vite): upgrade deps
* feat(app-vite): remove workaround for bug in Electron 6-8 in cli templates (#15845)
* feat(app-vite): remove bundleWebRuntime config for Capacitor v5+
* feat(app-vite): use workbox v7 by default
* feat(app-vite): quasar.config > pwa > injectPwaMetaTags can now also be a function: (({ pwaManifest, publicPath }) => string);
* feat(app-vite): quasar.config > build > htmlMinifyOptions
* feat(app-vite): lookup open port for vue devtools when being used; ability to run multiple cli instances with vue devtools
* perf(app-vite): SSR render-template in specific esm or cjs form, according to host project; interpolation by variable
* perf(app-vite): only verify quasar.conf server address for "dev" cmd
* feat(app-vite): pick new electron inspect port for each instance
* feat(app-vite): Electron - can now load multiple preload scripts
* refactor(app-vite): AE support - better and more efficient algorithms
* feat(app-vite): AE support for ESM format
* feat(app-vite): AE support for TS format (through a build step)
* feat(app-vite): AE API new methods -> hasTypescript() / hasLint() / getStorePackageName() / getNodePackagerName()
* feat(app-vite): AE -> Prompts API (and ability for prompts default exported fn to be async)
* refactor(app-vite): the "clean" cmd now works different, since the CLI can be run in multiple instances on the same project folder (multiple modes on dev or build)
* feat(app-vite): Support for Bun as package manager #16335
* feat(app-vite): for default /src-ssr template -> prod ssr -> on error, print err stack if built with debugging enabled
* feat(app-vite): extend build > vitePlugins form (additional { server?: boolean, client?: boolean } param
* feat+refactor(app-vite): BEX -> Completely rewrote & redesigned the Quasar Bridge (with a ton of new features); Automatically infer the background script file & the content script files from the bex manifest itself; Ability to compile other js/ts files as well that you might need to dynamically load/inject; No more 3s delay when opening the popup; No more "dom" script (use content script directly); The bridge is available globally in App (/src) through the $q object or window.QBexBridge
* feat(app-vite): BEX with HMR (hot module reload) for Chrome
* feat(app-vite): support returning overrides from build > extendViteConf

### 升级过程开始。

::: tip
如果您不确定是否会错误地跳过任何建议的更改，您可以随时使用@quasar/app-vite v2搭建一个新的项目文件夹，然后轻松地从那里开始移植您的应用程序。大部分更改涉及不同的项目文件夹配置文件，而大部分不是您的 /src文件。
<br><br>
```tabs
<<| bash Yarn |>>
$ yarn create quasar
<<| bash NPM |>>
$ npm init quasar@latest
<<| bash PNPM |>>
$ pnpm create quasar@latest
<<| bash Bun |>>
# experimental support
$ bun create quasar@latest
```
<br>
当被要求选择“Quasar 应用 CLI 变体”时，回答： "Quasar App CLI with Vite 6 (v2)".
:::

准备工作:

* 如果使用全局安装的 Quasar CLI (`@quasar/cli`), 请确保它是最新版本. 这是由于最新版本支持多种格式的 quasar. config 文件。
* 再次强调，Node.js的最低支持版本现在是v18（始终使用Node.js的LTS版本，版本越高越好）。

* 编辑 @quasar/app-vite 条目上的 /pack. json 并将其分配为 ^2.0.0:
  ```diff /package.json
  "devDependencies": {
  - "@quasar/app-vite": "^1.0.0",
  + "@quasar/app-vite": "^2.0.0"
  }
  ```
  <br>
  Then yarn/npm/pnpm/bun install.
  <br><br>

* 将您的'/quasar. config.js'文件转换为ESM格式（建议这样做，否则将文件扩展名重命名为'.cjs'并使用Common Js格式）。还要注意包装器导入更改，稍后会详细介绍。
  ```diff /quasar.config.js file
  - const { configure } = require('quasar/wrappers')
  + import { defineConfig } from '#q-app/wrappers'

  - module.export = configure((ctx) => {
  + export default defineConfig((ctx) => {
      return {
        // ...
      }
    })
  ```

  ::: TypeScript 提示
  如果您愿意，您现在也可以在TS中编写此文件（将“/quasar.config.js”重命名为“/quasar.config.ts”——请注意“.ts”文件扩展名）。
  :::

* 在`/package.json`中将`type`设置为`module`.不要忘记这一步。
  ```diff /package.json
  {
  + "type": "module"
  }
  ```
  <br>

  如果它还不是ESM格式，将 `postcss.config.js`转换为 ESM。

  ```js /postcss.config.js
  import autoprefixer from 'autoprefixer'
  // import rtlcss from 'postcss-rtlcss'

  export default {
    plugins: [
      // https://github.com/postcss/autoprefixer
      autoprefixer({
        overrideBrowserslist: [
          'last 4 Chrome versions',
          'last 4 Firefox versions',
          'last 4 Edge versions',
          'last 4 Safari versions',
          'last 4 Android versions',
          'last 4 ChromeAndroid versions',
          'last 4 FirefoxAndroid versions',
          'last 4 iOS versions'
        ]
      }),

      // https://github.com/elchininet/postcss-rtlcss
      // If you want to support RTL css, then
      // 1. yarn/pnpm/bun/npm install postcss-rtlcss
      // 2. optionally set quasar.config.js > framework > lang to an RTL language
      // 3. uncomment the following line (and its import statement above):
      // rtlcss()
    ]
  }
  ```
  <br>

* 你可能需要将以下内容添加到你的 /.gitignore 文件中。/quasar.config.*.temporary.compiled* 这一项指的是当你的 /quasar.config 文件出现问题时，为了便于检查而留存的文件（并且可以通过 quasar clean 命令将其删除）。

  ```bash [highlight=8,11] /.gitignore
  .DS_Store
  .thumbs.db
  node_modules

  # Quasar core related directories
  .quasar
  /dist
  /quasar.config.*.temporary.compiled*

  # local .env files
  .env.local*

  # Cordova related directories and files
  /src-cordova/node_modules
  /src-cordova/platforms
  /src-cordova/plugins
  /src-cordova/www

  # Capacitor related directories and files
  /src-capacitor/www
  /src-capacitor/node_modules

  # Log files
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*

  # Editor directories and files
  .idea
  *.suo
  *.ntvs*
  *.njsproj
  *.sln
  ```
  <br>

* 请务必使用最新的规范来更新你的 `/quasar.config` 文件，以满足类型要求。请检查以下所有部分。

* 如果你已经安装了 `dotenv` 包并且正在你的 `quasar.config` 文件中使用它，那么请卸载该包，并使用我们的命令行界面（CLI）所提供的原生 [dotenv 支持（#环境变量 dot 文件支持）]。

  ```diff /quasar.config file
  - build: {
  -  env: require('dotenv').config().parsed
  - }
  ```
  <br>

* 如果你使用了代码检查工具，请访问 [代码检查工具页面](/quasar-cli-vite/linter)来重新审视你的配置。你需要完成以下操作:
  1. 卸载当前所有的代码检查相关包。
  2. 将 /.eslintrc.cjs 重命名为 /eslint.config.js（查看上述链接了解新文件的格式）。
  3. 把 /.eslintignore 的配置移植到新的 /eslint.config.js 文件中。
  4. 删除 /.eslintignore 文件。
  5. 安装新的依赖项（查看上述链接）。
  6. 编辑 /package.json 文件中的 scripts 部分里的 lint 脚本。
  <br><br>

  ```diff /package.json
  "scripts": {
  -  "lint": "eslint --ext .js,.ts,.vue ./"

  // for non-TS projects:
  +  "lint": "eslint -c ./eslint.config.js \"./src*/**/*.{js,cjs,mjs,vue}\""
  // for TS projects:
  +  "lint": "eslint -c ./eslint.config.js \"./src*/**/*.{ts,js,cjs,mjs,vue}\""
  }
  ```
  <br>

* 类型特性标志文件现在将在 .quasar 文件夹中自动生成。因此，你必须将它们删除。

  ```tabs
  <<| bash rimraf through npx (cross-platform) |>>
  # in project folder root:
  $ npx rimraf -g ./src*/*-flag.d.ts
  $ quasar prepare
  <<| bash Unix-like (Linux, macOS) |>>
  # in project folder root:
  $ rm ./src*/*-flag.d.ts
  $ quasar prepare
  ```

  <br>

* 我们已经弃用了所有从 `quasar/wrappers` 引入的内容。你仍然可以继续使用它们，但我们强烈建议你切换到新的 `#q-app/wrappers`，如下所示：

  ```diff The wrapper functions
  - import { configure } from 'quasar/wrappers'
  + import { defineConfig } from '#q-app/wrappers'

  - import { boot } from 'quasar/wrappers'
  + import { defineBoot } from '#q-app/wrappers'

  - import { preFetch } from 'quasar/wrappers'
  + import { definePreFetch } from '#q-app/wrappers'

  - import { route } from 'quasar/wrappers'
  + import { defineRouter } from '#q-app/wrappers'

  - import { store } from 'quasar/wrappers'
  + import { defineStore } from '#q-app/wrappers'

  - import { ssrMiddleware } from 'quasar/wrappers'
  + import { defineSsrMiddleware }from '#q-app/wrappers'

  - import { ssrCreate } from 'quasar/wrappers'
  + import { defineSsrCreate } from '#q-app/wrappers'

  - import { ssrListen } from 'quasar/wrappers'
  + import { defineSsrListen } from '#q-app/wrappers'

  - import { ssrClose } from 'quasar/wrappers'
  + import { defineSsrClose } from '#q-app/wrappers'

  - import { ssrServeStaticContent } from 'quasar/wrappers'
  + import { defineSsrServeStaticContent } from '#q-app/wrappers'

  - import { ssrRenderPreloadTag } from 'quasar/wrappers'
  + import { defineSsrRenderPreloadTag } from '#q-app/wrappers'
  ```

  <br>

* 对于非TS项目，更新您的`/jsconfig.json`文件。是的，它包含`tsconfig`，并且这是正确的。

  ```json /jsconfig.json
  {
    "extends": "./.quasar/tsconfig.json"
  }
  ```

  <br>

* 对于 **TypeScript 项目**：`@quasar/app - vite/tsconfig - preset` 已被弃用，因此请更新你的 `/tsconfig.json` 文件，使其继承新自动生成的 `.quasar/tsconfig.json` 文件。除非你确实清楚自己在做什么，否则请移除所有其他配置，仅保留 `extends` 作为文件中的唯一选项。

  ```diff /tsconfig.json
  {
  +  "extends": "./.quasar/tsconfig.json"
  -  "extends": "@quasar/app-vite/tsconfig-preset",
  -  "compilerOptions": {
  -    "baseUrl": "."
  -  },
  - "include": [ ... ],
  - "exclude": [ ... ]
  }
  ```
  <br>

  底层配置现在已经不同了，所以请查看生成文件中的新选项，看看是否需要对 `tsconfig.json` 文件进行进一步调整。以下是一个生成的 `tsconfig`（非严格模式）示例，供你参考：
  <br>

  ```json /.quasar/tsconfig.json
  {
    "compilerOptions": {
      "esModuleInterop": true,
      "skipLibCheck": true,
      "target": "esnext",
      "allowJs": true,
      "resolveJsonModule": true,
      "moduleDetection": "force",
      "isolatedModules": true,
      "module": "preserve",
      "noEmit": true,
      "lib": [
        "esnext",
        "dom",
        "dom.iterable"
      ],
      "paths": { ... }
    },
    "exclude": [ ... ]
  }
  ```

  <br>

  如果你正在使用 ESLint，我们建议在你的 ESLint 配置中启用 `@typescript-eslint/consistent-type-imports` 规则。如果你还没有设置代码检查，我们建议在你的 `tsconfig.json` 文件中使用 `verbatimModuleSyntax` 作为替代方案（与 ESLint 规则不同，它无法自动修复）。这些更改将有助于你统一常规导入和仅类型导入。请阅读 [typescript-eslint 博客 - 一致的类型导入和导出：原因及方法](https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how) 以获取关于此内容以及如何进行设置的更多信息。以下是一个示例：

  ```js /eslint.config.js
  rules: {
    // ...
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    // ...
  }
  ```

  <br>

 你可以使用 quasar.config 文件中的 build（构建）下的 typescript（TypeScript）来控制与 TypeScript 相关的行为。将以下这部分内容添加到你的配置中：
  <br>

  ```diff /quasar.config.ts
   build: {
  +  typescript: {
  +    strict: true, // (recommended) enables strict settings for TypeScript
  +    vueShim: true, // required when using ESLint with type-checked rules, will generate a shim file for `*.vue` files
  +    extendTsConfig (tsConfig) {
  +      // You can use this hook to extend tsConfig dynamically
  +      // For basic use cases, you can still update the usual tsconfig.json file to override some settings
  +    },
  +  }
  }
  ```
  <br>

  在之前的预设中，大多数严格模式选项已经启用。所以，你应该能够将 `strict` 选项设置为 `true`，而不会遇到太多麻烦。不过，如果你遇到任何问题，你可以更新代码以符合更严格的规则，或者在 `tsconfig.json` 文件中将 “有问题的” 选项设置为 `false`，至少在你能修复这些问题之前可以这样做。
  `src/quasar.d.ts` 和 `src/shims-vue.d.ts` 文件现在将在 `.quasar` 文件夹中自动生成。因此，你必须删除这些文件：
  <br>

  ```tabs
  <<| bash rimraf through npx (cross-platform) |>>
  # in project folder root:
  $ npx rimraf src/quasar.d.ts src/shims-vue.d.ts
  <<| bash Unix-like (Linux, macOS) |>>
  # in project folder root:
  $ rm src/quasar.d.ts src/shims-vue.d.ts
  ```
  <br>

  如果你在使用带有类型检查规则的 ESLint，启用 `vueShim` 选项可以保留之前使用垫片文件（shim file）时的行为。如果你的项目在不使用该选项的情况下也能正常运行，那么你无需启用它。
  <br>

  ```diff /quasar.config.ts
  build: {
    typescript: {
  +    vueShim: true // required when using ESLint with type-checked rules, will generate a shim file for `*.vue` files
    }
  }
  ```
  <br>

  由于这项改动，Capacitor 依赖项现在能正确关联到项目的 TypeScript 配置中。这意味着你不必再安装两次依赖项了，即不用分别在 `/src-capacitor` 目录和根目录各安装一次。因此，你可以从根目录的 `package.json` 文件中移除 Capacitor 依赖项。从现在起，仅在 `/src-capacitor` 目录中安装 Capacitor 依赖项就足够了。

  这项改动的另一个好处是，TypeScript 会自动识别文件夹别名（`quasar.config` 文件中的 `build` 下的 `alias`）。所以，你可以移除 `tsconfig.json` 文件里 `compilerOptions` 下的 `paths` 配置。如果你之前使用了像 `vite-tsconfig-paths` 这样的插件，你可以卸载它，转而将 `quasar.config` 文件中 `build` 下的 `alias` 作为唯一配置依据。

  要正确运行类型检查和代码检查，需要有 `.quasar/tsconfig.json` 文件。在运行 `quasar dev` 或 `quasar build` 命令时，该文件会自动生成。不过，作为一种轻量级的替代方案，现在有一个新的 CLI 命令 `quasar prepare`，它会生成 `.quasar/tsconfig.json` 文件和一些类型文件。这在持续集成/持续部署（CI/CD）流程中尤其有用。
  <br>

  ```bash
  $ quasar prepare
  ```
  <br>

  你可以将其作为 `postinstall` 脚本添加，以确保在安装依赖项后运行该脚本。当有人首次拉取项目时，这会很有帮助。
  <br>

  ```json /package.json
  {
    "scripts": {
      "postinstall": "quasar prepare"
    }
  }
  ```
  <br>

  如果你正在使用 Pinia，现在我们会自动在 `.quasar/pinia.d.ts` 文件中扩展 `router` 属性。因此，你可以从 `src/stores/index.ts` 文件里的 `PiniaCustomProperties` 接口中移除 `router` 属性。移除后它仍会像以前一样正常工作，但建议你移除该属性以避免混淆。

  ```diff /src/stores/index.ts
  import { defineStore } from '#q-app/wrappers'
  import { createPinia } from 'pinia'
  - import { type Router } from 'vue-router';

  /*
   * When adding new properties to stores, you should also
   * extend the `PiniaCustomProperties` interface.
  - * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
  + * @see https://pinia.vuejs.org/core-concepts/plugins.html#Typing-new-store-properties
   */
  declare module 'pinia' {
    export interface PiniaCustomProperties {
  -    readonly router: Router;
  +    // add your custom properties here, if any
    }
  }
  ```

### Capacitor / Cordova 模式变更

现在，用户界面代码（`/src` 目录下的代码）可以使用 `process.env.TARGET` 变量了，该变量的值会是 `"ios"` 或者 `"android"`。

### PWA 模式变更

命令行界面（CLI）不再提供 `register-service-worker` 依赖项。你将不得不自行在项目文件夹中安装它。

```tabs
<<| bash Yarn |>>
$ yarn add register-service-worker@^1.0.0
<<| bash NPM |>>
$ npm install --save register-service-worker@^1.0.0
<<| bash PNPM |>>
$ pnpm add register-service-worker@^1.0.0
<<| bash Bun |>>
$ bun add register-service-worker@^1.0.0
```

编辑 `/src-pwa/custom-service-worker.js` 文件:

```diff /src-pwa/custom-service-worker.js
if (process.env.MODE !== 'ssr' || process.env.PROD) {
  registerRoute(
    new NavigationRoute(
      createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
-     { denylist: [/sw\.js$/, /workbox-(.)*\.js$/] }
+     { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\.js$/] }
    )
  )
}
```

在 `/quasar.config` 文件中也有一些细微的变化：

```diff /quasar.config file
sourceFiles: {
- registerServiceWorker: 'src-pwa/register-service-worker',
- serviceWorker: 'src-pwa/custom-service-worker',
+ pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
+ pwaServiceWorker: 'src-pwa/custom-service-worker',
+ pwaManifestFile: 'src-pwa/manifest.json',
  // ...
},

pwa: {
- workboxMode?: "generateSW" | "injectManifest";
+ workboxMode?: "GenerateSW" | "InjectManifest";

- // useFilenameHashes: false,
+ // Moved to quasar.config > build > useFilenameHashes

  /**
   * Auto inject the PWA meta tags?
   * If using the function form, return HTML tags as one single string.
   * @default true
   */
- injectPwaMetaTags?: boolean;
+ injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) => string);
+ // see below for the InjectPwaMetaTagsParams interface

  // ...
}

// additional types for injectPwaMetaTags
interface InjectPwaMetaTagsParams {
  pwaManifest: PwaManifestOptions;
  publicPath: string;
}
interface PwaManifestOptions {
  id?: string;
  background_color?: string;
  categories?: string[];
  description?: string;
  // ...
}
```

### Electron 模式变更

::: warning
可分发文件（即你的生产环境代码）将被编译为 ECMAScript 模块（ESM）格式，这样一来，也能利用以 ESM 格式运行的 Electron 的优势。
:::

::: tip
你可能需要将 `electron` 包升级到最新版本，以便它能够处理 ESM 格式。
:::

大多数变更涉及编辑你的 `/src-electron/electron-main.js` 文件：

```diff Icon path
+import { fileURLToPath } from 'node:url'

+const currentDir = fileURLToPath(new URL('.', import.meta.url))

function createWindow () {
  mainWindow = new BrowserWindow({
-   icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
+   icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
    // ...
  })
```

```diff Preload script
import { fileURLToPath } from 'node:url'

const currentDir = fileURLToPath(new URL('.', import.meta.url))

function createWindow () {
  mainWindow = new BrowserWindow({
    // ...
    webPreferences: {
-     preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
+     preload: path.resolve(
+       currentDir,
+       path.join(process.env.QUASAR_ELECTRON_PRELOAD_FOLDER, 'electron-preload' + process.env.QUASAR_ELECTRON_PRELOAD_EXTENSION)
+     )
    }
  })
```

::: danger
编辑 `/quasar.config.js` 文件以指定你的预加载脚本：
<br><br>
```diff /quasar.config file
sourceFiles: {
- electronPreload?: string;
},

electron: {
+ // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
+ preloadScripts: [ 'electron-preload' ],
}
```
<br>
如你所见，现在如果有需要的话，你可以指定多个预加载脚本。
:::

```diff
function createWindow () {
   // ...
-  mainWindow.loadURL(process.env.APP_URL)
+  if (process.env.DEV) {
+    mainWindow.loadURL(process.env.APP_URL)
+  } else {
+    mainWindow.loadFile('index.html')
+  }
```

最后，新的文件应该看起来像这样：

```js The new /src-electron/electron-main.js
import { app, BrowserWindow } from 'electron'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

const currentDir = fileURLToPath(new URL('.', import.meta.url))

let mainWindow

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(
        currentDir,
        path.join(process.env.QUASAR_ELECTRON_PRELOAD_FOLDER, 'electron-preload' + process.env.QUASAR_ELECTRON_PRELOAD_EXTENSION)
      )
    }
  })

  if (process.env.DEV) {
    mainWindow.loadURL(process.env.APP_URL)
  } else {
    mainWindow.loadFile('index.html')
  }

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
```

### SSR mode changes

::: warning
The distributables (your production code) will be compiled to ESM form.
:::

Most changes refer to editing your `/src-ssr/server.js` file. Since you can now use HTTPS while developing your app too, you need to make the following changes to the file:

```diff /src-ssr/server.js > listen
- import { ssrListen } from 'quasar/wrappers'
+ import { defineSsrListen } from '#q-app/wrappers'

- export const listen = ssrListen(async ({ app, port, isReady }) => {
+ // notice: devHttpsApp param which will be a Node httpsServer (on DEV only) and if https is enabled
+ // notice: no "isReady" param (starting with 2.0.0-beta.16+)
+ // notice: defineSsrListen() param can still be async (below it isn't)
+ export const listen = defineSsrListen(({ app, devHttpsApp, port }) => {
-   await isReady()
-   return app.listen(port, () => {
+   const server = devHttpsApp || app
+   return server.listen(port, () => {
      if (process.env.PROD) {
        console.log('Server listening at port ' + port)
      }
    })
  })
```

Finally, this is how it should look like now:

```js /src-ssr/server.js > listen
import { defineSsrListen } from '#q-app/wrappers'
export const listen = defineSsrListen(({ app, devHttpsApp, port }) => {
  const server = devHttpsApp || app
  return server.listen(port, () => {
    if (process.env.PROD) {
      console.log('Server listening at port ' + port)
    }
  })
})
```

For a serverless approach, this is how the "listen" part should look like:

```js /src-ssr/server.js > listen
export const listen = defineSsrListen(({ app, devHttpsApp, port }) => {
  if (process.env.DEV) {
    const server = devHttpsApp || app;
    return server.listen(port, () => {
      console.log('Server listening at port ' + port)
    })
  }
  else { // in production
    // return an object with a "handler" property
    // that the server script will named-export
    return { handler: app }
  }
})
```

Next, the `serveStaticContent` function has changed:

```diff /src-ssr/server.js > serveStaticContent
- import { serveStaticContent }
+ import { defineSsrServeStaticContent } from '#q-app/wrappers'

- export const serveStaticContent = ssrServeStaticContent((path, opts) => {
-  return express.static(path, { maxAge, ...opts })
- })

+ /**
+ * Should return a function that will be used to configure the webserver
+ * to serve static content at "urlPath" from "pathToServe" folder/file.
+ *
+ * Notice resolve.urlPath(urlPath) and resolve.public(pathToServe) usages.
+ *
+ * Can be async: defineSsrServeStaticContent(async ({ app, resolve }) => {
+ * Can return an async function: return async ({ urlPath = '/', pathToServe = '.', opts = {} }) => {
+ */
+ export const serveStaticContent = defineSsrServeStaticContent(({ app, resolve }) => {
+  return ({ urlPath = '/', pathToServe = '.', opts = {} }) => {
+    const serveFn = express.static(resolve.public(pathToServe), { maxAge, ...opts })
+    app.use(resolve.urlPath(urlPath), serveFn)
+  }
+ })
```

Also, the `renderPreloadTag()` function can now take an additional parameter (`ssrContext`):

```diff /src-ssr/server.js
- import { ssrRenderPreloadTag } from 'quasar/wrappers'
+ import { defineSsrRenderPreloadTag } from '#q-app/wrappers'

+ export const renderPreloadTag = ssrRenderPreloadTag((file, { ssrContext }) => {
+  // ...
+ })
```

For TS devs, you should also make a small change to your /src-ssr/middlewares files, like this:

```diff For TS devs
+ import { type Request, type Response } from 'express';
// ...
- app.get(resolve.urlPath('*'), (req, res) => {
+ app.get(resolve.urlPath('*'), (req: Request, res: Response) => {
```

There are some additions to the `/quasar.config` file too:

```diff /quasar.config file
ssr: {
  // ...

  /**
   * When using SSR+PWA, this is the name of the
   * PWA index html file that the client-side fallbacks to.
   * For production only.
   *
   * Do NOT use index.html as name as it will mess SSR up!
   *
   * @default 'offline.html'
   */
- ssrPwaHtmlFilename?: string;
+ pwaOfflineHtmlFilename?: string;

  /**
   * Tell browser when a file from the server should expire from cache
   * (the default value, in ms)
   * Has effect only when server.static() is used
   */
- maxAge?: number;

  /**
   * Extend/configure the Workbox GenerateSW options
   * Specify Workbox options which will be applied on top of
   *  `pwa > extendGenerateSWOptions()`.
   * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
   */
+ pwaExtendGenerateSWOptions?: (config: object) => void;

  /**
   * Extend/configure the Workbox InjectManifest options
   * Specify Workbox options which will be applied on top of
   *  `pwa > extendInjectManifestOptions()`.
   * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
   */
+ pwaExtendInjectManifestOptions?: (config: object) => void;
}
```

### Bex mode changes

There are quite a few improvements:
* **The BEX mode now has HMR (hot module reload)!!!** (Chrome only)
* Completely rewrote & redesigned the Quasar Bridge to allow for:
  * Sending/receiving messages directly between any part of your bex (app, content scripts, background)
  * Ability to skip using the bridge altogether
  * Error handling for sending & receiving messages through the bridge
  * Better handling of internal resources to avoid memory leaks (there were some edge cases in the previous implementation)
  * Debug mode (where all the bridge communication will be outputted to the browser console)
  * Breaking changes highlights: background & content scripts initialization of the bridge; bride.on() calls when responding; bridge.send() calls
  * The bridge is now available throughout the App in `/src/` (regardless of the file used: boot files, router init, App.vue, any Vue component, ...) by accessing the `$q object` or `window.QBexBridge`
* One single manifest file from which both chrome & firefox ones can be extracted.
* Automatically infer the background script file & the content script files from the BEX manifest file.
* Ability to compile other js/ts files as well that you might need to dynamically load/inject.
* No more 3s delay when opening the popup.
* The "dom" script support was removed. Simply move your logic from there into one of your content scripts.
* New, easier API for the background/content scripts.

#### Dependencies

The `events` dependency is no longer required. If you have it installed, uninstall it:

```tabs
<<| bash Yarn |>>
$ yarn remove events
<<| bash NPM |>>
$ npm uninstall --save events
<<| bash PNPM |>>
$ pnpm remove events
<<| bash Bun |>>
$ bun remove events
```

#### CLI commands

The `quasar dev` and `quasar build` commands now require an explicit target (chrome or firefox). Should you wish to develop for both simultaneously, then you can spawn two quasar dev commands.

```bash
$ quasar dev -m bex -T <chrome|firefox>
$ quasar dev -m bex --target <chrome|firefox>

$ quasar build -m bex -T <chrome|firefox>
$ quasar build -m bex --target <chrome|firefox>
```

Note that the code in `/src` and `/src-bex` can now use `process.env.TARGET` (which will be "chrome" or "firefox").

#### HMR for Chrome

Significant improvements to the DX:
* Full HMR for devtools/options/popup page
* When changing the background script, the extension will automatically reload.
* When changing a content script, the extension will automatically reload & the tabs using those content scripts will auto-refresh.

#### The quasar.config file

```diff /quasar.config file
sourceFiles: {
+ bexManifestFile: 'src-bex/manifest.json',
  // ...
},
bex: {
- contentScripts: [] // no longer needed as scripts are
-                    // now extracted from the manifest file
+ extraScripts: []
}
```

#### The BEX manifest file

We are now supplying a way to differentiate the manifest for each target (chrome and firefox).

Notice that the manifest file now contains three root props: `all`, `chrome` & `firefox`. The manifest for chrome is deeply merged from all+chrome, while the firefox one is generated from all+firefox. You could even have different manifest versions for each target.

```json
{
  "all": {
    "manifest_version": 3,

    "icons": {
      "16": "icons/icon-16x16.png",
      "48": "icons/icon-48x48.png",
      "128": "icons/icon-128x128.png"
    },

    "permissions": [
      "storage",
      "tabs",
      "activeTab"
    ],

    "host_permissions": [ "*://*/*" ],
    "content_security_policy": {
      "extension_pages": "script-src 'self'; object-src 'self';"
    },
    "web_accessible_resources": [
      {
        "resources": [ "*" ],
        "matches": [ "*://*/*" ]
      }
    ],

    "action": {
      "default_popup": "www/index.html"
    },

    "content_scripts": [
      {
        "matches": [ "<all_urls>" ],
        "css": [ "assets/content.css" ],
        "js": [ "my-content-script.js" ]
      }
    ]
  },

  "chrome": {
    "background": {
      "service_worker": "background.js"
    }
  },

  "firefox": {
    "background": {
      "scripts": [ "background.js" ]
    }
  }
}
```

::: warning For TS devs
Your background and content scripts have the `.ts` extension. Use that extension in the manifest.json file as well! Examples: "background.ts", "my-content-script.ts". While the browser vendors do support only the `.js` extension, Quasar CLI will convert the file extensions automatically.
:::

#### The script files

```tabs Background script
<<| js New way |>>
/**
 * Importing the file below initializes the extension background.
 *
 * Warnings:
 * 1. Do NOT remove the import statement below. It is required for the extension to work.
 *    If you don't need createBridge(), leave it as "import '#q-app/bex/background'".
 * 2. Do NOT import this file in multiple background scripts. Only in one!
 * 3. Import it in your background service worker (if available for your target browser).
 */
import { createBridge } from '#q-app/bex/background'

/**
 * Call useBridge() to enable communication with the app & content scripts
 * (and between the app & content scripts), otherwise skip calling
 * useBridge() and use no bridge.
 */
const bridge = createBridge({ debug: false })
<<| js Old way |>>
import { bexBackground } from 'quasar/wrappers'

export default bexBackground((bridge /* , allActiveConnections */) => {
  // ...
})
```

```tabs Content script
<<| js New way |>>
/**
 * Importing the file below initializes the content script.
 *
 * Warning:
 *   Do not remove the import statement below. It is required for the extension to work.
 *   If you don't need createBridge(), leave it as "import '#q-app/bex/content'".
 */
import { createBridge } from '#q-app/bex/content'

// The use of the bridge is optional.
const bridge = createBridge({ debug: false })
/**
 * bridge.portName is 'content@<path>-<number>'
 *   where <path> is the relative path of this content script
 *   filename (without extension) from /src-bex
 *   (eg. 'my-content-script', 'subdir/my-script')
 *   and <number> is a unique instance number (1-10000).
 */

// Attach initial bridge listeners...

/**
 * Leave this AFTER you attach your initial listeners
 * so that the bridge can properly handle them.
 *
 * You can also disconnect from the background script
 * later on by calling bridge.disconnectFromBackground().
 *
 * To check connection status, access bridge.isConnected
 */
bridge.connectToBackground()
  .then(() => {
    console.log('Connected to background')
  })
  .catch(err => {
    console.error('Failed to connect to background:', err)
  })
<<| js Old way |>>
import { bexContent } from 'quasar/wrappers'

export default bexContent((/* bridge */) => {
  // ...
})
```

```tabs App (/src/...) vue components
<<| html Composition API + script setup |>>
<template>
  <div />
</template>

<script setup>
import { useQuasar } from 'quasar'
const $q = useQuasar()

// Use $q.bex (the bridge)
// $q.bex.portName is "app"
</script>
<<| html Composition API + script |>>
<template>
  <div />
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()
    // Use $q.bex (the bridge)
    // $q.bex.portName is "app"
  }
}
</script>
<<| html Options API |>>
<template>
  <div />
</template>

<script>
export default {
  // Use this.$q.bex (the bridge)
  // this.$q.bex.portName is "app"
}
</script>
```

Please note that the devtools/popup/options page portName will be `app`.

#### The new BEX bridge

```js Bex Bridge messaging
// Listen to a message from the client
bridge.on('test', message => {
  console.log(message)
  console.log(message.payload)
  console.log(message.from)
})

// Send a message and split payload into chunks
// to avoid max size limit of BEX messages.
// Warning! This happens automatically when the payload is an array.
// If you actually want to send an Array, wrap it in an object.
bridge.send({
  event: 'test',
  to: 'app',
  payload: [ 'chunk1', 'chunk2', 'chunk3', ... ]
}).then(responsePayload => { ... }).catch(err => { ... })

// Send a message and wait for a response
bridge.send({
  event: 'test',
  to: 'background',
  payload: { banner: 'Hello from content-script' }
}).then(responsePayload => { ... }).catch(err => { ... })

// Listen to a message from the client and respond synchronously
bridge.on('test', message => {
  console.log(message)
  return { banner: 'Hello from a content-script!' }
})

// Listen to a message from the client and respond asynchronously
bridge.on('test', async message => {
  console.log(message)
  const result = await someAsyncFunction()
  return result
})
bridge.on('test', message => {
  console.log(message)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ banner: 'Hello from a content-script!' })
    }, 1000)
  })
})

// Broadcast a message to app & content scripts
bridge.portList.forEach(portName => {
  bridge.send({ event: 'test', to: portName, payload: 'Hello from background!' })
})

// Find any connected content script and send a message to it
const contentPort = bridge.portList.find(portName => portName.startsWith('content@'))
if (contentPort) {
  bridge.send({ event: 'test', to: contentPort, payload: 'Hello from background!' })
}

// Send a message to a certain content script
bridge
  .send({ event: 'test', to: 'content@my-content-script-2345', payload: 'Hello from a content-script!' })
  .then(responsePayload => { ... })
  .catch(err => { ... })

// Listen for connection events
// (the "@quasar:ports" is an internal event name registered automatically by the bridge)
// --> ({ portList: string[], added?: string } | { portList: string[], removed?: string })
bridge.on('@quasar:ports', ({ portList, added, removed }) => {
  console.log('Ports:', portList)
  if (added) {
    console.log('New connection:', added)
  } else if (removed) {
    console.log('Connection removed:', removed)
  }
})

// Current bridge port name (can be 'background', 'app', or 'content@<name>-<xxxxx>')
console.log(bridge.portName)
```

::: warning Warning! Sending large amounts of data
All browser extensions have a hard limit on the amount of data that can be passed as communication messages (example: 50MB). If you exceed that amount on your payload, you can send chunks (**`payload` param should be an Array**).

<br>

```js
bridge.send({
  event: 'some.event',
  to: 'app',
  payload: [ chunk1, chunk2, ...chunkN ]
})
```

<br>

When calculating the payload size, have in mind that the payload is wrapped in a message built by the Bridge that contains some other properties too. That takes a few bytes as well. So your chunks' size should be with a few bytes below the browser's threshold.
:::

::: warning Warning! Performance on sending an Array
Like we've seen on the warning above, if `payload` is Array then the bridge will send a message for each of the Array's elements.
When you actually want to send an Array (not split the payload into chunks), this will be **VERY** inefficient.

<br>

The solution is to wrap your Array in an Object (so only one message will be sent):

<br>

```js
bridge.send({
  event: 'some.event',
  to: 'background',
  payload: {
    myArray: [ /*...*/ ]
  }
})
```
:::

If you encounter problems with sending messages between the BEX parts, you could enable the debug mode for the bridges that interest you. In doing so, the communication will also be outputted to the browser console:

```js Bridge debug mode
// Dynamically set debug mode
bridge.setDebug(true) // boolean

// Log a message on the console (if debug is enabled)
bridge.log('Hello world!')
bridge.log('Hello', 'world!')
bridge.log('Hello world!', { some: 'data' })
bridge.log('Hello', 'world', '!', { some: 'object' })
// Log a warning on the console (regardless of the debug setting)
bridge.warn('Hello world!')
bridge.warn('Hello', 'world!')
bridge.warn('Hello world!', { some: 'data' })
bridge.warn('Hello', 'world', '!', { some: 'object' })
```

### /quasar.config 文件的其他变更

`/quasar.config` 文件中的 `ctx` 对象新增了一个属性（`appPaths`）。

```js
import { defineConfig } from '#q-app/wrappers'
export default defineConfig((ctx) => ({
  // ctx.appPaths is available
```

`ctx.appPaths` 的定义使用了 `QuasarAppPaths` 这个 TypeScript 类型，具体如下：

```diff
export interface IResolve {
  cli: (dir: string) => string;
  app: (dir: string) => string;
  src: (dir: string) => string;
+ public: (dir: string) => string;
  pwa: (dir: string) => string;
  ssr: (dir: string) => string;
  cordova: (dir: string) => string;
  capacitor: (dir: string) => string;
  electron: (dir: string) => string;
  bex: (dir: string) => string;
}

export interface QuasarAppPaths {
  cliDir: string;
  appDir: string;
  srcDir: string;
+ publicDir: string;
  pwaDir: string;
  ssrDir: string;
  cordovaDir: string;
  capacitorDir: string;
  electronDir: string;
  bexDir: string;

  quasarConfigFilename: string;
+ quasarConfigInputFormat: "esm" | "cjs" | "ts";
+ quasarConfigOutputFormat: "esm" | "cjs";

  resolve: IResolve;
}
```

```diff /quasar.config > sourceFiles
sourceFiles: {
+ bexManifestFile?: string;
}
```

```diff /quasar.config > framework
framework: {
  /**
   * Auto import - how to detect components in your vue files
   *   "kebab": q-carousel q-page
   *   "pascal": QCarousel QPage
   *   "combined": q-carousel QPage
   * @default 'kebab'
   */
  autoImportComponentCase?: "kebab" | "pascal" | "combined";

  /**
   * Auto import - which file extensions should be interpreted as referring to Vue SFC?
   * @default [ 'vue' ]
   */
+ autoImportVueExtensions?: string[];

  /**
   * Auto import - which file extensions should be interpreted as referring to script files?
   * @default [ 'js', 'jsx', 'ts', 'tsx' ]
   */
+ autoImportScriptExtensions?: string[];

  /**
   * Treeshake Quasar's UI on dev too?
   * Recommended to leave this as false for performance reasons.
   * @default false
   */
+ devTreeshaking?: boolean;
+ // was previously under /quasar.conf > build
}
```

```diff /quasar.config > build
build: {
  /**
   * Treeshake Quasar's UI on dev too?
   * Recommended to leave this as false for performance reasons.
   * @default false
   */
- devTreeshaking?: boolean;
- // moved under /quasar.conf > framework

  /**
   * Should we invalidate the Vite and ESLint cache on startup?
   * @default false
   */
- rebuildCache?: boolean;

  /**
   * Automatically open remote Vue Devtools when running in development mode.
   */
+ vueDevtools?: boolean;

  /**
   * Folder where Quasar CLI should look for .env* files.
   * Can be an absolute path or a relative path to project root directory.
   *
   * @default project root directory
   */
+ envFolder?: string;
  /**
   * Additional .env* files to be loaded.
   * Each entry can be an absolute path or a relative path to quasar.config > build > envFolder.
   *
   * @example ['.env.somefile', '../.env.someotherfile']
   */
+ envFiles?: string[];
}
```

### 其他注意事项

你可能需要从 `@intlify/vite-plugin-vue-i18n` 升级或切换到较新的 `@intlify/unplugin-vue-i18n`。

在移除旧的包并安装新的包之后，按以下方式更新你的 `/quasar.config` 文件：
```diff /quasar.config
- import path from 'node:path'
+ import { fileURLToPath } from 'node:url'

export default defineConfig((ctx) => {
  return {
    build: {
      vitePlugins: [
-       ['@intlify/vite-plugin-vue-i18n', {
+       ['@intlify/unplugin-vue-i18n/vite', {
-         include: path.resolve(__dirname, './src/i18n/**')
+         include: [ fileURLToPath(new URL('./src/i18n', import.meta.url)) ],
+         ssr: ctx.modeName === 'ssr'
        }]
      ]
    }
  }
})
```

### 环境变量点文件支持

关于环境变量点文件支持，这里再详细说明一下。这些文件会被检测并使用（文件的顺序很重要）：

```
.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git
```

…… 这里 “被 Git 忽略” 是假设在发布这个软件包后创建了一个默认的项目文件夹，否则请将 `.env.local*` 添加到你的 `/.gitignore` 文件中。

你也可以配置从不同的文件夹中获取上述文件，甚至还能向列表中添加更多的文件：

```js /quasar.config file
build: {
  /**
   * Folder where Quasar CLI should look for .env* files.
   * Can be an absolute path or a relative path to project root directory.
   *
   * @default project root directory
   */
  envFolder?: string;

  /**
   * Additional .env* files to be loaded.
   * Each entry can be an absolute path or a relative path to quasar.config > build > envFolder.
   *
   * @example ['.env.somefile', '../.env.someotherfile']
   */
  envFiles?: string[];

  /**
   * Filter the env variables that are exposed to the client
   * through the env files. This does not account also for the definitions
   * assigned directly to quasar.config > build > env prop.
   *
   * Requires @quasar/app-vite v2.0.3+
   */
  envFilter?:
    (env: { [index: string]: string | boolean | undefined | null })
      => { [index: string]: string | boolean | undefined | null };
}
```

请记住，你可以通过使用 `build > envFilter` 来筛选掉不需要的环境变量键，甚至还可以更改某些键对应的值。

```js /quasar.config file
build: {
  // @quasar/app-vite v2.0.3+
  envFilter (originalEnv) {
    const newEnv = {}
    for (const key in originalEnv) {
      if (/* ...decide if it goes in or not... */) {
        newEnv[ key ] = originalEnv[ key ]
      }
    }

    // remember to return your processed env
    return newEnv
  }
}
```
