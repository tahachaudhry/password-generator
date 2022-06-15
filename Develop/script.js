// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numChars ="0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = upperCase.toLowerCase();
  var specChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var newPass = "";

  var passLength = Number(prompt("Please type your password of character length (8-128 characters)."));

  if (passLength >= 8 && passLength <=128){
    var passUpperCase = confirm("Does your password require uppercase characters?");
    var passLowerCase = confirm("Does your password require lowercase characters?");
    var passNum = confirm("Does your password require numbers?");
    var passSpec = confirm("Does your password require speical characters?");
    for (i=0; i < passLength; i++){
      if(newPass.length < passLength){
        if (passUpperCase){
          newPass += upperCase[Math.floor(Math.random() * upperCase.length)];
        } if (passLowerCase){
          newPass += lowerCase[Math.floor(Math.floor() * upperCase.length)];
        } if (passNum) {
          newPass += numChars[Math.floor(Math.random() * numChars.length)];
        } if (passSpec){
          newPass += specChars[Math.floor(Math.random() * specChars.length)];
        }
      } else {
        break;
      }
    }
    return newPass;
  }
  else {
    alert("ERROR: input must be a number between 8 and 128. Try again.");
    return "Try Again";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
