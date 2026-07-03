// Question 1: Variable Declarations and Initialization
let productName = "Laptop";
let price = 999.99;
let inStock = true;
console.log(productName, price, inStock);

// Question 2: Mathematical Operations
// Calculate and display:
// The remainder when 27 is divided by 4
console.log(27 % 4);
// The square of 12 (using exponentiation operator **)
console.log(12 ** 2);
// The result of incrementing 8 by 1 using the ++ operator
let num = 8;
num++;
console.log(num);
// The result of decrementing 15 by 2 using the -= operator
let sub = 15;
sub -= 2
console.log(sub);

// Question 3: String Concatenation and Case Conversion
let firstName = "alex";
let lastName = "SMITH";
let fullName = firstName + " " + lastName;
let properName = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();
let length = fullName.length;
console.log(fullName);
console.log(properName);
console.log(length);

// Question 4: if-else Conditional Logic
let temperature = 25;
if (temperature > 30) {
    console.log('Hot Day');
} else if (temperature >= 20 && temperature <= 30) {
    console.log('Pleasant Day');
} else {
    console.log('cold day');
}
// Question 5: Comparison Operators
// Create three comparison operations:
// Check if 15 is strictly equal to "15"
console.log(15 === "15");
// Check if 20 is greater than 15 AND less than 25
console.log(20 > 15) < 25;
// Check if 10 is not equal to 10 OR 5 is greater than 3
console.log(10 != 10 || 5 > 3);
// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:
// Add "yellow" to the end
let colors = ['red', 'green', 'blue'];
colors.push('yellow');
console.log(colors);
// Remove the first element
colors.shift();
console.log(colors);
// Insert "purple" at index 1
colors.splice(1, 0, 'purple');
console.log(colors);
// Console.log the final array and its length
console.log(colors, colors.length);
// Question 7: Array Manipulation - splice()
// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:
// Remove "cherry"
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
fruits.splice(2, 1);
console.log(fruits);
// Replace "date" with "dragonfruit"
fruits.splice(2, 1, 'dragonfruit');
console.log(fruits);
// Extract the middle 3 elements into a new array
let extract = fruits.splice(0, 3);
console.log(extract);

// Question 8: for Loop - Number Sequence
let sum = 0;
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        sum += i;
        console.log(i);
        break;
    }
    console.log(i);
    sum += i;
}
console.log('sum :' + sum);
// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:
// *
// **
// ***
// ****
for (let i = 1; i <= 4; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":
text = "The quick brown fox jumps over the lazy dog";
// Find the position of "fox"
console.log(text.indexOf('fox'));
// Extract "brown fox" using substring/slice
console.log(text.slice(10, 19));
// Check if the text contains "dog"
console.log(text.includes('dog'));

// Get the character at position 10
console.log(text.charAt(10));
// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":
let sentence = "I love JavaScript and JavaScript is awesome";
// Replace the first "JavaScript" with "coding"
console.log(sentence.replace("JavaScript", "coding"));
// ''Replace ALL "JavaScript" with "JS"
console.log(sentence.replaceAll("JavaScript", "coding"));
// Replace "awesome" with uppercase "AWESOME"
console.log(sentence.replace("awesome", "AWESOME"));
// Question 12: Number Rounding and Formatting
// Given num = 123.456789:
let nums = 123.456789;
// Round to 2 decimal places
console.log(nums.toFixed(2));
// Round to nearest integer
console.log(Math.round(nums));
// Get the floor value
console.log(Math.floor(nums));
// Get the ceiling value
console.log(Math.ceil(nums));
// Format to show exactly 4 decimal places
console.log(nums.toFixed(4));
// Question 13: Random Number Generation
// Generate:
// A random integer between 1 and 100 (inclusive)
console.log(Math.floor(Math.random() * 100) + 1);
// A random decimal between 0 and 1 with 3 decimal places
console.log(Math.random().toFixed(3));
// A random number between 50 and 75 (inclusive)
console.log(Math.floor(Math.random() * 26) + 50);
// Question 14: Type Conversion
// Perform these conversions:
// Convert string "123" to number
let num1 = Number("123");
console.log(num1, typeof num1);
// Convert string "45.67" to decimal (float)
let num2 = parseFloat("123.456");
console.log(num2);
let num3 = (123).toString();
console.log(num3);
// Check the type of "true" after converting to boolean
let check = Boolean("true");
console.log(check, typeof check);
// Question 15: Date and Time Operations
// Create a Date object for the current time and:
// Extract the year, month (0-11), and day
let date = new Date();
console.log(new Date().getFullYear(), new Date().getMonth(), new Date().getDay());
// Get the hours in 24-hour format
console.log(new Date().getHours());
// Format it as "YYYY-MM-DD"
let today = new Date();
let formatdDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
console.log(formatdDate);
// Create a specific date for December 25, 2024
console.log(new Date(2024, 11, 25));
function Calculate(a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        return a / b;
    } else {
        console.log('invalid operator');
    }
}
let input1 = +prompt('Enter First number');
let input2 = +prompt('Enter Second number');
let operation = prompt('which Operation want do you perform(+,-,*,/)?', '+');
console.log(Calculate(input1, input2, operation));
// Question 17: Function - Local vs Global Variables
let globalCounter = 0;
function incrementCounter(){
    let globalCounter = 5;
    globalCounter++;
    console.log('local counter:',globalCounter);
    window.globalCounter++;
    console.log(globalCounter);
}
incrementCounter();
incrementCounter();
console.log("Global Counter:", globalCounter);


// Question 18: switch Statement - Day of Week
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log('Today is sunday');
        break;
    case 1:
        console.log('Today is monday');
        break;
    case 2:
        console.log('Today is tuesday');
        break;
    case 3:
        console.log('Today is wednessday');
        break;
    case 4:
        console.log('Today is thursday');
        break;
    case 5:
        console.log('Today is friday');
        break;
    case 6:
        console.log('daturday');
        break;
    default:
        console.log('invalid day');
}
// Question 19: while Loop - Countdown
let count = 10;
while(count>=1){
    console.log(count);
    count--;
}
console.log('blast off');
// Also calculate the factorial of 5 using a while loop.
let value = 5;
let factorial = 1;
while(value >=1){
    factorial= factorial*value;
    value--;
}
console.log('factorial of 5 is :',factorial);
// Question 20: do...while Loop - User Input Simulation
let enteredPassword = "";
let attempt = 0;
do{
    attempt++;
    enteredPassword = prompt('Enter password');
}while(enteredPassword != 'secret123' && attempt < 5);
if(enteredPassword === 'secret123'){
    console.log('successful');
}else{
    console.log('not success');
    
}
// Question 21: Array Methods with for Loop  
// Given numbers = [12, 45, 78, 23, 56, 89, 34]:
// Use a for loop to find the maximum value
let numbers = [12, 45, 78, 23, 56, 89, 34];
let max = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]>max){
       max =numbers[i];
    }
}
console.log('max num :',max);
// Use a for loop to calculate the average
let Sum = 0;
for(let i =0;i<numbers.length;i++){
    sum += numbers[i];
}
let average = sum/numbers.length;
console.log('avarege is :',average);
// Create a new array with only numbers greater than 50
let newNum = [];
for(let i = 0; i<numbers.length;i++){
    if(numbers[i]>50){
    newNum.push(numbers[i]);
    }
}
console.log('grrater than 50 :',newNum);
// Reverse the array without using reverse() method
let reversed = [];
for (let i = 0; i < numbers.length; i++) {
    reversed.unshift(numbers[i]);
}
console.log(reversed);
