const fs = require("fs");
let month = Number(fs.readFileSync(0).toString().trim());

if (month === 2) {
    console.log(28);
} else if (month <= 7) {
    if (month % 2 === 1) {
        console.log(31);
    } else {
        console.log(30);
    }
} else {
    if (month % 2 === 0) {
        console.log(31);
    } else {
        console.log(30);
    }
}