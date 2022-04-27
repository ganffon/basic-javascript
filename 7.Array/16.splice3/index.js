
let basket = [
  ['양파', '곰팡이'],
  ['곰팡이', '빵', '딸기잼'],
  ['귤', '곰팡이', '사과'],
];

function removeGerm(arr) {
  let result=[]
  // 여기에 코드를 작성해주세요!
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
      if (arr[i][j]=="곰팡이"){
        arr[i].splice(j,1)
      }
    }
  }


  return arr;
}
console.log(removeGerm(basket))
// console(removeGerm(basket))
module.exports = { removeGerm }

