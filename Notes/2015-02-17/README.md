Assignment 26: More Beautiful

* [ ] [**Retrospective**](../wiki/Retrospective--Midway)
  * What did we do well? What should we continue?
  * What should we improve? What should we stop?
  * Did we meet our goals and why?
* [ ] **Authentication vs Authorization**
  * Who are you? How do I know?
  * Are you allowed to perform an action?
  * What actions are you allowed to perform?
  * User / Action / Resource
* [ ] **Authentication**
  * Credentials: Username & Password
    * HTTP Basic / Digest
    * Form-based authentication
  * Credentials: Unsigned Token
    * via HTTP query string param
    * via HTTP header
    * via HTTP cookie value
      * `http-only`
  * Credentials: Signed with Pre-Shared Key (PSK)
    * signed via SSL/TLS
    * signed via OAuth 1.0A
* [ ] **Authorization**
  * Permissions: CRUD vs BREAD
  * Example: Unix read-write-execute
  * Example: Github Issues vs Commits
  * Permissions: Explicit vs Implicit
  * Permissions: Liberal vs Conservative
  * Permissions: Inheritance
* [ ] **Security Considerations**
  * [Same-Origin Security Policy](http://j.mp/1L4tbZr)
  * [Cross-Origin Resource Sharing](http://j.mp/1L4sYp6)
  * [JSONP (A Creative Hack)](http://j.mp/1L4txz5)
  * [Server-Side Proxy](http://j.mp/1L4w24n)
