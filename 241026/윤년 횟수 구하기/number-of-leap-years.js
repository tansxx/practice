const fs =require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

for (let i = 1; i < n; i++) {
    if (i % 100 === 1 && i % 400 === 0) {
        cnt++;
    } else if (i % 4 === 0) {
        cnt++;
    }
}

console.log(cnt);