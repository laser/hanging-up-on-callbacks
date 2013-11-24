function* delegate(x, y) {
  yield (x + y);
}

function* delegator(a, b) {
  yield* delegate(a, b);
}

function run(){
  var gen       = delegator(5, 1); // get the generator of "delegator"
  var addResult = gen.next();      // resume generator, which yields result of delegate generator
  log(addResult.value);            // value is now 6
}

run();
