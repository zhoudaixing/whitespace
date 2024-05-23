<script setup>
defineEmits(['changeFontsize', 'sort', 'reset', 'changeFontFamily'])
const fontsize = defineModel('fontsize', {
  type: Number,
  default: 16,
})
const index = ref(0)
</script>

<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <TheInput
      v-model="fontsize"
      placeholder="fontsize"
      autocomplete="false"
      @keydown.enter="$emit('changeFontsize', fontsize)"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        @click="$emit('changeFontsize', fontsize)"
      >
        Change
      </button>
    </div>
    <div>
      <button
        class="m-3 text-sm btn"
        @click="$emit('sort')"
      >
        Sort
      </button>
    </div>
    <div>
      <button
        class="m-3 text-sm btn"
        @click="$emit('reset')"
      >
        reset
      </button>
    </div>
    <div>
      <button
        class="m-3 text-sm btn"
        @click="$emit('changeFontFamily', index++)"
      >
        font
      </button>
    </div>
  </nav>
</template>
