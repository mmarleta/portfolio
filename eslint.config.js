import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

const baseIgnores = ['node_modules/**', '.nuxt/**', '.output/**', 'dist/**']
const browserGlobals = {
  window: 'readonly',
  document: 'readonly',
  navigator: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly'
}
const nuxtGlobals = {
  defineNuxtConfig: 'readonly',
  useAsyncData: 'readonly',
  useFetch: 'readonly',
  useHead: 'readonly',
  useRoute: 'readonly',
  useRouter: 'readonly',
  useRuntimeConfig: 'readonly',
  useState: 'readonly',
  useI18n: 'readonly',
  useLocalePath: 'readonly',
  useSwitchLocalePath: 'readonly',
  useAttrs: 'readonly',
  computed: 'readonly',
  ref: 'readonly',
  reactive: 'readonly',
  watch: 'readonly',
  watchEffect: 'readonly',
  onMounted: 'readonly',
  onUnmounted: 'readonly',
  defineProps: 'readonly',
  defineEmits: 'readonly',
  defineExpose: 'readonly',
  defineOptions: 'readonly',
  withDefaults: 'readonly'
}
const nodeGlobals = {
  console: 'readonly',
  process: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  Buffer: 'readonly'
}

export default [
  { ignores: baseIgnores },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        console: 'readonly',
        ...browserGlobals,
        ...nuxtGlobals
      }
    },
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: nodeGlobals
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue']
      },
      globals: {
        console: 'readonly',
        ...browserGlobals,
        ...nuxtGlobals
      }
    },
    plugins: { vue },
    rules: {
      ...vue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off'
    }
  }
]
