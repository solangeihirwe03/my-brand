const usersInfo = JSON.parse(localStorage.getItem("usersInfo"));
function checkEnteredEmail(input){
    const enteredEmail = input.value;

    if(enteredEmail === ""){
        setError("emailError", "Please enter your email.");
        return false;
    }

    const user = usersInfo.find(user => user.email === enteredEmail);

    if (!user) {
        setError("emailError", "Email not found. Please try again.");
        return false;
    }

    resetError("emailError");
    return true;
}
function checkEnteredPassword(input){
    const enteredPassword = input.value;

    if(enteredPassword === ""){
        setError("passwordError", "please enter your password");
        return false;
    }

    const passwrd = usersInfo.find(user => user.password === enteredPassword);
    if(!passwrd){
        setError("passwordError", "incorrect password");
        return false;
    }
    resetError("passwordError");
    return true;
}
function setError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
}
function resetError(id) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = '';
}
document.getElementById('form').addEventListener('submit',function (event) {
    event.preventDefault();

    var emailValid = checkEnteredEmail(document.getElementById("email"));
    var passwordValid = checkEnteredPassword(document.getElementById("password"));

    if (!emailValid || !passwordValid) {
        console.log('Form submission aborted. Please fix validation errors.');
    }
    else {
        alert("Login successful")
    }
});