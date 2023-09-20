//Assignment 8
// Develop CALCULTOR application which takes input from user via inquirer and perform 
//  - Addition
//  - Subtraction
//  - Multiplication
//  - Modulus
//  - Division
//  - Exponent
import inquirer from "inquirer";
try {
    let answer = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "Enter your first number?"
        }, {
            name: "num2",
            type: "number",
            message: "Enter your second number?"
        }, {
            name: "operations",
            type: "list",
            message: "Enter your operation?",
            choices: ["+", "-", "*", "/", "%", "**"]
        }]);
    switch (answer.operations) {
        case "+":
            console.log(answer.num1 + answer.num2);
            break;
        case "-":
            console.log(answer.num1 - answer.num2);
            break;
        case "*":
            console.log(answer.num1 * answer.num2);
            break;
        case "/":
            console.log(answer.num1 / answer.num2);
            break;
        case "%":
            console.log(answer.num1 % answer.num2);
            break;
        case "**":
            console.log(answer.num1 ** answer.num2);
            break;
    }
}
catch (error) {
    console.log("error", error);
}
;
