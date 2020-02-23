const path = require('path');
module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  settings: {
    // 从 webpack 配置文件中读取别名（应用：使用 @ 代替 /src）
    'import/resolver': {
      webpack: {
        config: path.resolve('./webpack.config.js'),
      },
    },
  },
  rules: {
    'indent': 0,
    'linebreak-style': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['warn', { varsIgnorePattern: 'autobind' }],
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
    'arrow-parens': 0,
    'import/newline-after-import': 0,
    'import/first': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'never', { packages: 'always' }],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-has-content': 'off',
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-indent': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 'error',
    'react/sort-comp': 1,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/require-default-props': 0,
    'prettier/prettier': 'error',
  },
};
