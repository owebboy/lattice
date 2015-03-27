var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('prefix', function() {
	return gulp.src('./lattice.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('.'));
});

gulp.task('minify-css', function() {
	return gulp.src('./lattice.css')
		.pipe(minifyCSS({ keepBreaks:false }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('.'))
});

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(webserver({ directoryListing: true, open: true }));
});

gulp.task('default', ['webserver'], function() {
	gulp.watch('lattice.css', ['prefix', 'minify-css']);
});