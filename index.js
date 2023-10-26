module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-tailwindcss"
  ],
  rules: {
    "alpha-value-notation": null,
    "at-rule-no-vendor-prefix": null,
    "color-function-notation": null,
    "color-hex-length": "long",
    "custom-property-empty-line-before": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "font-family-name-quotes": "always-where-recommended",
    "hue-degree-notation": null,
    "keyframes-name-pattern": null,
    "length-zero-no-unit": null,
    "no-descending-specificity": null,
    "no-empty-source": null,
    "no-invalid-position-at-import-rule": null,
    "number-max-precision": null,
    "property-no-unknown": null,
    "property-no-vendor-prefix": null,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "selector-max-id": null,
    "selector-no-vendor-prefix": null,
    "selector-pseudo-element-colon-notation": "single",
    "value-keyword-case": null,
    "value-no-vendor-prefix": null,
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
      extends: [
        "stylelint-config-tailwindcss/scss",
        "stylelint-config-recommended-scss",
      ],
    },
    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
      customSyntax: "postcss-styled-syntax",
      extends: ["stylelint-config-styled-components"],
    },
  ],
};
