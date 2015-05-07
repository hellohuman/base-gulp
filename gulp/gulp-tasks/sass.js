module.exports = function (gulp, plugins, config) {
	return function () {
		gulp.src(config.paths.dev.sass)
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({errLogToConsole: true}))
			.pipe(plugins.autoprefixer())
			.pipe(plugins.minifyCss())
			.pipe(plugins.sourcemaps.write())
			.pipe(gulp.dest(config.paths.dist.css));
	};
};
