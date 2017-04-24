module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                banner: "/*! What the alt client - v<%= pkg.version %> - " +
                '<%= grunt.template.today("yyyy-mm-dd") %> */ \n' + 
                "/*! \n" + 
                " * http://whatthealt.com \n" +
                " * Copyright 2017 What the alt Authors \n" +
                " * Copyright 2017 Code HQ (Pty) (Ltd) \n" +
                " Licensed under MIT (https://github.com/CodeHQ/whatthealt-client/blob/master/LICENSE) \n" +
                " */"
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
                    { expand: true, flatten: true, src: ["src/*"], dest: "dist/", filter: "isFile" }
                ],
            },
        }
    });
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("build", ["uglify", "copy"]);

};