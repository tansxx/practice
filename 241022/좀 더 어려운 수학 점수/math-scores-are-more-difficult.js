const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let scoreA = input[0].split(" ");
let scoreB = input[1].split(" ");

let a_math = Number(scoreA[0]), a_eng = Number(scoreA[1]);
let b_math = Number(scoreB[0]), b_eng = Number(scoreB[1]);

if (a_math > b_math || (a_math === b_math && a_eng > b_eng)) {
    console.log("A");
} else {
    console.log("B");
}