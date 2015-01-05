# 01 -- Get your own MF'g Website...

## Description

Your first task is to start a little essay project. Watch the videos on [Khan Academy's "You Can Learn Anything" page](https://www.khanacademy.org/youcanlearnanything), [Carol Dweck's "The Power of Yet" TED talk](https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve), and follow up with [this brief video on Growth Mindsets](http://ed.ted.com/on/UA77FlTc). Find some additional resources on the internet about Dr Carol Dweck (there are plenty). Explain the key differences between the _Growth Mindset_ and the _Fixed Mindset_ with some simple bullet points; start documenting some ways you can relate.

After that, you'll need to practice some `git` commands. Head over to [Try Git](http://try.github.com), a CodeSchool production, and learn you somethin'. Do yourself a favor: _treat this course as a practice drill_. Don't think of it as a video game that you have to beat (and then never look at again). Instead, try to get through the whole tutorial in one sitting; even take the answer if you get stuck! Write down what you don't get yet and try it again later. Ask questions. Break stuff. Repeat.

Next, use [the HTML documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) to document 10 _block-level_ HTML tags, their attributes, and some example usage. The ones we've already covered -- headings and paragraphs -- don't count. Use the format provided below under "Requirements".

### Now that you know HTML... :astonished:

Use what you've learned to build your own MF'g website. Don't go cray-cray, just use the typographic elements you've just researched _as appropriate_ to duplicate the content on [The Iron Yard -- About](http://theironyard.com/about) and [The Iron Yard -- Culture](http://theironyard.com/about/culture) pages.

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Understand the "Growth Mindset" and the "Fixed Mindset" concepts.
* Understand the bare minimum necessary to build an HTML document.
* Understand the basics and benefits of `git`, Github, and Source Control.
* Be familiar with several different HTML tags, their appropriate usage and "default formatting".
* Be familiar with basic Markdown syntax: bullets, paragraphs and headings.

### Performance Objectives

After completing this assignment, you be able to effectively use...

* Github to:
    * create a branch   
    * create and edit files and folders (directories)
    * open a Pull Request (PR) from a branch
    * create and link Issues to PRs
* `git` to:
    * create a named branch and view all branches
    * check the status and changes to "local" files
    * add and commit changes to the "local" index
    * push "local" changes to a Github "remote"
* Markdown and HTML to present structured content.

## Deliverables

* [A _WIP Issue_ in the class repo](https://github.com/TheIronYard--Orlando/FEE--2015--SPRING/issues) titled `01 -- MF'g Website -- YOUR NAME` with:
    * checkboxes as below under _Requirements_
    * estimates for the top-level checkboxes
* A page in the wiki for _your_ `TIY-Assignments` repo named _Growth and Fixed Mindsets_ that contains:
    * bullet points describing key attributes of the Growth Mindset and the Fixed Mindset
    * three or more bullets about your experience and how you can relate to both mindsets
* A branch in _your_ `TIY-Assignments` repo named `feature/01--mfg-website` that contains:
    * a series of commits no more than 1 hour apart (use good "why" messages!)
    * A folder called `docs/` that contains:
        * `HTML.md` -- a Markdown file with your HTML examples
    * A folder called `pub/` that contains:
        * `about.html` -- your MF'g version of the "About" page
        * `culture.html` -- your MF'g version of the "Culture" page
* A Pull Request (PR) in _your_ `TIY-Assignments` repo:
    * _from_ branch `feature/01--mfg-website` (head)
    * _into_ branch `master` (base)
    * description that links to your _WIP Issue_ in the class repo using _Github Flavored Markdown_
    * two :thumbsup: comments from peers who have reviewed your work
* Comments on your _WIP Issue_ for the following:
    * a link to your wiki page (absolute URL)
    * a link to your PR using _Github Flavored Markdown_

## Requirements

### Tasks

* [X] Create a new Issue with these tasks!
* [ ] Estimate all the tasks with _T-shirt sizes_: _S_, _M_, _L_, _XL_
* [ ] **[Try Git](http://try.github.com)** -- Rinse, Lather, Repeat...
* [ ] **The Growth and Fixed Mindsets** -- Research and Essay _notes_...
    * [ ] Watch the _Growth and Fixed Mindset_ videos:
        * [_You Can Learn Anything_ by Khan Academy](https://www.khanacademy.org/youcanlearnanything) (4 videos total)
        * [_The Power of Yet_ by Carol Dweck at TED](https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve),
        * [_Growth Mindsets and Motivation_ by ed-TED](http://ed.ted.com/on/UA77FlTc)
    * [ ] Create a new page in your `TIY-Assignments` wiki called _Growth and Fixed Mindset_
    * [ ] Write down _at least 3_ key attributes of each mindset using Markdown bullets
* [ ] **Yak Shaving** -- The invisible tasks...
    * [ ] Use the Github web interface to create a branch called `feature/01--mfg-website`
    * [ ] In Github, open a PR _from_ `feature/01--mfg-website` _into_ `master`
* [ ] **Reading HTML** -- Document 10 _block-level_ HTML elements and **commit after each!**
    * [ ] Checkpoint: Created and committed `docs/HTML.md`!
    * [ ] Checkpoint: First tag documented!
    * [ ] Checkpoint: 5 tags documented!
    * [ ] Misson Complete: All 10 tags!
* [ ] **Your MF'g Website** -- [About](http://theironyard.com/about) and [Culture](http://theironyard.com/about/culture) with **no copy-pasta!**
    * [ ] Checkpoint: Created and committed `pub/about.html`!
    * [ ] Checkpoint: Created and committed `pub/culture.html`!
    * [ ] Checkpoint: Pushed `pub/about.html` and `pub/culture.html`!
    * [ ] Checkpoint: Finished and committed `pub/about.html`!
    * [ ] Checkpoint: Finished and committed `pub/culture.html`!
    * [ ] Mission Complete: Finished, committed and pushed!

### Format for _Reading HTML_

Use the following format for your own "Reading HTML" file: `docs/HTML.md`. Please take careful note of the lack of line breaks after the _example_ bullet, if you want your formatting to look like mine. Anything unexpected in the way Github renders your Markdown file? Add it to your _WIP Issue_ as a comment so we can discuss it in class.

----
### 1. `<h1>` -- Page Heading, Level 1

* *type:* block-level
* *content:* phrasing content[1]
* *support:* all browsers
* *example:*
```
<h1>The Iron Yard | Orlando</h1>
```
<h1>The Iron Yard | Orlando</h1>


### 2. `<h2>` -- Page Heading, Level 2

* *type:* block-level
* *content:* phrasing content[1]
* *support:* all browsers
* *example:*
```
<h2>Search</h2>
```
<h2>Search</h2>

### 3. `<p>` -- Paragraph

* *type:* block-level
* *content:* phrasing content[1]
* *support:* all browsers
* *example:*
```
<p> The quick brown fox jumped over the lazy dog. </p>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit enim id massa auctor, in rhoncus tellus tincidunt. Praesent non convallis ligula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ante nulla, auctor eget accumsan a, malesuada ac elit. </p>
<p> Lines
don't
matter. </p>
```
<p> The quick brown fox jumped over the lazy dog. </p>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit enim id massa auctor, in rhoncus tellus tincidunt. Praesent non convallis ligula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ante nulla, auctor eget accumsan a, malesuada ac elit. </p>
<p> Lines
don't
matter. </p>

### Footnotes:

1. [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)

----

## Additional Resources

* [Learn to :heart: `git`](http://j.mp/1GX4FFD)
* [Learn to :heart: HTML](http://j.mp/1rRr6dK)
* [Learn to :heart: Markdown](http://j.mp/1rRsxZu)
* [Notes for 2015-01-05](../Notes/2015-01-05.md)
