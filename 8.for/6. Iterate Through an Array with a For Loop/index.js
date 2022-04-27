// Assignment - 다음 함수 안에 코드를 작성하시면 됩니다.
function arrayLoop() {
  // 아래의 코드를 수정하지 마세요.
  let myArr = [ 2, 3, 4, 5, 6];

  // 아래에 코드를 작성해주세요
  let total = 0;
  for(let i = 0; i < myArr.length; i++) {
    total = total + myArr[i];
  } 
  
  // 아래의 코드를 수정하지 마세요.
  return total;
}

module.exports = { arrayLoop };