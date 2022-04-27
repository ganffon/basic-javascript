// Assignment - 다음 함수 안에 코드를 구현하세요
function findGreaterNum(num1, num2) {

if (num1 > num2){
    return "First one is greater!"
}else if (num1 < num2){
    return "Second one is greater!"
}else{
    return "Same!"
}

}

let output = findGreaterNum(11, 10);

console.log(output);
module.exports = { findGreaterNum }