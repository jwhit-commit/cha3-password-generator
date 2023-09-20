
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
  upCase = confirm(upMessage);
  numCase = confirm(numMessage);
  specCase = confirm(specMessage);
}

charPrompt();


// Validate at least 1 type is selected
var charError = "You must select at least one character type!";

if (!(lowCase || upCase || numCase || specCase)) {
  alert(charError);
  charPrompt();
};


// create library of characters
var low = "abcdefghijklmnopqrstuvwxyz";
var up = low.toUpperCase();
var num = "1234567890";
var spec = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

var charSet = low + up + num + spec;

var charLibrary = function() {
  if (!lowCase) {
    charSet = charSet.replace(low,"");
  }
  if (!upCase) {
    charSet = charSet.replace(up,"");
  }
  if (!numCase) {
    charSet = charSet.replace(num,"");
  }
  if (!specCase) {
    charSet = charSet.replace(spec,"");
  }
};

charLibrary();


// Create generatePassword function by matching a random number to character library, looping for password length
var starterPass = "a";

var generatePassword = function() {
  for (var i = 0; i < length; i++) {
    var charRand = Math.floor(Math.random() * charSet.length);
    var tempChar = charSet[charRand];
    starterPass = starterPass + tempChar;
  }
  tempPass = starterPass.slice(1);
  starterPass = "a";
  return tempPass;

}


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



