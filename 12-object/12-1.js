const person = {
 name: "Lizb",
 age: 27,
 hobby: "테니스",
 job: "FE Developer",
 "like cat": true, // 공백 포함 속성은 문자열로 접근해야 함
 greet: function () {
  console.log(`나는 ${this.name}이고 내 나이${this.age}는 살입니다`);
 },
};

// console.log(person.name)
console.log(person["like cat"]);

person.greet();
