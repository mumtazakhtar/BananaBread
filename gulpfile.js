var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'Assets'
    },
  })
})

gulp.task('sass', function(){
  return gulp.src('Assets/scss/style.scss')

  .pipe(sass()) //converts sass to css
  .pipe(sass({outputStyle: 'compressed'})) //minifies the css file
  .pipe(gulp.dest('Assets/css'))
  .pipe(browserSync.reload({
      stream: true
    }))

});

gulp.task('watch',['browserSync','sass'],function(){
	gulp.watch('Assets/scss/style.scss', ['sass']);
	gulp.watch('Assets/index.html', browserSync.reload); 
    gulp.watch('Assets/js/**/*.js', browserSync.reload);
})
