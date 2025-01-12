import {
  mdiAnimation,
  mdiApplicationExport,
  mdiCalendar,
  mdiCardMultiple,
  mdiFormDropdown,
  mdiFormTextbox,
  mdiImageSizeSelectSmall,
  mdiTable,
  mdiHumanMaleBoard
} from '@quasar/extras/mdi-v6'

export const mostUsedPages = [
  {
    name: 'QTable',
    nameCn: '表格',
    icon: mdiTable,
    path: '/vue-components/table'
  },
  {
    name: 'QInput',
    nameCn: '输入框',
    icon: mdiFormTextbox,
    path: '/vue-components/input'
  },
  {
    name: 'QSelect',
    nameCn: '下拉框',
    icon: mdiFormDropdown,
    path: '/vue-components/select'
  },
  {
    name: 'QBtn',
    nameCn: '按钮',
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/button-click.svg',
    path: '/vue-components/button'
  },
  {
    name: 'QCard',
    nameCn: '卡片',
    icon: mdiCardMultiple,
    path: '/vue-components/card'
  },
  {
    name: 'Flavour',
    nameCn: '产品?',
    icon: 'img:https://cdn.quasar.dev/logo-v2/svg/logo-mono-cyan.svg',
    path: '/start/pick-quasar-flavour'
  }
]

export const pagesToDiscover = [
  {
    name: 'quasar.config',
    nameCn: '配置文件',
    icon: mdiHumanMaleBoard,
    path: '/quasar-cli-vite/quasar-config-js'
  },
  {
    name: 'Boot Files',
    nameCn: '启动文件',
    icon: mdiApplicationExport,
    path: '/quasar-cli-vite/boot-files'
  },
  {
    name: 'Date Utils',
    nameCn: '日期工具',
    icon: mdiCalendar,
    path: '/quasar-utils/date-utils'
  },
  {
    name: 'Other Utils',
    nameCn: '其他工具',
    icon: 'healing',
    path: '/quasar-utils/other-utils'
  },
  {
    name: 'Flexbox',
    nameCn: 'Flex盒子',
    icon: mdiImageSizeSelectSmall,
    path: '/layout/grid/introduction-to-flexbox'
  },
  {
    name: 'Animations',
    nameCn: '动画',
    icon: mdiAnimation,
    path: '/options/animations'
  }
]
