$(document).ready (function () {
  
  // Run this function when someone presses the enter button
  $("#searchField").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submitButton").click();
    }
  });
  
  // Run this function when someone clicks the Submit button
  $('#submitButton').click(function () {
    
    //Get the value of the search query
    var searchQuery = $('#searchField').val();
    
    //Declare API with search field value
    var api = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchQuery + '&format=json&callback=?';
    
    //Retrieve json file with AJAX
    $.ajax({
      type:'GET',
      url:api,
      async:false,
      dataType:'json',
      success: function(data) {
        $('#searchResults').html('');
        for (var i = 0; i < data[1].length; i++) {
        $('#searchResults').append("<li><a href= "+ data[3][i] + " target='_blank'>" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
        $('#searchField').val('');
      },
      error: function(errorMessage) {
        alert('There was an error!');
      }
        
    });
    
  });
  
});