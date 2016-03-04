{
    baseUrl: 'js',
    dir: '../dest/js',
    optimize: 'uglify',
    mainConfigFile: 'js/require.config.js',
    removeCombined: true,
    modules: [
        {
            name: 'test'
        },
        {
            name: 'account/register'
        }
    ]
}