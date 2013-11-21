function fib() {
  var i = 0, j = 1;
  while (true) {
    yield i;
    var t = i;
    i = j;
    j += t;
  }
}

var g = fib();
for (var i = 0; i < 10; i++) {
  log(g.next());
}
