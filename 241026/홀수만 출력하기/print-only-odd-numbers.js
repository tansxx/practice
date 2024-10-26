const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 첫 번째 줄에서 N을 가져옴
let N = Number(input[0]);

// 두 번째 줄부터 N개의 정수를 배열로 변환
let numbers = input.slice(1, N + 1).map(Number);

for (let i = 0; i < N; i++) {
    // 조건: 홀수이면서 3의 배수인지 확인
    if (numbers[i] % 2 !== 0 && numbers[i] % 3 === 0) {
        console.log(numbers[i]);
    }
}