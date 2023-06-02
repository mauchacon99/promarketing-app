const path = require("path");
module.exports = {
    root: true,
    extends: ["custom"],
    parserOptions: {
        project: [path.join(__dirname, "tsconfig.eslint.json")],
    },
    rules: {
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "function",
                format: ["PascalCase", "camelCase"],
            },
        ],
        "@next/next/no-img-element": "off",
        "no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
            },
        ],
        eqeqeq: ["error", "always"],
    },
};
