const path = require("path");
module.exports = {
    root: true,
    extends: ["custom"],
    parserOptions: {
        project: [path.join(__dirname, "tsconfig.eslint.json")],
    },
    rules: {
        "@next/next/no-img-element": "off",
        "no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
            },
        ],
    },
    overrides: [
        {
            files: "**/*.+(tsx)",
            rules: {
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        selector: "variable",
                        format: ["PascalCase", "camelCase"],
                        types: ["function"],
                    },
                    {
                        selector: "variable",
                        format: ["camelCase"],
                    },
                ],
                "max-len": [
                    "error",
                    { ignoreTemplateLiterals: true, ignoreStrings: true },
                ],
            },
        },
    ],
};
