module.exports = function(grunt) { 
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        

        sass: {
            dev: {
                files: {
                    'css/main.css': 'css/sass/main.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['**/*.scss'], 
                tasks: ['sass'] 
            }
		}

        });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['watch']);
};

// to run server http-server -p 8000