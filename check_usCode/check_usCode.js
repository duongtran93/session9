let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

function is_usZipCode(str) {
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

let zipcode = "03201 - 2150";
console.log(is_usZipCode(zipcode));

zipcode = "7892";
console.log(is_usZipCode(zipcode));

zipcode = "24867-4567";
console.log(is_usZipCode(zipcode));