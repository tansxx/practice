const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let average = parseInt((a + b + c) / 3);

console.log(a + b + c);
console.log(average);
console.log(a + b + c - average);