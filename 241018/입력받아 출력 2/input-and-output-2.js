const fs = require("fs");
let number = (fs.readFileSync(0).toString().trim()).split("-");
let f = number[0];
let b = number[1];
console.log(f + b);