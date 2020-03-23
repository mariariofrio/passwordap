var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var simbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

// function to prompt user for password

function passwordPrompt() {
  var passwordlenght = parseInt(prompt("how many characters would you like your password to be"));
  if (isNaN(passwordlenght) === true) {
    alert("passwordlenght must be a number");
    return;
  }
  if (passwordlenght < 8 || passwordlenght > 128) {
    alert("passwordlenght must be at least 8 characters");
    return;
  }
}

var specialcharacter = confirm("click to confirm your password has a special character");
var lowercasecheck = confirm("click to confirm lowercase");
var uppercasecheck = confirm("click to confirm uppercase");
var numbercheck = confirm("click to confirm number");


if (
  specialcharacter === false &&
  lowercasecheck === false &&
  uppercasecheck === false &&
  numbercheck === false
) 

{
  alert("password must have special,lowercase, uppercase or a number character");
  // return;
}
// this is an object that is storing the user input

var confirmPassword = {
  specialcharacter: specialcharacter,
  lowercasecheck: lowercasecheck,
  uppercasecheck: uppercasecheck,
  numbercheck: numbercheck,
  passwordLenght: passwordLenght,
}

// spot for fuction to get a random element for an array
function random_item(items) {
  var index = Math.floor(Math.random() * items.length);
  var element = item[index];
  return element;
}
// writing a function to generate the password based on users input

function generatePassword() {
  var closing = passwordPrompt();
  //  variable to store the password
  var storing = [];
  // aaray to store characters
  var character = [];
  // make sure each type is used
  var type = [];

  if (closing.specialcharacter) {
    character = character.concat(simbols);
    type.push(random_item(simbols));
  }
  if (closing.lowercasecheck) {
    character = character.concat(lowercase);
    type.push(random_item(lowercase));
  }
  if (closing.uppercasecheck) {
    character = character.concat(uppercase);
    type.push(random_item(uppercase));
  }
  if (closing.numbercheck) {
    character = character.concat(numbers);
    type.push(random_item(numbers));
  }
}

for (var i = 0; i < passwordLenght; i++) {
  
  var storing = Math.floor(Math.random() * character.length);

  // Add character at the random position
  type = type + [character];
} 

const confirmPassword= type.join('');

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

