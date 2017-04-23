module.exports = function(grunt) {

    grunt.initConfig({
        bowercopy: {
            options: {
                clean: true,
                runBower: true
            },
            libs: {
                options: {
                    destPrefix: "js/libs"
                },
                files: {
                    'jquery.min.js': "jquery/dist/jquery.min.js",
                    'jquery.min.map': "jquery/dist/jquery.min.map",
                    'bootstrap.min.js': "bootstrap/dist/js/bootstrap.min.js",
                    'aspnetAuth.min.js': "Lock-Stock-and-Auth-client/dist/aspnetAuth.min.js",
                    'whatthealt.js': "whatthealt-client/dist/whatthealt.js",
                    'whatthealt.min.js': "whatthealt-client/dist/whatthealt.min.js"
                }
            },
            css: {
                files: {
                    'css': ["bootstrap/dist/css"]
                }
            },
            fonts: {
                files: {
                    'fonts': ["bootstrap/dist/fonts"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-bowercopy");
};