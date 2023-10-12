// This code targets the generate button (ID seen in index.html)
var generateBtn = document.querySelector("#generate");


//Steve's variables (GLOBAL)
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var specialChar = "!@#$%^&*";
var passwordLength = '';
var userSelections = []; 

// non-starter code - Whatever is returned by this function is what appears in the card
var generatePassword = function(){

// Steve's Promopts and Confirms
// Prompt
var passwordLength = window.prompt("Enter a desired password length between 8 and 128 characters");

//Convert passwordLength to an integer
    var passwordLength = (parseInt(passwordLength));
        console.log("The visitor entered " + passwordLength);
        console.log("The variable is a " + typeof passwordLength);

//Validate the character is within range
    if(passwordLength < 8 || passwordLength > 128){
        alert("You character limit must be between 8 & 128 characters");
            var passwordLength = window.prompt("Enter a desired password length between 8 and 128 characters");
            console.log("The password you have entered is not between 8 & 128 Characters");
        }else{// Confirm UPPERCASE characters
            var uCase = confirm("Does your password require UPPER CASE characters? Yes (Ok) or No (Cancel)");
            console.log("UPPERCASE characters = " + uCase);        
            }

//Confirm upper case characters
//If this condition is true add the corresponding variable to an array, and when all true conditions are in the array, then run the for loop and randomize????
    var lCase = window.confirm("Does your password require  characters? Yes (Ok) or No (Cancel)");
        console.log("Lowercase characters = " + lCase); 

//Confirm number of characters
    var nums = window.confirm("Does your password require numeric characters? Yes (Ok) or No (Cancel)");
        console.log("Numeric Characters = " + nums);

//Confirm special characters    
    var sChar = window.confirm("Do your password require special characters? Yes (Ok) or No (Cancel)");
        console.log("Special Characters = " + sChar);

//Begin "if statements" and use a loop to generate password; console log there to test if "if statment" is working

        if(uCase === true){
        userSelections.push(upperCase);        
        }
        if(lCase === true){
        userSelections.push(lowerCase);        
        }
        if(nums === true){
        userSelections.push(numbers);        
        }
        if(sChar === true){
        userSelections.push(specialChar);        
        }

//convert userSelection[] to single string of characters
        userSelections.join('');
        console.log(userSelections.join(''));

        //Processing - Combine the elements from the userselection into a single string and process on line 66
        function createPassword(){
            var password = '';
            for(var i=0; i < passwordLength.length;i++){
            var randomCharacters = userSelections[Math.floor(Math.random() * userSelections.length)]; 
            password += randomCharacters;
            }
            return password;
        }         
    }//End of function var generatePassword = funtion

    

//Write password to the #password input
    function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;  
    }

// Add event listener to generate button - when the user cicks the button it calls the write password function.
    generateBtn.addEventListener("click", writePassword);