const form = document.getElementById('form');
const userName = document.getElementById('username');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

function showError(input, message) {
  var formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message
}

function showSuccess(input) {
  var formControl = input.parentElement;
  formControl.classList.remove('error');
  const small = formControl.querySelector('small');
  small.innerText = '';
}
function clearErrors() {
  const errorMessages = document.querySelectorAll('small');
  errorMessages.forEach(message => message.innerText = ''); // Clear error messages

  success.innerText = ''; // Clear any previous success message
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkUsername(input) {
  let alphaExp = /^[0-9a-zA-Z]+$/;
  if(input.value === ''){
    showError(input, `${getFieldName(input)} is required`)
  }
  else if (input.value.length < 4) {
    showError(input, `${getFieldName(input)} must be at least 4 characters long.`);
    return false;
  } else if (!alphaExp.test(input.value)) {
    showError(input, `${getFieldName(input)} must contain only letters, no numbers.`);
    return false;
  }
  else {
    showSuccess(input)
  }

}
function checkContact(input) {
  let regexp = /^[0-9]+?$/;
  if(input.value === ''){
    showError(input, `${getFieldName(input)} is required`)
  }
  else if (input.value.length < 10) {
    showError(input, `${getFieldName(input)} must be at less than 8 numbers.`);
    return false;
  } else if (!regexp.test(input.value)) {
    showError(input, `${getFieldName(input)} must contain only numbers, not letters.`);
    return false;
  }

  else {
    showSuccess(input)
  }
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(input.value === ''){
    showError(input, `${getFieldName(input)} is required`)
  }
  else if (re.match(input.value.trim())) {
    showError(input, 'email is not valid')
  }

  else {
    showSuccess(input)
  }
}

function checkTextarea(input) {
  let letters = /^[0-9a-zA-Z]+$/;
  if(input.value === ''){
    return(input, `${getFieldName(input)} is required`)
  }
  else if(input.value.length < 4) {
    showError(input, `${getFieldName(input)} must be at least 4 characters.`);
    return false;
  } else if (!letters.test(input.value)) {
    showError(input, `${getFieldName(input)} must contain only numbers, not letters.`);
    return false;
  }

  else {
    showSuccess(input);
  }
}



form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  // Check for validation errors
  checkRequired([userName, contact, email, textarea]);
  let isUsernameValid = checkUsername(userName);
  let isContactValid = checkContact(contact);
  let isEmailValid = checkEmail(email);
  let isTextareaValid = checkTextarea(textarea);

  // If any field has errors, display an alert message
  if (!isUsernameValid || !isContactValid || !isEmailValid || !isTextareaValid) {
    checkRequired();
    checkUsername(input);
    checkEmail(input);
    checkContact(input);
    checkTextarea(input);
    return; // Stop further execution
  }else{
    storeInputData();
  }
});

function storeInputData() {
  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('textarea').value;
  const phoneNumber = document.getElementById('contact').value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem('users')):[]
  if(user_records.some((v)=>{
    return v.email == email
  })){
    return;
  }
  else{
    user_records.push({
      "name": name,
      "contact": phoneNumber,
      "email":email,
      "textarea": message
    })
  }
  localStorage.setItem('users', JSON.stringify(user_records));
  console.log( user_records); // Log data to console
    alert("Message Sent Successfully!");
}
