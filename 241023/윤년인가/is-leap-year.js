const fs = require("fs");
let y = Number(fs.readFileSync(0).toString().trim());

if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
    console.log("true");
} else {
    console.log("false");
}