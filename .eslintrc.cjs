module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'script'
      }
    }
  ],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowAny: true }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowFunctionsWithoutTypeParameters: true
      }
    ],
    '@typescript-eslint/triple-slash-reference': ['error', { types: 'always' }],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        tabWidth: 2,
        ignoreTrailingComments: true
      }
    ],
    'no-console': 'warn'
  }
}
