function sleep(ms) {
  setTimeout(function() {
    gen.next(); // resume the generator
  }, ms);
}

var gen = function* () {
  log('foo');
  yield sleep(1000); // suspend the generator
  log('baz');
};

gen = gen(); // activate the generator
gen.next();  // run it...
log('blix'); // just the generator is suspended!
