# 18 -- Hello, jQuery!

## Description

Man, [that new jQuery tool](http://jquery.com) looks all shiny and new. Let's get a handle on it before we start building [that big TodoMVC project](http://todomvc.com) in groups.

### Go ahead and try it out...

On [the jQuery site](http://jquery.com), there a link to [Try jQuery](http://try.jquery.com), a Code School joint. Give that a run-through, but don't get stuck on anything. Just buy the answer and move forward. Use this course, like all the Code School courses, as a drill to practice on throughout the week.

### Read the Documentation

Since I know you're _not_ going to [read the documentation](http://stackoverflow.com/questions/10925478/how-to-read-api-documentation-for-newbs) unless you need it to build something, come up with your own strategy. This week we'll be covering these (and more):

* Using [`jQuery(document).ready()`](http://api.jquery.com/ready/) and `jQuery(function(){ })`
* [Selectors](http://api.jquery.com/category/selectors/)
* [Events](http://api.jquery.com/category/events/)
  * [`.on(function(event){ })`](http://api.jquery.com/on/)
  * [`.click(function(event){ })`](http://api.jquery.com/click/)
  * [`event.preventDefault()`](http://api.jquery.com/event.preventDefault/)
* [CSS](http://api.jquery.com/category/css/)
  * [`.addClass()`](http://api.jquery.com/addClass/)
  * [`.removeClass()`](http://api.jquery.com/removeClass/)
  * [`.toggleClass()`](http://api.jquery.com/toggleClass/)

### Clean up your campsite...

Since you have some idea how the basic DOM API works, try refactoring them (and any other loose, er... pieces) before tackling the big assignment. You could try using jQuery in place of the DOM API or just look for ways to reduce repetition in your JavaScript code.

### What's in a Form?

To learn a _lot_ about HTML `<form>` elements and the tags inside of them, build this [Responsive Multi-Column Form](http://tympanus.net/Blueprints/ResponsiveMultiColumnForm/). Totally use the Bootstrap CSS grid to get the responsiveness right (mobile-first!), but pay careful attention to the validation rules on those elements. Use the right `type` of `<input>` and see what happens!

#### Requirements:

* The fields "First Name", "Last Name", and "Email Address" should be _required_.
* Feel free to rename fields like "Occupation" and "Talent" or add additional options to those drop-downs.

**Work _individually_; due on _Wednesday_!**

#### BEAST MODE

The "SEND YOUR DATA" button should submit the form data to [the Github API](http://developer.github.com/v3) as a comment on your _WIP Issue_.

### Getting Things Done

One of the best ways to Get Things Done starts with writing everything down... Even the things you're _not_ going to do. It's Super-Effective! Now, if only I had an web app to help me... Wait, you know how to make Internets! You can build me one!

#### [Introducing TodoMVC](http://todomvc.com)

[The TodoMVC project](http://github.com/tastejs/todomvc) provides a series of [reference implementations](http://en.wikipedia.org/wiki/Reference_implementation) for various JavaScript tools, libraries and frameworks, which provides a standard comparison platform for their use, benefits, and pitfalls.

Starting by [reading the specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md) and download [the template](https://github.com/tastejs/todomvc-app-template/). You should have a _new_ repo called `TIY-TodoMVC` for this project. Issue 1 in that repo should be a break-down of the features in the spec, estimates for those features, and some task breakdown for the features, e.g. "checkpoints". Link your _WIP Issue_ to that issue.

**Work in (different) groups of 3 or 4; due by _Thursday_!**

#### BEAST MODE

Try implementing the [Persistence](https://github.com/tastejs/todomvc/blob/master/app-spec.md#persistence) feature. If you're feeling _really_ brave, you can take a shot at [Routing](https://github.com/tastejs/todomvc/blob/master/app-spec.md#routing) using [Flatiron Director](https://github.com/flatiron/director).

## Requirements

* _WIP Issue:_ `18 -- Hello jQuery`
* _WIP Branch:_
  * `TIY-Assignments:feature/18--hello-jquery`
  * `TIY-TodoMVC:master`
* **What's in a Form?**
  * start with H5BP
  * overwrite `pub/`
* **Getting Things Done**
  * _new_ repo: `TIY-TodoMVC`
  * work in groups of 3 or 4
  * start with [the TodoMVC template](https://github.com/tastejs/todomvc-app-template/)
  * record features and plan of attack in `TIY-TodoMVC#1`
  * create `feature/` branches and merge via PRs
  * split work among pairs, integrate often
  * _everyone_ must contribute _consistently_

## Additional Resources

* **[Code School](http://codeschoole.com)**
  * [Blasting Off with Bootstrap](https://www.codeschool.com/courses/blasting-off-with-bootstrap)
  * [Try jQuery](https://www.codeschool.com/courses/try-jquery)
  * [jQuery: The Return Flight](https://www.codeschool.com/courses/jquery-the-return-flight)
* **[jQuery](http://jquery.com)**
  * More lightweight alternatives:
    * [Zepto JS](http://zeptojs.com/)
    * [Minified JS](http://minifiedjs.com/)
    * [Are there others?](http://bit.ly/1uUhds0)
* **[TodoMVC](http://todomvc.com)**
  * [app specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md)
  * [project template](https://github.com/tastejs/todomvc-app-template)
  * [implementation in "vanilla" JS](http://todomvc.com/examples/vanillajs/)
  * [implementation in jQuery](http://todomvc.com/examples/jquery/#/all)
