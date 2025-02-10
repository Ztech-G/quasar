<template>
  <div>
    <div
      v-for="heading in headings"
      :key="heading.label"
      class="row items-center q-mb-lg"
    >
      <div class="col-sm-3 col-12">
        <q-badge color="brand-primary" outline :label="heading.cls" />
        <q-badge
          v-if="heading.equivalent"
          class="q-ml-sm"
          color="secondary"
          outline
          :label="heading.equivalent"
        />
      </div>
      <div class="col-sm-9 col-12" :class="heading.cls">
        {{ heading.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
const headings = [
  { label: '标题 1', cls: 'text-h1', equivalent: 'h1' },
  { label: '标题 2', cls: 'text-h2', equivalent: 'h2' },
  { label: '标题 3', cls: 'text-h3', equivalent: 'h3' },
  { label: '标题 4', cls: 'text-h4', equivalent: 'h4' },
  { label: '标题 5', cls: 'text-h5', equivalent: 'h5' },
  { label: '标题 6', cls: 'text-h6', equivalent: 'h6' },
  { label: '子标题 1', cls: 'text-subtitle1' },
  { label: '子标题 2', cls: 'text-subtitle2' },
  { label: 'Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.', cls: 'text-body1' },
  { label: 'Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.', cls: 'text-body2' },
  { label: '说明文字(caption)', cls: 'text-caption' },
  { label: '上划线(overline)', cls: 'text-overline' }
]
</script>
