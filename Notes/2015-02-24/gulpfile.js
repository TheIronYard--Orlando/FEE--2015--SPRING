var gulp = require('gulp');

gulp.task('hello', function(){
  // Code goes here...
  console.log('Hello, Gulp!');
});

gulp.task('hello:watch', function(){
  gulp.watch('index.html', [ 'hello' ]);
});
