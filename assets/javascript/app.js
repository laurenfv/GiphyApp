// $(document).ready(function(){

    var cartoonsArr = ["Spongebob", "Courage The Cowardly Dog", "Daria", "Pinky and the Brain"];

    var renderButtons = function() {

        $("#cartoon-buttons").empty();

        // loops through array and generates
        for (i = 0; i < cartoonsArr.length; i++) {
          $("#cartoon-buttons").append("<button class='gifButton' data-cartoon='" + cartoonsArr[i] + "'>" + cartoonsArr[i] + "</button>");
        }
    }

    $("#add-cartoon").on("click", function(event) {

        event.preventDefault();

        // grav text from user and push to array
        var userInput = $("#cartoon-input").val();

        cartoonsArr.push(userInput);

        renderButtons();
    });

    $("gifbutton").on("click", function() {
        var cartoonQ = $(this).attr("data-cartoon");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoonQ + "&api_key=HC6BmMqexiKAE4svEnok7u7wH4UKB3qB";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
  
          console.log(response);
  

          var results = response.data;
  
          for (var i = 0; i < results.length; i++) {
            var cartoonDiv = $("<div class='item'>");
            
            // var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + results[i].rating);
  
            var cartoonImage = $("<img>").attr("src", results[i].images.fixed_height.url);
  
            cartoonDiv.prepend(p);
            cartoonDiv.prepend(cartoonImage);
  
            $("#cartoons").prepend(cartoonDiv);
  
          }
  
        });
      });

      renderButtons();

// });
