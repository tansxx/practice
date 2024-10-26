const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let sum = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0)sum = sum + i;
} if (n == sum) {
    console.log("P");
} else {
    console.log("N");
}