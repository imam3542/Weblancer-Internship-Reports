let arr = [1, 3, 'Test', 0, "", ' ',  -1, null, undefined, 'Hello World', 'hello', 'workd', 54, false, true, '-0', 'null', 28];


// 1. Total Characters and Total Words in Given String

let str = "this is javascript practice";
let charCount = str.length;

let wordCount = str.trim().split(/\s+/).length;

console.log("Chars:", charCount);
console.log("Words:", wordCount);

// 2. Convert First Letter of Every Word in UpperCase
let newStr = str.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");

console.log(newStr);



// 3. Array Tasks
// 1. Get all numbers
let onlyNumbers = arr.filter(v => typeof v === "number");
console.log("Numbers:", onlyNumbers);


// 2. Get all strings
let onlyStrings = arr.filter(v => typeof v === "string");
console.log("Strings:", onlyStrings);


// 3. Get all falsy values
let falsyValues = arr.filter(v => !v);
console.log("Falsy:", falsyValues);


// 4. Get all truthy values
let truthyValues = arr.filter(v => v);
console.log("Truthy:", truthyValues);


// 5. Sum of all numbers using reduce
let sum = onlyNumbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);


// 6. Get all NaN values
let nanValues = arr.filter(v => isNaN(v) && typeof v !== "number");
console.log("NaN values:", nanValues);


// 7. Values which includes "e"
let includeE = arr.filter(v => typeof v === "string" && v.includes("e"));
console.log("Include e:", includeE);


// 8. Values ending with "d"
let endsWithD = arr.filter(v => typeof v === "string" && v.endsWith("d"));
console.log("End with d:", endsWithD);


// 9. Count number of falsy values
console.log("Falsy Count:", falsyValues.length);


// 10. Even numbers
let evenNumbers = onlyNumbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evenNumbers);
