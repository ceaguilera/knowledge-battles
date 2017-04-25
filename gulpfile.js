'use strict';

var wiredep     = require('wiredep').stream;
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');

/* Bower_components files are copied to the assets folder on web */
gulp.task('assets-copy',  () => {
    gulp.src('bower_components/**/**')
    .pipe(gulp.dest('public/assets'));
});

/* All scss files in the app folder are compiled */
gulp.task('sass', () => {
    gulp.src('./public/**/*/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/'))
})

/* All dependencies are inserted in the index */
gulp.task('wiredep', () => {
    gulp.src('./public/app/index.html')
    .pipe(wiredep({
        directory: './public/assets',
        onError: function(err){
            console.log(err.code);
        }
    }))
    .pipe(gulp.dest('./public/app/'))
})

/* Automatic compiled sass */
gulp.task('watch', () => {
    gulp.watch('./public/**/*.scss', ['sass']);
})

gulp.task('default', ['assets-copy','sass',  'wiredep']);
