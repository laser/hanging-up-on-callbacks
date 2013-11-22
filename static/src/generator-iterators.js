function* fibonacci() {
  var prev = 0, curr = 1;
  while (true) {
    prev = curr;
    curr = prev + curr;
    yield curr;
  }
}

var seq = fibonacci();
log(seq.next().value); // 1
log(seq.next().value); // 2
log(seq.next().value); // 3
log(seq.next().value); // 5
log(seq.next().value); // 8
