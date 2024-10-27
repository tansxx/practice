const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let index = 0;


while (true) {

    let n = Number(input[index]);
    index++;

    if (n === 0) {
        break;
    }

    console.log(n);
}