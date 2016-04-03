/*'use strict';
//ES6 Feature: Block Scoped "Let" declaration
const sentences = [
	{ subject: 'javascript', verb: 'is', object: 'great'},
	{subject: 'Elephants', verb: 'are', object: 'large'},
];

//ES6 Feature: Object Destructuring
function say({ subject, verb, object}){
	//ES6 Feature: templaye strings
	console.log(`${subject} ${verb} ${object}`);
}
//ES6 Feature: For..of
for(let s of sentences){
	say(s);.
}*/

'use strict';
// es6 feature: block-scoped "let" declaration
const sentences = [
{ subject: 'JavaScript', verb: 'is', object: 'great' },
{ subject: 'Elephants', verb: 'are', object: 'large' },
];
// es6 feature: object destructuring
function say({ subject, verb, object }) {
// es6 feature: template strings
console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for..of
for(let s of sentences) {
say(s);
}