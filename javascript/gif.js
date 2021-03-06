

var animals = [];

$("#add-buttons").on("click", "button", function () {

    var input = $(this).attr("data-input");

    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=hPmUXlFapJzVK69XVJdatoUo20UetcjL&limit=10';

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);

            console.log(response);

            var results = response.data;


            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");


                var pElement = $("<p>").text("Rating: " + results[i].rating);

                var gifImage = $("<img>");
                gifImage.addClass("image");


                gifImage.attr({"src": results[i].images.fixed_height_still.url,
                "data-state": 'still', 'data-still': results[i].images.fixed_height_still.url,
                'data-animate': results[i].images.fixed_height.url});


                gifDiv.append(pElement);
                gifDiv.append(gifImage);

                $("#gifs-view").prepend(gifDiv);

            }
            $(".image").on("click", function () {
                var state = $(this).attr("data-state");
               
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


$("#add-animal").on("click", function (event) {

    event.preventDefault();
    //takes value from input box
    var input = $("#animal-input").val().trim();
    //the input from the textbox is added to array
    animals.push(input);
    //calling the function that handles the array
    showButtons();
});




