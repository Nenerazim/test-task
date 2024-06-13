module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
		project: './tsconfig.json'
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	rules: {
		semi: ['error', 'always'],
		'linebreak-style': ['error', 'unix'],
		'vue/multi-word-component-names': 'off',
		'vue/no-v-html': 'off',
		'vue/no-mutating-props': 'off',
		'vue/require-v-for-key': 'off'
	}
};
