const colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
//  console.log(colors[i]);
}

// colors.forEach(function(color,i){
//     console.log(`${color}, index: ${i}`)
// })
// colors.forEach(color=> console.log(color))
// colors.forEach(console.log)

// const upperColors = colors.map(function(color){
//     return color.toUpperCase()
// })
// const upperColors = colors.map(color=>color.toUpperCase())

// console.log(upperColors)
console.log(colors)

// const moreColors=["Yellow","Pink"]
// const allColors=colors.concat(moreColors)

// console.log(allColors)
const sliceColors = colors.slice(0,2)
console.log(sliceColors)
