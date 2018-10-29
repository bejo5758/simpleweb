

var cardContact = document.getElementById('card-contact');
var cardsContact = document.getElementById('cards-contact');
var flipContact = document.getElementById('flipContact');

flipContact.addEventListener('click', function() {
    cardsContact.classList.toggle('flipped');
    cardContact.classList.toggle('flipped');
}, false);



var cardAbout = document.getElementById('card-about');
var cardsAbout = document.getElementById('cards-about');
var flipAbout = document.getElementById('flipAbout');

flipAbout.addEventListener('click', function() {
    cardsAbout.classList.toggle('flipped');
    cardAbout.classList.toggle('flipped');
}, false);

var card = document.getElementById('card');
var card2 = document.getElementById('card2');

document.getElementById('flip').addEventListener('click', function() {
    card.classList.toggle('flipped');
    card2.classList.toggle('flipped');
}, false);
