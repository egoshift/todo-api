module.exports = {
  env: {
    browser: true,
    commonjs: true,
    // 'es2021': true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    // 'semi': ['always']
  },
}
