function goToMart() {
  let shoppingCart = ['햄', '김밥김', '단무지', '우유', '시금치', '쌀', '당근', '계란'];
  // 여기에 코드를 작성해주세요
  shoppingCart.splice(3,1,'두유')
  return shoppingCart;
}
console.log(goToMart())

module.exports = { goToMart };


let num = [1, 2, 3, 4, 5];
num.splice(2, 1, 10);

console.log(num); // [ 1, 2, 10, 4, 5 ]