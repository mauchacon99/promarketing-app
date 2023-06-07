module.exports = {
    stories: ["../../../../packages/ui/ui-latamwin/src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-styling",
    ],
    framework: "@storybook/react-vite",
    async viteFinal(config) {
        return config;
    },
    docs: {
        autodocs: true,
    },
};
