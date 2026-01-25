// 1부터 20까지의 숫자 중 짝수만 출력하세요.

// (힌트: `%` 연산자를 사용하여 짝수를 판별하세요.)

let result = 0;
let num = 20;

for (let i = 1; i <= num; i++) {
 if (i % 2 == 0) {
    result=result + ','+i
}
}
console.log(result)