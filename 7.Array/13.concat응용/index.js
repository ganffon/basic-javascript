// Assignment
let pasta = ['tomato', 'basil', 'onion','chicken'];

let pizza = ['tomato', 'cheese', 'onion','olive','beef'];


// 아래 함수를 작성해주세요. 
function totalIngredients () {
    let sum = pasta.concat(pizza)
    let answer = sum.filter((el,index)=>sum.indexOf(el)===index)

    console.log(sum)
    console.log(answer)
}
totalIngredients()
module.exports = { totalIngredients };


//indexOf : 특정 값이 처음으로 나타나는 Index 반환