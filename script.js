$(document).ready(function(){
  $.get("sentence.html", function(response) {
    $("#sentences").html(response);
  });
});
