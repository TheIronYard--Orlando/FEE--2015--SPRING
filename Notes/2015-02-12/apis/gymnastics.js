#!/usr/bin/env node

// assert(jQuery);

var BASE_PATH = './github/repos/TheIronYard--Orlando/FEE--2015--SPRING/';

// var milestone = require(BASE_PATH + 'milestones/1.json');

// var issues = require(BASE_PATH + 'issues?milestone=2&state=all.json');

jQuery.when(
  jQuery.getJSON(BASE_PATH + 'milestones/1.json'),
  jQuery.getJSON(BASE_PATH + 'issues?milestone=2&state=all.json')
).done(function(milestone, issues){

  assert(issues);

  assert(milestone);

  issues.forEach(function(issue){
    debugger;
  });

});
