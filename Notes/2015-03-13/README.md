## What is a User? What is a Role? What are Permissions?

A User is...?

* Anyone who can do anything with my application is a User.
* Anyone?
  * John? Yes.
  * Maddie? Yes.
  * Google? Huh? Robots are Users, too...
* So, uh... Who or what is NOT a User?
* What can Users do within our application?

### Authorization and Authentication is hard. (sic)

#### Authentication: Who are you?

* Can you pass a test to confirm your identity? (username and password)
* Can your identity be verified by a 3rd-party that I trust? (OAuth, OpenID, SASL/SAML)

#### Authorization: What can you do?

* What features or functionality of my application are you _allowed_ to perform?
* What data in my application are you allowed to _view_ (read)?
* What data are you allowed to modify (edit/update)?
* What data are you allowed to create?

## What kind of Users does our application have?

### Guest Users are people, too...

#### A Guest can _view a list_ of upcoming Itineraries, so that I can find a Flight to buy.

* Guests don't need to login to view upcoming Itineraries
* An Itinerary is a pair of Flights from a Departure to a Destination and back
* . . .

#### A Guest can login with a 3rd-Party Service to become a Member, so that she can buy and view bought Itineraries.

* Just login with Google first, then maybe add Facebook, Twitter, etc.

#### A Member can pay for an Itinerary, so that she can book that Flight.

* A Member has a list of paid Itineraries... Need another story!

#### A Member can upgrade to a Premium Member, so that she can remove all the ads. All the very many ads.

* How do we take money from a Member? One-time fee or subscription? Term on subscriptions? Monthly? Yearly?
* Once a Member is upgraded, how do we know?

#### A Premium Member can browse Itineraries without ads, so that they are not annoyed.

* How does a Member become a Premium Member? Gimme money!

### Couple questions:

* What defines a "Guest" User? Anyone who is not yet Authenticated (logged in)
* What defines a "Member" User? Someone who has successfully authenticated!
* What defines a "Premium Member" User?
  * Need to be authenticated!
  * Some property of their User record?
  * A Permission assigned to them?

## How do I model those Users?

```javascript
var firebase = new Firebase('https://<MY-FIREBASE>.firebaseio.com'),
    users = firebase.child('users');

firebase.onAuth(function(auth){
  if ( !auth ) return; // Don't do anything for unauthenticated users...

  // Here's the good stuff...
  /**
   * Guaranteed unique to Firebase.
   */
  assert.isDefined(auth.uid);

  // Since we logged in with Google...
  assert.equals(auth.provider, 'google');

  // We get a `google` dictionary...
  assert.isDefined(auth.google);

  /**
   * The ID for the User from Google, e.g.
   *   "al.the.x@gmail.com" >> 104887579295513380672
   * see https://plus.google.com/104887579295513380672
   */
  assert.isDefined(auth.google.id);

  /**
   * How the user prefers to be addressed per Google
   * @see https://www.firebase.com/docs/web/guide/login/google.html
   */
  assert.isDefined(auth.google.displayName);

  /**
   * An OAuth 2.0 token for utilizing the Google APIs on
   * behalf of the user. Scope may be limited.
   */
  assert.isDefined(auth.google.accessToken);

  users.child(auth.uid).update({
    displayName: auth.google.displayName,
    isPremium: false
  });
});
```

### What data do I need about a User?

### What meta-data do I have about a User?

### Where do I store that?

## What can a User do? How do I determine that?


```javascript
var firebase = {
  // These are the defaults...
  "permissions" : {
    "canDoAnything" : false,
    "canViewAds" : true
  },
  // These are the defined roles...
  "roles" : {
    "Guest" : {
      "canCheckout" : false,
      "canDoAnything" : false,
      "canViewAds" : true
    },
    "Member" : {
      "canCheckout" : true
    },
    "Premium" : {
      "canViewAds" : false
    }
  },
  "userRoles" : {
    "uid:1234567890" : "Member",
    "uid:2345678901" : "Premium"
  },
  "users" : {
    "uid:1234567890" : {
      "displayName" : "David Rogers",
      "google" : "104887579295513380672"
    },
    "uid:2345678901" : {
      "displayName" : "Jared Stevick",
      "google" : "104887579295513380672"
    }
  }
  "owners": {
    "UID": {
      // data specific to owners... like which pets are mine
    }
  },
  "sitters": {
    "UID": {
      // data specific to sitters... like which clients I have
    }
    // repeat for each "sitter"...
  }
}
```
