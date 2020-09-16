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

// var passLengthInt;
// var password;
// var number;
// var symbol;
// var uppercase;
// var lowercase;

// Call function to generate password
generatePassword();

// Call function to write password
writePassword();

// Function for generating password. Creates a string, sets a series of confirms to determine 
// password legth and what types of characters to include
function generatePassword(){
  let password = '';
  // Call function to determine password length
  generatePasswordLength();
  // Call function to determine what types of characters get included
  determineCharacters();
}

// determine how to re ask the question if they don't fill in the field correctly
//determine how to store the new length? Stored in the function?
// guard statement for incorrect inputs or empty input
// guard statement for reading character as integer?
// how do you return to the original prompt if it fails the guard statement?
// how do you return the new length value to be used in another function?
function generatePasswordLength(){
  var passLength = prompt('How many characters do you want in your password? Please choose a number between 8 and 128');
  //var passLengthInt = +passLength.value;
  var passLengthInt = parseInt(passLength);
    if (passLengthInt === null || passLengthInt === NaN || passLengthInt < 8 || passLengthInt > 128) {
      alert("You must enter a valid number between 8 and 128. Please re-enter")
      return;
    } else 
        return passlengthInt;
} 

// ***how does it return/connect to generate password?
// ***must return to original prompt again if guard statement fails
//***how do you randomize the characters that are chosen in the new string?
// ***does this for loop make any sense?
function determineCharacters(){
  
  var numbers = confirm('do you want numbers?');
  var specialChars = confirm('do you want special characters?');
  var uppercase = confirm('do you want uppercase letters?');
  var lowercase = confirm('do you want lowercase letters?');
  
  for (var i = 0; i < passLengthInt; i++) {
    if (numbers) {
      password += randomNumber([i]);
    } else if (specialChars) {
        password += randomSymbol([i]);
    } else if (uppercase) {
        password += randomUppercase([i]);
    } else if(lowercase) {
        password += randomLowercase([i]);
        return password;
    } else (!numbers && !specialChars && !uppercase && !lowercase)
        return alert("Password must contain at least one character type");
  }
}

// Variable strings that hold options for randomizing character parts of password generation
//***need to add in apostrophe?
function randomSymbol(){
  var symbols = '" !"#$%&()*+,-./\:;<=>?@[]^_`{}|~"'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomNumber(){
  var number = '0123456789'
  return number[Math.floor(Math.random() * number.length)];
}

function randomUppercase(){
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upper[Math.floor(Math.random() * upper.length)];
}

function randomLowercase(){
  var lower = 'abcdefghijklmnopqrstuvwxyz'
  return lower[Math.floor(Math.random() * lower.length)];
}

// var numbersel = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialCharsel = [" ","!",'"',"#","$","%","&", "'", "(",")","*","+",",","-",".","/",";",":","<",">","=","?","@","[","]","^","_",""'"{","}","];
// var uppercaseel = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // var password = {
  //   numbersel: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  //   specialCharsel: [" ","!",'"',"#","$","%","&", "'", "(",")","*","+",",","-",".","/",";",":","<",">","=","?","@","[","]","^","_",""'"{","}","],
  //   uppercaseel: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  // }

  // password = password[].toUpperCase();
// how do you ask a second condition and not return yet?

// if (passLength === < 129 || passLength === > 7){
//    return passLength;
//   } else
//     alert("You must enter a valid number between 8 and 128. Please re-enter")
