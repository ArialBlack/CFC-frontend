module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ftp_push: {
            your_target: {
                options: {
		            authKey: "serverA",
    	            host: "andrey02.ftp.ukraine.com.ua",
    	            dest: "/",
    	            port: 21
                },
                files: [
                    {
                  expand: true,
                        cwd: 'cfc',
                        src: [
                        "*.*",
                        "css/**",
                        "fonts/**",
                            //    "images/**",
                        "images-source/**",
                        "js/**",
                            //"source/**",
                            "templates/**"
                        ],
                        dest: 'sites/all/themes/zen/cfc'
                    }
                ]
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            ftppush: {
                files: [
                    '**'
                ],
                tasks: ['ftp_push']
            },
        },

    });

    // load npm modules
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-push');

    // register tasks
    grunt.registerTask('default', ['ftp_push', 'watch']);
    grunt.registerTask('jenkins', ['ftp_push']);
};
