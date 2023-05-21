// check password strength 

function checkPasswordStrength() {
    var passwordInput = document.getElementById("password").value;

    const lengthRegex = /.{8,}/; // (//) is a regular expression which is for some specific purpose
    const uppeeCaseRegex = /[A-Z]/;
    const lowerCasseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const someSpecialRegex = /[A-Za-z0-9]/;

    var strength = 0;
//// The test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.
    if(lengthRegex.test(passwordInput)){
        strength++
    }

    if(uppeeCaseRegex.test(passwordInput)){
        strength++
    }

    if(lowerCasseRegex.test(passwordInput)){
        strength++
    }

    if(numberRegex.test(passwordInput)){
        strength++
    }

    if(someSpecialRegex.test(passwordInput)){
        strength++
    }

    var strengthText;

    switch (strength) {
        case 0:
            strengthText = "Very Weak"
            break;
    
            case 1:
            strengthText = "Weak"
            break;
    
            case 2:
            strengthText = "Good"
            break;
    
            case 3:
            strengthText = "Strong"
            break;
    
            case 4:
            strengthText = "Very Storng"
            break;
            case 0:
                strengthText = "Excelent"
                break;
        
        default:
            strengthText = "Unknown"
            break;
    }

    var strengthResult = document.getElementById("strengthresult");
    strengthResult = "Password is " + strengthResult;

}

///// Palindrome check: palindrome mein hum ak string ko check krty hain jis ko agr sida ya ulta prha jay 
/// to wo same hi ho,, ex,, madam, dad, ect

function checkPalindrome() {
    var inputPalindrome = document.getElementById("pilandrome").value;
    var string = inputPalindrome.toLowerCase();
    // string= "madam"
    var reverseString = string.split("").reverse().join("");
    // console.log(reverseString);

    var result;
    if(string === reverseString){
        result = "This is palindrome";
    }
    else{
        result = "This is not palindrome";
    }

    var showResult = document.getElementById("result");
    showResult.textContent = result;
}




  














