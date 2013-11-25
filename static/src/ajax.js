function _get(url, callback) {
  var x = new XMLHttpRequest();

  x.onreadystatechange = function() {
    if (x.readyState == 4) {
      callback(null, x.responseText);
    }
  };

  x.open("GET", url);
  x.send();
}

function sync(gen) {
  var iterable, resume;

  resume = function(err, data) {
    iterable.next(data);
  };

  iterable = gen(resume);
  iterable.next();
}

sync(function* (resume) {
  var resp = yield _get("http://localhost:8080/static/index.html", resume); // suspend the generator
  log(resp);
});
