(function () {

    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('envoyer');
    const loadingButton = document.getElementById('loading');
    const spinner = document.querySelector('.loader');

    const fullnameInput = document.getElementById('contact-fullname');
    const emailInput = document.getElementById('contact-email');
    const messageTextArea = document.getElementById('contact-message');

    const fullnameError = document.getElementById('fullname-error');
    const emailError = document.getElementById('email-error');



    // Validity handlers
    const handleInvalidName = (event) => {
        fullnameError.innerHTML = '';
        if(fullnameInput.value === '') {
            fullnameError.innerHTML = '* Entrez votre nom et prénom';
        }
        if(fullnameInput.validity.tooShort) {
            fullnameError.innerHTML = '* Trop court';
        }
    };
    
    const handleInvalidEmail = (event) => {
        emailError.innerHTML = '';
        if(emailInput.validity.patternMismatch) {
            emailError.innerHTML = '* Veuillez entrer une addresse email correcte';
        }
        if(emailInput.validity.valueMissing) {
            emailError.innerHTML = '* Entrer votre addresse email';
        }
    }

    
    // Animation
    const animateSending = (event) => {
        submitButton.style.display = 'none';
        loadingButton.style.display = 'block';
        
        setTimeout(() => {
            spinner.style.display = 'none';
            loadingButton.innerHTML = 'Envoyé !'
        }, 2000)
    }
    
    
    // Submit handler
    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: send to a backend service (email)
        const fullnameVal =  fullnameInput.value;
        const emailVal =  emailInput.value;
        const textVal = messageTextArea.value;    
        
        // If form is valid
        submitButton.addEventListener('click', animateSending)
    }

    // Event Listener
    fullnameInput.addEventListener('blur',handleInvalidName );
    emailInput.addEventListener('blur', handleInvalidEmail);
    form.addEventListener('submit', handleSubmit);
  
})();