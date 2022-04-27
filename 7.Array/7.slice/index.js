const findFruits = () => {
  let foodBox = ['🍕', '🍤','🍇' ,'🥝','🍒','🍉','🍗', '🍟' ];
  return foodBox = foodBox.slice(2,6)
}

console.log(findFruits())

let nums = [1, 2, 3, 4, 5];
let nums_new = nums.slice(-2);

console.log(nums); // [ 1, 2, 3, 4, 5 ]
console.log(nums_new); // [ 4, 5 ]



module.exports = { findFruits }