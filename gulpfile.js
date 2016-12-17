const gulp = require('gulp');
const jade = require('gulp-jade');

const jadePaths = [
  'src/app/datepicker/*.jade',
  'src/app/timepicker/*.jade',
  'src/app/login/*.jade',
  'src/app/navbar/*.jade',
  'src/app/meal/*.jade',
  'src/app/meal-list/*.jade'
];

gulp.task('watch-jade', () => {
  gulp.watch(jadePaths, ['compile-jade'])
});

gulp.task('compile-jade', () => {
  return gulp.src(jadePaths).pipe(jade())
    .pipe(gulp.dest('tmp/html'));
});
