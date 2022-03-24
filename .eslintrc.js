module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // "plugin:cypress/recommended",
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    // "cypress/globals": true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: [
          'node_modules',
          'src'
        ],
      },
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  // globals: {
  //   React: true,
  //   ReactDOM: true,
  //   PropTypes: true,
  //   Webpack: true,
  // },
  plugins: [
    'react',
    'react-hooks',
    '@emotion',
    // 'cypress',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx']
    }],
    'react/display-name': 0,
    'react/prop-types': 0,
  }
};