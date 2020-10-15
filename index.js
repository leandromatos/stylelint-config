module.exports = {
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'color-hex-length': 'long',
    'declaration-property-value-disallowed-list': {
      '/^border/': [''],
    },
    'font-family-name-quotes': 'always-where-recommended',
    indentation: 2,
    'selector-attribute-quotes': 'always',
    'selector-max-id': null,
    'selector-pseudo-element-colon-notation': 'single',
    'string-quotes': 'single',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': null,
  },
}
