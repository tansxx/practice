const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let number = input.map(Number);

for(let i = 0; i <= number.length; i++) {
    if (number[i] % 2 !== 0 && number[i] % 3 === 0) {
        console.log(number[i]);
    }
}