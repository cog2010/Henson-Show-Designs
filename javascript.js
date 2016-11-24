$(document).ready(function() {
  var query;
  var url;
  $("#search").on("click", function() {
    $("#results").html("");
    query = document.getElementById("query").value;
    url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&prop=revisions&rvprop=content&format=json&callback=?';
    //Thanks to Nick Craver on Stack Overflow for helping with ^^^^^ http://stackoverflow.com/questions/3873636/no-response-from-mediawiki-api-using-jquery
    $.getJSON(url, function(data) {
      for (var i = 0; i < data[1].length; i++) {
        $('#results').append("<div><button class='btn-default'><a href="+data[3][i]+" target='_blank'><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></button></div>" );

      }
    });
  });
  //Random works, DO NOT TOUCH anything below this line!
  $("#random").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
  //Thanks to Dylan at Coding Tutorials 360 on YouTube for the suggestion below
  $("#query").keypress(function(e){
      if(e.which==13){
        $("#search").click();
      }
    });
});
