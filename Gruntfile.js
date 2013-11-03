module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            compile: {
                options: { 
                    join: true
                },
                files: {
                    'public/javascripts/AppScripts/app.js': 'public/javascripts/Coffee/**/*.coffee'
                }
            }
        },
        recess: {
            dist: {
                options: {
                    compile: true
                },
                files: {
                    "public/stylesheets/bootstrap.css": ["public/vendor/bootstrap/bootstrap.less"],
                    "public/stylesheets/app.css": ["public/stylesheets/Less/app.less"]
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-recess');
    grunt.registerTask('default', ['coffee', 'recess']);
};
