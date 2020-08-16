# Stylelint Config

### Setup

Use yarn to install Stylelint and custom config:

```sh
yarn add --dev stylelint @leandromatos/stylelint-config
```

Create a new `.stylelintrc.js` file and export an object containing your settings:

```js
module.exports = {
  ...require('@leandromatos/stylelint-config'),
}
```

---

&copy; All rights reserved
