
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar,"함수 내부"); // I am global
}

showGlobal();
console.log(globalVar); // I am global
