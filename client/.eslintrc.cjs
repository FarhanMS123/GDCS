module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  ignorePatterns: ['.eslintrc.cjs', 'src/vite-env.d.ts'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-extra-semi': 'off',
  },
}
