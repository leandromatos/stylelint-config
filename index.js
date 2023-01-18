module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-rational-order",
  ],
  overrides: [
    {
      files: ["**/*.scss"],
      extends: ["stylelint-config-standard-scss", "stylelint-config-prettier", "stylelint-config-rational-order"],
    },
    {
      files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
      extends: [
        "stylelint-config-recommended",
        "stylelint-config-prettier",
        "stylelint-config-rational-order",
        "stylelint-config-styled-components",
      ],
      customSyntax: "postcss-jsx",
    },
  ],
  rules,
};
