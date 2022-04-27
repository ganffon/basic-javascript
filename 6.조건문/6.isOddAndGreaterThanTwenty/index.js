// Assignment - 다음 함수 안에 코드를 구현하세요
function isOddAndGreaterThanTwenty(num) {

  if (num%2==1 && num > 20){
      return true
  }else{
      return false
  }
}

let output = isOddAndGreaterThanTwenty(13);
let output2 = isOddAndGreaterThanTwenty(27);

console.log(output); // --> false
console.log(output2);

module.exports = { isOddAndGreaterThanTwenty }