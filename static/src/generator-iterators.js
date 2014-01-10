function* fibonacci(z) {
  var a = z, b = a + 1, c = a;

  while (true) {
    yield a;
    c = a;
    a = b;
    b = c + b;
  }
}

var seq = fibonacci(0);
log(seq.next().value); // 0
log(seq.next().value); // 1
log(seq.next().value); // 1
log(seq.next().value); // 2
log(seq.next().value); // 3
log(seq.next().value); // 5
log(seq.next().value); // 8
log(seq.next().value); // 13
