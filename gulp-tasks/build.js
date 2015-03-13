import gulp from 'gulp';
import * as config from './config';
import * as gb from 'greasebox';
import plumber from 'gulp-plumber';

gulp.task('build', ['build:js', 'build:copy'], () => {});


gulp.task('build:js', ['clean:build'], (cb) => {
  gulp.src(`${config.paths.source}/**/*.js`)
    .pipe(plumber({
      errorHandler: cb
    }))
    .pipe(gb.loadMap())
    .pipe(gb.babelTransform({
      optional: ['runtime']
    }))
    .pipe(gb.writeMap())
    .pipe(gulp.dest(config.paths.build))
    .on('end', cb);
});

gulp.task('build:copy', ['clean:build'], (cb) => {
  gulp.src([`${config.paths.source}/**/*`, `!${config.paths.source}/**/*.js`, `!${config.paths.source}/index.html`])
    .pipe(gulp.dest(config.paths.build));
});

