function* bar() {
  yield void(0);
  log('bar');
}

function* foo() {
  while (true) {
    yield* bar();
    log('foo');
  }
}

var g = foo();
g.next();
g.next();
