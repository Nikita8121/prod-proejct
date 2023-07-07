module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint-config-standard-with-typescript',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
    eqeqeq: 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx']
      }
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true
      }
    ]
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ]
}
