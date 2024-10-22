const fs = require("fs");
let number = Number(fs.readFileSync(0).toString().trim());

if (number === 1) {
    console.log("John");
} else if (number === 2) {
    console.log("Tom");
} else if (number === 3) {
    console.log("Paul");
} else {
    console.log("Vacancy");
}