# Stylelint Config

### Setup

Use yarn to install stylelint and custom config:

```bash
yarn add --dev stylelint @leandromatos/stylelint-config
```

Create a new `.stylelint.config.js` file and export an object containing your settings:

```js
module.exports = {
  ...require("@leandromatos/stylelint-config"),
};
```
