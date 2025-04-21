---
title: 开发环境下的 API 代理设置
desc: (@quasar/app-vite) 如何在 Quasar 开发服务器中使用 API 代理。
related:
  - /quasar-cli-vite/quasar-config-file
---

当将（由 Quasar CLI 创建的）项目文件夹与现有的后端进行集成时，一个常见的需求是在使用开发服务器时访问后端 API。为了实现这一点，我们可以同时运行开发服务器和 API 后端（或者在远程运行），并让开发服务器将所有 API 请求代理到实际的后端。

如果你在 API 请求中使用相对路径，那么这种代理就很有用。显然，在开发过程中这些相对路径可能无法正常工作。为了创建一个与已部署的网站/应用程序相似的环境，你可以对 API 请求进行代理。

要配置代理规则，请编辑 `/quasar.config` 文件中的 `devServer.proxy` 部分。实际上，它使用的是 `http - proxy`。其完整的选项列表可[点击此处查看](https://github.com/http-party/node-http-proxy#options)。
```js /quasar.config file
devServer: {
  proxy: {
    // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
    '/foo': 'http://localhost:4567',
    // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
    // with RegExp: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
    '^/fallback/.*': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/fallback/, ''),
    },
    // Using the proxy instance
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      configure: (proxy, options) => {
        // proxy will be an instance of 'http-proxy'
      },
    },
    // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
    // Exercise caution using `rewriteWsOrigin` as it can leave the proxying open to CSRF attacks.
    '/socket.io': {
      target: 'ws://localhost:5174',
      ws: true,
      rewriteWsOrigin: true,
    },
  },
}
```
