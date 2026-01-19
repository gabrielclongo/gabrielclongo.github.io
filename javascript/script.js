console.log("Hello from script.js!");

// Declaring (creating and naming) variables in JavaScript
let userFirstName; // Declares a variable named userFirstName
let taxRate;       // Declares a variable named taxRate

// Declaring and assigning values to variables on single line
let userEmail = "abcd@email.com";
console.log(userEmail); // Outputs: abcd@email.com
let userPassword = "banana42%";
console.log(userPassword); // Outputs: banana42%
// Do NOT put quotes around a variable name in console.log()
console.log("userPassword"); // Outputs: userPassword

// Working with numeric variables	
let orderQty = 42;
let productPrice = 9.99;

// Mixing literals and variables
const customerFirstName = "Marie";
const accBalance = 10;
		
// Using template literals
console.log(`Hi ${customerFirstName}. Your balance is €${accBalance}.`); 
// Outputs: Hi Marie. Your balance is €10.

let var1 ="Joe Bloggs"
let var2 = 1000.24;

console.log(`Hello ${var1}. You bank balance is: £${var2}`);


// Using [] notation to access position of characters within string
let myStr6 = "Hello, World!";
console.log(`Position [0]: ${myStr6[0]};`)   // H
console.log(`Position [5]: ${myStr6[5]};`)   // ,
console.log(`Position [6]: ${myStr6[6]};`)   // whitespace
console.log(`Position [7]: ${myStr6[7]};`)   // W
console.log(`Position [12]: ${myStr6[12]};`) // !

// Compound assignment operator +=
let greeting = "Hello";
greeting += " there";  // Hello there
greeting += "!";       // Hello there!
console.log(greeting);
        
let story = "Once upon a time";
story += " there was a programmer";
story += " who loved to code";
story += " and debug all day long.";
console.log(story)