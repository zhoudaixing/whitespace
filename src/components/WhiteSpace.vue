<script setup lang="ts">
// const modelValue = defineModel()
import getElementWidth from '../utils/getElementWidth'

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
const x = props.code.replace(/^U\+/i, '\\u')
// console.log(x)
// let code = props.code.replace(/^U\+/i, '\\u');
// let char = String.fromCharCode(parseInt(code, 16)); // 将十六进制转换为Unicode字符
defineExpose({
  whitespace,
})
</script>

<template>
  <div flex container>
    <div class="w-2/4" text-right>
      {{ `${name} + ${code}` }}
    </div>
    <div m="x-1" border-r-1 border-black />
    <!-- <span class="bg-blue">{{ unicode2string(code) }}</span> -->
    <div>
      <span ref="whitespace" class="whitespace bg-blue">
        <span v-html="`${x}`" />
        <!-- <span v-if="type === 'unicode'" v-html="x" />

        <span v-if="type === 'html'" v-html="code" /> -->
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
div:hover .hover-text {
  visibility: visible;
}
</style>
