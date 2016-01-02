var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');

gulp.task('clean', function(){
  return gulp.src(['dist/*'], { read:false} )
    .pipe(clean());
});

gulp.task('transpile', function(callback) {
  return gulp.src('src/process-form.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean', 'transpile']);
