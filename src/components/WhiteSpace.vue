<script setup lang="ts">
// const modelValue = defineModel()
import getElementWidth from '../utils/getElementWidth'
import unicode2char from '../utils/unicode2char'

const props = defineProps({
  type: { type: String, default: 'unicode' },
  name: { type: String, default: 'Space' },
  code: { type: String, default: 'U+0020' },
})
const whitespace = ref<HTMLElement | null>(null)
const width = computed(() => {
  if (!whitespace.value)
    return Number.NaN
  return getElementWidth(whitespace.value)
})
const unicode = props.code.startsWith('U+')
defineExpose({
  whitespace,
})
</script>

<template>
  <div flex container class="whitespace-wrapper">
    <div class="w-2/4" text-right>
      <span bg-amber-400 pr-1>{{ name }}</span>
      <span>{{ code }}</span>
    </div>
    <div m="x-1" border-r-1 border-black />
    <!-- <span class="bg-blue">{{ unicode2string(code) }}</span> -->
    <div>
      <span ref="whitespace" class="whitespace bg-blue">

        <span v-if="unicode" v-html="unicode2char(code)" />

        <span v-else v-html="code" />
      </span>

      <span class="hover-text">
        {{ width }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.hover-text {
  visibility: hidden;
}
.whitespace-wrapper:hover .hover-text {
  visibility: visible;
}
</style>
