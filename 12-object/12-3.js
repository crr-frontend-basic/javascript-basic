const person = {
  name: "Lizb",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  "like cat": true,  // 공백 포함 속성은 문자열로 접근해야 함
};

person.favoriteFood='떡볶이'
person.job='BE Developer'

console.log("city" in person)
console.log(Object.keys(person))
console.log(Object.values(person))
