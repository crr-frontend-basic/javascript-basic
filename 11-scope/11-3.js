
let blockVar = "I am inside block";
if (true) {
    blockVar="new block"
    console.log(blockVar); // I am inside block
}

console.log(blockVar); // ReferenceError: blockVar is not defined
