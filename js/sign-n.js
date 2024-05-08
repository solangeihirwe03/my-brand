document.addEventListener("DOMContentLoaded", function(){
    const loginform = document.getElementById("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");


    // email.addEventListener("input", resetError(email));
    // password.addEventListener("input", resetError(password));

    loginform.addEventListener("submit", async (e) => {
      e.preventDefault();

      const loginData = {
        email: email.value,
        password: password.value,
      };

      try {
        const response = await fetch(
          "https://backend-mybrand-solange.onrender.com/api/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );

        const responseData = await response.json();
        if (response.ok) {
          const token = responseData.data.token;
          localStorage.setItem("token", token);
          window.location.href = `index.html`
          loginform.reset();
        }
      } catch (error) {
        console.error("Error", error);
      }
    });
})
function checkEnteredEmail(input){
    const enteredEmail = input.value;

    if(enteredEmail === ""){
        setError("emailError", "Please enter your email.");
        return false;
    }

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