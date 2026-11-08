let fruitBasket = {
    apple: 5,
    banana: 10,
    orange: 7
  };

  for(let key in fruitBasket){
    console.log(key,":", fruitBasket[key])
  }

  let keys = Object.keys(fruitBasket)
  let value = Object.values(fruitBasket)

  console.log(keys)
  console.log(value)