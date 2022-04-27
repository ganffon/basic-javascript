// Assignment 1 
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

//아래의 함수를 완성해주세요.
function filtered() {
    let answer = []
    for (let i=0; i<fruits.length; i++){
        if (fruits[i].includes("ap")==true){
            answer.push(fruits[i])
        }
    }
    return answer
}

console.log(filtered())

module.exports = { filtered };