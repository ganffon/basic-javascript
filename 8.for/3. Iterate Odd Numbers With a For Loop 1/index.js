function addEvenNumber() {
  let result = [];
  // 여기에 식을 작성해주세요!
  // result 배열안에 짝수가 들어가야 합니다.
  for (let i=2;i<=30;i=i+2){
    result.push(i)
  }

  return result
}
console.log(addEvenNumber())


function addOddNumber() {
  let result = [];
  // 여기에 식을 작성해주세요!
  // result 배열안에 홀수가 들어가야 합니다.
  for (let i=1;i<=30;i=i+2){
    result.push(i)
  }

  return result
  
}
console.log(addOddNumber())


module.exports = { addEvenNumber, addOddNumber };