Assignment 3X: All Your Routes are Belong to Us

* [ ] **Progress Review**
  * Codrops prototypes
  * Build tasks
* [ ] **Three Little Things**
* [ ] **Routing Concepts**
  * [ ] What is a route? Why do I need one?
  * [ ] Reusable templates demo:
    * use `ng-include` to include `menu.html` and `products.html` in `index.html`
    * extract common boilerplate from `menu.html` and `products.html`
    * _add CSS links to `index.html`_
    * explain: selecting categories in `menu.html` includes _either_
      * `products.html` with a filtered list of `products`
      * `about.html`
    * wire navs in `menu.html` to change `page` property:
    ```html
    <!-- Somewhere in `menu.html`... -->
    <nav>
      <a href ng-click="app.page = 'products'; app.category = 'men'">Stuff for Men</a>
      <!-- More categories... -->
      <a href ng-click="app.page = 'about'">About</a>
    </nav>
    <!-- Additional markup, probably... -->
    <div class="container" ng-include="app.page + '.html'"></div>
    ```
  * [ ] How do I write a route instead?
    * Using `ngRouter`...
    * Don't add `controller` / `controllerAs` initially, just switch the template.
    * What can we do with a controller?
  * [ ] What about a route inside of a route?
    * use `ng-include` to include `product.html` _inside_ `products.html`
    * use `ng-switch` to _only_ display `product.html` in the "grid" view mode
    * refactor routes to [`ui-router`](https://github.com/angular-ui/ui-router) states:
      * `about` state
      * `products` state with `category` slug
      * nested `products.grid` and `products.list` states
  * These [Angular UI folks](https://github.com/angular-ui) are smart!
    * [Angular UI Bootstrap](https://github.com/angular-ui/bootstrap)
    * [`ng-grid`](https://github.com/angular-ui/ng-grid)
    * notable others...

