{
    baseUrl: 'js',
    dir: '../dest/js',
    optimize: 'uglify',
    // mainConfigFile: 'js/require.config.js',
    // removeCombined: true,//删除合并了的文件
    // fileExclusionRegExp: /^(r|build|lib\/)\.js$/,
    paths: {
        'jquery': 'empty:',
        'wx': 'empty:',
        'cookie': 'empty:',
        'validate': 'empty:',
        'header': 'units/header',
        'vdate': 'units/vdate'
    },
    modules: [
        {
            name: 'test'
        },
        {
            name: 'account/register'
        }
    ]
}