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

					  //xPos, yPos, Radius
	//var c = Shape.Circle(200, 200, 50);

	//64 Circles
	var c;
	for (var x=25; x<400; x+=50){
		for (var y=25; y<400; y+=50){
			c = Shape.Circle(x, y, 20);
			c.fillColor = 'green';
		}
	}
	

	paper.view.draw();

	//Prints comment in '' to the Console in Browser
	console.log('main.js loaded');

});