module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            target: {
                files: [{
                    src: ["src/whatthealt.js"],
                    dest: "dist/whatthealt.min.js"
                }]
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, src: ['src/*'], dest: 'demo/js/', filter: 'isFile' },
                    { expand: true, flatten: true, src: ['dist/*'], dest: 'demo/js/', filter: 'isFile' }
                ],
            },
        }
    });
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask("build", ["uglify", "copy"]);

};