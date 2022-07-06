let password = document.getElementById('pwd');
let confirmPassword = document.getElementById('pwd-repeat');
let button = document.getElementById('button');
let message = document.getElementById('message');
let letter = document.getElementById('l-letter');
let capital = document.getElementById('u-letter');
let number = document.getElementById('number');
let character = document.getElementById('character');
let length = document.getElementById('length');

button.addEventListener('mouseup', passwordValidate);

password.addEventListener('blur', function(){
  message.style.display = 'none';
});

password.addEventListener('focus', function(){
    message.style.display = 'block';
});

password.addEventListener('keyup', validationPopup);

function passwordValidate(){
    if (confirmPassword.value != password.value){
      confirmPassword.setCustomValidity('Passwords do not match!');
    } else{
      return   
    }
}

function validationPopup(){
  // validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
}

  // validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  // validate numbers
  let numbers = /[0-9]/g;
  if(password.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }

  // validate special characters
  let specialCharacters = /[$@&+\-\/#_?!]/g;
  if(password.value.match(specialCharacters)) {
      character.classList.remove('invalid');
      character.classList.add('valid');
    } else {
      character.classList.remove('valid');
      character.classList.add('invalid');
    }

  // validate length
  if(password.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }
}

