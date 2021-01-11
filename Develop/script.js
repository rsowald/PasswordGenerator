//make arrays with possible values 

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\"

//Prompt for password length
function choosePassLength() {
  while (true) {
    var passLength = prompt("Please choose a password length between 8 and 128 characters.");

    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Invalid password length. Please choose a length between 8 and 128 characters.")
    }
    else {
      return passLength;
    }
  }
}

function chooseCharacterTypes() {
  while (true) {
    var types = {
      hasLowerCase: confirm("Would you like to include lowercase characters?"),
      hasUpperCase: confirm("Would you like to include uppercase characters?"),
      hasNumeric: confirm("Would you like to include numeric characters?"),
      hasSpecial: confirm("Would you like to include special characters?")
    };

    if (!types.hasLowerCase && !types.hasUpperCase && !types.hasNumeric && !types.hasSpecial) {
      alert("You must choose at least one character type to continue.")
    }
    else {
      return types;
    }
  }
}

function generatePassword(passLength, characterTypes) {
  for (var i = 0; i < passLength; i++) {
    //

  }
}

// Write password to the #password input
function writePassword() {

  var passLength = choosePassLength();
  var characterTypes = chooseCharacterTypes();

  var password = generatePassword(passLength, characterTypes);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
