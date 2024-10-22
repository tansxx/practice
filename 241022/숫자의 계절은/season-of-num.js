const fs = require("fs");
let month = Number(fs.readFileSync(0).toString().trim());

if (3 <= month && month <= 5) {
    console.log("Spring");
} else if (6 <= month && month <= 8) {
    console.log("Summer");
} else if (9 <= month && month <= 11) {
    console.log("Fall");
} else {
    console.log("Winter");
}