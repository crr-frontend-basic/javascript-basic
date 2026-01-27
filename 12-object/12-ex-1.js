
const car ={
    brand:"Toyota",
    model:"Camry",
    year:"2026",
    color:"red",
    drive(){
        console.log(`${this.brand},${this.model},${this.year},${this.color}`)
    }

}

const {brand, model}=car//구조분해할당

car.drive()

console.log(brand)