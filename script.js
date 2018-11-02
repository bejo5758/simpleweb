


var cardContact = document.getElementById('card-contact');
var cardsContact = document.getElementById('cards-contact');
var card2Contact = document.getElementById('card2-contact');
var flipContact = document.getElementById('flipContact');

flipContact.addEventListener('click', function() {
    cardsContact.classList.toggle('flipped');
    card2Contact.classList.toggle('flipped');
    cardContact.classList.toggle('flipped');
}, false);



var cardAbout = document.getElementById('card-about');
var cardsAbout = document.getElementById('cards-about');
var cards2About = document.getElementById('cards2-about');
var flipAbout = document.getElementById('flipAbout');

flipAbout.addEventListener('click', function() {
    cardsAbout.classList.toggle('flipped');
    cards2About.classList.toggle('flipped');
    cardAbout.classList.toggle('flipped');
}, false);


var modal = document.getElementById('myModal');

// Get the button that opens the modal
var trigger = document.getElementById('trigger');

// Get the <span> element that closes the modal
var close = document.getElementsByClassName('close')[0];


trigger.addEventListener('click', function () {
    modal.classList.add('visible');
});

close.addEventListener('click', function(){
    modal.classList.remove('visible');
});

window.addEventListener('click',function(event){
    if (event.target == modal){
        modal.classList.remove('visible');
    }
});



