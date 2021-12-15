# Is Plain Object
A utility function that returns `true` if the argument is a plain object. Otherwise returns `false`.

For the purposes of this script, a plain object is an object that was created by explicitly specifying keys and values. An object created by a constructor is not a plain object.

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