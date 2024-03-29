module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    BMap: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-irregular-whitespace' : 'off', 
    'no-trailing-spaces': 0,
    'space-before-function-paren': 0,
    indent: ['off', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
