function dotNotation() {
  // 아래의 코드는 수정하지 마세요.
  let testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };

  // 아래의 코드를 수정해주세요.
  let hatValue = testObj.hat;
  let shirtValue = testObj.shirt;    
  
  // 아래의 코드는 수정하지 마세요.
  return hatValue + ' ' + shirtValue;
}

console.log(dotNotation())

module.exports = { dotNotation }