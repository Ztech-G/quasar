---
title: 应用图标
desc: 在一个Quasar应用中管理所有的应用图标和启动页.
---

如果你的目标是Quasar当前支持的所有平台，那么你将需要根据四种不同的媒体类型（png,ico,icns和svg）制作100+个不同的文件。如果你使用像Gimp，PS或者Affinity Designer这样的工具，你会发现这些文件相当大，并且创建和命名它们的过程很容易出现操作错误。您可能希望至少压缩PNG文件，并从SVG中删除不必要的应用程序元数据。

<img src="https://cdn.quasar.dev/img/iconfactory.png" style="float:right;max-width:15%;min-width:240px;padding-top:40px">

## 图标生成CLI

::: tip
非常推荐使用[Icon Genie CLI](/icongenie/introduction),因为它根据一个源图标并自动克隆、缩放、缩小图标并将其放置到适当的目录中。当需要时，它还会告诉你月需要在/index.html或/src/index.tempalte.html文件中添加哪些标签。
:::
