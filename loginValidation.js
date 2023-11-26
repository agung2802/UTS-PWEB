function validate() {
    var passwordInput = document.getElementById("password")
    if (passwordInput.value.trim() === "") {
        passwordInput.classList.remove("is-valid")
        passwordInput.classList.add("is-invalid")
    } else {
        console.log(passwordInput.value.trim());
        passwordInput.classList.remove("is-invalid")
        passwordInput.classList.add("is-valid")
    }

    var emailInput = document.getElementById("email")
    if (emailInput.value.trim() === "" || !validateEmail(emailInput.value.trim())) {
        console.log(validateEmail(emailInput.value.trim()));
        emailInput.classList.remove("is-valid")
        emailInput.classList.add("is-invalid")

        let emailFeedback = document.getElementById("email-feedback")
        if (emailInput.value.trim() === "") {
            emailFeedback.innerHTML="Please enter your email!"
        } else {
            emailFeedback.innerHTML="Invalid email address!"
        }
    } else {
        console.log(validateEmail(emailInput.value.trim()));
        emailInput.classList.remove("is-invalid")
        emailInput.classList.add("is-valid")
    }
    
    var btnSubmit = document.getElementById("login")
    var checkbox = document.getElementById("remember")
    if (passwordInput.classList.contains("is-valid") && emailInput.classList.contains("is-valid")) {
        btnSubmit.disabled = true
        checkbox.disabled = true
    }
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}