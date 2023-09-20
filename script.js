
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


// Specs display assignment code
var reSpecBtn = document.querySelector("#reSpec");
var lengthText = document.querySelector("#pwlength");
var lowChecked = document.getElementById("pwlow");
var upChecked = document.getElementById("pwup");
var numChecked = document.getElementById("pwnum");
var specChecked = document.getElementById("pwspec");


// Display spec details in Details box
var displaySpecs = function (a,b,c,d,e) {
  lengthText.value = a.replaceAll(" ","");

  if (b) {
    lowChecked.checked = true;
  };

  if (c) {
    upChecked.checked = true;
  };

  if (d) {
    numChecked.checked = true;
  };

  if (e) {
    specChecked.checked = true;
  };
}

displaySpecs(length,lowCase,upCase,numCase,specCase);


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


// Create re-spec function
var changeSpecs = function() {
  if (lowChecked.checked == false && upChecked.checked == false && numChecked.checked == false && specChecked.checked == false) {
    alert("Must specific at least 1 character type.")
  } else {
    length = lengthText.value;
    console.log(length)
  
    if (lowChecked.checked == true) {
      lowCase = true;
    } else {
      lowCase = false
    };
    console.log(lowCase)
  
    if (upChecked.checked == true) {
      upCase = true;
    } else {
      upCase = false
    };
    console.log(upCase)
  
    if (numChecked.checked == true) {
      numCase = true;
    } else {
      numCase = false
    };
    console.log(numCase)
  
    if (specChecked.checked == true) {
      specCase = true;
    } else {
      specCase = false
    };
    console.log(specCase)
  
    charSet = low + up + num + spec;
    charLibrary()
  }
};


// Code re-spec button click
reSpecBtn.addEventListener("click", changeSpecs);


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


// Generate button assignment Code 
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



