# 03 -- Be fluid, like water...

![Like him...](http://i.giphy.com/3rHZo3Dv8F2CI.gif)

## Description

Now that you've taken a swing at [The Longform Tumblr theme](https://www.pixelunion.net/themes/tumblr/longform/), and we've built some of it together, it's time to do it all over again... from scratch.

First off, time to get some more of that essay written! [Rough Drafts](http://www.studygs.net/writing/roughdrafts.htm) are a "late stage of the writing process" that follows some level of [Prewriting Exercises](http://www.studygs.net/writing/prewriting.htm) like outlining, [mind mapping](http://www.mindmapping.com/), and brainstorming. If you feel you need some more prep work before you write a draft, take the time to put in that work first. You'll write a better essay and be happier with your draft.

Second, you've probably noticed that our HTML tags seem to be getting more complicated now that we're adding CSS to the mix. The HTML _attributes_ `class` and `id` are common to _all_ HTML tags... are there others? Go back to your `docs/HTML.md` file and document the _all_ the appropriate attributes for each tag in your library using the format provded in **Requirements**. Group the common -- or _global_ -- attributes into their own section.

If there were any pieces of HTML or CSS that you copied down today, spend some additional time researching and documenting them in your `docs/HTML.md` and `docs/CSS.md` files. Remember, these are for your own reference and self-education; reiterating information helps to synthesize it into knowledge.

#### The Iron Blog, Take 2 :clapper:

Now that you have a little direction, some experimental hacking, and some synthesized knowledge under your belt, take another swing that that theme. Start from scratch, really and truly: delete your code and start over. You'll thank me for it one day... probably some time in July.

Just for fun, I've included some emoji for each of the checkpoints this time around. **Start your commit messages with the emoji for each checkpoint as you complete them.** You know, for fun. Share in the HipChat room, too!

## Objectives

### Learning Objectives

After completing this assignment, you should understand...

* How the CSS box model works to provide visual layout of HTML
* Differences between CSS units of measure
* How percentage-based CSS values work
* Many HTML attributes and their usage and meaning
* Semantic markup techniques and their importance
* Breaking down a design into smaller pieces (80%)
* Marking up design documents to aid in development
* Keeping design assets in source control

### Performance Objectives

After completing this assignment, you should be comfortable using...

* [Skitch](http://evernote.com/skitch/) to:
    * create simple design references (screenshots)
    * markup design documents to aid in development
    * export marked up documents for inclusion in source control
* [Cloud 9 IDE](http://c9.io) to:
    * create and edit files and folders
    * upload assets for inclusion in the project
    * add commit history and push to Github
    * preview work in progress
    * review work with peers
* [HTML and CSS](http://learn.shayhowe.com/html-css/) to:
    * convey document meaning through semantic usage
    * produce fluid layout matching a design specification
* `git` branches to isolate changes
* Github PRs to perform code reviews
* Github wikis to author documentation

## Deliverables

* A new _WIP Issue_ in the class repository titled `03 -- Be Like Water -- YOUR NAME` with:
    * checkboxes for the *Tasks* under *Requirements*
    * estimates for the top-level tasks
* A [Rough Draft](http://www.studygs.net/writing/roughdrafts.htm) for your _Growth and Fixed Mindset_ essay in your wiki page
* A branch in your `TIY-Assignments` repository _based on `master`_ called `feature/03--like-water` with:
    * documentation of the HTML attributes for the tags you've already documented added to `docs/HTML.md` per the format provided in **Requirements**
    * marked up design specifications (screenshots) in `specs/`
    * at least one commit clearing or deleting your `pub/index.html` file
    * multiple commits adding HTML and CSS into `pub/index.html` to provide a liquid-style layout that:
        * remains consistent at all screen sizes
        * becomes fixed-width at an appropriate "large" size
        * remains proportional while resized down
        * becomes fixed-width at an appropriate "small" size
* A Pull Request (PR) _from_ your feature branch _into_ `master` with:
    * a link back to your _WIP Issue_
    * 2x :thumbsup: from peers
    * **Don't check off on _any_ PR until you _see_ the code rendered and confirm it meets the requirements!**
* Comments on your _WIP Issue_ with:
    * a link to your wiki page
    * a link to your PR

## Requirements

### Tasks

* **Yak Shaving**
    * [X] Open a new Issue in the class repo and...
    * [X] Add these checkboxes to your Issue.
    * [ ] [Login to Cloud 9](http://c9.io/login) and open your `TIY-Assignments` Workspace
    * [ ] Create and switch to a new branch named `feature/03--like-water` from `master`. _Ensure you have `master` checked out and up-to-date before you start!_
    * [ ] Add a commit that clears or deletes your `pub/index.html` file
    * [ ] Push your work into Github
    * [ ] _Immediately_ open a PR _from_ `feature/03--like-water` _into_ `master`
* **Rough Draft** of your _Growth and Fixed Mindset_ essay on your wiki page.
* **Reading HTML + Attributes!**
    * [ ] Checkpoint: First attribute documented and committed!
    * [ ] Checkpoint: Global attributes documented and committed!
    * [ ] Checkpoint: First HTML tag _fully_ documented and committed!
    * [ ] Checkpoint: 5 HTML tags _fully_ documented and committed!
    * [ ] Checkpoint: 10 HTML tags _fully_ documented and committed!
    * [ ] Checkpoint: First push with attributes!
    * [ ] Checkpoint: Halfway to finish and pushed!
    * [ ] Mission Complete: All tags documented, committed, and pushed!
* **Skitch This Website** -- Because you can...
    * [ ] Use `brew cask` to find and install [Skitch](http://evernote.com/skitch) (resort to the big "Download" button on the homepage if you experience problems, like I did)
    * [ ] Using Skitch Capture several screenshots of [The Iron Yard -- Orlando](http://orlando.theironyard.com) site that demonstrate key pieces of the design
    * [ ] Export them and upload to Cloud 9 in a new folder called `specs/`
    * [ ] Add and commit them into your project history
    * [ ] Mark up the screenshots to denote:
        * the tag names and bounding boxes of semantic block-level elements
        * essential CSS properties and values like `margin` and `padding` or `font-family`
        * image URLs or special character codes necessary for typographic elements
        * anything else that will help you execute the design!
    * [ ] Export the marked-up images and upload to Cloud 9, overwriting the originals in `specs/`
    * [ ] Add and commit the updated images
    * Repeat as necessary for additional design direction.
* **The Iron Blog** -- Be like water, my friend... or :beer:
    * [ ] Checkpoint: Clean slate! :zero:
    * [ ] Checkpoint: Yay Boilerplate! :one:
    * [ ] Checkpoint: Basic page structure (HTML only)! :two:
    * [ ] Checkpoint: First line of CSS committed and pushed! :star:
    * [ ] Checkpoint: Placeholders anyone? :baby_bottle:
    * [ ] Checkpoint: Who's got a header image and logo? :raised_hand:
    * [ ] Checkpoint: How many columns you got? :dancers:
    * [ ] Checkpoint: Where's that footer? :point_down:
    * [ ] Checkpoint: Matching fonts. :muscle:
    * [ ] Checkpoint: Check out those round logos... :sunglasses:
    * [ ] Checkpoint: Much fluid. So amaze. :ocean:
    * [ ] Checkpoint: Icons are totally dessert. :ice_cream:
    * [ ] Mission Complete: :triumph:

### Format for _Reading HTML + Attributes_

----

### Common Attributes

#### `class` -- element class names

* *values:* space-separated list of class names
* *support:* all browsers
* *examples:*
```html
<aside class="page--column">
  <!-- . . . -->
</aside> <!-- .page--column -->
<section class="page--column">
  <!-- . . . -->
</section> <!-- .page--column -->
```

### `id` -- unique element identifier

* *values:* single letter character followed by any number of letters, digits, hyphens, underscores, colons or periods
* *support:* all browsers
* *examples:*
```html
<form class="search" id="site-search">
  <!-- . . . -->
</form> <!-- .search#site-search -->
```

### `<form>` -- interactive controls

* *type:* block-level
* *content:* flow content but not `<form>`
* *support:* all browsers
* *examples:* ...

#### `action` -- form submission URL

* *values:* URL of a program that processes a form submission
* *support:* all browsers
* *examples:*
```html
<form action="http://lmgtfy.com/">
  <input name="q">
</form>
```

----

## Additional Resources

* [Notes for today](../Notes/2015-01-07/)
* [Study Guides and Strategies -- Writing](http://www.studygs.net/writing/)
    * [Prewriting Exercises](http://www.studygs.net/writing/prewriting.htm)
    * [Rough Drafts](http://www.studygs.net/writing/roughdrafts.htm)
* [HTML Attribute reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
* [The Iron Yard -- Orlando](http://orlando.theironyard.com)
* [The Longform Tumblr theme](https://www.pixelunion.net/themes/tumblr/longform)
* [_Fixed vs Fluid vs Elastic Layout_ on Smashing Magazine](http://www.smashingmagazine.com/2009/06/02/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/) (from **2009**)
* [_Applying Divine Propotions to Your Web Designs_ on Smashing Magazine](http://www.smashingmagazine.com/2008/05/29/applying-divine-proportion-to-web-design/) (from **2008**)
* [_Global Market Share Stats_](http://w3counter.com)
* [_Create Fluid Layouts with HTML5 and CSS3_ on CreativeBloq.com](http://www.creativebloq.com/css3/create-fluid-layouts-html5-and-css3-3142768) (from **2014**)
