# Stylelint Config

Personal [Stylelint](https://stylelint.io) configuration: the recommended rules tuned for SCSS, CSS-in-JS, and Tailwind CSS.

## ✨ Features

- **One linter config, every project** — a single source of truth for Stylelint rules, so style linting never drifts between repositories.
- **SCSS, CSS-in-JS, and Tailwind** — the recommended rules plus the syntaxes and configs for `.scss`, styled-components, and Tailwind, wired through per-file overrides.
- **ESM, Stylelint 16+** — ships as an ES module against the Stylelint majors the peer range accepts.
- **Typed** — publishes type declarations, so importing it from TypeScript gives you a checked `Config` instead of an implicit `any`.
- **Reference by string** — extend the package name; there is no rule body to copy.
- **Signal over noise** — keeps the rules that catch real problems and turns off the notation and vendor-prefix rules that only add friction.
- **Formatting is Prettier's job** — Stylelint 15+ dropped its stylistic rules; this config lints for defects and leaves formatting to Prettier. Pairs with [@leandromatos/prettier-config](https://github.com/leandromatos/prettier-config).

## 🧭 How It Works

Stylelint resolves the string in your `extends` to this package and merges its rules beneath yours, the same way it resolves any shareable config. The base layer extends `stylelint-config-recommended` and `stylelint-config-tailwindcss`, then relaxes the rules that police style rather than defects.

CSS is not the only input. Styles also live in `.scss` files and in tagged templates inside JS and TS. The config handles each through a file override that swaps the PostCSS syntax Stylelint parses with — `postcss-scss` for SCSS, `postcss-styled-syntax` for CSS-in-JS — so the same rule set applies across all three.

Your own `rules` merge last, so anything you set overrides the defaults, shown under Configuration below.

Formatting is not Stylelint's job. Since Stylelint 15 the stylistic rules are gone, so this config only flags defects and leaves layout to Prettier. You run Prettier to format and Stylelint to catch problems.

## 📦 Installation

Install Stylelint and the config as dev dependencies:

```bash
yarn add --dev stylelint @leandromatos/stylelint-config
```

Stylelint `>= 16` is a peer dependency, so you bring your own. The SCSS, Tailwind, and PostCSS syntax packages ship with the config.

Node `>= 22.12.0` is required.

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

### Editor and lint-staged setup

Stylelint checks quality; Prettier formats. Wire both so they do not overlap.

VSCode, with the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extensions (`.vscode/settings.json`) — format with Prettier on save, and run Stylelint's fixes as a separate action:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  }
}
```

[lint-staged](https://github.com/lint-staged/lint-staged) (`lint-staged.config.mjs`) — Prettier writes first, then Stylelint fixes:

```js
export default {
  '*.{css,scss}': ['prettier --write', 'stylelint --fix'],
}
```

## 🧩 What's Included

The base extends the recommended and Tailwind configs, then switches syntax per file type:

| Files                            | Syntax                  | Extends                                                             |
| -------------------------------- | ----------------------- | ------------------------------------------------------------------- |
| `*.css` (default)                | —                       | `stylelint-config-recommended`, `stylelint-config-tailwindcss`      |
| `*.scss`                         | `postcss-scss`          | `stylelint-config-recommended-scss`, `stylelint-config-tailwindcss` |
| `*.js`, `*.jsx`, `*.ts`, `*.tsx` | `postcss-styled-syntax` | base rules                                                          |

Beyond the presets, the config turns off the rules that police style rather than defects (notation and vendor-prefix rules) and sets a few conventions of its own. The exact rule set is in [`src/index.js`](src/index.js).

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

Semver, published to npm. The peer range is Stylelint `>= 16` on Node `>= 22.12.0`; a Stylelint major that changes rule behavior ships as a major here too. Snapshots publish to the `snapshot` dist-tag as `X.Y.Z-snapshot.YYYYMMDD.N`; stable releases go to `latest`.

## 🤝 Contributing

This repository follows [Conventional Commits](https://www.conventionalcommits.org). See [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow, releases, and local setup.

## 📄 License

This software is free and open source, released by Leandro Matos under the MIT License. See the [LICENSE](LICENSE) file for the full terms.
