
/**
* Typing effect 
*/

const typingZone = document.querySelector('.typing-effect');
const texts = [
    'Angular', 
    'VueJS', 
    'Symfony', 
    'Les Single Page Apps', 
    'Les Design Patterns', 
    'La Programmation Fonctionelle',
    'Les Tests Unitaires',
];

let letter;
let position = 0, i = 0;
(function type() {
    if (i === texts.length) i = 0;

    letter = texts[i].slice(0, ++position);
    typingZone.textContent = letter;

    if(letter.length === texts[i].length) {
        position=0;
        i++;
    }

    setTimeout(type, 100);
})();



/**
* Scroll to top button
*/
const scrollButton = document.querySelector('#scrolltop-button');

window.addEventListener("scroll", showScollButton);
function showScollButton() {
    if(window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

scrollButton.addEventListener('click', gotoTop);
function gotoTop() {
    window.scroll(0,0);
}