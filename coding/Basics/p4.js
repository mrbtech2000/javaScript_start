const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their age
rl.question('Please enter your age: ', (input) => {
    let number = Number(input);

    if (isNaN(number)) {
        console.log("That's not a valid age.");
    } else if (number < 18) {
        console.log("You are a kid.");
    } else if (number >= 18 && number <= 45) {
        console.log("You are a young man.");
    } else {
        console.log("You are an old man.");
    }

    // Close the interface after the input is processed
    rl.close();
});

/*
let number = Number(prompt("Please enter your age:"));

if (isNaN(number)) {
    console.log("That's not a valid age.");
} else if (number < 18) {
    console.log("You are a kid.");
} else if (number >= 18 && number <= 45) {
    console.log("You are a young man.");
} else {
    console.log("You are an old man.");
}
*/