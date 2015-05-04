import gulp from 'gulp';
import * as config from './config';
import * as gb from 'greasebox';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('build', ['build:js', 'build:copy'], () => {});


gulp.task('build:js', ['clean:build'], (cb) => {
  gulp.src(`${config.paths.source}/**/*.js`)
    .pipe(plumber({
      errorHandler: cb
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      optional: ['runtime']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.build))
    .on('end', cb);
});

gulp.task('build:copy', ['clean:build'], (cb) => {
  gulp.src([`${config.paths.source}/**/*`, `!${config.paths.source}/**/*.js`, `!${config.paths.source}/index.html`])
    .pipe(gulp.dest(config.paths.build))
    .on('end', cb);
});

