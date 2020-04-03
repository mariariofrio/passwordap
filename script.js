var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var simbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

// function to prompt user for password
var passwordLenght;
var character;
function passwordPrompt() {
  passwordLenght = parseInt(prompt("how many characters would you like your password to be"));
  if (isNaN(passwordLenght) === true) {
    alert("passwordlenght must be a number");
    return;
  }
  if (passwordLenght < 8 || passwordLenght > 128) {
    alert("passwordlenght must be at least 8 characters");
    return;
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
  ){
    alert("password must have special,lowercase, uppercase or a number character");
     return;
  }
  // this is an object that is storing the user input
  
  var confirmPassword = {
    specialcharacter: specialcharacter,
    lowercasecheck: lowercasecheck,
    uppercasecheck: uppercasecheck,
    numbercheck: numbercheck,
    passwordLenght: passwordLenght,
  }
  return confirmPassword
}




// spot for fuction to get a random element for an array
function random_item(items) {
  var index = Math.floor(Math.random() * items.length);
  var element = items[index];
  return element;
  
}
// writing a function to generate the password based on users input

function generatePassword() {
  var closing = passwordPrompt();
  console.log("are we here",closing)
  //  variable to store the password
  var storing = [];
  // aaray to store characters
  var character = [];
  // make sure each type is used
  //var type = [];
  debugger
  
  if (closing.specialcharacter) {
    character = character.concat(simbols);
    //type.push(random_item(simbols));
  }
  debugger
  if (closing.lowercasecheck) {
    character = character.concat(lowercase);
    //type.push(random_item(lowercase));
  }
  debugger
  if (closing.uppercasecheck) {
    character = character.concat(uppercase);
   // type.push(random_item(uppercase));
  }
  debugger
  if (closing.numbercheck) {
    character = character.concat(numbers);
   // type.push(random_item(numbers));
  }
  debugger
 
  for (var i = 0; i < passwordLenght; i++) {
    const randomNumber = Math.floor(Math.random() * character.length);
    const randomLetter = character[randomNumber];
    storing = storing.concat(randomLetter);
    debugger
  } 
  password = storing.join('');
  return password
}


  

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

