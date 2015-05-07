module.exports = function (gulp, plugin, config) {
	return function () {

    gulp.src(config.paths.dev.fontTmpl + "/app.scss")
      .pipe(plugin.notify({title:"SASS Icon started", message: "<%= file.relative %>", onLast: true}))
  		.pipe(plugin.sourcemaps.init())
  		.pipe(plugin.sass({errLogToConsole: true}))
  		.pipe(plugin.autoprefixer())
  		.pipe(plugin.minifyCss())
  		.pipe(plugin.sourcemaps.write())
      .pipe(plugin.concat("vodacons.css"))
  		.pipe(gulp.dest(config.paths.dist.fontDemo + "/css/"));
    }
};
