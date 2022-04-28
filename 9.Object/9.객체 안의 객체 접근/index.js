
function accessObject() {
  // 아래의 코드를 수정하지마세요.
  let myStorage = {
    "car": 
    {
      "inside": 
      {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      "outside": 
      {
        "trunk": "jack"
      }
    }
  };

  // 아래의 코드를 수정해주세요.
  gloveBoxContents = myStorage.car.inside['glove box']

  // 아래의 코드를 수정하지마세요.
  return gloveBoxContents;
}
console.log(accessObject())
module.exports = { accessObject };