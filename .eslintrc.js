module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    'no-alert': ['error'],
    'no-console': ['error'],
    'react/destructuring-assignment': ['error'],
    'react/jsx-sort-props': ['error'],
    'sort-vars': ['error'],
  },
};
