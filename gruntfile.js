module.exports = function (grunt) {
    grunt.initConfig({
        // less
        less: {
            development: {
                options: {
                    plugins: [new (require('less-plugin-autoprefix'))({ browsers: ["last 10 versions"] })],
                    paths: ["./css"],
                    yuicompress: true
                },
                files: {
                    "./css/main/main.css": "./less/main.less"
                }
            }
        },
        // uglify
        uglify: {
            my_target: {
                files: [
                    // LayoutView
                    { "./src/main.min.js": "./src/main.js" },
                ]
            }
        },
        // cssmin
        cssmin: {
            options: {
                level: {
                    1: { specialComments: 0 }
                }
            },
            target: {
                files: [{
                    expand: true,
                    cwd: "./css/main",
                    src: ["main.css"],
                    dest: "./css/main",
                    ext: ".min.css"
                },
                {
                    expand: true,
                    cwd: "./css/reset",
                    src: ["reset.css"],
                    dest: "./css/reset",
                    ext: ".min.css"
                }]
            }
        },
        //clean
        clean: [
            "./src/**/*.min.js",
            "/css/**/*.min.css",
        ],
        // concat
        concat: {
            dist_css: {
                src: ["./css/reset/reset.min.css", "./css/main/main.min.css"],
                dest: "./css/main.min.concat.css"
            }
        },
        // watch
        watch: {
            files: [
                "./less/main.less",
                "./css/**/*.css",
                "./src/**/*.js"
            ],
            tasks: ["clean", "less", "uglify", "cssmin", "concat"]
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify-es");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask("run-all-tasks", ["watch"]);
};
