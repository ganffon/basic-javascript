function isOkayToDrive(who) {
  // 함수의 인자가 SON -> NOPE
  // 함수의 인자가 DAD -> GOOD
  // 함수의 인자가 GRAND FATEHR -> BE CARFUL
  // who are you
  if (who="son"){
    console.log("Nope!")
    return "Nope!"
  }else if (who="dad"){
    console.log("Good!")
    return "Good!"
  }else if (who="grand father"){
    console.log("Be careful!")
    return "Be careful!"
  }else{
    console.log("Who are you?")
    return "Who are you?"
  }
  
}

isOkayToDrive("son")

module.exports = { isOkayToDrive }