// Assignment - 다음 함수 안에 코드를 구현하세요
function equalsWecode(string) {

  if (string=="wecode"){
      return true
  }else{
      return false
  }
}

let output = equalsWecode('youcode');
console.log(output);

module.exports = { equalsWecode }