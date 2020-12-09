(function () {

    // Functions
    function checkMail() {

    }

    function cleanData() {

    }

    function sendMail() {
        
    }


    // Callbacks
    const handleSubmit = (event) => {
        event.preventDefault();
        const emailVal = event.target.children['email'].value;
        const fullnameVal = event.target.children['fullname'].value;
        const textVal = event.target.children['message'].value;

    }


    // Event Listener
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleSubmit);
  
})();