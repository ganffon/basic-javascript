function objectVariables() {
  // 아래의 코드는 수정하지 마세요.
  let testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

  // 아래의 코드를 수정해주세요.
  let playerNumber=16;       
  let player = testObj[playerNumber];  

  return player;
}
console.log(objectVariables())
module.exports = { objectVariables };