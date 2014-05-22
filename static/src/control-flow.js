function* powGenerator() {
  var result = Math.pow(yield "a", yield "b");
  return result;
}

var g = powGenerator();
console.log(g.next().value);   // "a", from the first yield
console.log(g.next(10).value); // "b", from the second
console.log(g.next(2).value);  // 100, the result
