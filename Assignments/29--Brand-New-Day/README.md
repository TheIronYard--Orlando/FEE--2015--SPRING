# 29 -- A Brand New Day

## Description

Today we embark on a shining new endeavor: over the next two weeks, we will rebuild [Etsy.com](http://etsy.com) using [the Etsy API](http://etsy.com/developers) and [some UI widgets](#building-the-ui) into a fully responsive, mobile-first Product Catalog. With the help of the Rails class, we might even be able to buy products!

Both classes will be working out of the _same_ repository -- [`TIY-Catalog`](https://github.com/TheIronYard--Orlando/TIY-Catalog) -- via Pull Requests. See the `README.md` files and take a look around. You'll all be working in _One Big Team_ for this project, and there's a _lot_ of work to do, so our success will hinge on our ability to split it up and pitch in together.

I'll help you build the more difficult parts. You've gotta supply a lot of the grunt work. Let's get to it.

### Step 00 -- Planning!

To get started, we need to write some User Stories that describe the functionality we're trying to build. These are fairly standard to online merchandizing and e-commerce, so we'll go over your work as a group.

Work as a group to whiteboard the stories, then transcribe them into Markdown, following the format provided. There'a branch in `TIY-Catalog` called `feature/00--getting-started` that contains the some instructions and a place for those User Stories to land. Fork the repo, add commits to that branch, and open a PR.

### Step 01a -- API Gymnastics

To have a Product Catalog, we need Products! Fortunately the Etsy API is full of them... although they're called "Listings" in their data model. Read through the API documentation and identify some data that we'll need to fetch to make our application.

In order to fetch the data, you'll need an API key for the application, which you can get for free by registering for a developer account. Create JSON files in `angular/apis/etsy/` that correspond to the endpoints we'll need. Create `README.md` files inside the directories to explain the API data and the steps to fetch it to future you (and everyone else).

_Not everyone needs to work on the API Gymnastics piece,_ but everyone does need to understand it. Elect some pairs that rotate frequently and document what they're doing.

### Step 01b -- UI Widgets a la Codrops

Based on our quick exploration of the Esty website, we know it's adaptive and very picture-oriented. That's not always ideal for an e-commerce site, so let's present some more view options to the users. Additionally, we'll _intentionally_ limit our data set to no more than 4 categories or taxonomy terms, which we'll choose as a group. We can always add more later.

It would be great if we had [a nice drop-down menu that showcased some key products](http://tympanus.net/Blueprints/HorizontalSlideOutMenu/) as primary navigation. Instead of the simple grid of pictures, [a responsive grid of products with appropriate options](http://tympanus.net/Blueprints/ProductGridLayout/) would be better, and since [list-oriented UIs may outperform grid-oriented UIs](http://j.mp/1B78hWI), we should include [a way for users to switch between grid and list view](http://tympanus.net/Blueprints/ViewModeSwitch/).

Let's not avoid [this Sass Monster](https://github.com/sass/node-sass) any longer and jump right in. Using [Bootstrap's official Sass port](https://github.com/twbs/bootstrap-sass) may also help with this assignment.

As with the **API Gymnastics** piece, _not everyone is required to work on every part of this assignment,_ but everyone should understand it and embrace the opportunity to learn. Break up the work and distribute it into pairs that rotate often, merge their work with PRs and document as they go.

**NOTE:** All three pieces are due on Wednesday

### Shaping Up with Angular JS

Spend time this evening with _Shaping Up_, working through levels 1 & 2 on your own. Try to complete the challenges without the answers, but don't let yourself get stuck. Track the code that you write as a part of those challenges in your `TIY-Assignment` repo in the `pub/` folder.

**NOTE:** _This is an individual assignment!_

## Requirements

* _WIP Issue:_ `29 -- Brand New Day`
  * link to planning issues in `TIY-Catalog`
  * link to any PRs you open in `TIY-Catalog`
  * link to your PR in `TIY-Assignments`
* _WIP Branch:_
  * `TIY-Catalog:feature/00--getting-started`
  * `TIY-Assignments:feature/29--brand-new-day`
* _WIP Files:_
  * `TIY-Catalog`
    * `angular/README.md` -- User Stories
    * `angular/apis/etsy/`
      * `gymnastics.js`
      * `**/README.md` -- Documentation
      * `**/*.json` -- Saved JSON data
    * `angular/src/`
      * `menu.html`
      * `products.html`
      * `product.html`
      * `scss/`
        * **delete** `main.scss`
        * `menu.scss`
        * `products.scss`
        * `product.scss`
      * `css/` -- ignored
  * `TIY-Assignments:pub/` -- from Shaping Up

## Additional Notes

* [`TIY-Catalog`](https://github.com/TheIronYard--Orlando/TIY-Catalog)
  * [Issues](https://github.com/TheIronYard--Orlando/TIY-Catalog/issues)
  * [Pull Requests](https://github.com/TheIronYard--Orlando/TIY-Catalog/pulls)

