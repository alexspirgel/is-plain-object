/**
 * isPlainObject v1.0.0
 * https://github.com/alexspirgel/isPlainObject
 */

const isPlainObject = (object) => {
	if (!Object.prototype.toString.call(object) === '[object Object]') {
		return false;
	}
  if (object.constructor === undefined) {
		return true;
	}
  if (!Object.prototype.toString.call(object.constructor.prototype) === '[object Object]') {
		return false;
	}
  if (!object.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
    return false;
  }
  return true;
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = isPlainObject;
}