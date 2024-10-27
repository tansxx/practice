const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let sum = 0, avg = 0;

for (let i = 1; i <= n; i++) {
    let x = Number(input[i]);
    sum += x;
}

avg = sum / n;
console.log(sum, parseFloat(avg).toFixed(1));