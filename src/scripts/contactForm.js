(function () {

    

    // Functions
    function checkMail(email, alert) {
        
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ( !regex.test(String(email).toLowerCase()) ) {
            alert.style.display = 'block';
            return;
        } 
        alert.style.display = 'none';
    }

    function cleanData() {

    }

    function sendMail() {
        
    }


    // Callbacks
    const handleSubmit = (event) => {
        event.preventDefault();

        const fullnameVal =  document.getElementById('contact-fullname');
        const emailVal =  document.getElementById('contact-email');
        const textVal = document.getElementById('contact-message');


        console.log(emailVal.value)
        checkMail(emailVal, document.getElementById('invalid-email') );

    }




    // Event Listener
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleSubmit);
  
})();