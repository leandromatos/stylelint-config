import config from '@leandromatos/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...config,
  {
    ignores: ['coverage', 'CHANGELOG.md', 'index.d.ts'],
  },
  {
    files: ['test/**/*.js'],
    rules: {
      'import-x/no-relative-parent-imports': 'off',
      'no-restricted-imports': 'off',
    },
  },
]
