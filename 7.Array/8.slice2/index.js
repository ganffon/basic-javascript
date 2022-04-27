let prisoners = [
  [0, 1],
  [1, 2],
  [0, 0],
];


function saveNumberTwo(prisoners) {
  let temp = prisoners.slice(-2) 
  // slice 메서드의 괄호 안에 음수만 넣어주세요
  let answer;
  // 변수 answer에 특정한 값을 대입해주세요.
  answer = temp[0].slice(-1)
  console.log(temp)
  console.log(answer)
  return answer;
}

saveNumberTwo(prisoners)
module.exports = { saveNumberTwo };