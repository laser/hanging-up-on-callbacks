function sleep(ms) {
  setTimeout(function() {
    gen.next(); // resume the generator
  }, ms);
}

var gen = function* () {
  log('sup');
  yield sleep(1000); // suspend the generator
  log('player');
};

gen = gen(); // activate the generator
gen.next();  // run it!
