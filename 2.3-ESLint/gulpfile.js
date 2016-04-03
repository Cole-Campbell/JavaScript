const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');


gulp.task('default', function() {
	//Runs ESLint - This checks for any "pretty" syntax of the code specified.
	//ESLint configuration in .eslint.json file. www.eslint.org for possible configurations/
	//eslint --init to create a fresh configuration
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	//Gulp Tasks go here
	
	//Babel gulp .pipe. Goes to ES6 file and searches for all files, directories and subdirectories
	//and grabs any file with the extention .js and converts it from ES6 to ES5 and places the file
	//The gulp.dest specified below.

	//Node Source
	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
	//Browser Source
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});