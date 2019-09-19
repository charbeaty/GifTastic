var APIKey = 'hPmUXlFapJzVK69XVJdatoUo20UetcjL'

var queryURL = ''
//*********STEP ONE**********/

//create array of strings, each one related to a topic that interests me
//save to a variable called 'topics
var topics = ["Dog", "Cat", "Porcupine", "Giraffe", "Hippopotamus"];
//***********STEP TWO*************/

//topics in array should be made into buttons on HTML
//use a loop that appends for each string in the array
function showButtons() {
    $("add-buttons").empty();

    for(var i = 0; i < topics.length; i++) {
        var b = $("<button>");
        b.addClass("animals");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
        $("#add-buttons").append(b);
    }
}
//***********STEP THREE*************/

//When user clicks button, page should grab 10 static images
$("#add-animal").on("click", function(event) {

    event.preventDefault();

    var input = $("#animal-input").val().trim();

    topics.push(input);

    showButtons();
});

showButtons();
//***********STEP FOUR*************/

//When user clicks on gif it should animate
//If user clicks on gif again it should stop playing

//***********STEP FIVE*************/

//Dispaly rating under every gif

//**********STOP! MAKE SURE IMAGES DISPLAY WHEN BUTTONS ARE PRESSED */

//***********STEP SIX*************/

//Add a form to page that takes value from a user input box and adds it
//  to 'topics' array.
//make a function call that takes each topic in array and remakes the 
//  buttons on the page.


