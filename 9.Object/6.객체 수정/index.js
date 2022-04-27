function updateObject() {
  // 아래의 코드는 수정하지 마세요.
  let myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

  // 아래에 코드를 작성해주세요.
  myDog.name = "Happy Coder"

  
  // 아래의 코드는 수정하지 마세요.
  return myDog.name;
}

console.log(updateObject())

module.exports = { updateObject };