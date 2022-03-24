module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-react",
          { "runtime": "automatic", "importSource": "@emotion/react" }
        ],
        "@emotion/babel-preset-css-prop",
        '@babel/env',
        '@babel/typescript',
      ]
    }
  },
  presets: [
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ],
    "@emotion/babel-preset-css-prop",
    '@babel/env',
  ],
  plugins: [
    '@emotion',
  ]
};