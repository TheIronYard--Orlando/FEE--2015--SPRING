Assignment 30: Angularize me, Cap'n!

* [ ] **Progress Review**
* [ ] **Three Little Things**
* [ ] **Tools on Tuesday**
  * [ ] [**Angular JS**](http://angularjs.org)
    * `bower install angular`
    * `wiredep -s index.html`
    * angularized chessboard (in `Notes/2015-02-24/`)
    * review [reference documentation](https://docs.angularjs.org/api)
  * [ ] [**Gulp JS**](http://gulpjs.com)
    * [ ] `npm install --global gulp`
    * [ ] `gulp` -> `Error: No local gulp found...`
    * [ ] `npm install --save-dev --link gulp`
    * [ ] `gulp` -> `Error: No gulpfile found...`
    * [ ] `atom gulpfile.js`
      ```javascript
      var gulp = require('gulp');

      gulp.task('hello', function(){
        console.log('Hello, Gulp!');
      });
      ```
    * [ ] Look what `gulp.watch()` can do:
      ```javascript
      gulp.task('hello:watch', function(){
        gulp.watch('gulpfile.js', [ 'hello' ]);
      });
      ```
