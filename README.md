random-permutation
==================
Generates a random permutation

# Example

```javascript
var randPerm = require("random-permutation")

console.log(randPerm(10))
console.log(randPerm(5))
```

Example output:

```javascript
[ 5, 3, 7, 9, 2, 1, 6, 0, 4, 8 ]
[ 2, 0, 1, 4, 3 ]
```

# Install

```
npm install random-permutation
```

# API

#### `require("random-permutation")(n)`
Generates a random permutation on `n` elements

* `n` is the number of elements in the permutation

**Returns** A random permutation

# Credits
(c) 2014 Mikola Lysenko. MIT License