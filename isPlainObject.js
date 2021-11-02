function isPlainObject(value) {
	if (typeof value !== 'object' ||
	value === null ||
	Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}
	if (Object.getPrototypeOf(value) === null) {
    return true;
  }
	let prototype = value;
  while (Object.getPrototypeOf(prototype) !== null) {
    prototype = Object.getPrototypeOf(prototype);
  }
  return Object.getPrototypeOf(value) === prototype;
}

module.exports = isPlainObject;