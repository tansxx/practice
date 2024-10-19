const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

let result = Number(a);

let score = result === 100 ? "pass" : "failure";
console.log(score);