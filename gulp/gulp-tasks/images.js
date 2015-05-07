module.exports = function (gulp, plugins, config) {
	return function () {
		gulp.src(config.paths.dist.img + "/**/*")
			.pipe(plugins.imagemin({}))
			.pipe(gulp.dest(config.paths.dist.img))
	};
};
