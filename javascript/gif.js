

var animals = [];

$("#add-buttons").on("click", "button", function() {

    var input = $(this).attr("data-input");

    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=hPmUXlFapJzVK69XVJdatoUo20UetcjL&limit=10';

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        console.log(queryURL);

        console.log(response);

        var gifDiv = $("<div class='gif'>");

        var results = response.data;

        for (var i = 0; i < results.length; i++) {


            var pElement = $("<p>").text("Rating: " + results[i].rating);

            var gifImage = $("<img>");
            gifImage.addClass("image");

            gifImage.attr("data-animate", results[i].images.fixed_height.url);
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr("data-state", "still");

            gifDiv.append(pElement);
            gifDiv.append(gifImage);

            $("#gifs-view").prepend(gifDiv);

        }
        $(".image").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });

    });
});

function showButtons() {
    //deletes previous buttons
    $("#add-buttons").empty();

    //loops through array of movies
    for (var i = 0; i < animals.length; i++) {
        //adding button element to html
        var b = $("<button>");
        //adding a class to html
        b.addClass("animals");
        //adding a data-attribute for value of animals at the index i
        b.attr("data-input", animals[i]);
        //adds text to button that was just added
        b.text(animals[i]);
        //adds the buttons to html

       
        $("#add-buttons").append(b);  //append adds to what is already on the page
    }                                 //it does not replace!
}
//***********STEP THREE*************/


$("#add-animal").on("click", function (event) {
    
    event.preventDefault();
    //takes value from input box
    var input = $("#animal-input").val().trim();
    //the input from the textbox is added to array
    animals.push(input);
    //calling the function that handles the array
    showButtons();
});


//***********STEP FOUR*************/

//When user clicks on gif it should animate
//If user clicks on gif again it should stop playing

//***********STEP FIVE*************/

//Dispaly gifRating under every gif

//**********STOP! MAKE SURE IMAGES DISPLAY WHEN BUTTONS ARE PRESSED */


