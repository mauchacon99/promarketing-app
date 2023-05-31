/*
 extends: [
    'next',
    'next/core-web-vitals',
    'prettier',
    'turbo',
    'airbnb-typescript',
    'plugin:react/recommended',
    'eslint:recommended',
    './rules/jsdoc',
    './rules/typescript',
  ],
*/
module.exports = {
	globals: {
		React: true,
		context: true,
		expect: true,
		jsdom: true,
		JSX: true,
	},
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
		'turbo/no-undeclared-env-vars': 'off',
	},
	parserOptions: {
		babelOptions: {
			presets: [require.resolve('next/babel')],
		},
	},
};

/*module.exports = {
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
    'plugin:react/recommended',
    'eslint:recommended',
    './rules/jsdoc',
    './rules/typescript',
  ],
  rules: {
    indent: 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'turbo/no-undeclared-env-vars': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
*/
