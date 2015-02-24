# 30 -- Angularize me, Cap'n!

## Description

With a solid plan, we can track progress on [Building ALL THE THINGS!](http://cdn.meme.am/instances/500x/59531853.jpg) We need Issues assigned to Milestones that give us _Progress Bars_... No, **EPIC PROGRESS BARS!!**

We should also be running into some lame-and-repeatable development tasks that we can document and automate with our new friend [Gulp JS](http://gulpjs.com). Things like running `node-sass` when a file changes or firing up `browser-sync` to serve the project locally should really be documented somewhere.

We should write some `gulp` tasks to make that happen! Plan, estimate, divide and conquer!

### Shaping Up with Angular JS

Keep on shaping up! Focus on levels 2 & 3 tonight and keep transcribing your code changes into `TIY-Assignments:pub/` as before.

## Requirements

* _WIP Issue:_ `30 -- Angularize Me`
  * link to any PRs you open in `TIY-Catalog`
  * link to your PR in `TIY-Assignments`
* _WIP Branch:_
  * `TIY-Catalog:feature/gulp-dev-tasks`
  * `TIY-Assignments:feature/30--angularize-me`
* _Deliverables:_
  * `TIY-Catalog:angular/`
    * `README.md` -- new User Stories
    * `bower.json` -- adding Angular JS, Gulp JS
    * `gulpfile.js` -- adding `gulp` tasks
      * `gulp sass` -- build `src/scss/*.scss` to `src/css/*.css` via `node-sass`
      * `gulp sass:watch` -- run `gulp sass` on file change
      * `gulp serve:dev` -- serve `angular/src/` via `browser-sync`
      * `gulp serve:dev:watch` -- serve and watch
    * `apis/etsy/` -- new API data / docs / ops
    * `src/` -- progress on UI widgets
      * `menu.html`
      * `products.html`
      * `product.html`
      * `scss/`
        * `menu.scss`
        * `products.scss`
        * `product.scss`
  * `TIY-Assignments:pub/`

## Additional Resources

* [Gulp JS](http://gulpjs.com)
  * [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
  * [API Documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
  * [`gulp-util`](https://github.com/gulpjs/gulp-util) is a handy tool...
  * check out [recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) and [plugins](http://gulpjs.com/plugins)
  * autoload `gulp-` plugins with [`gulp-load-plugins'](https://github.com/jackfranklin/gulp-load-plugins)
  * **BONUS:** CDNify Bower deps with [`gulp-google-cdn'](https://github.com/sindresorhus/gulp-google-cdn)

