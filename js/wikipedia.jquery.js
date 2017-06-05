$(function() {
  $("#search").click(function() {
    var searchText = $("#searchText").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchText + "&callback=?";
    $.ajax( {
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function(data) {
        $("#output").html("");

        for(var i = 0; i < data[1].length; i++) {
          $("#output").append("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
        $("#searchText").val("");
      },
      error: function(errorMessage) {
        alert("Error");
      }

    })
  });
  $("#searchText").keypress(function(e) {
    if (e.which == 13) {
      $("#search").click();
    }
  });
});