function makeSquare () {
  let arr = new Array(10) // 여기에 new Array method를 적용해주세요
  // 여기에 for 반복문을 적어주세요.
  for (let i=0; i < arr.length; i++){
    arr[i] = i**2
  }

  return arr;
}
console.log(makeSquare())
module.exports = { makeSquare };

