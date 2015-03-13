import gulp from 'gulp';
import * as config from './config';
import * as gb from 'greasebox';
import path from 'path';


gulp.task('clean', ['clean:build', 'clean:www'], () => {});


gulp.task('clean:build', (cb) => {
  gb.rm(path.resolve(__dirname, `../${config.paths.build}`))
    .then(cb)
    .catch(cb);
});

gulp.task('clean:www', (cb) => {
  gb.rm(path.resolve(__dirname, `../${config.paths.www}`))
    .then(cb)
    .catch(cb);
});
