let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

function invalisEmail(str) {
    if (regexp.test(str)) {
        return true;
    }
    return false;
}

let email = "a@gmail.com";
console.log(invalisEmail(email));

email = "a2@yahoo.com";
console.log(invalisEmail(email));

email = "ab2c@hotmail.com";
console.log(invalisEmail(email));

email = "@gmail.com";
console.log(invalisEmail(email));

email = "ab@gmail.";
console.log(invalisEmail(email));

email = "@#abc@gmail.com";
console.log(invalisEmail(email));