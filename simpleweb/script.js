

var cardContact = document.getElementById('card-contact');
var cardsContact = document.getElementById('cards-contact');
var card3Contact = document.getElementById('card3-contact');
var flipContact = document.getElementById('flipContact');

flipContact.addEventListener('click', function() {
    cardsContact.classList.toggle('flipped');
    card3Contact.classList.toggle('flipped');
    cardContact.classList.toggle('flipped');
}, false);



var cardAbout = document.getElementById('card-about');
var cardsAbout = document.getElementById('cards-about');
var flipAbout = document.getElementById('flipAbout');

flipAbout.addEventListener('click', function() {
    cardsAbout.classList.toggle('flipped');
    cardAbout.classList.toggle('flipped');
}, false);


