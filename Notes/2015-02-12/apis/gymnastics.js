#!/usr/bin/env node

var BASE_PATH = './github/repos/TheIronYard--Orlando/FEE--2015--SPRING/';

var milestone = require(BASE_PATH + 'milestones/1.json');

var issues = require(BASE_PATH + 'issues?milestone=2&state=all.json');

issues.forEach(function(issue){
  debugger;
});
