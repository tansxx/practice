const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sumVal = 0, avg = 0, cnt = 0;

for (let i = 0; i < 10; i++) {
    let x = Number(input[i]);
    if (0 <= x && x <= 200) {
        cnt++;
        sumVal += x;
    }
}

avg = sumVal / cnt;
console.log(sumVal, parseFloat(avg).toFixed(1));