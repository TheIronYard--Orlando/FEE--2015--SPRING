Assignment 3X: How about a nice Dependency Injection?

* [ ] **Progress Review**
* [ ] **Three Little Things**
* [ ] **Getting Data and Dependency Injection**
  * angularjs -- Without using jQuery, how do I get data into my controller?
  * What are Services and how do I use them?
    * Dependency Injection (DI) in brief...
    * Requesting the `$http` service...
  * Using the `$http` service to get data:
  ```javascript
  angular.module('etsyCatalog', [ ])
    .controller('MainController', [ '$http', function($http){
      this.products = [ ];

      $http.get('/path/to/products.json').then(function(products){
        // now what?
      });
    } ])
  ; // END module(etsyCatalog)
  ```
  * Using `self` as an alias for `this`... ick.
  * A better approach with [`Restangular`](https://github.com/mgonto/restangular):
  ```javascript
  angular.module('etsyCatalog', [ 'restangular' ])
    .controller('MainController', [ 'Restangular', function(Restangular){
      Restangular.setBaseUrl('/path/to');

      this.products = Restangular.all('products').getList().$object;
      // `$object` is an empty `Array` that is filled with data on success
    } ])
  ; // END module(etsyCatalog)
  ```
* [ ] **Custom Services**
  * You can define your _own_ Services for injection!
  * Just use `angular.factory` (`angular.service` is confusing):
  ```javascript
  angular.module('etsyCatalog', [ 'restangular' ])
    .factory('Products', [ 'Restangular', function(Restangular){
      Restangular.setBaseUrl('/path/to'); // We might repeat this a little...

      return Restangular.service('products');
    } ])
    .controller('MainController', [ 'Products', function(Products){
      this.products = Products.getList().$object;
    } ])
  ; // END module(etsyCatalog)
  ```

