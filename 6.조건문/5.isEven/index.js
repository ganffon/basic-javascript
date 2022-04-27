// Assignment - 다음 함수 안에 코드를 구현하세요
function isEven(num) {

    if (num%2==0) {
        return true
    }else{
        return false
    }
}
let output = isEven(11);
console.log(output);

module.exports = { isEven }