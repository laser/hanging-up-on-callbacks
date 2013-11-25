function* powGenerator() {
  var result = Math.pow(yield "a", yield "b");
  yield result;
}

var g = powGenerator();
log(g.next().value);   // "a", from the first yield
log(g.next(10).value); // "b", from the second
log(g.next(2).value);  // 100, the result
