const fs = require("fs");
let score = fs.readFileSync(0).toString().trim();

let grade = score = 100 ? 0 : 1;
let result = grade = 0 ? "pass" : "failure";
console.log(result);