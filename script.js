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



window.prompt("Length of password?", "8-128 characters")
window.prompt("Lowercase?", "Y/N")
window.prompt("Uppercase?", "Y/N")
window.prompt("Numeric", "Y/N")
window.prompt("Special Characters", "Y/N")

window.alert("Password: ")
