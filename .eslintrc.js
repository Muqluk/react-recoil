module.exports = {
    // extends: [
    //     "plugin:cypress/recommended"
    // ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
        // "cypress/globals": true,
    },
    settings: {
        // 'import/parsers': {
        //     '@typescript-eslint/parser': ['.ts', '.tsx'],
        // },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: [
                    'node_modules',
                    'src'
                ],
            },
            webpack: {
                config: 'webpack.config.js',
            },
            // typescript: {
            //     alwaysTryTypes: true,
            //     project: 'tsconfig.json',
            // }
        },
    },
    globals: {
        React: true,
        ReactDOM: true,
        PropTypes: true,
        Webpack: true,
    },
    plugins: [
        'react',
        // '@typescript-eslint',
        // '@emotion',
        // 'cypress',
    ],
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        /* eslint-specific */
        'comma-dangle': ['error', 'only-multiline'],
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'no-console': 'warn',

        'react/jsx-filename-extension': ['error', {
            extensions: ['.jsx']
        }]
    }
};