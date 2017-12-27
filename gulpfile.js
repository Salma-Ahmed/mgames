var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    ngmin = require('gulp-ngmin'),
    imagemin = require('gulp-imagemin'),
    browserify = require('browserify'),
    cleanCSS = require('gulp-clean-css');
   

gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('log', function () {
    gutil.log('Ops , an error')
});
//copy index.html to assets folder
gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

//compiles sass files in one css file
gulp.task('sass', function () {
    gulp.src('styles/*.scss')
        .pipe(sass({
            style: 'expanded'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('styles'))
        .pipe(connect.reload())
});

//concatenate all js files into one file 
gulp.task('js', function () {
    gulp.src('scripts/*.js')
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('assets'))
        .pipe(connect.reload())
});

// minify and compress images
gulp.task('compress', () =>
    gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/images'))
);

gulp.task('watch', function () {
    gulp.watch('scripts/*.js', ['js']);
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('images/*', ['compress']);
    gulp.watch('index.html', ['html']);
    gulp.watch('index.html', ['copy']);
    gulp.watch('styles/*.css', ['minify-css']);
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload())
});
  
gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    })
});   

gulp.task('default', ['copy' ,'js', 'minify-css','compress', 'sass','html', 'watch' , 'connect']);
