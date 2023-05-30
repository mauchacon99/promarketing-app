module.exports = {
	extends: [
		'eslint:recommended',
		'next',
		'turbo',
		'prettier',
		'./rules/jsdoc',
		'./rules/typescript',
	],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
	},
	parserOptions: {
		babelOptions: {
			presets: [require.resolve('next/babel')],
		},
	},
};
