# 20 -- Github Revolution

## Description

Data-driven HTML documents. Wicked. Let's see if we can apply those concepts to our _own_ document: that responsive Github Profile from last night.

### Insert Profile Data Here

Over the weekend, you'll use your jQuery Fu and some Ajax callls to populate your Github Profile page with data for _yourself_... or _any_ Github account for that matter!

Start by replacing the static text in your HTML file with some mustachioed placeholders for live data, like `{{login}}` or `{{followers}}`, just like we did in class. These will serve as reminders to you of what pieces of data to put where.

Use `curl` to fetch [basic profile data from the Github API](https://developer.github.com/v3/users/#get-a-single-user) for username `octocat` and store it in a file called `apis/github/users/octocat.json`. On your page, use `jQuery.get()` to fetch the data from that file and into a variable called `user`. You'll need to repeat that process to get data for the "Contributions" (`user.contribs`), "Repositories" (`user.repos`), and "Public Activity" (`user.activity`) tabs.

#### Now it's personal...

Since `octocat` doesn't have a lot of activity to show, you might want to use _yourself_ as an example. Go fetch _your_ data from the API, store it locally, and repeat.

#### BEAST MODE

Your page should obey a [query string parameter](http://en.wikipedia.org/wiki/Query_string) called `username` that, if present, will change the endpoint that the data is fetched from and populate the profile with data _from the live API_ for that username. For example, if I visit `/index.html?username=al-the-x`, it should show me a profile page for _me_ instead of _you_.

#### NIGHTMARE MODE

There are some interactive elements on the "Repositories" tab that appear to work in real-time: a search form and filters for "All", "Sources", "Forks" and "Mirrors". Implement those with _just_ JavaScript.

That nifty "Public Contributions" graph doesn't seem to have a convenient endpoint in the API, so they must be doing some API gymnastics to create it. Can't you do that?

### We Value Your Comments

Hey, look a comment form! We should leave a... Oh, wait. Gotta wire _that_ up, too. Your comment form should _not_ allow an empty comment, and it should _disable_ the big green "Comment" button while it's submitting. Comments added to your profile should be added to your _WIP Issue_ as... well, comments. Conversely, comments added to your _WIP Issue_ should _also_ appear on your profile page. :astonished:

Since Github sure as heck ain't gonna call _you_ up when a comment is added, maybe you could just ask the API for an update [every so often](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.setTimeout)?

#### BEAST MODE

Github comments are stored as Markdown and translated into HTML. Your comments should display the HTML, too. And I bet if you found out what client-side library is being used, you could get that "Preview" pane to work.

## Requirements

* _WIP Issue:_ `20 -- Github Revolution`
* _WIP Branch:_ `feature/20--github-revolution`
* **Insert Profile Data Here**
  * Use yesterday's HTML
  * Create `.json` files in `apis/github/users/`
  * Use `jQuery.get()` et al
  * Populate page with _your_ data
* **We Value Your Comments**
  * Load and store comments on your _WIP Issue_
  * Form should _not_ submit empty comments
  * Update comments without a page refresh

## Additional Resources

* [_Polling, Long Polling, Comet, Server-sent Events (SSE), and WebSockets_ by Nadir Muzaffar](http://nadirmuzaffar.blogspot.com/2013/03/polling-long-polling-comet-server-side.html)
* [_HTML5 WebSocket vs Long Polling vs AJAX vs WebRTC vs Server-Sent Events_ on Stack Overflow](http://stackoverflow.com/questions/10028770/html5-websocket-vs-long-polling-vs-ajax-vs-webrtc-vs-server-sent-events)
