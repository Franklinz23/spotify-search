// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  // your code here

var $button = $(".btn");

var $songs = $('#songs');

$button.on("click", function(event) {
    event.preventDefault();
    $songs.empty();
  });

  var searchTrack = $("track").val();

    if (searchTrack !== ""){
      $("#results").show();

}
  var searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;
  $.ajax({

      // What kind of request
      method: "GET",

      // The URL for the request
      url: searchUrl,

      // The data to send aka query parameters
      artist: $("form").serialize(),

      // Code to run if the request succeeds;
      // the response is passed to the function
      success: onSuccess,

      // Code to run if the request fails; the raw request and
      // status codes are passed to the function
      error: onError
  });


//function onSuccess()
var $data = '<p><a href="' + data.previewUrl + '" target="_blank" class="btn btn-sm btn-default">Preview ' + '<span class="glyphicon glyphicon-play"></span></a></p>';
function onSuccess(json) {
  console.log(json.artist);
  json.artist.forEach(function(element){
    $("#songs").append($data);
  });

}

  function onError(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
}



});
