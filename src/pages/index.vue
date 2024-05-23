<!--
 * @Author: zhoudaixing
 * @Date: 2024-05-23
 * @LastEditors: zhoudaixing
 * @LastEditTime: 2024-05-23
 * @FilePath: /src/pages/index.vue
 * @Description:
-->
<script setup lang="ts" generic="T extends any, O extends any">
import { data } from '../utils/data'
import TheHeader from '~/components/TheHeader.vue'
import getElementWidth from '~/utils/getElementWidth'

defineOptions({
  name: 'IndexPage',
})

const whitespaceList = ref(data)
const fontsize = ref(16)
function sort() {
  whitespaceList.value.sort((a, b) => {
    if (!a.el || !b.el)
      throw new Error('a or b is null')
    return getElementWidth(b.el.whitespace) - getElementWidth(a.el.whitespace)
  })
}
function changeFontsize(value: number) {
  fontsize.value = value
}
function reset() {
  // whitespaceList.value.sort((a, b) => {
  //   return a.id - b.id
  // })
}
const fontFamily = ref('font-sans')
function changeFontFamily(index: number) {
  const family = ['font-sans', 'font-serif', 'font-mono']
  fontFamily.value = family[index % 3]
}
</script>

<template>
  <TheHeader
    @sort="sort"
    @reset="reset"
    @change-fontsize="changeFontsize"
    @change-font-family="changeFontFamily"
  />
  <div
    class="flex flex-col items-center whitespace-pre"
    :style="{ 'font-size': `${fontsize}px` }"
    :class="fontFamily"
  >
    <TransitionGroup name="list">
      <WhiteSpace
        v-for="item in whitespaceList"
        :ref="(el) => item.el = el"
        :key="item.abbr + item.code"
        :name="item.name"
        :abbr="item.abbr"
        :name-cn="item.name_cn"
        :type="item.type"
        :code="item.code"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-move {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
