var string = "Hello this is a test!";
var string2 = "crap I clicked it!";

var card = document.getElementById('card');
var cardText = document.getElementById('cardText');
var cardTask = document.getElementById('cardTask');

cardText.innerHTML = string;
cardTask.innerHTML = string;
//
//
//

//card.onClick = randomCard();
card.addEventListener("click", randomCard);

function randomCard() {
    cardText.innerHTML = string2;
};
