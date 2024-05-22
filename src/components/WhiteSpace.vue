<script setup lang="ts">
// const modelValue = defineModel()
import getElementWidth from '../utils/getElementWidth'

defineProps({
  type: { type: String, default: 'unicode' },
  name: { type: String, default: 'Space' },
  code: { type: String, default: '\\u0020' },
})
const whitespace = ref<HTMLElement | null>(null)
const width = computed(() => {
  if (!whitespace.value)
    return Number.NaN
  return getElementWidth(whitespace.value)
})
defineExpose({
  whitespace,
})
</script>

<template>
  <div class="container">
    <span class="mr-1 inline-block border-r-1 border-black pr-1 text-right">
      {{ `${type}${name}${code}` }}
    </span>
    <!-- <span class="bg-blue">{{ unicode2string(code) }}</span> -->
    <span ref="whitespace" class="whitespace bg-blue">
      <!-- <span v-if="type === 'unicode'">{{ code }}</span> -->
      <span v-if="type === 'unicode'" v-html="code" />

      <span v-if="type === 'html'" v-html="code" />
    </span>

    <span class="hover-text">
      {{ width }}
    </span>
  </div>
</template>

<style scoped>
.hover-text {
  visibility: hidden;
}
.container:hover .hover-text {
  visibility: visible;
}
</style>
