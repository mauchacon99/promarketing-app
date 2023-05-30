module.exports = {
	root: true,
	extends: ['custom'],
	rules: {
		'@next/next/no-img-element': 'off',
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			},
		],
		eqeqeq: ['error', 'always'],
	},
};
