// Assignment - 다음 함수 안에 코드를 작성하시면 됩니다.
function forLoops() {
  // 아래의 코드를 수정하지 마세요.
  let myArray = [];
  
  // 아래에 코드를 작성해주세요
  
  for (let i=1;i<10;i=i+2){
    myArray.push(i)
  }

  // 아래의 코드를 수정하지 마세요.
  return myArray
}
console.log(forLoops())
module.exports = { forLoops };