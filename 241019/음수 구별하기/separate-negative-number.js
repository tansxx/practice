const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

if (n < 0) {
    console.log(n);
    console.log("minus");
}