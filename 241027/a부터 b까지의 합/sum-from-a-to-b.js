const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let sumVal = 0;

for (let i = a; i <= b; i++) {
    sumVal += i;
}

console.log(sumVal);