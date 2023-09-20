// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Prompt for password length 
var lenMessage = "Let's make you a password! How long should it be? (Must be between 8 and 128 characters)";
var length = "not set";

// Validate (8-128 characters)
var errorMessage1 = "That wasn't a number!";
var errorMessage2 = "That was the incorrect number of characters!";
var lengthValid = false;

var lengthValidateNum = function(x) {
  // Troubleshot the IS NaN/number logic with tutor
  if (isNaN(+x)) {
    alert(errorMessage1);
    length = prompt(lenMessage);
  } else if (8 > length || length > 128) {
    alert(errorMessage2)
    length = prompt(lenMessage);
  }  else {
    lengthValid = true;
  } 
}

length = prompt(lenMessage);
lengthValidateNum(length);
console.log(lengthValid)

  // Replaced functional FOR loop with simpler WHILE loop per tutor advice
while (!lengthValid) {
  lengthValidateNum(length);
}


// Prompt to include lowercase, uppercase, numeric and/or special characters

// Validate at least 1 type is selected


// create library of characters

// Generate random number + match to library, loop as many times ans # of characters

// Store all that in the generatePassword function -- RETURN final password











