function or(expression1, expression2) {

    if (expression1==false && expression2==false){
        return false
    }else if (expression1!=false && expression2!=false){
        return true
    }else if (expression1==false && expression2!=false){
        return true
    }else if (expression1!=false && expression2==false){
        return true
    }

}


let output = or(true, false);
console.log(output);

let output2 = or(false, false);
console.log(output2);

module.exports = { or }