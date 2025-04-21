function gettime() {
    const range = document.getElementById("range").value
    const rangevalue = document.getElementById("rangevalue");
    rangevalue.textContent = `${range}`
    // couldnt access outside the function
}
setInterval(gettime, 100) // setinterval calls a function at a specific intervalls (in millseconds)


const numbers = "0123456789"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbols = "! @ # $ % ^ & * ( ) - _ = + { } [ ] : ; ' < > , . ? / \ | ~ ` ± ÷  √ ≈ ≠ ≤ ≥ © ® ™ § ° " 

function generatepassword() {
   const inputfield = document.getElementById("inputfield");

    let password = Math.floor(Math.random() * rangevalue.textContent);
    console.log(password)

    const PasswordStrength = document.getElementById("PasswordStrength");

  
    inputfield.value = range

   if (inputfield.value = "") {
//    Dont generate Password
     
   } else {
    // Generate password
    // inputfield.value = "2"
   }


   function lowercasecheck() {
      password += lowercase
   }

   function uppercasecheck() {
    password += uppercasecheck
   }

   function numberscheck() {
    password += numberscheck
   }

   function symbolscheck() {
    password += symbolscheck
   }



lowercasecheck()
uppercasecheck()
numberscheck()
symbolscheck()
}





