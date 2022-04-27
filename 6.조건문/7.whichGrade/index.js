function whichGrade(score) {
    if (score <=100 && score >= 90){
        return "A"
    }else if (score <= 89 && score >= 80){
        return "B"
    }else if (score <= 79 && score >= 70){
        return "C"
    }else if (score <= 69 && score >= 60){
        return "D"
    }else if (score <= 59 && score >= 0){
        return "F"
    }else if (score > 100 || score < 0){
        return "INVALID SCORE"
    }

}

console.log(whichGrade(100))
console.log(whichGrade(90))
console.log(whichGrade(80))
console.log(whichGrade(70))
console.log(whichGrade(60))
console.log(whichGrade(50))
console.log(whichGrade(150))



module.exports = { whichGrade }