let letter;
let i = 0, pos = 0;
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



(function type() {
    // re-initialise la position
    if (pos === texts.length) pos = 0;

    letter = texts[pos].slice(0, ++i);
    typingZone.textContent = letter;

    if(letter.length === texts[pos].length) {
        i=0;
        pos++;
    }

    setTimeout(type, 100);
})();
