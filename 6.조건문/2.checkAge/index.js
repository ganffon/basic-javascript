// Assignment - 다음 함수 안에 코드를 구현하세요
function checkAge(name, age) {
  if (age < 21){
      return "Go home, " + name + "!"
  }else{
      return "Nice to meet you, " + name + "!"
  }
}

let output1 = checkAge("Joon",22)
let output2 = checkAge("Joon", 17)

console.log(output1)
console.log(output2)

module.exports = { checkAge }