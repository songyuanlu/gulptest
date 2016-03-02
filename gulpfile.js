var version = '1.1.2'

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*','multi-sprite', 'amd-optimize']
});

var browserSync = require('browser-sync').create();

var root = {
	src: './src/',
	dest: './dest/'
};

/* @实时任务------------------------------------------------------------------------*/
/* @开启服务*/
gulp.task('connect', function() {
    $.connect.server({
        root: root.src,
        port: 3000,
        livereload: true
    });
});
/* @less编译

*/
gulp.task('less', function () {
    gulp.src([root.src+'less/*.less']) //多个文件以数组形式传入
        .pipe($.less())
        .pipe(gulp.dest(root.src+'css'))
        .pipe(browserSync.reload({stream: true})); //将会在src/css下生成index.css以及detail.css 
});
/* @js合并
    合并库、公共js为public.js
*/
gulp.task('jsConcat', function () {
    gulp.src([root.src+'js/public/**/*.js'])
        .pipe($.concat('public.js'))//合并后的文件名
        .pipe(gulp.dest(root.src+'js'))
        .pipe(browserSync.reload({stream: true}));;
});

/* @监听文件
    监听less、js执行less编译，js合并
*/
gulp.task('watch', function () {
    gulp.watch(root.src+'less/**/*.less', ['less']); //当所有less文件发生改变时，调用less任务
    gulp.watch(root.src+'js/public/**/*.js', ['jsConcat']); //当所有公共库js改变，调用jsConcat任务
});


/*目标任务------------------------------------------------------------------------*/

/* @拷贝文件到dest
    
*/
gulp.task('copy', function(){

    gulp.src([
            root.src+'images/**/*.{png,jpg,gif,ico}', 
            '!'+root.src+'images/sprites/**/*.{png,jpg,gif,ico}'
        ])
        .pipe($.rename(function (path) {
            console.log(path)
            path.dirname = "/images/"+path.dirname;
        }))
        .pipe(gulp.dest(root.dest));
});


/* @雪碧图 (css sprite)
    特点：
    1、配置少，但会重写原文件，生成后就可以直接使用 
    2、会根据切片所在的文件夹分别进行合并，并以文件夹的名字作为雪碧图的命名
*/
gulp.task('multiSprite',function(){
    $.multiSprite({
        srcImg: root.src + 'images/sprites',
        srcCss: root.src + 'css',
        destImg: root.dest + 'images/sprites',
        destCss: root.dest + 'css',
        padding: 2
    });
});

/* @压缩css
已在multiSprite中完成
*/
/*gulp.task('cssmin', function(){
    gulp.src(root.src+'css/*.css')
        .pipe($.minifyCss())
        .pipe(gulp.dest(root.dest+'css'))
})*/

/* @压缩js
*/
gulp.task('jsmin', function () {
    gulp.src([root.src+'js/public.js'])
        .pipe($.uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true//类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(gulp.dest(root.dest+'js'));

    gulp.src([root.src+'js/**/*.js', '!'+root.src+'js/public/*.js'])
        .pipe($.uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true//类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(gulp.dest(root.dest+'js'));
})

/* @压缩html
*/
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(root.src+'html/**/*.html')
        .pipe($.htmlmin(options))
        .pipe($.template({version: version}))
        .pipe($.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(root.dest+'html'));
});

/* @压缩图片
*/
gulp.task('imagemin', function () {
    gulp.src(root.dest+'images/**/*.{png,jpg,gif,ico}')
        .pipe($.imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest(root.dest+'images'));
});


/* 开启实时任务***************************************************************************/
gulp.task('server', ['watch'], function(){
    browserSync.init({
        server: root.src,
        port: 2222
    });
    //监听html修改
    gulp.watch(root.src+'html/**/*.html').on("change", browserSync.reload);
});

/* 输出目标任务***************************************************************************/
gulp.task('outputImg', ['multiSprite']);//输出拼接雪碧图

gulp.task('outputFiles', ['copy','outputImg','jsmin','htmlmin','imagemin']);//输出最终文件

gulp.task('default', function () {
    return gulp.src(root.src+'css/**/*.css')
        .pipe($.rev())
        .pipe(gulp.dest('dist'));
});

gulp.task('jsBuild', function () {
    gulp.src(root.src+'js/**/*.js')
    .pipe($.amdOptimize('test', {
        configFile: root.src+'js/require.config.js',
        exclude: ['jquery'],
        // findNestedDependencies: true,
        include: ['header']
    }))
    .pipe($.concat('test.min.js'))
    // .pipe($.uglify())
    .pipe(gulp.dest(root.src+'js/'));
});