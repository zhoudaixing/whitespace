import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    eslint: {
      rules: {
        'vue/no-useless-v-bind': ['error', {
          ignoreStringEscape: false,
        }],
      },
    },
  },
)
