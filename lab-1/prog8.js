// Write a function to check if a string is a palindrome (ignoring case and spaces).

function isPalindrome(str) {
    let cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    let len = cleanedStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

let str = prompt("Enter a string: ");
if (isPalindrome(str)) {
    console.log(`'${str}' is a palindrome.`);
} else {
    console.log(`'${str}' is not a palindrome.`);
}