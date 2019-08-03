# @subsetcss/config-helpers

Helpers for building out `.subsetcss.js` config files.

## Available helpers

### `getVariables`

```js
const { getVariables } = require('@subsetcss/config-helpers');

let colors = getVariables('app/styles/variables.scss');
// colors = [
//   { key: '$primary': value: 'red' },
//   { key: '$secondary': value: 'blue' }
// ]

module.exports = {
  subsets: {
    color: colors.map(c => c.key)
  }
};
```

## Contributing

Check out the [Contributing guide](CONTRIBUTING.md).