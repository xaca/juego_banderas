module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      mkdir: {
        all: {
          options: {
            mode: 0700,
            create: ['tmp']
          },
        },
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mkdir');
  
    // Default task(s).
    grunt.registerTask('default', ['mkdir']);
  
  };