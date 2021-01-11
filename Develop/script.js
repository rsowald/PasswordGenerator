//Prompt for password length
function choosePassLength() {
  while (true) {
    var passLength = prompt("Please choose a password length between 8 and 128 characters.");
    //validate input is between 8 and 128, otherwise while loop will prompt again
    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Invalid password length. Please choose a length between 8 and 128 characters.")
    }
    else {
      return passLength;
    }
  }
}

//confirming which characters to allow and then storing true or false values in the object called characterTypes
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

//generate password
function generatePassword(passLength, characterTypes) {
  //make arrays with possible values 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "0123456789"
  var special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\"

  //concat only characters that were chosen in confirm prompts
  var allowedCharacters = ""
  if (characterTypes.hasLowerCase) {
    allowedCharacters = allowedCharacters.concat(lowerCase)
  }
  if (characterTypes.hasUpperCase) {
    allowedCharacters = allowedCharacters.concat(upperCase)
  }
  if (characterTypes.hasNumeric) {
    allowedCharacters = allowedCharacters.concat(numeric)
  }
  if (characterTypes.hasSpecial) {
    allowedCharacters = allowedCharacters.concat(special)
  }

  var password = ""
  //choose a random character from the concatenated string for each position along the chosen password length
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    var randomCharacter = allowedCharacters[randomIndex];
    password = password.concat(randomCharacter);
  }

  return password
}
//check password has at least 1 character from each true array

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
