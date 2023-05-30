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
    './rules/jsdoc',
    './rules/typescript',
  ],
  rules: {
    indent: [true, 'spaces', 2],
    'no-tabs': 0,
    '@next/next/no-html-link-for-pages': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
