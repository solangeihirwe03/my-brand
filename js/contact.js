document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const userName = document.getElementById("username");
  const contact = document.getElementById("contact");
  const email = document.getElementById("email");
  const textarea = document.getElementById("textarea");

  userName.addEventListener("input", clearMessage);
  contact.addEventListener("input", clearMessage);
  email.addEventListener("input", clearMessage);
  textarea.addEventListener("input", clearMessage);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
  });

async function checkInputs() {
  const nameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const contactValue = contact.value.trim();
  const messageValue = textarea.value.trim();

  if (nameValue === "") {
    setErrorFor(userName, "Name is required");
  } else if (!setTextError(nameValue)) {
    setErrorFor(userName, "not a real name");
  } else if (nameValue.length < 3) {
    setErrorFor(userName, "insert full name");
  } else {
    setSuccessFor(userName);
  }


   let regexp = /^[0-9]+?$/;
   if (contactValue === "") {
     setErrorFor(contact, `${getFieldName(input)} is required`);
   } else if (contactValue.length < 10 || !regexp.test(contactValue)) {
     setErrorFor(
       contact,
       `contact must be at less than 10 numbers.`
     );
     return false;
   }
    else {
     setSuccessFor(contact);
   }

  const EMAIL_REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailValue === "") {
    setErrorFor(email, `email is required`);
  } else if (!EMAIL_REGEX.test(emailValue)) {
    setErrorFor(email, "email is not valid");
  } else {
    setSuccessFor(email);
  }


  if (messageValue === "") {
    return textarea, `$message is required`;
  } else {
    setSuccessFor(textarea);
  }

  if (nameValue != "" & setTextError(nameValue) &
    !nameValue.length < 3 & emailValue != ""
    & messageValue != "" & setTextError(messageValue)) {

    const messageData = {
      name: nameValue,
      contact: contactValue,
      email: emailValue,
      message: messageValue
    };

    try{
      const response = await fetch('https://backend-mybrand-solange.onrender.com/api/messages/createMessage', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
      });

      const data = await response.json();
      console.log('Messages', data);

      if(response.status === 200){
        form.reset();
        alert("message sent successfully");
      }
    }catch(error){
      console.log('Error',error)
    }

    }
}
});

function setErrorFor(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add('error')
  small.innerText = message;
};
function clearMessage() {
  const formControl = this.parentElement;
  formControl.classList.remove("error");
  formControl.classList.remove("success");
  const small = formControl.querySelector("small");
};
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  setTimeout(() => {
    formControl.className = formControl.className.replace(" success", "");
  }, 1000);
};

function setTextError(text) {
  return /^[a-zA-Z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]+$/.test(text);
}

const response = await fetch()
