const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

let width = n * n;

console.log(width);
if (n < 5) {
    console.log("tiny");
}