// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  let password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  

  for(var i = 0; i <=complexity; i++){
    password = password + passwordText.charAt(Math.floor(math.random() * math.floor(password.length - 1)));
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
