

// Function to validate and submit the form
function submitForm() {
    const form = document.getElementById('registrationForm');

    //Validate Function
    function validateForm() {
        // Get values
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const dob = document.getElementById("dob").value;
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        
        let isValid = true;
        let errorMessage = "";

        
        if (firstName === "") {
            errorMessage += "First name must be filled out.\n";
            isValid = false;
        }
        
        if (lastName === "") {
            errorMessage += "Last name must be filled out.\n";
            isValid = false;
        }
        
        if (dob === "") {
            errorMessage += "Date of birth must be filled out.\n";
            isValid = false;
        }
        // Check phone number 
        if (phone === "" || !/^\d{10}$/.test(phone)) {
            errorMessage += "Please enter a valid 10-digit phone number.\n";
            isValid = false;
        }
        // Check email
        if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage += "Please enter a valid email address.\n";
            isValid = false;
        }

        //Error message if fail
        if (!isValid) {
            alert(errorMessage);
            return false;
        }
        
        return true; //Valid
    }

    
    if (validateForm()) {
        form.submit(); 
        alert("Successfully Registered")
    }
}
