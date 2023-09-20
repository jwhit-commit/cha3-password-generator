// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Prompt for password length 
var lenMessage = "Let's make you a password! How long should it be? (Must be between 8 and 128 characters)";
var length = "not set";

// Validate (8-128 characters)
var numError = "That wasn't a number!";
var lengthError = "That was the incorrect number of characters!";
var lengthValid = false;

var lengthValidate = function(x) {
  // Troubleshot the IS NaN/number logic with tutor
  if (isNaN(+x)) {
    alert(numError);
    length = prompt(lenMessage);
  } else if (8 > length || length > 128) {
    alert(lengthError);
    length = prompt(lenMessage);
  }  else {
    lengthValid = true;
  } 
};

length = prompt(lenMessage);
lengthValidate(length);

  // Replaced functional FOR loop with simpler WHILE loop per tutor advice
while (!lengthValid) {
  lengthValidate(length);
};


// Prompt to include lowercase, uppercase, numeric and/or special characters
var lowMessage = "Will your password include lowercase characters?";
var upMessage = "Will your password include upper characters?";
var numMessage = "Will your password include numeric characters?";
var specMessage = "Will your password include special characters?";

var lowCase = false;
var upCase = false;
var numCase = false;
var specCase = false;

var charPrompt = function () {
  lowCase = confirm(lowMessage);
  // upCase = confirm(upMessage);
  // numCase = confirm(numMessage);
  // specCase = confirm(specMessage);
}

charPrompt();


// Validate at least 1 type is selected


// Create a library of characters


// Generate random number + match to library, loop as many times as password length


// Store all that in the generatePassword function -- RETURN final password


