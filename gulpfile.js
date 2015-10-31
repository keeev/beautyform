var gulp = require('gulp'),
sass = require('gulp-sass'),
livereload = require('gulp-livereload'),
webserver = require('gulp-webserver');


var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function () {
  gulp.src('./css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/style.css'));
  //.pipe(livereload());
});

gulp.task('sass:watch', function () {
  livereload.listen({ start: true });
  gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src( '.' )
  .pipe(webserver({
    host:             server.host,
    port:             server.port,
    livereload:       true,
    directoryListing: false
  }));
});
