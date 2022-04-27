// Assignment 
function findRemainder(){
  // 다음 코드는 수정하거나 지우지 마세요
  let remainder;
  
  // 다음에 코드를 작성해 주세요
  
  remainder = 5%4
  // 다음 코드는 수정하거나 지우지 마세요
  return remainder;
}

findRemainder();


// 아래에서 oddOrEven() 함수를 작성해주세요.
function oddOrEven(num) {
  if (num%2==0){
    console.log("Even")
  }else{
    console.log("Odd")
  }
}

oddOrEven(20);

module.exports = { findRemainder, oddOrEven }