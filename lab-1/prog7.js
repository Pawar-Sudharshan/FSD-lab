//  Create a function that reverses a string without using reverse().

function reverse(str){
    let res="";
    for(let i=str.length-1;i>=0;i--){
        res+=str[i];
    }
    return res;
}

let str = prompt("Enter a string: ");
console.log("Reversed string is: " + reverse(str));