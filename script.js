// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersel = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharsel = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "[", "]", "^", "_"];
var uppercaseel = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseel = uppercaseel.join("").toLowerCase().split("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for generating password. Sets a series of confirms to determine 
// password length and what types of characters to include
function generatePasswordOptions() {
  var passLength = parseInt(prompt('How many characters do you want in your password? Please choose a number between 8 and 128'));
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("You must enter a valid number between 8 and 128. Please re-enter")
    return;
  }
  var numbers = confirm('do you want numbers?');
  var specialChars = confirm('do you want special characters?');
  var uppercase = confirm('do you want uppercase letters?');
  var lowercase = confirm('do you want lowercase letters?');

  console.log(passLength, numbers, specialChars, uppercase, lowercase)

  if (!numbers && !specialChars && !uppercase && !lowercase) {
    alert("Password must contain at least one character type");
    return;
  }

  const options = {
    passLength,
    numbers,
    specialChars,
    uppercase,
    lowercase
  }
  return options;

}

// Function creates a large array to be able to randomize a string of characters to the user
// input password length
function generatePassword() {
  var options = generatePasswordOptions()
  console.log(options);
  var superArray = [];
  var results = [];

  if (options.numbers) {

    superArray = superArray.concat(numbersel)
  }
  if (options.specialChars) {

    superArray = superArray.concat(specialCharsel)
  }
  if (options.uppercase) {

    superArray = superArray.concat(uppercaseel)
  }
  if (options.lowercase) {

    superArray = superArray.concat(lowercaseel)
  }

  for (var i = 0; i < options.passLength; i++) {
    var index = Math.floor(Math.random() * superArray.length)
    var digit = superArray[index];
    results.push(digit);
    console.log(results)
  }
  return results.join("")

}
