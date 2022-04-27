// Assignment - 다음 함수 안에 코드를 작성하시면 됩니다.
function getAllLetters(str) {
  // 아래의 코드를 수정하지 마세요.
  let strArray = [];

  // 아래에 코드를 작성해주세요
  strArray=Array.from(str)
  
  // 아래의 코드를 수정하지 마세요.
  return strArray;
}
console.log(getAllLetters("dog cat"))
module.exports = { getAllLetters };