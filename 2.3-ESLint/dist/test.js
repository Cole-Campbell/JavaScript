'use strict';
//ES6 Feature: Block Scoped "Let" declaration

var sentences = [{ subject: 'javascript', verb: 'is', object: 'great' }, { subject: 'Elephants', verb: 'are', object: 'large' }];

//ES6 Feature: Object Destructuring
function say(_ref) {
	var subject = _ref.subject;
	var verb = _ref.verb;
	var object = _ref.object;

	//ES6 Feature: templaye strings
	console.log(subject + ' ' + verb + ' ' + object);
}
//ES6 Feature: For..of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var s = _step.value;

		say(s);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}