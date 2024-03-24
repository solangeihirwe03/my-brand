document.getElementById("eye").addEventListener('click', ()=>{
    document.getElementById('password').type = document.getElementById('password').type === 'password'? "text" : "password";
})
function nameValidation(input){
    var reName = /^[A-Za-z][A-Za-z\d\s]*$/;
    if(input.value === ''){
        setError('nameError', 'please enter your name');
    }
    else if(input.value < 4){
        setError('nameError', 'this field must contain more than 4 letters')
    }
    else if(!reName.test(input.value)){
        setError('nameError', 'username must contain letters');
    }
    else{
        resetErrors();
    }
}

function emailValidation(input){
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(input.value === ''){
        setError('emailError', 'Please enter your email address.');
        return;
    }
    else if(!re.test(input.value)){
        setError('emailError', 'provide valid email');
        return
    }
    else {
        resetErrors();
        return;
    }
}

function checkPassword(input){
    const combinedRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (input.value === "") {
        setError('passwordError', "password is required")
        return;
    }

    else if(input.value < 5){
        setError('passwordError', "password must have atleast 6 characters")
    }
    else if(!combinedRegex.test(input.value)) {
        setError('passwordError', "must contain at least one capital letter,letter,number, and one special character");
        return;   
    }
        else{
        resetErrors();
        return;
}
}
function confirmPassword(input){
    
    var passwordValue = document.getElementById("password").value;

    if (input !== passwordValue) {
        setError('confPasswordError', "Passwords don't match");
    } else {
        resetErrors();
    }
}
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    resetErrors();
    nameValidation(document.getElementById('name'));
    emailValidation(document.getElementById('email'));
    checkPassword(document.getElementById('password'));
    confirmPassword(document.getElementById('confirmPassword'));

    // If there are no errors, you can proceed with form submission
    var nameError = document.getElementById('nameError').textContent;
    var emailError = document.getElementById('emailError').textContent;
    var passwordError = document.getElementById('passwordError').textContent;
    var confPasswordError = document.getElementById('confPasswordError').textContent;

    if (nameError || emailError || passwordError || confPasswordError) {
        console.log('Form submission aborted. Please fix validation errors.');
    } else {
        // All validations passed, proceed with form submission
        console.log('Form submitted successfully!');
    }
});

function setError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function resetErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.textContent = '';
    });
}
document.getElementById('name').addEventListener('input', function() {
    nameValidation(this);
});

document.getElementById('email').addEventListener('input', function() {
    emailValidation(this);
});

document.getElementById('password').addEventListener('input', function() {
    checkPassword(this);
});

document.getElementById('confPasswordError').addEventListener('input', function() {
    confirmPassword(this);
});