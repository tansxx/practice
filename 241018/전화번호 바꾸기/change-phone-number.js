const fs = require("fs");
let input = (fs.readFileSync(0).toString().trim()).split("-");
let f = input[1];
let b = input[2];
[f, b] = [b, f];

console.log(`010-${f}-${b}`);