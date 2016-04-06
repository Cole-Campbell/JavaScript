/*'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/*.scss'));
});

gulp.task('sass:watch', function() {
	gulp.watch('.sass/**.scss', ['sass']);
});*/

var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './sass/*css';
var output = './dist/';

var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'compressed'
};

gulp.task('sass', function() {
	return gulp
	.src(input)

	.pipe(sass(sassOptions).on('error', sass.logError))

	.pipe(gulp.dest(output));
});