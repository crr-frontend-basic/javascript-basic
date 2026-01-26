function processUserInput(callback) {
 let name = "홍길동";
 callback(name);
}

// 함수 호출
processUserInput(function (name) {
 console.log(`안녕하세요 ${name}님!`);
});
