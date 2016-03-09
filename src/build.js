{
    baseUrl: 'js',
    dir: '../build/js',
    optimize: 'uglify',
    mainConfigFile: 'js/require.config.js',
    // removeCombined: true,//删除合并了的文件
    // fileExclusionRegExp: /^(r|build|lib\/)\.js$/,
    paths: {
        'jquery': 'empty:',
        'wx': 'empty:',
        'cookie': 'empty:',
        'md5': 'plugins/md5/jquery.md5',
        'validate': 'empty:',
        'header': 'units/header',
        'vdate': 'units/vdate',
        'getUser': 'units/getUser',
        'singLogin': 'units/singLogin',
    },
    modules: [
        {
            name: 'account/login'
        },
        {
            name: 'account/register'
        },
        // {
        //     name: 'test'
        // },
        {
            name: 'test/test'
        }
        // , 
    ]
}