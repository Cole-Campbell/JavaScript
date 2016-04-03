//Makes sure that the HTML has been loaded before the contents of the JS file
$(document).ready(function(){
	//Treats the codes more rigurously. Program is far more strict about the contents
	//Of the program when 'use strict'; is used.
	'use strict';

	//Boilerplate code, as it will be repeated numberous times
	//Installs paper globally across application
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	//TODO - Will be adding code here which will be translated by paper and passed
	//Back to the Id 'mainCanvas' on the index page.

	//Call to the tool portion of paper.js. This will be used to asynchronously create
	//Circles when the user clicks
	var tool = new Tool();

	/*Experience writing text to the browser using JavaScript
	var c = Shape.Circle(200,200,80);
	c.fillColor = 'black';
	var text = new PointText(200,200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';
	*/

	//Asynchronously creates a circle only when the user clicks the mouse down
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point, 20);
		c.fillColor = 'green';
	};
	

	paper.view.draw();

	//Prints comment in '' to the Console in Browser
	console.log('main.js loaded');

});