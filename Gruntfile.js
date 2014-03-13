/**
 * the Gruntfile for lofty
 * @author Edgar
 * @date 140228
 * */

module.exports = function( grunt ){
    
    var compressTpl = '/*!!cmd:compress=true*/',
        compileTpl = '/*!!cmd:jsCompressOpt=["--disable-optimizations"]*/',
        timeTpl = grunt.template.today('yy/mm/dd') + ' ' + grunt.template.today('HH:MM:ss');
    
    var desktopScriptSource = [
        'vendor/fmdjs/fmd-debug.js',
        'vendor/fmdjs/fmd/plugin.js',
        'vendor/fmdjs/plugins/non-debug.js',
        'vendor/fmdjs/plugins/combo-debug.js',
        'src/wrap/intro.js',
        'src/host/appframe.js',
        'src/host/convert.js',
        'src/host/debug.js',
        'src/config/config-desktop.js',
        'src/config/alias-desktop.js',
        'src/hooks/jquery.js',
        'src/adapter/af.js',
        'src/hooks/test-env.js',
        'src/wrap/outro.js'
    ],
    mobileScriptSource = [
        'vendor/fmdjs/fmd-debug.js',
        'vendor/fmdjs/fmd/plugin.js',
        'vendor/fmdjs/plugins/non-debug.js',
        'vendor/fmdjs/plugins/combo-debug.js',
        'src/wrap/intro.js',
        'src/host/appframe.js',
        'src/host/client.js',
        'src/host/debug.js',
        'src/host/debug-mobile.js',
        'src/config/config-mobile.js',
        'src/config/alias-mobile.js',
        'src/hooks/af.js',
        'src/hooks/test-env.js',
        'src/wrap/outro.js'
    ],
    desktopStyleSource = [
        'src/cssreset/reset-desktop.css',
        'src/csstype/type-desktop.css',
        'src/csslayout/layout-desktop.css',
        'src/host/alicn-desktop.css'
    ],
    desktopStyleFloatSource = desktopStyleSource.concat(['src/cssgrid/grid-float.css']),
    desktopStyleFlyingSource = desktopStyleSource.concat(['src/cssgrid/grid-flying.css']),
    desktopStyleOpSource = desktopStyleSource.concat(['src/cssgrid/grid-op.css']),
    mobileStyleSource = [
        'src/cssreset/reset-mobile.css',
        'src/csstype/type-mobile.css',
        'src/csslayout/layout-mobile.css'
    ];
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['src/*/*.js','!src/wrap/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        //clean: {
        //    clear: ['dist']
        //},
        concat: {
            desktop_js: {
                options: {
                    separator: '\n\n',
                    banner: compressTpl + '\n' + compileTpl + '\n/*! lofty.js build ' + timeTpl + ' */\n'
                },
                files: [{
                    src: desktopScriptSource,
                    dest: 'dist/desktop/lofty.js'
                }]
            },
            desktop_css: {
                options: {
                    separator: '\n\n',
                    banner: compressTpl + '\n/*! lofty.css build ' + timeTpl + ' */\n'
                },
                files: [{
                    src: desktopStyleSource,
                    dest: 'dist/desktop/lofty.css'
                },{
                    src: desktopStyleFloatSource,
                    dest: 'dist/desktop/float.css'
                },{
                    src: desktopStyleFlyingSource,
                    dest: 'dist/desktop/flying.css'
                },{
                    src: desktopStyleOpSource,
                    dest: 'dist/desktop/op.css'
                }]
            },
            mobile_js: {
                options: {
                    separator: '\n\n',
                    banner: '/*! lofty.js build ' + timeTpl + ' */\n'
                },
                files: [{
                    src: mobileScriptSource,
                    dest: 'dist/mobile/lofty.js'
                }]
            },
            mobile_css: {
                options: {
                    separator: '\n\n',
                    banner: '/*! lofty.css build ' + timeTpl + ' */\n'
                },
                files: [{
                    src: mobileStyleSource,
                    dest: 'dist/mobile/lofty.css'
                }]
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('desktop-js', ['jshint','concat:desktop_js']);
    grunt.registerTask('desktop-css', ['concat:desktop_css']);
    grunt.registerTask('mobile-js', ['jshint','concat:mobile_js']);
    grunt.registerTask('mobile-css', ['concat:mobile_css']);
    grunt.registerTask('all', ['jshint','concat']);
    
    grunt.registerTask('default', 'lofty build defalut task.', function(){
        grunt.log.writeln('Please select a task:');
        grunt.log.writeln('>> desktop-js');
        grunt.log.writeln('>> desktop-css');
        grunt.log.writeln('>> mobile-js');
        grunt.log.writeln('>> mobile-css');
        grunt.log.writeln('>> all');
    });

};
