const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sumVal = 0, cnt = 0;

while (true) {
    let n = Number(input[cnt]);
    
    if (parseInt(n / 10) !== 2) {
        console.log((sumVal / cnt).toFixed(2));
        break;
    }
    
    sumVal += n;
    cnt++;
}