function* powGenerator() {
  var result = Math.pow(yield null, yield null);
  yield result;
}

var g = powGenerator();
log(g.next().value);
log(g.next(10).value);
log(g.next(2).value);
