function showSource(path, outputElId) {
  $(document).ready(function() {
    var $el = $("#" + outputElId);
    var jqxhr = $.ajax(path)
    .always(function(resp) {
      $el.html(resp.responseText);
    });
  });
}

function log(o) {
  x = document.getElementById('output');
  x.innerHTML += (o.toString() + '\n');
}
