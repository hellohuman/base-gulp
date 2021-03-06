var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();


// Create a task wrapper for tasks in separate files
function getTask(task) { return require('./gulp-tasks/' + task)(gulp, plugins, config); }

var devRoot = "./",
		distRoot = "../build";


var config = {
	siteURL: "localhost",
	paths: {
		dev:   {
			js:     	 [devRoot + 'assets/js/vendor/**/*.js', devRoot + 'assets/js/site/app.js'],
			sass:   		devRoot + 'assets/sass',
			css:    		devRoot + 'assets/css',
			img: 				devRoot + 'assets/img',
			fonts:  	 [devRoot + 'assets/font/src/**/*.otf', devRoot + 'assets/font/src/**/*.ttf'],
			iconFont: 	devRoot + 'assets/font/icons/**/*.svg',
			iconCss: 		devRoot + "assets/font/sass",
			fontTmpl: 	devRoot + 'assets/font/template',
			templates: 	'../craft/templates' // If using a craft CMS
		},
		dist: {
			assets: 		distRoot + '/assets/',
			js:     		distRoot + '/assets/js',
			css:    		distRoot + '/assets/css',
			img: 				distRoot + '/assets/img',
			fonts:  		distRoot + '/assets/font',
			iconFont: 	distRoot + '/assets/font/icons/',
			fontDemo:   distRoot + '/demo'
		}
	}
};

gulp.task('clean', getTask("clean"));
gulp.task('scripts', getTask('scripts'));

// STYLING
gulp.task('sass', getTask('sass'));
gulp.task('sassbeautify', getTask('sassbeautify'));

gulp.task('images', getTask('images'));

// FONTS

// For the fonts build to work you will need certain packages:
// - If you have homebrew run: brew install fontforge ttfautohint ttf2eot batik
gulp.task('font', getTask('font'));
gulp.task('iconfont', getTask('iconfont'));

// Build the css for the demo html file, used for the icon list
gulp.task('icondemocss', getTask('icondemocss'));
gulp.task('iconbuild', ["iconfont", "icondemocss"]);

// BROWSER SYNC
gulp.task('browsersync', getTask('browsersync'));

gulp.task('default', ['scripts', 'sass', 'images', 'font', 'iconbuild', 'browsersync'], function () {
	gulp.watch(config.paths.dev.js, ['scripts']);
	gulp.watch(config.paths.dev.sass, ['sass']);
	gulp.watch(config.paths.dev.img, ['images']);
	gulp.watch(config.paths.dev.font, ['font']);
	gulp.watch(config.paths.dev.iconFont, ['iconbuild']);
});
