# @subsetcss/config-helpers

Helpers for building out `.subsetcss.js` config files.

## Available helpers

### `getVariables`

```js
import { getVariables } from '@subsetcss/config-helpers';
// or
const { getVariables } = require('@subsetcss/config-helpers');

let variables = getVariables('app/styles/variables.scss');
// variables = [
//   { key: '$variableA': value: 'red' },
//   { key: '$variableB': value: 'blue' }
// ]
```

## Contributing

Check out the [Contributing guide](CONTRIBUTING.md).