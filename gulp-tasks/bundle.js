import gulp from 'gulp';
import * as config from './config';
import * as gb from 'greasebox';
import co from 'co';
import cp from 'child_process';


gulp.task('bundle', ['bundle:js', 'bundle:copy', 'bundle:index'], ()=>{});



gulp.task('bundle:js', ['build:js', 'clean:www'], (cb) => {
  cp.spawn('jspm', ['bundle-sfx', `${config.paths.build}/app/app`, `${config.paths.www}/sfx.js`], {
    stdio: 'inherit'
  }).on('error', cb)
  .on('exit', () => {
    cb();
  });
});


gulp.task('bundle:copy', ['build:copy', 'clean:www'], (cb) => {
  gulp.src([ `${config.paths.build}/**/*` , `!${config.paths.build}/**/*.js`, `!${config.paths.build}/**/*.js.map`])
  .pipe(gulp.dest(config.paths.www))
  .on('end', cb);
});

gulp.task('bundle:index', ['clean:www'], (cb) => {
  gulp.src(`${config.paths.source}/index.html`)
  .pipe(gulp.dest(config.paths.www))
  .on('end', cb);
});

