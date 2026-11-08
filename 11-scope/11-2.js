
function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar); // I am local
}

// localScopeExample();
console.log(localVar); // ReferenceError: localVar is not defined
