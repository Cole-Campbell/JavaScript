
module.exports = function(grunt) {
	//Grunt Configuration of Grunt Packages
	grunt.initConfig({
		sass: {                              // Task 
    			dist: {                            // Target 
      				options: {                       // Target options 
        				style: 'compressed'
      				},
      				files: {                         // Dictionary of files 
        				'.scss': '*.css'       // 'destination': 'source'        				
      				}
    			}
  			}
		pkg: grunt.file.readJSON('package.json'),
			uglify: {
				build:{
					src:'src/*.js',
					dest:'build/*.min.js'
				}*/
			
	//Sass


	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	//grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('default', ['sass']);
	//grunt.registerTask('default', ['sass']);

};

*/