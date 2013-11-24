function showSource(path, outputElId) {
  $(document).ready(function() {
    var $el = $("#" + outputElId);
    var jqxhr = $.ajax({
      'url': path,
      'dataType': 'text'
    })
    .complete(function(xhr) {
      $el.html(xhr.responseText);
    });
  });
}

function log(o) {
  var x = document.getElementById('output');
  x.innerHTML += ('' + o + '\n');
}
