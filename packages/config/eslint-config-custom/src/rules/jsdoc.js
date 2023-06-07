module.exports = {
    extends: ["plugin:jsdoc/recommended"],
    plugins: ["jsdoc"],
    rules: {
        "brace-style": ["error", "1tbs"],
        eqeqeq: "error",
        "keyword-spacing": [2, { before: true, after: true }],
        "lines-between-class-members": "error",
        "max-len": [
            "error",
            {
                code: 140,
                tabWidth: 2,
                ignorePattern: "^\\s*import ",
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
            },
        ],
        "no-console": "error",
        semi: "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/check-param-names": "error",
        "jsdoc/check-property-names": "error",
        "jsdoc/check-syntax": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/check-values": "error",
        "jsdoc/empty-tags": "error",
        "jsdoc/implements-on-classes": "error",
        "jsdoc/match-description": "error",
        "jsdoc/newline-after-description": "error",
        "jsdoc/no-bad-blocks": "warn",
        "jsdoc/require-description": "error",
        "jsdoc/require-description-complete-sentence": "error",
        "jsdoc/require-jsdoc": [
            "error",
            {
                publicOnly: false,
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: true,
                    FunctionExpression: true,
                },
                contexts: [
                    {
                        context: "ClassProperty",
                        inlineCommentBlock: true,
                    },
                    {
                        context: "TSPropertySignature",
                        inlineCommentBlock: true,
                    },
                ],
                exemptEmptyFunctions: false,
                checkConstructors: false,
            },
        ],
        "jsdoc/require-param": "error",
        "jsdoc/require-param-description": "error",
        "jsdoc/require-param-name": "error",
        "jsdoc/require-property": "error",
        "jsdoc/require-property-description": "error",
        "jsdoc/require-property-name": "error",
        "jsdoc/require-returns": "error",
        "jsdoc/require-returns-check": "error",
        "jsdoc/require-returns-description": "error",
        "jsdoc/require-yields-check": "error",
    },
};
