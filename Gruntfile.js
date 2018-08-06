module.exports = function (grunt) {

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './',
                    hostname: '*',
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'public/js/scripts.min.js': ['src/js/scripts.js']
                }
            }
        }, //uglify

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/style.min.css': 'src/scss/styles.scss'
                }
            }
        },

        autoprefixer: {

            options: {
                browsers: ['last 4 version', 'ie 9', 'ios 6'],
                map: true
            },

            single_file: {
                src: 'public/css/style.min.css'
            }

        }, //autoprefixer

        watch: {

            scripts: {

                files: ['src/js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }

            }, //scripts

            scss: {
                files: 'src/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            } //scss

        }, //watch

    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect' , "watch" ]);

};