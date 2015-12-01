const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('clean', next => {
  return del('dist', next);
});

gulp.task('babel', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', build);
});

// copy non-js files to dist
gulp.task('copy', () => {
  return gulp.src('src/**/!(*.js)')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', next => {
  return runSequence('clean', ['babel', 'copy'], next);
});
