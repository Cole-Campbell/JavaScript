module.exports = function(grunt) {
	//Grunt Configuration of Grunt Packages
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			uglify: {
				build:{
					src:'src/<%pkg.name%>.js',
					dest:'build/<%pkg.name%>.min.js'
				}
			}
	//Sass


	});

	grunt.loadNpmtasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);

};