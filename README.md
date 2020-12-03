# isPlainObject
Check to see if an object is a plain object.

## Installation

### Using NPM:

```js
npm install @alexspirgel/isPlainObject
```

```js
const extend = require('@alexspirgel/isPlainObject');
```

### Using a script tag:

Download the `isPlainObject.js` file.

```html
<script src="path/to/isPlainObject.js"></script>
```

## Usage

```js
isPlainObject({'a':1}); // returns true
isPlainObject(null); // returns false
isPlainObject(Error); // returns false
```