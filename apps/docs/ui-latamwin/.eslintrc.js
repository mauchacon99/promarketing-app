// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
module.exports = {
    root: true,
    extends: ["custom", "plugin:storybook/recommended"],
    parserOptions: {
        project: [path.join(__dirname, "tsconfig.eslint.json")],
    },
};
