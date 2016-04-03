'use strict';
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
	say(s);
}