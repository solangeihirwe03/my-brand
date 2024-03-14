const form = document.getElementById('form');
const userName = document.getElementById('username');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

function showError(input, message){
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

function showSuccess(input, message){
  var formControl = input.parentElement;
  formControl.className ='form-control success';
  const small = formControl.querySelector('small');
  small.innerText = message;
}


function checkUsername(input, min, max){
    let alphaExp = /^[a-zA-Z]+$/;
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters long.`);
        return false; 
      } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters long.`);
        return false;
      } else if (!alphaExp.test(input.value)) { 
        showError(input, `${getFieldName(input)} must contain only letters, no numbers.`);
        return false;
      }
      else{
        showSuccess(input, 'success')
      }
      
}
function checkContact(input, min, max){
    let regexp = /^[0-9]+?$/;
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} numbers.`);
        return false; 
      } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} numbers.`);
        return false;
      } else if (!regexp.test(input.value)) { 
        showError(input, `${getFieldName(input)} must contain only numbers, not letters.`);
        return false;
      }
    
      else{
        showSuccess(input, 'success')
      }
}

function checkEmail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input, 'success')
      }
    
    else{
        showError(input, 'email is not valid')
    }
}

function checkTextarea(input, min, max){
    let letters = /^[0-9a-zA-Z]+$/;
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
        return false; 
      } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
        return false;
      } else if (!letters.test(input.value)) { 
        showError(input, `${getFieldName(input)} must contain only numbers, not letters.`);
        return false;
      }
    
      else{
        showSuccess(input, 'success')
      }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()=== ''){
            showError(input, `${getFieldName(input)} is required`)
        }
    });
}

function getFieldName(input){
    return input.id;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkRequired([userName, contact, email, textarea])
    checkUsername(userName, 4 ,20);
    checkContact(contact, 8, 12 );
    checkEmail(email);
    checkTextarea(textarea, 3, 100 )
   
})
