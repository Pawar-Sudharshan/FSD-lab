//Create a function that uses a switch statement to return the day name when given a number (1-7).

function day(num){
    switch(num){
        case 1 : console.log("Sunday");
                    break;
        case 2 : console.log("Monday");
                    break;
        case 3 : console.log("Tuesday");
                    break;
        case 4 : console.log("Wednesday");
                    break;
        case 5 : console.log("Thursday");
                    break;
        case 6 : console.log("Friday");
                    break;
        case 7 : console.log("Saturday");
                    break;
        default: console.log("Invalid input! Please enter a number between 1 and 7.");
    }
}

let dayNum = prompt("Enter day number (1-7): ");
day(parseInt(dayNum));