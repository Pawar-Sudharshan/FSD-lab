// Write a program using nested loops to print a right-angled triangle pattern of stars.

let n = prompt("Enter the number of rows : ");
for(let i=1; i<=n; i++){
    let pattern = "";
    for(let j=1; j<=i; j++){
        pattern += "* ";
    }
    console.log(pattern);
}