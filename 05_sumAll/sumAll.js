const sumAll = function(startNum, endNum) {

    let sum = 0;

    //Incase parameters are not a number
    if(typeof startNum != "number" || typeof endNum != "number")
       return "ERROR";

    //Incase negative numbers are entered
    if(startNum < 0 || endNum < 0)
        return "ERROR";
    
    
    //swaps so the algorithm can work with the larger number first
    if(endNum < startNum){
        endNum = sum;
        endNum = startNum;
        startNum = sum;
        sum = 0;
    }

    for(let i = startNum; i != endNum+1; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
