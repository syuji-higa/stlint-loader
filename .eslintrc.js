module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    'no-debugger': 'error'
  }
}
