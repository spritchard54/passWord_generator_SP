// This code targets the generate button (ID seen in index.html)
var generateBtn = document.querySelector("#generate");

// ----------------------------My Code-----------------------------------------

// Variables (GLOBAL)
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var specialChar = "!@#$%^&*";
var passwordLength = "";

// Whatever is returned by this function is what appears in the card
var generatePassword = function () {
  //   var userSelections = [];
  var userSelections = '';

  // Prompts for password length/number of characters
  var passwordLength = window.prompt(
    "Enter a desired password length between 8 and 128 characters"
  );

  // Convert passwordLength to an integer
  var passwordLength = parseInt(passwordLength);
  console.log("The visitor entered " + passwordLength);
  console.log("The variable is a " + typeof passwordLength);

  // Validate the character is within range
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You character limit must be between 8 & 128 characters");
    do {
      var passwordLength = window.prompt(
        "Enter a desired password length between 8 and 128 characters"
      );
    } while (passwordLength < 8 || passwordLength > 128);
  }

  // Confirm UPPERCASE characters
  var uCase = window.confirm(
    "Does your password require UPPER CASE characters? Yes (Ok) or No (Cancel)"
  );
  console.log("UPPERCASE characters = " + uCase);

  // Confirm  lowercase characters
  var lCase = window.confirm(
    "Does your password require lowercase characters? Yes (Ok) or No (Cancel)"
  );
  console.log("Lowercase characters = " + lCase);

  // Confirm numberic characters
  var nums = window.confirm(
    "Does your password require numeric characters? Yes (Ok) or No (Cancel)"
  );
  console.log("Numeric Characters = " + nums);

  // Confirm special characters
  var sChar = window.confirm(
    "Do your password require special characters? Yes (Ok) or No (Cancel)"
  );
  console.log("Special Characters = " + sChar);

  // Begin "if statements"

  if (uCase) {
    userSelections += upperCase;
  }
  if (lCase) {
    userSelections += lowerCase;
  }
  if (nums) {
    userSelections += numbers;
  }
  if (sChar) {
    userSelections += specialChar;
  }

  // Processing
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacterSet =
      userSelections[Math.floor(Math.random() * userSelections.length)];
    var randomCharacter =
      randomCharacterSet[Math.floor(Math.random() * randomCharacterSet.length)];
    password += randomCharacter;
  } //end of "for loop"

  return password;
}; // End of function var generatePassword = function

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button - when the user cicks the button it calls the write password function.
generateBtn.addEventListener("click", writePassword);
