const numbers = [1, 2, 3, 4, 5]

numbers.forEach((num)=>{
    console.log(num+10)
})

const nuwNumbers = numbers.map(num=>num+10)
console.log(nuwNumbers)