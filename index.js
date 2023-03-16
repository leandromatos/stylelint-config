module.exports = {
  extends: ['stylelint-config-recommended'],
  plugins: ['stylelint-prettier'],
  rules: {
    'alpha-value-notation': null,
    'at-rule-no-vendor-prefix': null,
    'color-function-notation': null,
    'color-hex-length': 'long',
    'custom-property-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'font-family-name-quotes': 'always-where-recommended',
    'hue-degree-notation': null,
    'prettier/prettier': true,
    'keyframes-name-pattern': null,
    'length-zero-no-unit': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-invalid-position-at-import-rule': null,
    'number-max-precision': null,
    'property-no-unknown': null,
    'property-no-vendor-prefix': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-max-id': null,
    'selector-no-vendor-prefix': null,
    'selector-pseudo-element-colon-notation': 'single',
    'value-keyword-case': null,
    'value-no-vendor-prefix': null,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-prettier-scss',
      ],
    },
    {
      files: ['**/*.vue'],
      extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-prettier-scss',
      ],
      customSyntax: 'postcss-html',
      rules: {
        indentation: 2,
      },
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      customSyntax: 'postcss-jsx',
      extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-prettier-scss',
        'stylelint-config-styled-components',
      ],
      rules: {
        indentation: [2, { baseIndentLevel: 1 }],
      },
    },
  ],
}
