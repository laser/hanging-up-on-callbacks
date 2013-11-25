function resume() {
  gen.next();
}

var gen = function* () {
  log('foo');
  yield setTimeout(resume, 1000); // suspend the generator
  log('baz');
};

gen = gen(); // activate the generator
gen.next();  // run it...
log('blix'); // just the generator is suspended!
