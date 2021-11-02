# isPlainObject
Check to see if an object is a plain object.

## Installation

### Using NPM:

```js
npm install @alexspirgel/is-plain-object
```

```js
const isPlainObject = require('@alexspirgel/is-plain-object');
```

## Usage

```js
isPlainObject({}); // returns true
isPlainObject({'a':1, 'b':{'c':3}}); // returns true
isPlainObject(null); // returns false
isPlainObject(Error); // returns false
```