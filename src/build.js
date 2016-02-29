({
    appDir: './',
    baseUrl: 'js',
    dir: '../dest',
    paths: {
        jquery: 'empty:',
        wx: 'empty:'
    },
    optimizeCss: 'none',
    modules: [
        {
            name: "main"
        }
    ]
})
//node r.js -o build.js
