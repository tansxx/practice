const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;

for (let i = 0; i < 5; i++) {

    let x = Number(input[i]);

    if (x % 2 === 0) {
        cnt++;
    }
}

console.log(cnt);