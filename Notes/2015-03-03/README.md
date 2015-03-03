Lecture Notes: Building a Better Tomorrow

* [ ] **Progress Review**
  * merging and rebasing
  * code review
* [ ] **Tools on Tuesday**
  * [ ] **A Better Branching Model**
    * [What is `git-flow`...?](http://nvie.com/posts/a-successful-git-branching-model/)
    * `brew install git-flow-avh` (not `git-flow`, it's old)
    * `git flow`
  * [ ] **A Better Generator**
    * `npm install -g generator-gulp-webapp`
    * `yo gulp-angular` and just look around
    * Ruh-roh, Raggy...
    * `git checkout . && git clean`
    * We like to `git mv` it...
      * `src` to `app`
      * `src/js` to `app/scripts`
      * `src/scss` to `app/styles`
    * `yo gulp-angular` now... What? Conflicts?
    * `git difftool` to the rescue!
    * Now what can we do?
      * `gulp --tasks`... so. many. things.
      * Maybe just `gulp`...?
      * [`jshint`](http://jshint.com/)
      * [`"use strict";`](http://j.mp/1EcAwni)
    * Time to commit...
  * [ ] **Global Thermonuclear War**
    * `npm install -g generator-angular`
    * `yo angular:controller`

#### Workflow Models

* [_Why `git` is better than X: Any Workflow_ by Scott Chacon](http://thkoch2001.github.io/whygitisbetter/#any-workflow)
* [_Comparing Workflows_ by Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows)
* [_Understanding the `git` Workflow_ by Ben Sandofsky](https://sandofsky.com/blog/git-workflow.html)
* [_Branching Workflows_](http://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows) and [Distributed Workflows](http://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows) on [git-scm.com](http://git-scm.com)
* Also, Google: "git workflow"
