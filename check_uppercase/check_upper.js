let regexp = /^[A-Z]/;
function isFirstLetterUpperCase(str) {
    if (regexp.test(str)) {
        console.log("Ký tự đầu tiên của chuỗi là chữ hoa");
    } else {
        console.log("ký tự đầu tiên không phải là chữ hoa");
    }
}

isFirstLetterUpperCase("Abcd");

isFirstLetterUpperCase("abcd");

isFirstLetterUpperCase("Nguyen van Nam");

isFirstLetterUpperCase("NGUYEN VAN NAM");

isFirstLetterUpperCase("nguyen van Nam");