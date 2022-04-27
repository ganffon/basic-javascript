function bracketNotation() {
  // 아래의 코드는 수정하지 마세요.
  let testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };

  // 아래의 코드를 수정해주세요.
  let entreeValue = testObj["an entree"];
  let drinkValue = testObj["the drink"];
  
  // 아래의 코드는 수정하지 마세요.
  return entreeValue + ' ' + drinkValue;
}

console.log(bracketNotation())

module.exports = { bracketNotation };