<!-- eslint-disable vue/no-useless-v-bind -->
<!-- eslint-disable vue/no-useless-v-bind -->
<script setup lang="ts" generic="T extends any, O extends any">
import data from '../utils/data'
import getElementWidth from '../utils/getElementWidth'

defineOptions({
  name: 'IndexPage',
})

const whitespaceList = ref(data)
const fontsize = ref(16)
// const whitespaceList = ref([])
function sort() {
  whitespaceList.value.sort((a, b) => {
    if (!a.el || !b.el)
      throw new Error('a or b is null')
    // if (a.el && b.el)
    return getElementWidth(b.el.whitespace) - getElementWidth(a.el.whitespace)
  })
}
function changeFontsize() {

}
function reset() {
  whitespaceList.value.sort((a, b) => {
    if (!a.el || !b.el)
      throw new Error('a or b is null')
    // if (a.el && b.el)
    return getElementWidth(a.el.whitespace) - getElementWidth(b.el.whitespace)
  })
}
</script>

<template>
  <TheInput
    v-model="fontsize"
    placeholder="fontsize"
    autocomplete="false"
    @keydown.enter="changeFontsize"
  />

  <div>
    <button
      class="m-3 text-sm btn"
      @click="changeFontsize"
    >
      Change
    </button>
  </div>
  <WhiteSpace
    type="html"
    name="SPACE"
    code=" "
  />
  <div>
    <button
      class="m-3 text-sm btn"
      @click="sort"
    >
      Sort
    </button>
  </div>
  <div>
    <button
      class="m-3 text-sm btn"
      @click="reset"
    >
      reset
    </button>
  </div>
  <div class="whitespace-pre" :style="{ 'font-size': `${fontsize}px` }">
    <TransitionGroup name="list">
      <WhiteSpace
        v-for="(item, index) in whitespaceList"
        :key="item.code"
        :ref="(el) => { whitespaceList[index].el = el }"
        :type="item.type"
        :name="item.name"
        :code="item.code"
      />
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
