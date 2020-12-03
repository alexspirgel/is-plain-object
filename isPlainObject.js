isPlainObject = (object) => {
	const baseObject = {};
	const toString = baseObject.toString;
	const hasOwnProperty = baseObject.hasOwnProperty;
	const functionToString = hasOwnProperty.toString;
	const objectFunctionString = functionToString.call(Object);
	if (toString.call(object) !== '[object Object]') {
		return false;
	}
	const prototype = Object.getPrototypeOf(object);
	if (prototype) {
		if (hasOwnProperty.call(prototype, 'constructor')) {
			if (typeof prototype.constructor === 'function') {
				if (functionToString.call(prototype.constructor) !== objectFunctionString) {
					return false;
				}
			}
		}
	}
	return true;
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = isPlainObject;
}