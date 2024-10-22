const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let A_score = input[0].split(" ");
let B_score = input[1].split(" ");

let A_math = Number(A_score[0]);
let A_eng = Number(A_score[1]);
let B_math = Number(B_score[0]);
let B_eng = Number(B_score[1]);

if (A_math > B_math && A_eng > B_eng) {
    console.log(1);
} else {
    console.log(0);
}