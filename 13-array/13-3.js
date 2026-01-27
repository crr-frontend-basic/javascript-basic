const colors = ["Red", "Green", "Blue"];

// colors.splice(1,1,"black")

console.log(colors);

// const foundColor = colors.find(function(color){
//     return color=='Green'
// })
const foundColor = colors.find((color) => color == "Green");
// console.log(foundColor)

const longColors = colors.filter((color) => color.length > 3);
console.log(longColors);
