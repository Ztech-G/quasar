<template>
  <div class="page-docs column justify-center text-center">
    <div class="heading heading--large normal-line-height">欢迎使用Quasar文档</div>
    <div class="letter-spacing-300 text-size-16 text-weight-bold q-mb-md">
      在这里可以找到一切关于Quasar的内容。
    </div>

    <div class="row">
      <div class="col-12 col-md text-center page-docs__text letter-spacing-40 text-size-16 q-ma-md">
        在顶部的导航栏有一个搜索功能，可以帮助你找到你需要什么，也有许多其他的页面你可以探索，像初学者资源和其他关于Quasar的酷炫内容。
        别忘了查看网页
        <a
          class="text-brand-accent"
          href="https://donate.quasar.dev"
          target="_blank"
        >成为我们的赞助商</a>!
      </div>

      <div class="gt-sm q-px-md" />

      <div class="col-12 col-md text-center page-docs__text letter-spacing-40 text-size-16 q-ma-md">
        如果你是一个有经验的探险家，那就直接进入操作吧：使用左边的导航栏来浏览最重要的内容技术资源。
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md row justify-center q-gutter-sm q-py-lg">
        <div class="text-center full-width text-size-24 text-weight-bolder letter-spacing-450 text-brand-primary text-uppercase">
          最常用的
        </div>

        <doc-card-link
          v-for="(entry, pageIndex) in mostUsedPages"
          :key="pageIndex"
          :to="entry.path"
        >
          <q-card
            class="page-docs__card column justify-center items-center cursor-pointer"
            flat
          >
            <q-icon
              :name="entry.icon"
              class="q-mb-sm"
              color="brand-primary"
            />
            <div class="page-docs__card-label text-size-12 letter-spacing-100">
              {{ entry.name }}<br/>[{{ entry.nameCn }}]
            </div>
          </q-card>
        </doc-card-link>
      </div>

      <div class="gt-sm q-px-md row justify-center">
        <q-separator vertical />
      </div>

      <div class="col-12 col-md row cards-container-width justify-center q-gutter-sm q-py-lg">
        <div class="text-center full-width text-size-24 text-weight-bolder letter-spacing-450 text-brand-primary text-uppercase">
          额外发现
        </div>

        <doc-card-link
          v-for="(entry, pageIndex) in pagesToDiscover"
          :key="pageIndex"
          :to="entry.path"
        >
          <q-card
            class="page-docs__card column justify-center items-center cursor-pointer"
            flat
          >
            <q-icon
              :name="entry.icon"
              class="q-mb-sm"
              color="brand-primary"
            />
            <div class="page-docs__card-label text-center text-size-12 letter-spacing-100">
              {{ entry.name }}<br/>[{{ entry.nameCn }}]
            </div>
          </q-card>
        </doc-card-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import DocCardLink from 'components/DocCardLink.vue'
import { mostUsedPages, pagesToDiscover } from 'src/assets/docs-homepage.js'
</script>

<style lang="sass">
.page-docs

  &__text
    max-width: 500px

  &__card
    width: 110px
    height: 110px
    border: solid 1px rgba($brand-secondary, 0.54)
    border-radius: 8px
    transition: transform $header-quick-transition, box-shadow $header-quick-transition

    &-label
      color: $cold-black

    &:hover
      // !important needed when used with flat cards
      box-shadow: 0 8px 8px 0 rgba($dark, 0.2) !important
      transform: scale(1.03)

    .q-icon
      font-size: 36px

body.body--dark .page-docs
  &__card:hover
    box-shadow: 0 4px 8px 0 rgba($brand-primary, 0.8) !important
  &__card-label
    color: #fff
</style>
