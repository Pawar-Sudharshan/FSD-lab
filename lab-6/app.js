// 1. Write a function greet that takes a name and a callback function. The
// function should return a greeting message by calling the callback with the
// message.


// function greet(name, callback) {    
//     const message = `Hello, ${name}!`;
//     return callback(message);
// }

// greet("Sudha", function(msg){
//     console.log(msg);
// }); 


//2. Write a function delayedMessage(message, delay) that prints the message
// after the specified delay using setTimeout. Use a callback for when the
// message has been printed.

// function delayedMessage(message, delay, callback) {
//     setTimeout(function() {
//         console.log(message);
//         if (callback) {
//             callback();
//         }
//     }, delay);
// }

// delayedMessage("Hello, delayed world!", 2000, function() {
//     console.log("Delayed message printed.");
// });



// 3.Create four functions—add, sub, mul, and div—and chain them such that
// the output of one function is passed as the input to the next function,
// demonstrating the concept of callback hell.

// function add(x, y, callback) {
//     const result = x + y;
//     callback(result);
// }

// function sub(x, y, callback) {
//     const result = x - y;
//     callback(result);
// }

// function mul(x, y, callback) {
//     const result = x * y;
//     callback(result);
// }

// function div(x, y, callback) {
//     const result = x / y;
//     callback(result);
// }

// // Chaining the functions to demonstrate callback hell
// add(5, 3, function(sum) {
//     console.log("Addition Result:", sum);
//     sub(sum, 2, function(difference) {
//         console.log("Subtraction Result:", difference);
//         mul(difference, 4, function(product) {
//             console.log("Multiplication Result:", product);
//             div(product, 2, function(quotient) {
//                 console.log("Division Result:", quotient);
//             });
//         });
//     });
// });



// 5. Write a JavaScript console program to compare 2 strings using promise
// function (resolve, reject), if the strings are same, resolve the promise, else
// reject it.
// Constraints:
// 1. Case sensitive string comparison should be done.
// 2. Promises should be consumed by registering functions .then and .catch
// method.

// function compareStrings(str1, str2) {
//     return new Promise((resolve, reject) => {
//         if (str1 === str2) {
//             resolve("Strings are the same.");
//         } else {
//             reject("Strings are different.");
//         }
//     });
// }

// compareStrings("Hello", "Hello")
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// compareStrings("Hello", "World")
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });
    



// 6. Write a JavaScript console program to implement async/await using
// promises.
// Constraints:
// 1. Create a function named findAbsolute(n) which accepts a value and
// returns the promise.
// 2. Function findAbsolute(n) will check whether n is an absolute value or not.
// 3. If ‘n’ is an absolute value, then resolve the promise with message
// ‘Absolute value!!’, else reject the promise with message ‘Invalid’.
// 4. Create an async function named findResult(n) which gets ‘n as an input
// from the file and passes it to the method findAbsolute().
// 5. Use the keyword await inside async function to wait until that promise
// settles and returns its result.
// 6. Display the message inside async function.

// function findAbsolute(n) {
//     return new Promise((resolve, reject) => {
//         if (n >= 0) {
//             resolve('Absolute value!!');
//         } else {
//             reject('Invalid');
//         }
//     });
// }

// async function findResult(n) {
//     try {
//         const message = await findAbsolute(n);
//         console.log(message);
//     } catch (error) {
//         console.log(error);
//     }
// }


// findResult(5);  // Output: Absolute value!!
// findResult(-3); // Output: Invalid



//7. Write a JavaScript console program to implement async/await using
// promises.
// Problem Constraints:
// 1. Input is a value (integer/string).
// 2. Create a function named findDigitSum(n) which accepts ‘n’ as an input
// and returns the promise.
// 3. Function findDigitSum(n) will check whether n is a number or not.
// 4. If n is a number, then resolve the promise with sum of digits in a number,
// else reject the promise with message ‘Invalid’.
// 5. Create an async function named findResult(n) which gets ‘n’ as an input
// and passes it to the method findDigitSum(n).
// 6. Use the keyword await inside async function to wait until that promise
// settles and returns its result.
// 7. Display the message inside async function.

// function findDigitSum(n) {
//     return new Promise((resolve, reject) => {
//         if (typeof n === 'number' && Number.isInteger(n)) {
//             let sum = 0;
//             let num = Math.abs(n); // Handle negative numbers
//             while (num > 0) {
//                 sum += num % 10;
//                 num = Math.floor(num / 10);
//             }
//             resolve(sum);
//         } else {
//             reject('Invalid');
//         }
//     });
// }

// async function findResult(n) {
//     try {
//         const result = await findDigitSum(n);
//         console.log("Sum of digits:", result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// // Test cases
// findResult(12345);  // Output: Sum of digits: 15
// findResult(-678);   // Output: Sum of digits: 21
// findResult("abc");  // Output: Invalid  


// 8. Fetching server state using JavaScript (fetch)
// 1. Use fetch function to access remote data using the given
// api(https://jsonplaceholder.typicode.com/users/) and display the
// data in the form of a table.
// 2. Use fetch function to read the weather details from
// openweathermap.org and display the details like city, min-temp,
// max-temp, humidity on the webpage for a given city.
// 3. From the same website read the weather forecast details for a given
// city and display the details like date – temperature in a table.
// 4. Plot a bar chart for the above implementation using date and
// temperature along X and Y axis respectively. Use ChartJS library.
// 5. Design a web application that fetches real-time weather data from
// an API and displays temperature values using Chart.js in different
// chart formats(bar chart,pie chart, & line chart).

// Note: Due to the nature of this environment, I cannot demonstrate fetch
// requests or Chart.js implementations here. However, I can provide you with
// sample code snippets that you can run in your local environment or web
// application to achieve the desired functionality.

// Sample fetch request to get user data and display in table
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => {
        console.table(data); // Display data in table format in console
    })
    .catch(error => console.error('Error fetching user data:', error));

// Sample fetch request to get weather data (replace 'YOUR_API_KEY' with actual key)
// const city = 'Hyderabad';
// const apiKey = 'c7955bce9d197558155a3d30509d190f';
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(`City: ${data.name}`);
//         console.log(`Min Temp: ${data.main.temp_min} °C`);
//         console.log(`Max Temp: ${data.main.temp_max} °C`);
//         console.log(`Humidity: ${data.main.humidity} %`);
//   })   .catch(error => console.error('Error fetching weather data:', error));            