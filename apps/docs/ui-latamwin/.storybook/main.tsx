module.exports = {
  stories: ['../../../../packages/ui/ui-latamwin/src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    return config;
  },
  docs: {
    autodocs: true,
  },
};
