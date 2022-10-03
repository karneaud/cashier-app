# babel-plugin-transform-relative-paths

Transform relative paths with babel

Transforms relative paths up one level by default:

```js
// input
import someModule from './a-relative-path'
import someOtherModule from '../a-relative-path'
const someCommonModule = require('../../a-relative-path')

// output
import someModule from '../a-relative-path'
import someOtherModule from '../../a-relative-path'
const someCommonModule = require('../../../a-relative-path')

```

## Usage

```
npm install --save-dev babel-plugin-transform-relative-paths
```

Specify the plugin in your `.babelrc`. Here's an example:

```json
{
  "plugins": ["transform-relative-paths"]
}
```
