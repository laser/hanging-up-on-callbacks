function* add(x,y) {
  yield (x + y); // yields the result of x plus y
}

function* main(){
  var r = yield add(2,2); // yields a generator of "add"
  log(r);
}

function run(){
  var m      = main();
  var sub    = m.next().value; // start executing "main" generator, which yields the generator of "add"
  var result = sub.next(); // start executing "add" generator
  m.next(result.value); // resume execution of "main" and swap in result yielded from "add"
}

run();
