<script setup lang="ts" generic="T extends any, O extends any">
import { list } from '../utils/data'
import TheHeader from '~/components/TheHeader.vue'

defineOptions({
  name: 'IndexPage',
})

const whitespaceList = ref(list)
const fontsize = ref(16)
// const whitespaceList = ref([])
function sort() {
  // whitespaceList.value.sort((a, b) => {
  //   if (!a.el || !b.el)
  //     throw new Error('a or b is null')
  //   // if (a.el && b.el)
  //   return getElementWidth(b.el.whitespace) - getElementWidth(a.el.whitespace)
  // })
}
function changeFontsize(value: number) {
  fontsize.value = value
}
function reset() {
  // whitespaceList.value.sort((a, b) => {
  //   if (!a.el || !b.el)
  //     throw new Error('a or b is null')
  //   // if (a.el && b.el)
  //   return getElementWidth(a.el.whitespace) - getElementWidth(b.el.whitespace)
  // })
}
</script>

<template>
  <TheHeader @sort="sort" @reset="reset" @change-fontsize="changeFontsize" />
  <div class="flex flex-col items-center whitespace-pre" :style="{ 'font-size': `${fontsize}px` }">
    <TransitionGroup name="list">
      <template v-for="(item) in whitespaceList" :key="item.unicode">
        <WhiteSpace
          :name="item.abbr"
          :code="item.unicode[0]"
        />
        <WhiteSpace
          v-for="(htmlname) in item.htmlEntityName"
          :key="htmlname"
          :name="item.abbr"
          :code="htmlname"
        />
        <WhiteSpace
          :name="item.abbr"
          :code="item.htmlEntityDEC[0]"
        />
        <WhiteSpace
          :name="item.abbr"
          :code="item.htmlEntityHEX[0]"
        />
      </template>
    </TransitionGroup>
    <!-- <div i-carbon-campsite inline-block text-4xl />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>
    <div py-4 /> -->
  </div>
</template>

<style scoped>
.list-move {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
