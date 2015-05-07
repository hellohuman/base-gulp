module.exports = function (gulp, plugins, config) {
	return function () {
		gulp.src(config.paths.dev.sass)
			.pipe(plugins.sassbeautify())
			.pipe(gulp.dest('assets/sass'));
	};
};
