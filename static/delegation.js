function* add(x,y) {
  yield (x + y); // yields the result of x plus y
}

function* main(){
  var r = yield add(2, 2); // yield the "add" generator and later serve as entry point when "main" is resumed
  log(r);
}

function run(){
  var mainGen   = main(); // get the generator of "main"
  var addGen    = mainGen.next().value; // start executing "main" generator, which yields the generator of "add"
  var addResult = addGen.next().value; // start executing "add" generator

  mainGen.next(addResult); // resume execution of "main" and swap in result yielded from "add"
}

run();
