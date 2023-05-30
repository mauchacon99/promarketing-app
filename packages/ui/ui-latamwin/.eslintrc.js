const path = require('path');
module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    project: [path.join(__dirname, 'tsconfig.eslint.json')],
  },
};
