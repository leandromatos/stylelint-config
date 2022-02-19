module.exports = {
  plugins: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'color-hex-length': 'long',
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
