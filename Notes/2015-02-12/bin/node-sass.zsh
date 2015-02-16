#!/usr/bin/env zsh

node-sass scss/main.scss -o css/ \
  --include-path bower_components/bootstrap-sass/assets/stylesheets \
  $@

