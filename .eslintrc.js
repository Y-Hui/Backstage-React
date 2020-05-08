module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'react-app',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
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
  'rules': {
    'semi': ['error', 'never'],
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true, 'optionalDependencies': false, 'peerDependencies': false}],
    'import/no-unresolved': 0,
    'no-unused-expressions': ['error', {
      'allowTernary': true,
      'allowShortCircuit': true
    }],
    'no-shadow': ['error', { 'allow': ['state'] }],
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'comma-dangle': ['error', 'never'],
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-props-no-spreading': 0,
    'no-console': 'warn',
    'no-debugger': 'error',
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
  }
}
