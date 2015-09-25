
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel');

gulp.task('sass' , function(){
	gulp.src('./sass/**/*.scss')
	.pipe(sass().on('error' , sass.logError ))
	.pipe(gulp.dest('./css'));
});

gulp.task('babel' , function(){
	gulp.src('./src/**/*.js')
	.pipe(babel())
	.pipe(gulp.dest('./build'));
});


gulp.task('watch', function(){
	gulp.watch('./sass/**/*.scss' , ['sass']);
	gulp.watch('./src/**/*.js' , ['babel']);
});

gulp.task('default' , ['sass', 'babel', 'watch']);