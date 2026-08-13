import postcssScss from 'postcss-scss'
// A namespace import, because this one is native ESM exporting `parse` and `stringify` with no
// default. A default import would silently be `undefined`, and Stylelint would fall back to the
// plain-CSS parser and report a syntax error on the surrounding JavaScript.
import * as postcssStyledSyntax from 'postcss-styled-syntax'

/**
 * The syntaxes are imported and passed as values rather than named as strings, because Stylelint
 * resolves a `customSyntax` string from the linted project's root — not from the config that asked
 * for it. Under a hoisting package manager the two happen to coincide; under pnpm they do not, and
 * every consumer would have to install `postcss-scss` and `postcss-styled-syntax` itself to make a
 * dependency this package already declares resolvable.
 *
 * `plugins` needs no such treatment: Stylelint resolves those relative to the config file.
 *
 * @type {import('stylelint').Config}
 */
const config = {
  extends: ['stylelint-config-recommended', 'stylelint-config-tailwindcss'],
  rules: {
    'alpha-value-notation': null,
    'at-rule-no-deprecated': null,
    'at-rule-no-vendor-prefix': null,
    'color-function-notation': null,
    'color-hex-length': 'long',
    'custom-property-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'font-family-name-quotes': 'always-where-recommended',
    'hue-degree-notation': null,
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
      customSyntax: postcssScss,
      extends: ['stylelint-config-recommended-scss', 'stylelint-config-tailwindcss'],
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      customSyntax: postcssStyledSyntax,
    },
  ],
}

export default config
