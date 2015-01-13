# 06 -- Now With 100% More Responsive!

## Description

Now you've built a liquid version of Surf & Paddle and taken a first stab at a liquid Vertical Timeline, but you know there's more... we've even built some of it together in class. Let's use what we've learned about Responsive Web Design (RWD) to build a mobile-friendly version!

From using the Mobile Inspector in Chrome Dev Tools to explore [the sample implementation](http://theironyard--orlando.github.io/FEE--2015--SPRING/), we can tell that there are 3 breakpoints: large, medium, and small. At the medium breakpoint, there are some slight font-size changes to accommodate the shrinking screen real estate. At the small breakpoint, however, the layout completely changes in an example of using different CSS on the same HTML to affect different layouts (see [CSS Zen Garden](http://csszengarden.com)). 

Your assignment is to implement those media queries and CSS overrides for the medium and small breakpoints. Start by dding design specs for them. Next, add media queries and CSS rules to duplicate that behavior. Remember if you change the HTML to accommodate the _small_ breakpoint, you might alter the layout of the other two by accident. Mind [the Rules of The Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade): order, specificity, and inheritance. 

## Deliverables

* A new _WIP Issue_ named `06 -- More Responsive -- YOUR NAME` with tasks and estimates
* A PR from branch `feature/06--more-responsive` into `master` with:
  * a link to your _WIP Issue_ as the description
  * multiple commits no more than 1 hour apart wih _good_ commit messages
  * additional annotated design specs documenting the _small_ and _medium_ breakpoints
  * CSS media queries and style rules added to `pub/css/main.css`
  * feedback from peers and 2x :+1:s
* Comments on your _WIP Issue_ with:
  * a link to your PR
  * a link to your `index.html`
  * a checklist of "Known Issues"

## Requirements

**Note:** You **MUST** have a link to your PR in your _WIP Issue_ in order to recieve credit for this assignment!

### Tasks

* [ ] **Yak Shaving**
  * Create a new _WIP Issue_ named `06 -- More Responsive -- YOUR NAME`with tasks and estimates
  * Ensure your _old_ feature branch is merged and in `master` on Cloud 9
  * Create a new branch on Cloud 9 called `feature/06--more-responsive`
  * Take screenshots of the _medium_ and _small_ breakpoints, add them to Cloud 9, and push them to Github
  * _Immediately_ open a PR!
* [ ] **Vertical Timeline -- Medium Size**
  * [ ] Checkpoint: Skitched it up!
  * [ ] Checkpoint: First medium-size media query!
  * [ ] Checkpoint: Well, I applied some styles...
  * [ ] Checkpoint: Nailed it.
* [ ] **Vertical Timeline -- Small Size**
  * [ ] Checkpoint: Skitched that bad mamma-jamma!
  * [ ] Checkpoint: First small-size media query!
  * [ ] Checkpoint: Yo, dawg, I heard you liked CSS...
  * [ ] Checkpoint: Mission complete! :checkered_flag:

## Additional Resources

* MDN CSS `@media` queries
* CSS Zen Garden
