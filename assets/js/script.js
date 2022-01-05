var generateBtn = document.querySelector("#generate");

//ARRAYS 
let alphaLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alphaUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = ["~","!","@","#","$","%","^","&","*","?","-","+"];

// ARRAY CONTAINING USER CHOICEs
let chosenCharacters = [""];



function generatePassword() {    
    let passLength = prompt("Whats the lenght of the desired password? Should be between 8 and 128 characters)");
        if (passLength < 8 || passLength > 128) {
        alert("Please choose between 8 and 128 characters");
    generatePassword();
         } else { };
       
    let ifLower = confirm("Would you like Lower Case letters?");
        if (ifLower === true) {
            chosenCharacters = chosenCharacters.concat(alphaLower); 
    }   else {};   
    let ifUpper = confirm("Would you like Upper Case letters?");
        if (ifUpper === true) {
            chosenCharacters = chosenCharacters.concat(alphaUpper);
    }   else {};
    let ifNumber = confirm("Would you like numbers?");
        if (ifNumber === true) {
            chosenCharacters = chosenCharacters.concat(numbers);
    }    else {};
    let ifSymbols = confirm("Would you like symbols?");
        if (ifSymbols === true) {
            chosenCharacters = chosenCharacters.concat(symbols);
    }   else  {};
   
genPass = function() {
    let finalPassword = '';
    for (let i = 1;  i < passLength; i++) {
        let index = Math.floor(Math.random() * chosenCharacters.length);
        finalPassword += chosenCharacters[index];
        };
    console.log(finalPassword);
    finalPassword = [];
    return finalPassword;
};       

genPass();   
    
           
};






function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
   
   };
   
   
   generateBtn.addEventListener("click", writePassword); 