let lane1 = [
  { 철수: '150cm' },
  { 영희: '153cm' },
  { 바둑이: '155cm' },
  { 밍키: '160cm' },
  { 살구: '168cm' },
  { 두팔: '175cm' },
  { 여름: '180cm' },
  { 소헌: '181cm' },
];

function extractOver175(list) {
  //괄호 안은 음수만 들어가야 합니다.
  let extractedPeople = list.splice(-3)
  
  return extractedPeople;
}

console.log(extractOver175(lane1))
module.exports = { extractOver175 };