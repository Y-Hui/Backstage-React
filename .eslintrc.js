module.exports = {
  'parser': 'babel-eslint',
  'settings': {
    'import/resolver': {
      'alias': {
        'map': [
          ['@', './src/'],
          ['@module', './src/components/']
        ],
      }
    }
  },
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'airbnb',
    'plugin:react/recommended',
    // 'eslint:recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'semi': ['error', 'never'],
    'no-plusplus': 0,
    'no-shadow': ['error', { 'allow': ['state'] }],
    'import/extensions': 0,
    'comma-dangle': ['error', 'never'],
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    "react/jsx-props-no-spreading": 0,
    'no-console': 'warn',
    'no-debugger': 'error',
    'import/no-extraneous-dependencies': 0
  }
};
