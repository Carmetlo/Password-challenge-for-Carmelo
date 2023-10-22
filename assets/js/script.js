var characterLength = 8;
//these are the included arrays to pull the password from
var specialCharacterArray = ['!', 'S', '&', '^', '?', '+'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
    'Z',];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
    '9',];
//This creates the button and starts the javascript functions
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var {length,choiceArray,status} = windowPrompts();

    var passwordText = document.querySelector("#password")
    if (status) {
        var newPassword = generatePassword(length,choiceArray); 
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";

    }
}
//this is the function for generating the random text and number parts from the array
function generatePassword(characterLength,choiceArray) {
    var password = "";
    for (var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() *
            choiceArray.length);
        password += choiceArray[randomIndex];
    }
    return password;
}
//this section displays all the prompts when choosing how your password is generated
//I had the most difficult part with this section, I didnt know you could just provide so many IF characteristics
//my tutor  helped guide me through this section and I understand so much more now
function windowPrompts() {
    var choicestring = "";
    characterLength = parseInt(prompt(" How many characters would you like? (8 - 128 characters"));
    if (isNaN(characterLength) || characterLength < 8 ||
        characterLength > 128) {
        alert("Character length has to be a number between 8 and 128");
        return false;
    }

    if (confirm("would you like lowercase letters in your password?")) {
        choicestring += lowerCaseArray;
    }
    if (confirm("would you like upppercase letters in your password?")) {
        choicestring += upperCaseArray;
    }
    if (confirm("would you like special characters in your password?")) {
        choicestring += specialCharacterArray;
    }
    if (confirm("would you like numbers in your password?")) {
        choicestring += numberArray;
    }
    if (choicestring === "") {
        alert("Must be at least one character type");
        return false;
    }
    var choiceArray = choicestring.split (",")
  
    return {length:characterLength,choiceArray,status:true};

}
