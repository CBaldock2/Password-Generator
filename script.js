// Assignment Code
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var choices;
var toUpper = function (x) {
  return x.toUpperCase()
};

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = lower.map(toUpper);
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "/", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "{", "}"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Runs the promt
  char = prompt("Length of password?", "8-128 characters");
 //If nothing is selected runs the alert
  if (!char) {
    alert("This needs a value.");
    generatePassword();
  }
  //Makes the input be a number between 8 and 128
  if (char < 8 || char > 128) {
    char = alert("You must enter a number between 8 and 128");
    generatePassword();
  }
   //Turns the length of char into an integer
   char = parseInt(char)
  if (isNaN(char)) {
    alert("This needs to be a number.")
    generatePassword()
  } 
  //Begins to ask which criteria you want to use
  else {
    confirmLower = confirm("Lowercase?")
    confirmUpper = confirm("Uppercase?")
    confirmNumber = confirm("Numeric")
    confirmSpecial = confirm("Special Characters")

    //for four true options
    if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
      choices = lower.concat(upper, number, special)
    }
    // for three true options
    else if (confirmLower && confirmUpper && confirmNumber) {
      choices = lower.concat(upper, number)
    } else if (confirmLower && confirmUpper && confirmSpecial) {
      choices = lower.concat(upper, special)
    } else if (confirmLower && confirmNumber && confirmSpecial) {
      choices = lower.concat(number, special)
    } else if (confirmUpper && confirmNumber && confirmSpecial) {
      choices = upper.concat(number, special)
    }
    // for two true options
    else if (confirmLower && confirmUpper) {
      choices = lower.concat(upper)
    } else if (confirmLower && confirmNumber) {
      choices = lower.concat(number)
    } else if (confirmLower && confirmSpecial) {
      choices = lower.concat(special)
    } else if (confirmUpper && confirmNumber) {
      choices = upper.concat(number)
    } else if (confirmUpper && confirmSpecial) {
      choices = upper.concat(special)
    } else if (confirmNumber && confirmSpecial) {
      choices = number.concat(special)
    }
    //for one true option
    else if (confirmLower) {
      choices = lower
    } else if (confirmUpper) {
      choices = upper
    } else if (confirmNumber) {
      choices = number
    } else if (confirmSpecial) {
      choices = special
    }
    //for all options flase
    else if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
      choices = alert("You must chose at least one criteria.");
      generatePassword()
    }
    //Creates a password variable
    var pw = []
    //Adds a character depending on the length chosen
    for (var i = 0; i < char; i++) {
      pw.push(choices[Math.floor(Math.random() * choices.length)]);
    }
    return pw.join("");
  }
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);