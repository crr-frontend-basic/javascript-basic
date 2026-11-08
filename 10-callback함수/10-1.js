function greet(name, callback) {
 console.log(`Hello ${name}`);
 setTimeout(function () {
  callback();
  console.log("3초 뒤에 실행")
 }, 3000);
 // callback()
}

function afterGreeting() {
 console.log("Nice to meet you");
}

greet("Elice", afterGreeting);
