function* fibonacci() {
  var a = 0, b = 1, c = 0;

  while (true) {
    yield a;
    c = a;
    a = b;
    b = c + b;
  }
}

var seq = fibonacci();
log(seq.next().value); // 0
log(seq.next().value); // 1
log(seq.next().value); // 1
log(seq.next().value); // 2
log(seq.next().value); // 3
log(seq.next().value); // 5
log(seq.next().value); // 8
log(seq.next().value); // 13
