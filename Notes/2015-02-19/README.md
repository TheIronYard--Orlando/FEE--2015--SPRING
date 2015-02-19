Assignment 28: Getting Things Saved

* [ ] **Homework Presentation**
* [ ] [**Retrospective**](../wiki/Retrospective--Mashup)
* [ ] [**Web Storage API**](http://j.mp/1MwcxDB)
  * `window.localStorage` vs `window.sessionStorage`
  * Saving those tasks locally...
  * relational or document?
* [ ] **Welcome to Firebase Alpha**
  * Look, multiplayer tetris!
  * Handoff to watch the realtime updates...
  * Authentication for free!
  * Shaving the Yak
    * `bower install --save firebase`
    * `wiredep -s index.html`
    * `new Firebase('your-instance-here')`
* [ ] **Getting Things Saved**
  * Save new Tasks to Firebase with `update()`
  * Read tasks from Firebase with `val()`
  * Stay in sync with `on()`

### User Stories

* [ ] **I can create a new Task so that I can remind myself later. (3)**
  * type into input field and press enter
  * adds task to bottom of list
  * save it somewhere?
* [X] **I can see all the Tasks on the list so that I am reminded to work on something. (2)**
  * display task as `<li>` (per example)
  * display task text inside the `<label>`
  * add `class="completed"` to tasks that are marked as "completed"
  * fetch task list from somewhere?
* [ ] **I can filter the list of Tasks by "completed" or "active" so I can see what to work on next. (4)**
  * provide permalink to filtered list?
* [ ] **I can see the number of "active" vs "completed" Tasks on the list so that I know how much progress I have made. (4)**
  * count for "completed" tasks
  * count for _all_ tasks for comparison?
* [X] **I can edit a Task so that I can correct mistakes or add details. (3)**
  * double-click on an item to enable editing
  * set `class="editing"` on the parent `<li>` to reveal `<input>`
  * keep `<input>` value and `<label>` contents in sync
  * save edit somewhere?
* [X] **I can mark an incomplete Task as "completed" so that I know what I have accomplished. (3)**
  * click on the checkbox
  * add `class="completed"` to `<li>`
  * save it somewhere?
* [X] **I can remove a Task from the list so that I won't be reminded any more. (3)**
  * click on the `X` icon
  * what, no confirm?
  * save the deletion somewhere?
* [ ] **I can remove _all_ "completed" Tasks from the list so that I can clean up. (3)**
  * unavailable unless there are "completed" tasks
  * deletes any tasks that are marked "completed"
  * what, no confirm?
  * save the deletions somewhere?

