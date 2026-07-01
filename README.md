# Stylelint Config

Personal [Stylelint](https://stylelint.io) configuration: the recommended rules tuned for SCSS, CSS-in-JS, and Tailwind CSS, in a single package.

## ✨ Features

- **One linter config, every project** — a single source of truth for Stylelint rules, so style linting never drifts between repositories.
- **SCSS, CSS-in-JS, and Tailwind** — the recommended rules plus the syntaxes and configs for `.scss`, styled-components, and Tailwind, wired through per-file overrides.
- **ESM, Stylelint 17** — ships as an ES module against the current Stylelint major.
- **Reference by string** — extend the package name; there is no rule body to copy.
- **Signal over noise** — keeps the rules that catch real problems and turns off the notation and vendor-prefix rules that only add friction.

## 🧭 How It Works

Stylelint resolves the string in your `extends` to this package and merges its rules beneath yours, the same way it resolves any shareable config. The base layer extends `stylelint-config-recommended` and `stylelint-config-tailwindcss`, then relaxes the rules that police style rather than defects.

CSS is not the only input. Styles also live in `.scss` files and in tagged templates inside JS and TS. The config handles each through a file override that swaps the PostCSS syntax Stylelint parses with — `postcss-scss` for SCSS, `postcss-styled-syntax` for CSS-in-JS — so the same rule set applies across all three.

Your own `rules` merge last, so anything you set overrides the defaults, shown under Configuration below.

## 📦 Installation

Install Stylelint and the config as dev dependencies:

```bash
yarn add --dev stylelint @leandromatos/stylelint-config
```

Stylelint `>= 16` is a peer dependency, so you bring your own. The SCSS, Tailwind, and PostCSS syntax packages ship with the config.

## 🚀 Quick Start

Extend the config from a `.stylelintrc.json`:

```json
{
  "extends": "@leandromatos/stylelint-config"
}
```

Run Stylelint against your styles:

```bash
yarn stylelint "**/*.{css,scss}"
```

## 🧩 What's Included

The base extends the recommended and Tailwind configs, then switches syntax per file type:

| Files                            | Syntax                  | Extends                                                                  |
| -------------------------------- | ----------------------- | ------------------------------------------------------------------------ |
| `*.css` (default)                | —                       | `stylelint-config-recommended`, `stylelint-config-tailwindcss`           |
| `*.scss`                         | `postcss-scss`          | `stylelint-config-tailwindcss/scss`, `stylelint-config-recommended-scss` |
| `*.js`, `*.jsx`, `*.ts`, `*.tsx` | `postcss-styled-syntax` | base rules                                                               |

### Rule adjustments

The config keeps `stylelint-config-recommended` and turns off the rules that flag style choices rather than defects — the notation rules (`alpha-value-notation`, `color-function-notation`, `hue-degree-notation`), the vendor-prefix rules, and the naming-pattern rules. A few are set rather than disabled:

| Rule                                     | Value                      | Description                                      |
| ---------------------------------------- | -------------------------- | ------------------------------------------------ |
| `color-hex-length`                       | `long`                     | Full six-digit hex, not shorthand.               |
| `font-family-name-quotes`                | `always-where-recommended` | Quote family names where a quote is recommended. |
| `selector-attribute-quotes`              | `always`                   | Always quote attribute-selector values.          |
| `selector-pseudo-element-colon-notation` | `single`                   | `:before`, not `::before`.                       |

## ⚙️ Configuration

To change a rule, extend the config and add your own `rules` after it:

```json
{
  "extends": "@leandromatos/stylelint-config",
  "rules": {
    "color-hex-length": "short"
  }
}
```

## 🏷️ Versioning

Semver, published to npm. The peer range is Stylelint `>= 16`; a Stylelint major that changes rule behavior ships as a major here too. Snapshots publish as `X.Y.Z-snapshot.YYYYMMDD.N` to test a change before a stable release.

## 🤝 Contributing

Commits follow Conventional Commits, validated by [@leandromatos/commitlint-config](https://github.com/leandromatos/commitlint-config). Work on a `release/vMAJOR` branch and open a pull request. A release is a separate, explicit step: bump the version (the `snapshot-version-bump.sh` script for pre-releases), then push a `v*` tag, which the publish workflow picks up.

## 📄 License

This software is free and open source, released by Leandro Matos under the MIT License. See the [LICENSE](LICENSE) file for the full terms.
