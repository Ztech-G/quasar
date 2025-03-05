---
title: 命令列表
desc: (@quasar/app-vite) The entire list of Quasar CLI commands.
---

Familiarize yourself with the list of available commands inside a Quasar project:

```bash
$ quasar -h

  Example usage
    $ quasar <command> <options>

  Help for a command
    $ quasar <command> --help
    $ quasar <command> -h

  Options
    --version, -v Print Quasar App CLI version

  Commands
    dev, d        Start a dev server for your App
    build, b      Build your app for production
    prepare, p    Prepare the app for linting, type-checking, IDE integration, etc.
    clean, c      Clean dev/build cache, /dist folder & entry points
    new, n        Quickly scaffold page/layout/component/... vue file
    mode, m       Add/remove Quasar Modes for your App
    inspect       Inspect Vite/esbuild configs used under the hood
                    - keeps into account your quasar.config file
                      and your installed App Extensions
    ext, e        Manage Quasar App Extensions
    run, r        Run specific command provided by an installed
                    Quasar App Extension
    describe      Describe a Quasar API (component)
    info, i       Display info about your machine and your App
    help, h       Displays this message

  If the specified command is not found, then "quasar run"
  will be executed with the provided arguments.

  Commands supplied by @quasar/cli global installation:

    upgrade       Check (and optionally) upgrade Quasar packages
                    from a Quasar project folder
    serve         Create an ad-hoc server on App's distributables
```

See help for any command:

```bash
$ quasar [command-name] --help
```

## Upgrade

从一个Quasar项目文件夹中检查（并且视情况而定）升级Quasar相关的包。

```bash
# view all options:
$ quasar upgrade -h

# checks for non-breaking change upgrades and displays them,
# but will not carry out the install
$ quasar upgrade

# checks for pre-releases (alpha/beta):
$ quasar upgrade -p

# checks for major new releases (includes breaking changes):
$ quasar upgrade -m

# use another npm registry url than what your machine is configured with:
# (added in @quasar/cli v2.4)
$ quasar upgrade -r https://registry.npmjs.org/

# to perform the actual upgrade,
# combine any of the params above and add "-i" (or "--install"):
$ quasar upgrade -i
```

::: warning Note for code editor terminals
如果你使用的是代码编辑器自带的终端而非真正的系统终端，当你运行 `quasar upgrade` 命令时，可能会出现“Command not found”（命令未找到）错误，或者显示 `@quasar/cli` 版本为 `undefined`。此时，你需要进入代码编辑器终端的设置，取消勾选“将项目根目录下的 `node_modules/.bin` 添加到 `%PATH%` 环境变量”这一选项（或其等效选项），然后重启代码编辑器。
:::

## Info
Quasar CLI 配备了一组稳定的多个 NPM 构建包（如 Vite、Vue 等）组合，这些组合在经过大量测试后会频繁更新。

为了让你了解自己正在使用的 Node、Quasar CLI、Quasar、Vue（以及其他许多组件）的版本，请在 Quasar 项目文件夹中执行以下命令：

```bash
$ quasar info
```

## Dev

```bash
$ quasar dev -h

  Description
    Starts the app in development mode (hot-code reloading, error
    reporting, etc)

  Usage
    $ quasar dev
    $ quasar dev -p <port number>

    $ quasar dev -m ssr

    # alias for "quasar dev -m capacitor -T ios"
    $ quasar dev -m ios

    # alias for "quasar dev -m capacitor -T android"
    $ quasar dev -m android

    # passing extra parameters and/or options to
    # underlying "cordova" or "electron" executables:
    $ quasar dev -m cordova -T ios -- some params --and options --here
    $ quasar dev -m electron -- --no-sandbox --disable-setuid-sandbox
    # when on Windows and using Powershell:
    $ quasar dev -m cordova -T ios '--' some params --and options --here
    $ quasar dev -m electron '--' --no-sandbox --disable-setuid-sandbox

  Options
    --mode, -m       App mode [spa|ssr|pwa|cordova|capacitor|electron|bex] (default: spa)
    --port, -p       A port number on which to start the application
    --hostname, -H   A hostname to use for serving the application
    --devtools, -d   Open remote Vue Devtools
    --help, -h       Displays this message

    Only for Cordova mode:
    --target, -T     (required) App target [android|ios]
    --emulator, -e   (optional) Emulator name
                        Examples: iPhone-7, iPhone-X
                        iPhone-X,com.apple.CoreSimulator.SimRuntime.iOS-12-2
    --ide, -i        Open IDE (Android Studio / XCode) instead of letting Cordova
                       boot up the emulator / building in terminal, in which case
                       the "--emulator" param will have no effect


    Only for Capacitor mode:
    --target, -T     (required) App target [android|ios]

    Only for BEX mode:
    --target, -T     (required) Browser family target [chrome|firefox]
```

Quasar 开发服务器允许你通过在内存中编译和维护代码来开发应用程序。在提供开箱即用的热更新功能的同时，会有一个 Web 服务器来托管你的应用程序。当你修改代码时，在内存中运行能实现更快的重新构建。

> 热更新远不止是在代码更改时刷新你的浏览器。它无需刷新页面，就能即时更新代码，同时还能保留应用程序的状态（比如 Vue 的模型数据）。请注意，在某些情况下无法实现热更新，此时开发 Web 服务器就会直接刷新你的浏览器页面。（务必始终确保每次只运行一个 Quasar CLI 实例，否则热更新及其他功能将会失效！）

根据你想要开发的内容，你可以使用如下的 “quasar dev” 命令来启动开发服务器：

```bash
# Developing a SPA
$ quasar dev
# ...or
$ quasar dev -m spa

# Developing for SSR
$ quasar dev -m ssr

# Developing a PWA
$ quasar dev -m pwa

# Developing a BEX for production
$ quasar dev -m bex

# Developing a Mobile App (through Cordova)
$ quasar dev -m cordova -T [android|ios]
# or the short form:
$ quasar dev -m [android|ios]

# Developing an Electron App
$ quasar dev -m electron

# Developing a Browser Extension (BEX)
$ quasar dev -m bex -T [chrome|firefox]

# passing extra parameters and/or options to
# underlying "cordova" or "electron" executables:
$ quasar dev -m ios -- some params --and options --here
$ quasar dev -m electron -- --no-sandbox --disable-setuid-sandbox
# when on Windows and using Powershell:
$ quasar dev -m ios '--' some params --and options --here
$ quasar dev -m electron '--' --no-sandbox --disable-setuid-sandbox
```

如果你想更改托管应用程序的主机名或端口，有三种选择：
* 编辑'/quasar.config' 文件:
  ```js
  devServer: {
    host: '...',
    port: ...
  }
  ```
* 通过 '-H' (主机名) 和 '-p' (端口) 命令选项.
* 如果这只是一次性的需求，可将主机名和/或端口指定为环境变量:
  ```bash
  $ PORT=3000 quasar dev
  $ HOSTNAME=1.1.1.14 quasar dev
  ```

如果热更新似乎出现了问题，你可以尝试两种解决方法：
* 使用以下方式更改项目文件夹的权限：

  ```bash
  sudo chown -R username: .
  ```
* 或者以根用户权限运行开发服务器。

  ```bash
  sudo quasar dev
  ```

## Build

```bash
$ quasar build -h

  Description
    Builds distributables of your app.

  Usage
    $ quasar build
    $ quasar build -p <port number>

    $ quasar build -m ssr

    # alias for "quasar build -m cordova -T ios"
    $ quasar build -m ios

    # alias for "quasar build -m cordova -T android"
    $ quasar build -m android

    # passing extra parameters and/or options to
    # underlying "cordova" executable:
    $ quasar build -m ios -- some params --and options --here
    # when on Windows and using Powershell:
    $ quasar build -m ios '--' some params --and options --here

  Options
    --mode, -m      App mode [spa|ssr|pwa|cordova|capacitor|electron|bex] (default: spa)
    --target, -T    App target
                      - Cordova (default: all installed)
                        [android|ios]
                      - Capacitor
                        [android|ios]
                      - Electron with default "@electron/packager" bundler (default: yours)
                        [darwin|win32|linux|mas|all]
                      - Electron with "electron-builder" bundler (default: yours)
                        [darwin|mac|win32|win|linux|all]
                      - Bex
                        [chrome|firefox]
    --publish, -P   Also trigger publishing hooks (if any are specified)
                      - Has special meaning when building with Electron mode and using
                        electron-builder as bundler
    --debug, -d     Build for debugging purposes
    --skip-pkg, -s  Build only UI (skips creating Cordova/Capacitor/Electron executables)
                      - Cordova (it only fills in /src-cordova/www folder with the UI code)
                      - Capacitor (it only fills in /src-capacitor/www folder with the UI code)
                      - Electron (it only creates the /dist/electron/UnPackaged folder)
    --help, -h      Displays this message

    ONLY for Cordova and Capacitor mode:
    --ide, -i       Open IDE (Android Studio / XCode) instead of finalizing with a
                      terminal/console-only build

    ONLY for Electron mode:
    --bundler, -b   Bundler (@electron/packager or electron-builder)
                      [packager|builder]
    --arch, -A      App architecture (default: yours)
                      - with default "@electron/packager" bundler:
                          [ia32|x64|armv7l|arm64|mips64el|all]
                      - with "electron-builder" bundler:
                          [ia32|x64|armv7l|arm64|all]

    ONLY for electron-builder (when using "publish" parameter):
    --publish, -P  Publish options [onTag|onTagOrDraft|always|never]
                     - see https://www.electron.build/configuration/publish

    Only for BEX mode:
    --target, -T     (required) Browser family target [chrome|firefox]
```

Quasar 命令行界面（CLI）可以将所有内容打包在一起，并针对生产环境优化你的应用程序。它会压缩源代码，提取供应商组件，利用浏览器缓存等等。

```bash
# Build a SPA for production
$ quasar build
# ...or
$ quasar build -m spa

# Build a SSR for production
$ quasar build -m ssr

# Build a PWA for production
$ quasar build -m pwa

# Build a BEX for production
$ quasar build -m bex -T [chrome|firefox]

# Build a Mobile App (through Cordova)
$ quasar build -m cordova -T [android|ios]
# or the short form:
$ quasar build -m [android|ios]

# Build an Electron App for production
$ quasar build -m electron

# passing extra parameters and/or options to
# underlying "cordova" executable:
$ quasar build -m ios -- some params --and options --here
# when on Windows and using Powershell:
$ quasar build -m ios '--' some params --and options --here

# Create a production build with ability to debug it
# (has source-maps and code is NOT minified)
$ quasar build -d [-m <mode>]
```

## Prepare
为你的项目文件夹做好适配集成开发环境（IDE）的准备工作，使自动补全功能以及其他 IDE 特性能够正常运行。

```bash
$ quasar prepare
```

## Clean
清理所有构建生成的文件和资源。

```bash
$ quasar clean
# 需要再次调用 “quasar prepare” 命令。
```

## New
生成 Components, Pages, Layouts, Pinia Store.

::: tip
这个命令只是一个辅助工具，用于快速搭建页面、布局、组件或 Pinia 存储模块。你并非必须使用它，但当你不知道如何着手时，它能提供帮助。
:::

```bash
$ quasar new -h

  Description
    Quickly scaffold files.

  Usage
    $ quasar new <p|page> [-f <js|ts>] <page_file_name>
    $ quasar new <l|layout> [-f <js|ts>] <layout_file_name>
    $ quasar new <c|component> [-f <js|ts>] <component_file_name>
    $ quasar new <b|boot> [-f <js|ts>] <boot_name>
    $ quasar new <s|store> [-f <js|ts>] <store_module_name>
    $ quasar new ssrmiddleware [-f <js|ts>] <middleware_name>

  Examples
    # Create src/pages/MyNewPage.vue:
    $ quasar new p MyNewPage

    # Create src/pages/MyNewPage.vue and src/pages/OtherPage.vue:
    $ quasar new p MyNewPage OtherPage

    # Create src/layouts/shop/Checkout.vue
    $ quasar new layout shop/Checkout.vue

    # Create src/layouts/shop/Checkout.vue (forcing TypeScript)
    $ quasar new layout -f ts shop/Checkout.vue

    # Create a store with TypeScript (-f ts is optional if tsconfig.json is present)
    $ quasar new store -f ts myStore

  Options
    --help, -h            Displays this message

    --format -f <option>  (optional) Use a supported format for the template.
                          This gets inferred automatically for your project.
                          Possible overriding values:
                             * js - JS template
                             * ts - TS template
```

## Mode

```bash
$ quasar mode -h

  Description
    Add/Remove support for PWA / BEX / Cordova / Capacitor / Electron modes.

  Usage
    $ quasar mode [add|remove] [pwa|ssr|bex|cordova|capacitor|electron] [--yes]

    # determine what modes are currently installed:
    $ quasar mode

  Options
    --yes, -y     Skips the "Are you sure?" question
                  when removing a Quasar mode
    --help, -h    Displays this message
```
当你使用命令行界面（CLI）初始化一个项目时，你可以构建单页网站/应用程序（SPA）、服务器端渲染网站/应用程序（SSR，可选择让 PWA 客户端接管）、渐进式 Web 应用程序（PWA）、移动应用程序（通过 Cordova）和/或 Electron 应用程序。当你为 SSR、PWA、Cordova 或 Electron 进行开发时，需要安装这些模式对应的依赖。如果你执行 “quasar dev” 或 “quasar build” 命令，它们会自动完成安装。

这些模式会在你的项目中添加一个 “src-*” 文件夹，其中包含针对该模式的特定代码：

| 目录 | 模式 | 描述 |
| --- | --- | --- |
| src-ssr | ssr | Contains the production Node server files. |
| src-pwa | pwa | Contains the Service Worker file that you can tweak. |
| src-cordova | cordova | Is a Cordova project folder that will be using your 'src' as content. Tweak Cordova config, add/remove platforms, splash screens, Cordova plugins and so on from this folder. Do NOT touch "src-cordova/www" folder though as it will get overwritten at every build. |
| src-electron | electron | Has code for the main Electron thread. The renderer thread will be your app in 'src'. |
| src-bex | bex | Contains the specific files for Browser Extensions mode. |

如果出于某种原因你决定不再需要某个模式，你可以将其移除。**这将永久删除**相应的 “src-*” 文件夹。

```bash
$ quasar mode remove pwa
```

## Describe
这个命令对于描述你项目中所使用的任何 Quasar 组件、指令或插件的 API 很有用。**它是针对你项目文件夹中所安装的特定 Quasar 版本的。**

例如: `$ quasar describe QIcon`, `$ quasar describe TouchPan`, `$ quasar describe Cookies`.

```bash
$ quasar describe -h

  Description
    Describes a component API for project's Quasar version being used

  Usage
    $ quasar describe <component/directive/Quasar plugin>

    # list all available API entries:
    $ quasar describe list
    # list available API entries that contain a String (ex "storage"):
    $ quasar describe list storage

    # display everything:
    $ quasar describe QIcon

    # displaying only props:
    $ quasar describe QIcon -p
    # displaying props and methods only:
    $ quasar describe QIcon -p -m
    # filtering by "si":
    $ quasar describe QIcon -f si
    # filtering only props by "co":
    $ quasar describe QIcon -p -f co

    # Open docs URL:
    $ quasar describe QIcon -d

  Options
    --filter, -f <filter> Filters the API
    --props, -p           Displays the API props
    --slots, -s           Displays the API slots
    --events, -e          Displays the API events
    --methods, -m         Displays the API methods
    --computedProps, -c   Displays the API computed props
    --value, -v           Displays the API value
    --arg, -a             Displays the API arg
    --modifiers, -M       Displays the API modifiers
    --injection, -i       Displays the API injection
    --quasar, -q          Displays the API quasar conf options
    --docs, -d            Opens the docs API URL
    --help, -h            Displays this message
```

```bash
$ quasar describe QIcon

 Describing QIcon component API
 Description is based on your project's Quasar version

 Properties

   name (String)
     Description: Name of the icon, following Quasar convention
     Examples:
       map
       ion-add

   color (String)
     Description: Color name for component from the Quasar Color Palette
     Examples:
       primary
       teal-10

   size (String)
     Description: Size in CSS units, including unit name
     Examples:
       16px
       2rem

   left (Boolean)
     Description: Apply a standard margin on the left side. Useful if icon is on the right side of something.

   right (Boolean)
     Description: Apply a standard margin on the right side. Useful if icon is on the left side of something.

 Slots

   default
     Suggestions: QTooltip or QMenu

 Scoped Slots

   *No scoped slots*

 Events

   *No events*

 Methods

   *No methods*
```

## Inspect
这个命令可用于检查 Quasar CLI 生成的 Vite 配置。

```bash
$ quasar inspect -h

  Description
    Inspect Quasar generated Vite config

  Usage
    $ quasar inspect
    $ quasar inspect -c build
    $ quasar inspect -m electron -p 'build.outDir'

  Options
    --cmd, -c        Quasar command [dev|build] (default: dev)
    --mode, -m       App mode [spa|ssr|pwa|bex|cordova|capacitor|electron] (default: spa)
    --depth, -d      Number of levels deep (default: 2)
    --path, -p       Path of config in dot notation
                        Examples:
                          -p module.rules
                          -p plugins
    --thread, -t     Display only one specific app mode config thread
    --help, -h       Displays this message
```

## Ext
这个命令用于管理 [App Extensions](/app-extensions/introduction).

```bash
$ quasar ext -h

  Description
    Manage Quasar App Extensions

  Usage
    # display list of installed extensions
    $ quasar ext

    # Add Quasar App Extension
    $ quasar ext add <ext-id>

    # Remove Quasar App Extension
    $ quasar ext remove <ext-id>

    # Add Quasar App Extension, but
    # skip installing the npm package
    # (assumes it's already installed)
    $ quasar ext invoke <ext-id>

    # Remove Quasar App Extension, but
    # skip uninstalling the npm package
    $ quasar ext uninvoke <ext-id>

  Options
    --help, -h       Displays this message
```

## Run
此命令用于运行由你安装到项目文件夹中的 [应用扩展](/app-extensions/introduction) 所提供的命令。 .

```bash
$ quasar run -h

  Description
    Run app extension provided commands

  Usage
    $ quasar run <extension-id> <cmd> [args, params]
    $ quasar <extension-id> <cmd> [args, params]

    $ quasar run iconify create pic -s --mark some_file
    $ quasar iconify create pic -s --mark some_file
        # Note: "iconify" is an example and not a real extension.
        # Looks for installed extension called "iconify"
        # (quasar-app-extension-iconify extension package)
        # and runs its custom defined "create" command
        # with "pic" argument and "-s --mark some_file" params

  Options
    --help, -h       Displays this message
```

## Serve
这个命令也可以在生产环境中使用，它由全局安装的 `@quasar/cli` 包提供。

```bash
$ quasar serve -h

  Description
    Start a HTTP(S) server on a folder.

  Usage
    $ quasar serve [path]
    $ quasar serve . # serve current folder

    If you serve a SSR folder built with the CLI then
    control is yielded to /index.js and params have no effect.

  Options
    --port, -p              Port to use (default: 4000)
    --hostname, -H          Address to use (default: 0.0.0.0)
    --gzip, -g              Compress content (default: true)
    --silent, -s            Suppress log message
    --colors                Log messages with colors (default: true)
    --open, -o              Open browser window after starting
    --cache, -c <number>    Cache time (max-age) in seconds;
                            Does not apply to /service-worker.js
                            (default: 86400 - 24 hours)
    --micro, -m <seconds>   Use micro-cache (default: 1 second)

    --history               Use history api fallback;
                              All requests fallback to /index.html,
                              unless using "--index" parameter
    --index, -i <file>      History mode (only!) index url path
                              (default: index.html)

    --https                 Enable HTTPS
    --cert, -C [path]       Path to SSL cert file (Optional)
    --key, -K [path]        Path to SSL key file (Optional)
    --proxy <file.mjs>      Proxy specific requests defined in file;
                            File must export Array ({ path, rule })
                            See example below. "rule" is defined at:
                            https://github.com/chimurai/http-proxy-middleware
    --cors                  Enable CORS for all requests
    --help, -h              Displays this message

  Proxy file example
    export default [
      {
        path: '/api',
        rule: { target: 'http://www.example.org' }
      }
    ]
    --> will be transformed into app.use(path, httpProxyMiddleware(rule))
```

### 自定义Node服务器
在构建单页应用程序（SPA）或渐进式 Web 应用程序（PWA）时，可分发文件夹可以由任何静态 Web 服务器提供服务。为了进行测试（假设你没有设置特定的 `publicPath` 或者没有使用 Vue Router 的 “history” 模式），你可以使用 `http-server` npm 包。

或者你也可以构建自己的服务器。以下是一些示例：

```js When using default Vue Router 'hash' mode
import express from 'express'
import serveStatic from 'serve-static'

const port = process.env.PORT || 5000
const app = express()

app.use(serveStatic(...path-to-dist...))
app.listen(port)
```

```js When using Vue Router 'history' mode
import express from 'express'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'

const port = process.env.PORT || 5000
const app = express()

app.use(history())
app.use(serveStatic(...path-to-dist...))
app.listen(port)
```

如果你需要对 API 进行 URL 重写，或者简单来说，你想对 API 请求进行代理，那么你可以使用 `http-proxy-middleware` 包。

```js
// add this to one of the two previous examples:
import { createProxyMiddleware } from 'http-proxy-middleware'

// ...
app.use('/api', createProxyMiddleware({
  target: `http://my-api.com:5050`,
  pathRewrite: {"^/api" : ""}
}))

// then app.listen(...)
```

最后，运行这些文件中的一个：

```bash
$ node my-server.js
```
