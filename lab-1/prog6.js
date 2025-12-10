//  Write a function that counts the occurrences of a substring within a string.

function cnt(s , sub){
    let cnt = 0;
    let subLen = sub.length;
    for(let i=0; i<= s.length - subLen; i++){
        if(s.substring(i, i + subLen) === sub){
            cnt++;
        }
    }
    return cnt;
}

let s = prompt("Enter the main string: ");
let sub = prompt("Enter the substring : ");
console.log("The substring '" + sub + "' occurs " + cnt(s, sub) + " times in the main string.");