const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('default', function() {
	//Gulp Tasks go here
	//Node Source

	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
	//Browser Source
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});