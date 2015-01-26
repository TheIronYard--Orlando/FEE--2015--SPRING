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

* **Reference**
    * [CSS Media Queries on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)
    * [CSS `@media` rule on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
    * [Media Queries on Wikipedia](http://en.wikipedia.org/wiki/Media_queries)
    * [Responsive Web Design on Wikipedia](http://en.wikipedia.org/wiki/Responsive_web_design)
* **Articles**
    * [_Responsive Web Design_ on _A List Apart_](http://alistapart.com/article/responsive-web-design) by [Ethan Marcote](http://ethanmarcotte.com/)
    * By [Nick Petit](http://nickpettit.com/) of [Team Treehouse](http://teamtreehouse.com):
        * [_Beginner's Guide to Responsive Web Design_](http://blog.teamtreehouse.com/beginners-guide-to-responsive-web-design) (circa 2012)
        * [_2014 Guide to Responsive Web Design_](http://blog.teamtreehouse.com/modern-field-guide-responsive-web-design)
    * [_Responsive Web Design: What It Is and How to Use It_ on _Smashing Magazine_](http://www.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/)
    * By [Luke Wroblowski](http://www.lukew.com/about):
        * [_Mobile First_](http://www.lukew.com/ff/entry.asp?933) (see references)
        * [_Multi-Device Layout Patterns_](http://www.lukew.com/ff/entry.asp?1514)
    * [_Future-Friendly Thinking](http://futurefriendlyweb.com/thinking.html)
* **VISUALS:**
    * Same HTML, different layouts: [CSS Zen Garden](http://csszengarden.com)
    * Examples of sites using [MediaQueri.es](http://mediaqueri.es/)
    * [9 Basic Principles of Responsive Design](http://blog.froont.com/9-basic-principles-of-responsive-web-design/)
