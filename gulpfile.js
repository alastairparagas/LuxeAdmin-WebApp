(function () {
	'use strict';
	
	var gulp = require('gulp'),
		sass = require('gulp-sass'),
		plumber = require('gulp-plumber'),
		sourcemaps = require('gulp-sourcemaps'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		watch = require('gulp-watch');
		
	function scssCompile() {
		var scssSettings = {
				outputStyle: 'compressed',
				errLogToConsole: true
			},
			plumberSettings = {
				errorHandler: function (error) {
					console.log("SASS Error: " + error);	
				}
			};
		
		return gulp.src('./styles/scss/main.scss')
			.pipe(plumber(plumberSettings))
			.pipe(sourcemaps.init())
			.pipe(sass(scssSettings))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./styles/dist'));
	}
	
	function jsMinify() {
		var plumberSettings = {
				errorHandler: function (error) {
					console.log("JS Error: " + error);	
				}
			};
		
		return gulp.src([
				'./app/**/.config.js',
				'./app/app.module.js',
				'./app/app.config.js',
				'./app/app.run.js',
				'./app/**/*.module.js',
				'./app/**/*.config.js',
				'./app/**/*.run.js',
				'./app/**/!(*module|*.config|*.run|.config).js'
			])
			.pipe(plumber(plumberSettings))
			.pipe(sourcemaps.init())
			.pipe(concat('app.js'))
			.pipe(uglify())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./scripts/dist'));
	}
	
	gulp.task('scssCompile', scssCompile);
	gulp.task('jsMinify', jsMinify);
	
	gulp.task('dev', function () {
		scssCompile();
		jsMinify();
		watch('./styles/scss/**/*.scss', scssCompile);
		watch('./app/**/*.js', jsMinify);
	});
	
	gulp.task('default', ['dev']);
	
}());