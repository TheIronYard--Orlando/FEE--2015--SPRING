# 02 -- Learning Layout...

## Description

In this assignment, you'll start to experiment with CSS-powered layouts. Using some simple techniques, you'll replicate the general look of [The Iron Yard -- Orlando blog](http://orlando.theironyard.com).

First, spend some time on your _Growth and Fixed Mindset_ essay. Your essay should either tell a story or explain a position in three parts, each one paragraph. Start by writing a draft outline of what you want to convey in your wiki page. It should have 5 sections: an Introduction, 3 points, and a Conclusion.

Next, read [Learn Layout](http://learnlayout.com) and take note of all the CSS properties presented. If you feel shaky about your HTML and CSS knowledge, use some of the **Additional Resources** cited below to get up to speed. Then take your list of CSS properties to [the CSS Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) and start documenting them with the format provided in **Requirements**. While you're in a documenting mood, you should add _10 more HTML tags_ to your list while you're at it.

Finally, you'll take a crack at a little layout of your own by replicating [the Longform Tumblr theme](https://www.pixelunion.net/themes/tumblr/longform/) used by [the TIY Orlando blog](http://orlando.theironyard.com)... and pretty much every other campus, too. It's a TIY tradition! Don't get too bogged down in perfection; we'll work on it more tomorrow.

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Understand the basics of:
    * conveying semantic meaning and document structure through appropriate HTML tags
    * creating columnar layouts with embedded CSS rules
* Be familiar with the process of:
    * working, reviewing, and commiting "locally"
    * pushing to a "remote" and eliciting peer review

### Performance Objectives

After completing this assignment, you should be able to effectively use...

* [Cloud 9 IDE](http://c9.io) to:
    * clone a repository from Github
    * create and edit files and folders "locally"
    * view a live preview of HTML files
    * execute `git` commands
    * collaborate with others
* HTML and CSS to:
    * convey document structure
    * render dual-column layouts
* `git` and Github to:
    * record incremental progress
    * review proposed source code changes
    * publish textual documentation to a wiki

### Deliverables

* A new _WIP Issue_ in the class repository titled `02 -- Learning Layout -- YOUR NAME` with:
    * checkboxes for the **Tasks** outlined under **Requirements**
    * estimates for the top-level checkboxes
* A draft outline of a 3-point essay in your _Growth and Fixed Mindset_ wiki page.
* A branch in your `TIY-Assignments` repository _besed on `master`_ called `feature/02--learning-layout` with:
    * 10 additional HTML tags in `docs/HTML.md`
    * A new file in `docs/` called `CSS.md` documenting the _un-prefixed_ CSS properties presented in "Learn Layout" in the format provided under **Requirements**
    * A new file in `pub/` called `index.html` that contains:
        * HTML and CSS to replicate [The Longform Tumblr theme](https://www.pixelunion.net/themes/tumblr/longform/) in use by [The Iron Yard -- Orlando blog](http://orlando.theironyard.com)
        * placeholder text and images of your choosing
        * minimally: page header and footer, logo, and both columns
* A Pull Request (PR) in your `TIY-Assignments` repo:
    * _from_ branch `feature/02--learning-layout` (head)
    * _into_ branch `master` (base)
    * with a description that links to your _WIP Issue_ in the class repo
    * and 2 :thumbsup: comments from peers who have reviewed your work
* Comments on your _WIP Issue_ with:
    * a link to your wiki page
    * a link to your PR

### Requirements

#### Tasks

* [ ] **Yak Shaving** -- There's always one more...
    * [X] Create a new _WIP Issue_ in the class repo titled `02 -- Learning Layout -- YOUR NAME`
    * [ ] Add these checkboxes as the description!
    * [ ] Add T-shirt estimates to the _top-level_ tasks!
    * [ ] [Login to Cloud 9 IDE](http://c9.io/login) using your Github account
    * [ ] Clone your `TIY-Assignments` repository into a new Workspace and open it
    * [ ] Using the Terminal, create a new branch from `master` called `feature/02--learning-layout` and switch to it (hint: `checkout`)
    * [ ] Create a new file in `docs/` called `CSS.md` and commit it.
    * [ ] Create a new file in `pub/` called `index.html` and commit it.
    * [ ] Push your branch into the `origin` remote
    * [ ] _Immediately_ open a Pull Request (PR) _from_ `feature/02--learning-layout` _into_ `master`
* [ ] **Draft Outline** -- 4 main sections
    * [ ] Introduction
    * [ ] 3 main points
    * [ ] Conclusion
    * [ ] Add link to _WIP Issue_!
* [ ] **Read [Learn Layout](http://learnlayout.com)**
* [ ] **Reading CSS** -- Document the CSS properties presented in "Learn Layout"
    * [ ] Checkpoint: First CSS property committed and pushed!
    * [ ] Checkpoint: 5 CSS properties committed and pushed!
    * [ ] Checkpoint: 10 CSS properties committed and pushed!
    * [ ] Mission Complete: You know layout!
* [ ] **Reading HTML** -- Part deaux: _10 more tags!_
    * [ ] Checkpoint: Here's number 11!
    * [ ] Checkpoint: 15 done, committed, and pushed!
    * [ ] Mission Complete: 10 + 10 is 20 HTML tags! Ha ha ha ha!
* [ ] **The Iron Blog** -- It doesn't have to be complicated...
    * [ ] Page header with placeholder image, logo
    * [ ] Page footer with logo and links
    * [ ] Side column with headings and links
    * [ ] Main column:
        * [ ] 3 articles with headings and placeholder text
        * [ ] 3 placeholder images
        * **bonus** -- article footer + icons!

#### Format for _Reading CSS_

Use the following format for your own "Reading CSS" file: `docs/CSS.md`. Please note the many values for each property and be sure to denote the default value. Also be sure to include `inherit` as a value and whether the property is inherited by default. What does that mean, anyway?

----

### 1. `display`

* *elements:* all
* *inherited:* no

#### Values

* `inline` (default) -- render as inline element
* `inline-block` -- render as inline element with `width`, `height`, `margin` and `padding`
* ...

### 2. `visibility`

* *elements:* all
* *inherited:* yes

#### Values

* `visible` (default) -- render the element normally
* `hidden` -- the box is not displayed but still affects layout
* `collapse` -- ...
    * *compatibility notes*: ...
* `inherit` -- ...

----

### Additional Resources

* [Notes for 2015-01-06](../Notes/2015-01-06.md)
* [_About HTML5_ on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [_CSS Reference_ on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [_Semantic HTML_ on Wikipedia](http://en.wikipedia.org/wiki/Semantic_HTML) (M)
* [_Learn to Code HTML & CSS_ by Shay Howe](http://learn.shayhowe.com/html-css/) (M)
* [_Dive into HTML5_ by Mark Pilgrim et al](http://diveintohtml5.info/) (XL)
* [_CSS Layout Techniques_ on Treehouse](http://teamtreehouse.com/library/css-layout-techniques)
* [_Front-End Foundations_ on CodeSchool](https://www.codeschool.com/courses/front-end-foundations)
