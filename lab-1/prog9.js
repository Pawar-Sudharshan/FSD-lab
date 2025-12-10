// Implement a function that swaps object property values using destructuring.

function swapProperties(obj, prop1, prop2) {
    [obj[prop1], obj[prop2]] = [obj[prop2], obj[prop1]];
}

let myObj = { a: 1, b: 2 };
console.log("Before swap:", myObj);
swapProperties(myObj, 'a', 'b');
console.log("After swap:", myObj);  