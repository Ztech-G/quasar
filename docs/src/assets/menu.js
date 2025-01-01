export default [
  {
    name: 'Why donate',
    nameCn: '为什么捐赠',
    icon: 'assignment_late',
    path: 'why-donate'
  },
  {
    name: 'API Explorer',
    nameCn: '浏览API',
    icon: 'travel_explore',
    path: 'api-explorer'
  },
  {
    name: 'How to contribute',
    nameCn: '如何贡献',
    icon: 'code',
    path: 'how-to-contribute',
    children: [
      {
        name: 'Contribution Guide',
        nameCn: '贡献指导',
        path: 'contribution-guide'
      },
      {
        name: 'Running Projects',
        nameCn: '运行项目',
        path: 'running-projects'
      },
      {
        name: 'Start a New Project',
        nameCn: '开始一个新的项目',
        path: 'new-project'
      },
      {
        name: 'Project Maintainer Role',
        nameCn: '项目维护者',
        path: 'project-maintainer'
      },
      {
        name: 'Commit Conventions',
        nameCn: '提交规范',
        path: 'commit-conventions'
      }
    ]
  },
  {
    name: 'Options & Helpers',
    nameCn: '选项与辅助',
    icon: 'tune',
    path: 'options',
    children: [
      {
        name: 'The $q object',
        nameCn: '$q对象',
        path: 'the-q-object'
      },
      {
        name: 'App Icons',
        nameCn: 'App图标',
        path: 'app-icons'
      },
      {
        name: 'SEO',
        path: 'seo'
      },
      {
        name: 'Quasar Language Packs',
        nameCn: 'Quasar语言包',
        path: 'quasar-language-packs'
      },
      {
        name: 'App Internationalization',
        nameCn: 'App国际化',
        path: 'app-internationalization'
      },
      {
        name: 'RTL Support',
        nameCn: '支持RTL',
        path: 'rtl-support'
      },
      {
        name: 'Installing Icon Libraries',
        nameCn: '安装图标库',
        path: 'installing-icon-libraries'
      },
      {
        name: 'Quasar Icon Sets',
        nameCn: 'Quasar图标集',
        path: 'quasar-icon-sets'
      },
      {
        name: 'Platform Detection',
        nameCn: '平台检测',
        path: 'platform-detection'
      },
      {
        name: 'Screen Plugin',
        nameCn: '屏幕插件',
        path: 'screen-plugin'
      },
      {
        name: 'Animations',
        nameCn: '动画',
        path: 'animations'
      },
      {
        name: 'Transitions',
        nameCn: '过渡效果',
        path: 'transitions'
      }
    ]
  },
  {
    name: 'Style & Identity',
    nameCn: '样式与特性',
    icon: 'style',
    path: 'style',
    children: [
      {
        name: 'Typography',
        nameCn: '排版',
        path: 'typography'
      },
      {
        name: 'Color Palette',
        nameCn: '调色板',
        path: 'color-palette'
      },
      {
        name: 'Theme Builder',
        nameCn: '主题构建器',
        path: 'theme-builder'
      },
      {
        name: 'Dark Mode',
        nameCn: '暗黑模式',
        path: 'dark-mode'
      },
      {
        name: 'Spacing',
        nameCn: '间距',
        path: 'spacing'
      },
      {
        name: 'Shadows',
        nameCn: '阴影',
        path: 'shadows'
      },
      {
        name: 'Breakpoints',
        nameCn: '断点(CSS Breakpoints)',
        path: 'breakpoints'
      },
      {
        name: 'Body classes',
        nameCn: '与body相关的CSS类',
        path: 'body-classes'
      },
      {
        name: 'Visibility',
        nameCn: '可见性',
        path: 'visibility'
      },
      {
        name: 'Positioning',
        nameCn: '定位',
        path: 'positioning'
      },
      {
        name: 'Sass/SCSS Variables',
        nameCn: 'Sass/SCSS变量',
        path: 'sass-scss-variables'
      },
      {
        name: 'Other Helper Classes',
        nameCn: '其他CSS辅助类',
        path: 'other-helper-classes'
      }
    ]
  },
  {
    name: 'Layout and Grid',
    nameCn: '布局与网格',
    icon: 'view_quilt',
    path: 'layout',
    children: [
      {
        name: 'Flex Grid',
        nameCn: '弹性网格(Flex Grid)',
        path: 'grid',
        opened: true,
        children: [
          {
            name: 'Introduction to Flexbox',
            nameCn: 'Flexbox简介',
            path: 'introduction-to-flexbox'
          },
          {
            name: 'Grid Row',
            nameCn: '网格行(Grid Row)',
            path: 'row'
          },
          {
            name: 'Grid Column',
            nameCn: '网格列(Grid Column)',
            path: 'column'
          },
          {
            name: 'Grid Gutter',
            nameCn: '网格间距(Grid Gutter)',
            path: 'gutter'
          },
          {
            name: 'Flexbox patterns',
            nameCn: 'Flexbox模式',
            path: 'flexbox-patterns'
          },
          {
            name: 'Flex Playground',
            nameCn: 'Flex演示',
            path: 'flex-playground'
          }
        ]
      },
      {
        name: 'Layout',
        nameCn: '布局',
        path: 'layout'
      },
      {
        name: 'Routing with Layouts and Pages',
        nameCn: '与布局和页面相关的路由',
        path: 'routing-with-layouts-and-pages'
      },
      {
        name: 'Layout Header and Footer',
        nameCn: '布局的页眉与页脚',
        path: 'header-and-footer'
      },
      {
        name: 'Layout Drawer',
        nameCn: '布局抽屉',
        path: 'drawer'
      },
      {
        name: 'Layout Page',
        nameCn: '布局页面',
        path: 'page'
      },
      {
        name: 'Layout Builder',
        nameCn: '布局构建器',
        external: true,
        path: '/layout-builder'
      },
      {
        name: 'Layout Gallery',
        nameCn: '布局展示',
        path: 'gallery'
      },
      {
        name: 'Page Sticky',
        nameCn: '粘性页面',
        path: 'page-sticky'
      },
      {
        name: 'Page Scroller',
        nameCn: '滚动页面',
        path: 'page-scroller'
      }
    ]
  },
  {
    name: 'Vue Components',
    nameCn: 'Vue组件',
    icon: 'widgets',
    path: 'vue-components',
    children: [
      {
        name: 'Ajax Bar',
        nameCn: 'Ajax请求栏',
        path: 'ajax-bar'
      },
      {
        name: 'Avatar',
        nameCn: '头像',
        path: 'avatar'
      },
      {
        name: 'Badge',
        nameCn: '角标',
        path: 'badge'
      },
      {
        name: 'Banner',
        nameCn: '横幅(Banner)',
        path: 'banner'
      },
      {
        name: 'Bar',
        nameCn: '栏',
        path: 'bar'
      },
      {
        name: 'Breadcrumbs',
        nameCn: '面包屑',
        path: 'breadcrumbs'
      },
      {
        name: 'Buttons',
        nameCn: '按钮相关',
        listPath: 'buttons',
        children: [
          {
            name: 'Button',
            nameCn: '按钮',
            path: 'button'
          },
          {
            name: 'Button Group',
            nameCn: '按钮组',
            path: 'button-group'
          },
          {
            name: 'Button Dropdown',
            nameCn: '下拉按钮',
            path: 'button-dropdown'
          }
        ]
      },
      {
        name: 'Card',
        nameCn: '卡片',
        path: 'card'
      },
      {
        name: 'Carousel',
        nameCn: '轮播',
        path: 'carousel'
      },
      {
        name: 'Chat Message',
        nameCn: '聊天信息',
        path: 'chat'
      },
      {
        name: 'Chip',
        nameCn: '碎片(可以叫Tag标签)',
        path: 'chip'
      },
      {
        name: 'Circular Progress',
        nameCn: '圆形进度条',
        path: 'circular-progress'
      },
      {
        name: 'Color Picker',
        nameCn: '颜色选择器',
        path: 'color-picker'
      },
      {
        name: 'Dialog',
        nameCn: '对话框',
        path: 'dialog'
      },
      {
        name: 'Editor - WYSIWYG',
        nameCn: '编辑器 - 所见即所得',
        path: 'editor'
      },
      {
        name: 'Expansion Item',
        nameCn: '扩展项',
        path: 'expansion-item'
      },
      {
        name: 'Floating Action Button',
        nameCn: '浮动按钮(FAB)',
        path: 'floating-action-button'
      },
      {
        name: 'Form Components',
        nameCn: '表单组件',
        opened: true,
        listPath: 'form-components',
        children: [
          {
            name: 'Input Textfield',
            nameCn: '输入框',
            path: 'input'
          },
          {
            name: 'Select',
            nameCn: '选择框',
            path: 'select'
          },
          {
            name: 'File picker',
            nameCn: '文件选择器',
            path: 'file'
          },
          {
            name: 'Form',
            nameCn: '表单',
            path: 'form'
          },
          {
            name: 'Field (wrapper)',
            nameCn: '属性包装器',
            path: 'field'
          },
          {
            name: 'Radio',
            nameCn: '单选框',
            path: 'radio'
          },
          {
            name: 'Checkbox',
            nameCn: '选择框',
            path: 'checkbox'
          },
          {
            name: 'Toggle',
            nameCn: '开关',
            path: 'toggle'
          },
          {
            name: 'Button Toggle',
            nameCn: '按钮开关',
            path: 'button-toggle'
          },
          {
            name: 'Option Group',
            nameCn: '选项组',
            path: 'option-group'
          },
          {
            name: 'Slider',
            nameCn: '滑块',
            path: 'slider'
          },
          {
            name: 'Range',
            nameCn: '范围选择器',
            path: 'range'
          },
          {
            name: 'Time Picker',
            nameCn: '时间选择器',
            path: 'time'
          },
          {
            name: 'Date Picker',
            nameCn: '日期选择器',
            path: 'date'
          }
        ]
      },
      {
        name: 'Icon',
        nameCn: '图标',
        path: 'icon'
      },
      {
        name: 'Img',
        nameCn: '图像',
        path: 'img'
      },
      {
        name: 'Infinite Scroll',
        nameCn: '无线滚动',
        path: 'infinite-scroll'
      },
      {
        name: 'Inner Loading',
        nameCn: '内部加载',
        path: 'inner-loading'
      },
      {
        name: 'Intersection',
        nameCn: '交叉',
        path: 'intersection'
      },
      {
        name: 'Knob',
        nameCn: '旋钮',
        path: 'knob'
      },
      {
        name: 'Linear Progress',
        nameCn: '线性进度条',
        path: 'linear-progress'
      },
      {
        name: 'List & List Items',
        nameCn: '列表与列表项',
        path: 'list-and-list-items'
      },
      {
        name: 'Markup Table',
        nameCn: '标记表格',
        path: 'markup-table'
      },
      {
        name: 'Menu',
        nameCn: '菜单',
        path: 'menu'
      },
      {
        name: 'No SSR',
        nameCn: '无SSR',
        path: 'no-ssr'
      },
      {
        name: 'Observers',
        nameCn: '观察者',
        listPath: 'observers',
        children: [
          {
            name: 'Resize Observer (for Element)',
            nameCn: '尺寸观察者',
            path: 'resize-observer'
          },
          {
            name: 'Scroll Observer',
            nameCn: '滑动观察者',
            path: 'scroll-observer'
          }
        ]
      },
      {
        name: 'Pagination',
        nameCn: '分页',
        path: 'pagination'
      },
      {
        name: 'Parallax',
        nameCn: '视差',
        path: 'parallax'
      },
      {
        name: 'Popup Edit',
        nameCn: '弹出编辑',
        path: 'popup-edit'
      },
      {
        name: 'Popup Proxy',
        nameCn: '弹出代理',
        path: 'popup-proxy'
      },
      {
        name: 'Pull to refresh',
        nameCn: '下拉刷新',
        path: 'pull-to-refresh'
      },
      {
        name: 'Rating',
        nameCn: '等级',
        path: 'rating'
      },
      {
        name: 'Responsive',
        nameCn: '相应式',
        path: 'responsive'
      },
      {
        name: 'Scroll Area',
        nameCn: '滚动区域',
        path: 'scroll-area'
      },
      {
        name: 'Separator',
        nameCn: '分隔符',
        path: 'separator'
      },
      {
        name: 'Skeleton',
        nameCn: '骨架屏',
        path: 'skeleton'
      },
      {
        name: 'Slide Item',
        nameCn: '滑动项',
        path: 'slide-item'
      },
      {
        name: 'Slide Transition',
        nameCn: '滑动项变换',
        path: 'slide-transition'
      },
      {
        name: 'Space',
        nameCn: '间距',
        path: 'space'
      },
      {
        name: 'Spinners',
        nameCn: '下拉框',
        path: 'spinners'
      },
      {
        name: 'Splitter',
        nameCn: '拆分器',
        path: 'splitter'
      },
      {
        name: 'Stepper',
        nameCn: '步进器',
        path: 'stepper'
      },
      {
        name: 'Table',
        nameCn: '表格',
        path: 'table'
      },
      {
        name: 'Tabs',
        nameCn: '标签页',
        path: 'tabs'
      },
      {
        name: 'Tab Panels',
        nameCn: '标签面板',
        path: 'tab-panels'
      },
      {
        name: 'Timeline',
        nameCn: '时间线',
        path: 'timeline'
      },
      {
        name: 'Toolbar',
        nameCn: '工具栏',
        path: 'toolbar'
      },
      {
        name: 'Tooltip',
        nameCn: '提示信息',
        path: 'tooltip'
      },
      {
        name: 'Tree',
        nameCn: '树',
        path: 'tree'
      },
      {
        name: 'Uploader',
        nameCn: '上传',
        path: 'uploader'
      },
      {
        name: 'Video',
        nameCn: '视频',
        path: 'video'
      },
      {
        name: 'Virtual Scroll',
        nameCn: '虚拟滚动',
        path: 'virtual-scroll'
      }
    ]
  },
  {
    name: 'Vue Directives',
    icon: 'swap_calls',
    path: 'vue-directives',
    children: [
      {
        name: 'Close Popup',
        path: 'close-popup'
      },
      {
        name: 'Intersection',
        path: 'intersection'
      },
      {
        name: 'Material Ripples',
        path: 'material-ripples'
      },
      {
        name: 'Mutation',
        path: 'mutation'
      },
      {
        name: 'Morph',
        path: 'morph'
      },
      {
        name: 'Scroll',
        path: 'scroll'
      },
      {
        name: 'Scroll Fire',
        path: 'scroll-fire'
      },
      {
        name: 'Touch Hold',
        path: 'touch-hold'
      },
      {
        name: 'Touch Pan',
        path: 'touch-pan'
      },
      {
        name: 'Touch Repeat',
        path: 'touch-repeat'
      },
      {
        name: 'Touch Swipe',
        path: 'touch-swipe'
      }
    ]
  },
  {
    name: 'Quasar Plugins',
    icon: 'extension',
    path: 'quasar-plugins',
    children: [
      {
        name: 'Addressbar Color',
        path: 'addressbar-color'
      },
      {
        name: 'App Fullscreen',
        path: 'app-fullscreen'
      },
      {
        name: 'App Visibility',
        path: 'app-visibility'
      },
      {
        name: 'Bottom Sheet',
        path: 'bottom-sheet'
      },
      {
        name: 'Cookies',
        path: 'cookies'
      },
      {
        name: 'Dark',
        path: 'dark'
      },
      {
        name: 'Dialog',
        path: 'dialog'
      },
      {
        name: 'Loading',
        path: 'loading'
      },
      {
        name: 'Loading Bar',
        path: 'loading-bar'
      },
      {
        name: 'Local/Session Storage',
        path: 'web-storage'
      },
      {
        name: 'Meta',
        path: 'meta'
      },
      {
        name: 'Notify',
        path: 'notify'
      }
    ]
  },
  {
    name: 'Vue Composables',
    icon: 'developer_mode',
    path: 'vue-composables',
    children: [
      {
        name: 'useQuasar',
        path: 'use-quasar'
      },
      {
        name: 'useDialogPluginComponent',
        path: 'use-dialog-plugin-component'
      },
      {
        name: 'useFormChild',
        path: 'use-form-child'
      },
      {
        name: 'useMeta',
        path: 'use-meta'
      }
    ]
  },
  {
    name: 'Security',
    icon: 'security',
    path: 'security',
    children: [
      {
        name: "DO's and DON'Ts",
        path: 'dos-and-donts'
      },
      {
        name: 'Report a vulnerability',
        path: 'report-a-vulnerability'
      }
    ]
  },
  {
    name: 'Quasar CLI (with Vite)',
    icon: 'build',
    path: 'quasar-cli-vite',
    children: [
      {
        name: 'The quasar.config file',
        path: 'quasar-config-file'
      },
      {
        name: 'Convert project to CLI with Vite',
        path: 'convert-to-quasar-cli-with-vite'
      },
      {
        name: 'Browser Compatibility',
        path: 'browser-compatibility'
      },
      {
        name: 'Supporting TypeScript',
        path: 'supporting-ts'
      },
      {
        name: 'Directory Structure',
        path: 'directory-structure'
      },
      {
        name: 'Commands List',
        path: 'commands-list'
      },
      {
        name: 'CSS Preprocessors',
        path: 'css-preprocessors'
      },
      {
        name: 'Routing',
        path: 'routing'
      },
      {
        name: 'Lazy Loading - Code Splitting',
        path: 'lazy-loading'
      },
      {
        name: 'Handling Assets',
        path: 'handling-assets'
      },
      {
        name: 'Boot Files',
        path: 'boot-files'
      },
      {
        name: 'Prefetch Feature',
        path: 'prefetch-feature'
      },
      {
        name: 'API Proxying',
        path: 'api-proxying'
      },
      {
        name: 'Handling Vite',
        path: 'handling-vite'
      },
      {
        name: 'Handling process.env',
        path: 'handling-process-env'
      },
      {
        name: 'State Management with Pinia',
        path: 'state-management-with-pinia'
      },
      {
        name: 'State Management with Vuex',
        path: 'state-management-with-vuex'
      },
      {
        name: 'Linter',
        path: 'linter'
      },
      {
        name: 'Testing & Auditing',
        path: 'testing-and-auditing'
      },
      {
        name: 'SPA mode',
        path: 'developing-spa',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'App Icons for SPA',
            path: 'app-icons-spa'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Deploying',
            path: 'deploying'
          }
        ]
      },
      {
        name: 'SSR mode',
        path: 'developing-ssr',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Writing Universal Code',
            path: 'writing-universal-code'
          },
          {
            name: 'Upgrade guide',
            path: 'ssr-upgrade-guide'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring SSR',
            path: 'configuring-ssr'
          },
          {
            name: 'ssrContext',
            path: 'ssr-context'
          },
          {
            name: 'SSR Middleware',
            path: 'ssr-middleware'
          },
          {
            name: 'SSR Webserver',
            path: 'ssr-webserver'
          },
          {
            name: 'Vue SSR Directives',
            path: 'vue-ssr-directives'
          },
          {
            name: 'App Icons for SSR',
            path: 'app-icons-ssr'
          },
          {
            name: 'SEO for SSR',
            path: 'seo-for-ssr'
          },
          {
            name: 'Client Side Hydration',
            path: 'client-side-hydration'
          },
          {
            name: 'Handling 404 and 500 Errors',
            path: 'handling-404-and-500-errors'
          },
          {
            name: 'SSR with PWA',
            path: 'ssr-with-pwa'
          },
          {
            name: 'SSR FAQ',
            path: 'ssr-frequently-asked-questions'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'SSR with Typescript',
            path: 'ssr-with-typescript'
          },
          {
            name: 'Deploying',
            path: 'deploying'
          }
        ]
      },
      {
        name: 'PWA mode',
        path: 'developing-pwa',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Configuring PWA',
            path: 'configuring-pwa'
          },
          {
            name: 'HMR for PWA',
            path: 'hmr-for-dev'
          },
          {
            name: 'App Icons for PWA',
            path: 'app-icons-pwa'
          },
          {
            name: 'Handling Service Worker',
            path: 'handling-service-worker'
          },
          {
            name: 'PWA with Typescript',
            path: 'pwa-with-typescript'
          }
        ]
      },
      {
        name: 'Developing Mobile Apps',
        path: 'developing-mobile-apps'
      },
      {
        name: 'Capacitor mode',
        path: 'developing-capacitor-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Capacitor versions',
            path: 'capacitor-version-support'
          },
          {
            name: 'Configuring Capacitor',
            path: 'configuring-capacitor'
          },
          {
            name: 'App Icons for Capacitor',
            path: 'app-icons-capacitor'
          },
          {
            name: 'Capacitor API',
            path: 'capacitor-api'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          },
          {
            name: 'Managing Google Analytics',
            path: 'managing-google-analytics'
          },
          {
            name: 'Publishing to Store',
            path: 'publishing-to-store'
          }
        ]
      },
      {
        name: 'Cordova mode',
        path: 'developing-cordova-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring Cordova',
            path: 'configuring-cordova'
          },
          {
            name: 'App Icons for Cordova',
            path: 'app-icons-cordova'
          },
          {
            name: 'Cordova Plugins',
            path: 'cordova-plugins'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          },
          {
            name: 'Managing Google Analytics',
            path: 'managing-google-analytics'
          },
          {
            name: 'Publishing to Store',
            path: 'publishing-to-store'
          }
        ]
      },
      {
        name: 'Electron mode',
        path: 'developing-electron-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Upgrade guide',
            path: 'electron-upgrade-guide'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring Electron',
            path: 'configuring-electron'
          },
          {
            name: 'App Icons for Electron',
            path: 'app-icons-electron'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Preload Script',
            path: 'electron-preload-script'
          },
          {
            name: 'Electron Packages',
            path: 'electron-packages'
          },
          {
            name: 'Accessing files',
            path: 'electron-accessing-files'
          },
          {
            name: 'Frameless Electron Window',
            path: 'frameless-electron-window'
          },
          {
            name: 'Electron with Typescript',
            path: 'electron-with-typescript'
          },
          {
            name: 'Electron Security Concerns',
            path: 'electron-security-concerns'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          }
        ]
      },
      {
        name: 'Browser Extensions mode',
        path: 'developing-browser-extensions',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring BEX',
            path: 'configuring-bex'
          },
          {
            name: 'App Icons for BEX',
            path: 'app-icons-browser-extension'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Types of BEX',
            path: 'types-of-bex'
          },
          {
            name: 'BEX Communication / Events',
            path: 'bex-communication'
          },
          {
            name: 'Background Script',
            path: 'background-script'
          },
          {
            name: 'Content Scripts',
            path: 'content-scripts'
          },
          {
            name: 'DOM Script',
            path: 'dom-script'
          }
        ]
      },
      {
        name: 'Ajax Requests',
        path: 'ajax-requests'
      },
      {
        name: 'Opening Dev Server To Public',
        path: 'opening-dev-server-to-public'
      }
    ]
  },
  {
    name: 'Quasar CLI (with Webpack)',
    icon: 'build',
    path: 'quasar-cli-webpack',
    children: [
      {
        name: 'The quasar.config file',
        path: 'quasar-config-file'
      },
      {
        name: 'Convert to CLI with Webpack',
        path: 'convert-to-quasar-cli-with-webpack'
      },
      {
        name: 'Browser Compatibility',
        path: 'browser-compatibility'
      },
      {
        name: 'Supporting TypeScript',
        path: 'supporting-ts'
      },
      {
        name: 'Directory Structure',
        path: 'directory-structure'
      },
      {
        name: 'Commands List',
        path: 'commands-list'
      },
      {
        name: 'CSS Preprocessors',
        path: 'css-preprocessors'
      },
      {
        name: 'Routing',
        path: 'routing'
      },
      {
        name: 'Lazy Loading - Code Splitting',
        path: 'lazy-loading'
      },
      {
        name: 'Handling Assets',
        path: 'handling-assets'
      },
      {
        name: 'Boot Files',
        path: 'boot-files'
      },
      {
        name: 'Prefetch Feature',
        path: 'prefetch-feature'
      },
      {
        name: 'API Proxying',
        path: 'api-proxying'
      },
      {
        name: 'Handling Webpack',
        path: 'handling-webpack'
      },
      {
        name: 'Handling process.env',
        path: 'handling-process-env'
      },
      {
        name: 'State Management with Pinia',
        path: 'state-management-with-pinia'
      },
      {
        name: 'State Management with Vuex',
        path: 'state-management-with-vuex'
      },
      {
        name: 'Linter',
        path: 'linter'
      },
      {
        name: 'Testing & Auditing',
        path: 'testing-and-auditing'
      },
      {
        name: 'SPA mode',
        path: 'developing-spa',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'App Icons for SPA',
            path: 'app-icons-spa'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Deploying',
            path: 'deploying'
          }
        ]
      },
      {
        name: 'SSR mode',
        path: 'developing-ssr',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Writing Universal Code',
            path: 'writing-universal-code'
          },
          {
            name: 'Upgrade guide',
            path: 'ssr-upgrade-guide'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring SSR',
            path: 'configuring-ssr'
          },
          {
            name: 'ssrContext',
            path: 'ssr-context'
          },
          {
            name: 'SSR Middleware',
            path: 'ssr-middleware'
          },
          {
            name: 'SSR Production Export',
            path: 'ssr-production-export'
          },
          {
            name: 'Vue SSR Directives',
            path: 'vue-ssr-directives'
          },
          {
            name: 'App Icons for SSR',
            path: 'app-icons-ssr'
          },
          {
            name: 'SEO for SSR',
            path: 'seo-for-ssr'
          },
          {
            name: 'Client Side Hydration',
            path: 'client-side-hydration'
          },
          {
            name: 'Handling 404 and 500 Errors',
            path: 'handling-404-and-500-errors'
          },
          {
            name: 'SSR with PWA',
            path: 'ssr-with-pwa'
          },
          {
            name: 'SSR Frequently Asked Questions',
            path: 'ssr-frequently-asked-questions'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'SSR with Typescript',
            path: 'ssr-with-typescript'
          },
          {
            name: 'Deploying',
            path: 'deploying'
          }
        ]
      },
      {
        name: 'PWA mode',
        path: 'developing-pwa',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Configuring PWA',
            path: 'configuring-pwa'
          },
          {
            name: 'HMR for PWA',
            path: 'hmr-for-dev'
          },
          {
            name: 'App Icons for PWA',
            path: 'app-icons-pwa'
          },
          {
            name: 'Handling Service Worker',
            path: 'handling-service-worker'
          },
          {
            name: 'PWA with Typescript',
            path: 'pwa-with-typescript'
          }
        ]
      },
      {
        name: 'Developing Mobile Apps',
        path: 'developing-mobile-apps'
      },
      {
        name: 'Capacitor mode',
        path: 'developing-capacitor-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Capacitor versions',
            path: 'capacitor-version-support'
          },
          {
            name: 'Configuring Capacitor',
            path: 'configuring-capacitor'
          },
          {
            name: 'App Icons for Capacitor',
            path: 'app-icons-capacitor'
          },
          {
            name: 'Capacitor API',
            path: 'capacitor-api'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          },
          {
            name: 'Managing Google Analytics',
            path: 'managing-google-analytics'
          },
          {
            name: 'Publishing to Store',
            path: 'publishing-to-store'
          }
        ]
      },
      {
        name: 'Cordova mode',
        path: 'developing-cordova-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring Cordova',
            path: 'configuring-cordova'
          },
          {
            name: 'App Icons for Cordova',
            path: 'app-icons-cordova'
          },
          {
            name: 'Cordova Plugins',
            path: 'cordova-plugins'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          },
          {
            name: 'Managing Google Analytics',
            path: 'managing-google-analytics'
          },
          {
            name: 'Publishing to Store',
            path: 'publishing-to-store'
          }
        ]
      },
      {
        name: 'Electron mode',
        path: 'developing-electron-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Upgrade guide',
            path: 'electron-upgrade-guide'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring Electron',
            path: 'configuring-electron'
          },
          {
            name: 'App Icons for Electron',
            path: 'app-icons-electron'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Preload Script',
            path: 'electron-preload-script'
          },
          {
            name: 'Electron Packages',
            path: 'electron-packages'
          },
          {
            name: 'Accessing files',
            path: 'electron-accessing-files'
          },
          {
            name: 'Frameless Electron Window',
            path: 'frameless-electron-window'
          },
          {
            name: 'Electron with Typescript',
            path: 'electron-with-typescript'
          },
          {
            name: 'Electron Security Concerns',
            path: 'electron-security-concerns'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          }
        ]
      },
      {
        name: 'Browser Extensions mode',
        path: 'developing-browser-extensions',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring BEX',
            path: 'configuring-bex'
          },
          {
            name: 'App Icons for BEX',
            path: 'app-icons-browser-extension'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Types of BEX',
            path: 'types-of-bex'
          },
          {
            name: 'BEX Communication / Events',
            path: 'bex-communication'
          },
          {
            name: 'Background Hooks',
            path: 'background-hooks'
          },
          {
            name: 'Content Hooks',
            path: 'content-hooks'
          },
          {
            name: 'DOM Hooks',
            path: 'dom-hooks'
          }
        ]
      },
      {
        name: 'Ajax Requests',
        path: 'ajax-requests'
      },
      {
        name: 'Opening Dev Server To Public',
        path: 'opening-dev-server-to-public'
      }
    ]
  },
  {
    name: 'Icon Genie CLI',
    icon: 'stars',
    path: 'icongenie',
    children: [
      {
        name: 'Introduction',
        path: 'introduction'
      },

      {
        name: 'Installation / Upgrade notes',
        path: 'installation'
      },

      {
        name: 'Command list',
        path: 'command-list'
      },

      {
        name: 'App Icons List',
        path: 'app-icons-list'
      },

      {
        name: 'Profile files',
        path: 'profile-files'
      }
    ]
  },
  {
    name: 'App Extensions',
    icon: 'note_add',
    path: 'app-extensions',
    children: [
      {
        name: 'Introduction',
        path: 'introduction'
      },
      {
        name: 'Discover App Extensions',
        path: 'discover'
      },
      {
        name: 'Development Guide',
        path: 'development-guide',
        opened: true,
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Prompts API',
            path: 'prompts-api'
          },
          {
            name: 'Install API',
            path: 'install-api'
          },
          {
            name: 'Index API',
            path: 'index-api'
          },
          {
            name: 'Uninstall API',
            path: 'uninstall-api'
          }
        ]
      },
      {
        name: 'Tips and Tricks',
        path: 'tips-and-tricks',
        opened: true,
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Provide a UI component',
            path: 'provide-a-ui-component'
          },
          {
            name: 'Provide a directive',
            path: 'provide-a-directive'
          },
          {
            name: 'Inject Quasar Plugin',
            path: 'inject-quasar-plugin'
          },
          {
            name: 'Starter kit equivalent',
            path: 'starter-kit-equivalent'
          },
          {
            name: 'Chain Webpack',
            path: 'chain-webpack'
          }
        ]
      }
    ]
  },
  {
    name: 'Quasar Utils',
    icon: 'healing',
    path: 'quasar-utils',
    children: [
      {
        name: 'Date Utils',
        path: 'date-utils'
      },
      {
        name: 'Color Utils',
        path: 'color-utils'
      },
      {
        name: 'DOM Utils',
        path: 'dom-utils'
      },
      {
        name: 'Morph Utils',
        path: 'morph-utils'
      },
      {
        name: 'Formatter Utils',
        path: 'formatter-utils'
      },
      {
        name: 'Scrolling Utils',
        path: 'scrolling-utils'
      },
      {
        name: 'Type Checking Utils',
        badge: 'new',
        path: 'type-checking-utils'
      },
      {
        name: 'EventBus Util',
        badge: 'new',
        path: 'event-bus-util'
      },
      {
        name: 'Other Utils',
        badge: 'update',
        path: 'other-utils'
      }
    ]
  }
]
