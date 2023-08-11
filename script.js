// Assignment Code
var generateBtn = document.querySelector("#generate");


// all available letters and characters
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  var password = "";
  var allowedChars = "";
  var passwordLength = parseInt(prompt("Enter the password length:"));

  // check if it is a valid passsword length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return password;
  }
  // prompt user for letters and characters to use
  if (confirm("Do you want to include lowercase letters?")) {
    allowedChars += lowercaseChars;
  }
  if (confirm("Do you want to include UPPERCASE letters?")) {
    allowedChars += uppercaseChars;
  }
  if (confirm("Do you want to include numeric characters?")) {
    allowedChars += numericChars;
  }
  if (confirm("Do you want to include special characters?")) {
    allowedChars += specialChars;
  }

  // return an empty password if invalid input
  if (allowedChars === "") {
    alert("You must select at least one character type.");
    return password;
  }

  // generates password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
