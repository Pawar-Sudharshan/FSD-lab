 //Implement a while loop that finds the sum of digits of a given number.
 function sumOfDigits(num) {
    SUM = 0;
    while (num > 0) {
        digit = num % 10;
        SUM += digit;
        num = Math.floor(num / 10);
    }
    return SUM;
 }

let number = prompt("Enter a number to find the sum of its digits: ");
console.log("Sum of digits of " + number + " is: " + sumOfDigits(number));