var browserSync = require('browser-sync');

module.exports = function (gulp, plugins, config) {
	return function () {
    browserSync([config.paths.dist.css + "/**/*.css", config.paths.dev.js + "/**/*.js", config.paths.dev.templates + "/**/*.html"], {
      // host: "localhost",
      // open: "local",
			open: false,
      proxy: {
        target: config.siteURL,
        middeware: function (req, res, next) {
          next();
        }
      }
    });
  }
};
