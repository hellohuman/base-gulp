module.exports = function (gulp, plugin, config) {
	return function () {

		gulp.src(config.paths.dev.iconFont)
			.pipe(plugin.iconfont({
				fontName: "icons",
				normalize: true,
				fontHeight: 1001
			}))
			.on("codepoints", function(codepoints){

				var options = {
					glyphs: codepoints,
					fontName: "icons",
					fontPath: '../font/icons/',
					className: 'icon'
				};

				// Build the font sass template
				gulp.src(config.paths.dev.iconCss + "/_icon.template.scss")
	        .pipe(plugin.consolidate('lodash', options))
					.pipe(plugin.rename("_icon.compiled.scss"))
	        .pipe(gulp.dest(config.paths.dev.sass));

				// Build the Font html template
	      gulp.src(config.paths.dev.fontTmpl + "/icon-demo.html")
	        .pipe(plugin.consolidate('lodash', options))
	        .pipe(gulp.dest(config.paths.dist.fontDemo));
			})
			.pipe(gulp.dest(config.paths.dist.iconFont))
			.pipe(gulp.dest(config.paths.dist.fontDemo + "/assets/font/icons/"));
		}
	};
