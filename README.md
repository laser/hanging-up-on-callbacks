hanging-up-on-callbacks
=======================

Examples of ES6 generators:

1. Building an iterator
1. Passing data to a generator
1. Suspend/resume and control flow
1. Delegate generators
1. Fake synchronicity ("blocking sleep()")
1. Centralized exception handling

Punchline
---------

```javascript

sync(function* (resume) {
  console.log('foo');
  yield setTimeout(resume, 1000);
  console.log('baz');
});

console.log('blix');

// console: 'foo', 'blix', 'bax'

```

How to run the demo
-------------------

1. download and install [Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html)
1. clone the repo
1. gem install sinatra
1. ruby ./app.rb
1. http://localhost:4567
1. click through the examples

Inspirations
------------

1. [Generators versus Fibers](http://howtonode.org/generators-vs-fibers)
1. [Trampolines in JavaScript](http://tobyho.com/2010/12/10/trampolines-in-javascript-and/)
1. [ES6 Draft: Generators](http://wiki.ecmascript.org/doku.php?id=harmony:generators)
