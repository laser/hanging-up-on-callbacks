function procrastinatingAdd(x, y) {
  var errMsg = "Expected number and got ";
  setTimeout(function() {
    if (isNaN(x)) gen.throw(new TypeError(errMsg + typeof x));
    if (isNaN(y)) gen.throw(new TypeError(errMsg + typeof y));
    gen.next(x + y);
  }, 500);
}

var gen = function* () {
  try {
    var result = yield procrastinatingAdd(1, "foo");
    log(result);
  }
  catch (e) {
    log(e);
  }
};

gen = gen(); // activate the generator
gen.next();  // run it...
