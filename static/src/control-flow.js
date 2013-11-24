function* powGenerator() {
  var result = Math.pow(yield null, yield null);
  yield result;
}

var g = powGenerator();
log(g.next().value);   // null, from the first yield
log(g.next(10).value); // null, from the second
log(g.next(2).value);  // 100, the result
