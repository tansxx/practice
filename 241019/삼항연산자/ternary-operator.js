const fs = require("fs");
let score = fs.readFileSync(0).toString().trim();

let grade = score = 100 ? "pass" : "failure";

console.log(grade);