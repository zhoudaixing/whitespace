<script setup lang="ts">
// const modelValue = defineModel()
import getElementWidth from '../utils/getElementWidth'
import unicode2char from '../utils/unicode2char'

// const props = defineProps({
//   type: { type: String, default: 'unicode' },
//   name: { type: String, default: 'Space' },
//   code: { type: String, default: 'U+0020' },
// })
defineProps([
  'type',
  'name',
  'nameCn',
  'code',
  'abbr',
])
const whitespace = ref<HTMLElement | null>(null)
const width = computed(() => {
  if (!whitespace.value)
    return Number.NaN
  return getElementWidth(whitespace.value)
})
// const unicode = props.code.startsWith('U+')
defineExpose({
  whitespace,
})
</script>

<template>
  <div flex container class="whitespace-wrapper">
    <div class="w-2/4" flex justify-end>
      <div class="min-w-2/4" flex justify-end>
        <div grow>
          <span border-1 border-black px-2>{{ abbr }}</span>
        </div>
        <div pr-4 text-right>
          <span
            :class="`${type.startsWith('u') ? 'bg-red' : 'bg-green'}`"
          >{{ type.startsWith('u') ? 'Unicode' : 'HTML' }}</span>
        </div>

        <div min-w-32 text-right>
          <span bg-blue-200>{{ code }}</span>
        </div>
      </div>
    </div>
    <div m="x-1" border-r-1 border-black />
    <div>
      <span ref="whitespace" class="whitespace bg-blue">

        <span v-if="type === 'unicode'" v-html="unicode2char(code)" />

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
