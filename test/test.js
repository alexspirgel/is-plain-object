const isPlainObject = require('../isPlainObject.js');

describe('isPlainObject', function () {
	describe('plain object', function () {
		it(`should return true`, function () {
			let value = {
				a: 1,
				b: 2,
				c: {
					a: 1
				}
			};
			let result = isPlainObject(value);
			if (result === true) {
				return true;
			}
			throw new Error();
		});
	});
	describe('empty object', function () {
		it(`should return true`, function () {
			let value = {};
			let result = isPlainObject(value);
			if (result === true) {
				return true;
			}
			throw new Error();
		});
	});
	describe('null', function () {
		it(`should return false`, function () {
			let value = null;
			let result = isPlainObject(value);
			if (result === false) {
				return true;
			}
			throw new Error();
		});
	});
	describe('native object (Error class)', function () {
		it(`should return false`, function () {
			let value = Error;
			let result = isPlainObject(value);
			if (result === false) {
				return true;
			}
			throw new Error();
		});
	});
	describe('undefined', function () {
		it(`should return false`, function () {
			let result = isPlainObject(undefined);
			if (result === false) {
				return true;
			}
			throw new Error();
		});
	});
	describe('primitive', function () {
		it(`should return false`, function () {
			let value1 = true;
			let value2 = 5;
			let value3 = 'hello';
			let result1 = isPlainObject(value1);
			let result2 = isPlainObject(value2);
			let result3 = isPlainObject(value3);
			if (result1 !== true && result2 !== true && result3 !== true) {
				return true;
			}
			throw new Error();
		});
	});
	describe('array', function () {
		it(`should return false`, function () {
			let value = [];
			let result = isPlainObject(value);
			if (result === false) {
				return true;
			}
			throw new Error();
		});
	});
});