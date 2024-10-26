const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let sumVal = 0, avg = 0, count = 0;

for (let i = a; i <= b; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        count++;
        sumVal += i;
    }
}

avg = (sumVal / count);

console.log(sumVal, parseFloat(avg).toFixed(1));