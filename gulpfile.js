const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
  -- TOP LEVEL FUNCTION --
  gulp.task - Define tasks
  gulp.src - Points to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function() {
  return console.log('Gulp is running...');
})

// Copy All HTML files
gulp.task('copyHTML', function() {
  gulp.src('*.html')
      .pipe(gulp.dest('dist'));
})

// Optimize Images
gulp.task('imageMin', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

// Minify JS
gulp.task('minify', function() {
  gulp.src('*.js')
      .pipe(uglify().on('error', function(e) {
        console.log(e);
      }))
      .pipe(gulp.dest('dist/js'));
})

//Compile Sass
gulp.task('sass', function(){
  gulp.src('sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css')); 
})

// Scripts
gulp.task('scripts', function(){
  gulp.src('js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
})

gulp.task('default', ['message', 'copyHTML', 'imageMin', 'scripts']);

gulp.task('watch', function(){
  
})