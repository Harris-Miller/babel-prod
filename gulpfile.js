const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const runSequence = require('run-sequence');
const eslint = require('gulp-eslint');

gulp.task('clean', next => {
  return del('dist', next);
});

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js', 'gulpfile.js', '/bin/*.*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('babel', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

// copy non-js files to dist
gulp.task('copy', () => {
  return gulp.src('src/**/!(*.js)')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', next => {
  return runSequence('clean', 'lint', ['babel', 'copy'], next);
});

gulp.task('watch', () => {
  return gulp.watch('src/**/*.js', ['build']);
});