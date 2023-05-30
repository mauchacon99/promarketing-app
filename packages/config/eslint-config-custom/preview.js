// eslint-disable-next-line no-undef
const path = require('path');
module.exports = {
	globals: {
		React: true,
		context: true,
		expect: true,
		jsdom: true,
		JSX: true,
	},
	extends: [
		'next',
		'next/core-web-vitals',
		'prettier',
		'turbo',
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:react/recommended',
		'./jsdoc.cjs',
		'./typescript.cjs',
	],
	plugins: ['react', 'import', '@typescript-eslint'],
	parserOptions: {
		babelOptions: {
			presets: [require.resolve('next/babel')],
			parser: '@typescript-eslint/parser',
		},
	},
	overrides: [
		{
			files: ['*.tsx'],
			rules: {
				'jsdoc/require-jsdoc': 'off',
				'jsdoc/require-param': 'off',
				'@typescript-eslint/naming-convention': [
					'off',
					{
						selector: ['enumMember', 'interface'],
						format: ['PascalCase'],
					},
					{
						selector: ['variable', 'function', 'classMethod'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow',
						format: ['camelCase'],
					},
				],
				'import/no-extraneous-dependencies': [
					'error',
					{
						devDependencies: true,
						peerDependencies: true,
						optionalDependencies: true,
						bundledDependencies: true,
					},
				],
				'@next/next/no-img-element': 'off',

				/* TODO Review 2.

				*/

				/* TODO Review.
				'jsdoc/newline-after-description': 'off', -> delete
				'react/react-in-jsx-scope': 'off',
				'react/jsx-uses-react': 'off',
				'no-undef': 'off',
				"react/prop-types": "off",
				*/
			},
		},
	],
	rules: {
		// https://stackoverflow.com/questions/56337176/prettier-and-eslint-indents-not-working-together
		'jsdoc/newline-after-description': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				/* TODO Review. 
							varsIgnorePattern: 'React',
						*/
			},
		],
		eqeqeq: ['error', 'always'],

		/* TODO Review. 
			  '@typescript-eslint/indent': ['error', 'tab'],
				"@next/next/no-html-link-for-pages": "off",
				quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
				'@typescript-eslint/no-console': 'off',
				'import/no-unresolved': [2, { commonjs: true, amd: true }],
				'import/named': 0,
				'import/namespace': 2,
				'import/default': 2,
				'import/export': 2,
				'import/extensions': [
					'error',
					'ignorePackages',
					{
						js: 'never',
						jsx: 'never',
						ts: 'never',
						tsx: 'never',
						'': 'never',
					},
				],
				semi:  ['error', 'always', { 'omitLastInOneLineClassBody': true }], -> delete
		*/
	},
};
