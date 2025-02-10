---
title: Quasar组件变换
desc: Quasar组件开箱即用的CSS变换效果。
---

有一些Quasar组件三通过`transition-show` / `transition-hide` 或 `transition-prev` / `transition-next` 或 `transition` 属性实现了变换效果：

- `transition-show` / `transition-hide`
  - [QBtnDropdown](/vue-components/button-dropdown)
  - [QInnerLoading](/vue-components/inner-loading)
  - [QTooltip](/vue-components/tooltip)
  - [QMenu](/vue-components/menu)
  - [QDialog](/vue-components/dialog)
  - [QSelect](/vue-components/select) (through QMenu and QDialog)
  - [QPopupProxy](/vue-components/popup-proxy) (through QMenu and QDialog)

- `transition-prev` / `transition-next`
  - [QCarousel](/vue-components/carousel)
  - [QTabPanels](/vue-components/tab-panels)
  - [QStepper](/vue-components/stepper)

- `transition`
  - [QIntersection](/vue-components/intersection)

显示一些例子。

<script doc>
import TransitionList from './TransitionList.vue'
</script>

<TransitionList />

使用上述中所示的名称作为过渡道具。例如:

```html
<q-menu
  transition-show="jump-down"
  transition-hide="jump-up"
/>
```
