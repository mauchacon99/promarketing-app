module.exports = {
  globals: {
    React: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  extends: [
    "eslint:recommended",
    "next",
    "turbo",
    "prettier",
    "next/core-web-vitals",
    "airbnb-typescript",
    "plugin:react/recommended",
    "eslint:recommended",
    "./rules/jsdoc",
    "./rules/typescript",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "turbo/no-undeclared-env-vars": "off",
    quotes: "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
