document.addEventListener("DOMContentLoaded", function () {
    const signUp = document.getElementById("form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    /*name.addEventListener("input", resetErrors);
    email.addEventListener("input", resetErrors);
    password.addEventListener("input", resetErrors);
    */


    signUp.addEventListener("submit", (e) => {
        e.preventDefault();

        checkSignIn();
    });

    async function checkSignIn() {
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        
        /*if (nameValue === "") {
            setErrorFor("your name is required");
        } else if (!validName(nameValue)|| nameValue > 3) {
          setErrorFor("insert a good username with atleast 4 letters");
        } else {
          setSuccessFor(name);
        }

        
        if (emailValue === "") {
            setErrorFor( "email is required");
        } else if (!validEmail(emailValue)) {
            setErrorFor("email is not valid");
        } else {
            setSuccessFor(email);
        }

        
        if (passwordValue === "") {
            setErrorFor( "password is required");
        } else if (!validPassword(passwordValue) && passwordValue < 6) {
            setErrorFor("password has 8-characters and digit-upper-lowercase-specialCharacter");
        } else {
            setSuccessFor(password);
        }*/

        if (nameValue != "" || emailValue != "" || passwordValue != "" ) {

            const signupData = {
                username: nameValue,
                email: emailValue,
                password: passwordValue
            };
            try {
                const response = await fetch("http://localhost:6000/api/users/signUp",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(signupData),
                  }
                );
                    const responseData = await response.json();
                    

                    if(response.ok){
                        const token = responseData.data.token;
                        localStorage.setItem("token", token);
                        alert("user is created successful");
                    }
                }

            catch (error) {
                console.log('Error', error);
            }
            signUp.reset();
        }
    }
/*     function setErrorFor(message) {
       var errorElement = document.getElementById("error");
       errorElement.textContent = message;
     }

     function resetErrors() {
       var errorElements = document.querySelectorAll(".error");
       errorElements.forEach(function (element) {
         element.textContent = "";
       });
     }
     */


/*    function setSuccessFor(input) {
       const formControl = input.parentElement;
       formControl.className = "formControl success";
     }
     const validName = (message)=>{
        var reName = /^[A-Za-z0-9][A-Za-z\d\s]*$/;
        return reName.test(message);
    }
    const validEmail = (email)=>{
        var emailRegex =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"])$/i;

          return emailRegex.test(email)
    }
    const validPassword = (password)=>{
        var passwordRegex = /^[a-zA-Z][0-9] (?=.*[@$!%*#?&])$/i;

        return passwordRegex.test(password);
    }
*/
});




