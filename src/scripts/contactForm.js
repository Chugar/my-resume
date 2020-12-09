(function () {

    /**
     * Returns true if a mail is valid
     */
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(email);
    }

    function cleanData() {

    }

    function sendMail() {
        
    }


    // Callbacks
    const handleSubmit = (event) => {
        event.preventDefault();

        const fullnameVal =  document.getElementById('contact-fullname').value;
        const emailVal =  document.getElementById('contact-email').value;
        const textVal = document.getElementById('contact-message').value;

        if( !validateEmail(emailVal)) {
            return;
        }
    }




    // Event Listener
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleSubmit);
  
})();