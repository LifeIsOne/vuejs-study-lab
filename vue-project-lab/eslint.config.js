import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
  {
    env: {
      browser: ture,  // 브라우저 환경 전역 변수 허용!
      node: true,     // NodeJs 환경 전역 변수 허용! ex) process
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'prettier/prettier': [
        'error', {
          printWidth: 80,
          tabWidth: 2,
          useTabs: true,
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          backetSpacing: true,
          arrowParens: 'avoid',
        }
      ]
    },
  }
]
