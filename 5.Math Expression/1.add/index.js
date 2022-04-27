function add () {
  // 다음 코드는 수정하거나 지우지 마세요
  let sum;
  
  // 다음의 코드를 수정해주세요.
  sum = 10+5;
  
  console.log(sum)
  // 아래 코드는 수정하지 말아주세요.
  return sum;
  
}

function addFive(num) {
  console.log(num+5)
  return num+5  
}

add()
addFive(20)



module.exports = { add, addFive }