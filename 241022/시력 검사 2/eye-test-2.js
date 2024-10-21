const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let eyesight = Number(input);

if (eyesight >= 1.0) {
    console.log("High");
} else if (eyesight >= 0.5) {
    console.log("Middle");
} else {
    console.log("Low");
}