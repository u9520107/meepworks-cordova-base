import gulp from 'gulp';

export const paths = {
  build: 'build',
  www: 'www',
  source: 'source'
};




gulp.task('config', () => {
  console.log(JSON.stringify({
    paths
  }, null, 2));
});
