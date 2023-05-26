module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials",
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) { return config; },
  docs: {
    autodocs: true
  }
};