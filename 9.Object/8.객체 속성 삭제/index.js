function deleteProperty() {
  // 아래의 코드는 수정하지마세요.
  let myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Wecode Bootcamp"],
    "bark": "woof"
  };
  
  // 아래에 코드를 작성해주세요.
  delete myDog.tails
  // 아래의 코드는 수정하지마세요.
  return myDog;
}
console.log(deleteProperty())
module.exports = { deleteProperty };