import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import process from 'node:process';
import prettier from 'eslint-plugin-prettier';

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
		plugins: {
			prettier,
		},
		rules: {
			'no-process-env': 'off',
			'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
			'prettier/prettier': [
				'error',
				{
					printWidth: 80,
					tabWidth: 2,
					useTabs: true,
					semi: true,
					singleQuote: true,
					trailingComma: 'all',
					bracketSpacing: true,
					arrowParens: 'avoid',
				},
			],
		},
	},
];
