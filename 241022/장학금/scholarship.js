const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let mid = Number(input[0]);
let fin = Number(input[1]);

if (mid >= 90 && fin >= 95) {
    console.log(100000);
} else if (mid >= 90 && fin >= 90) {
    console.log(50000);
} else {
    console.log(0);
}