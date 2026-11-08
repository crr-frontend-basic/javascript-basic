let globalMsg="Hello Global"

function displayMsg(){
    let localMsg="Hello Local"

    console.log(localMsg)
    console.log(globalMsg)
}


console.log(localMsg)
displayMsg()