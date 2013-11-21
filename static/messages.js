function makeGenerator() {
  while (true) {
    var msg = yield;
    log(msg);
  }
}

var generator = makeGenerator();
generator.next();

log('ping');
generator.send('pong');
log('ping');
generator.send('pong');
log('ping');
generator.send('pong');
log('ping');
