function* makeGenerator() {
  while (true) {
    var msg = yield void(0);
    log(msg);
  }
}

var generator = makeGenerator();
generator.next();

log('ping');
generator.next('pong');
log('ping');
generator.next('pong');
log('ping');
generator.next('pong');
log('ping');
