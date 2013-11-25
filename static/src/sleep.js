function sync(gen) {
  var iterable, resume;

  resume = function() {
    iterable.next();
  };

  iterable = gen(resume);
  iterable.next();
}

sync(function* (resume) {
  log('foo');
  yield setTimeout(resume, 1000); // suspend the generator
  log('baz');
});

log('blix'); // just the generator is suspended!
