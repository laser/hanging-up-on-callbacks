function* primeNumberGenerator() {
  var n = 2, witnesses = {}
  while (true) {
    if ( witnesses[n] ) {
      for (var i=0,p; p = witnesses[n][i]; i++)
        (witnesses[n+p] = witnesses[n+p] || []).push(p)
      delete witnesses[n]
    } else {
      yield n;
      (witnesses[2*n] = witnesses[2*n] || []).push(n)
    }
    n += 1;
  }
}


var primes = primeNumberGenerator();
for (var prime = primes.next().value; prime < 60; prime = primes.next().value)
  log(prime);
