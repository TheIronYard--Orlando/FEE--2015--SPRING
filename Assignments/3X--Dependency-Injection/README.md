# 3X -- How About a Nice Dependency Injection?

## Description

[The `$http` service]() works more or less like `jQuery.ajax`. Give it a bunch of options, and it hands back a "then-able" Promise; use `$http.get` et al for convenient shortcuts. In order to use it in your Controller, we tell Angular to _inject_ it with those funky array annotations.

[Restangular](https://github.com/mgonto/restangular/) is a much more friendly interface that wraps `$http`. Using some recipes from the documentation, [we can configure it](http://j.mp/1Bac2un) with [`Module.config()`](http://j.mp/1BacBVg) and and use [`Module.factory()`](http://j.mp/1BabJ2N) to create [Service instances](http://j.mp/1BacoBb) that represent our Models from the API.

Use your new powers to fetch the data from your cached API and populate out the pages with _real(ish) data_. This might take a while...

### Shaping Up with Angular JS

Work on the next two levels and keep your code in `TIY-Assignments` as before.

## Requirements

* _WIP Issue:_ `3X -- Dependency Injection`
  * link to any PRs that you open in `TIY-Catalog`
  * link to your PR in `TIY-Assignments`
* _WIP Branch:_
  * `TIY-Assignments:feature/3x--dependency-injection`
  * `TIY-Catalog:feature/angular/all-the-data`

