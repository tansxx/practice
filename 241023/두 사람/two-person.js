const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let infoA = input[0].split(" ");
let infoB = input[1].split(" ");

let ageA = infoA[0], genderA = infoA[1];
let ageB = infoB[0], genderB = infoB[1];

if ((ageA >= 19 && genderA === "M") || (ageB >= 19 && genderB === "M")) {
    console.log(1);
} else {
    console.log(0);
}