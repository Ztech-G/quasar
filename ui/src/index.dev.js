/**
 * client entry-point used by @quasar/vite-plugin for DEV only
 */

import installQuasar from './install-quasar.js'
import lang from './plugins/private.lang/Lang.js'
import IconSet from './plugins/icon-set/IconSet.js'

export * from './components.js'
export * from './directives.js'
export * from './plugins.js'
export * from './composables.js'
export * from './utils.js'

export const Quasar = {
  version: __QUASAR_VERSION__,
  install: installQuasar,

  lang,

  // TODO: remove in Qv3 (should only be used through the plugin)
  iconSet: IconSet
}
